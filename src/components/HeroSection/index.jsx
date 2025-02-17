import "./Wellcome.scss"
import React, { useState, useRef, useEffect } from "react";
import p5 from "p5";
import { hugoldGif1 } from "../../utils/allImgs";
const SecHeroSection = ({
  ClassSec = "",
  ColClass = "",
  specialHead = "",
  textUp = "",
  textDown = "",
  link1 = "",
  link2 = "",
  img = "",
  wrapperClass = ""

}) => {

  const [game, setGame] = useState(false);

  const sketchRef = useRef();
  let cycleCount = 0; // Döngüdeki toplam top sayısını takip eder

  useEffect(() => {

    if (game) {
      const sketch = (p) => {
        let g, pr, s = 0, en, mainImage, backgroundColor, backgroundImage;

        p.preload = () => {
          // Görselleri önceden yükle
          mainImage = p.loadImage("hugo1.png"); // Ana topun görseli
          // backgroundImage = p.loadImage("back2.png"); // Arka plan görseli
        };
        const addYellowBall = () => {
          return {
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-2, 2),
            vy: p.random(-2, 2),
            radius: 20, // Sarı topun yarıçapı
            color: p.color(255, 255, 0), // Sarı renk
          };
        };

        let yellowBall;
        p.setup = () => {
          p.createCanvas(800, 600);
          p.textAlign(p.CENTER);
          p.textSize(20);
          p.noStroke();
          backgroundColor = p.color("gray"); // Varsayılan arka plan rengi
          yellowBall = addYellowBall(); // Sarı topu oluştur

          basla();
        };

        const basla = () => {
          g = false;
          pr = 40; // Ana topun başlangıç boyutu
          en = [];
          cycleCount = 0; // Döngüyü sıfırla
          addCycleEnemies(); // İlk döngüyü başlat
        };

        p.mousePressed = () => {
          if (!g) {
            g = true;
            s = 0;
          }
        };

        const addEnemy = (isRed = true) => {
          // Rastgele bir köşe seç
          const corner = Math.floor(p.random(4));

          let x, y;
          switch (corner) {
            case 0: // Sol Üst Köşe
              x = p.random(0, p.width / 4);
              y = p.random(0, p.height / 4);
              break;
            case 1: // Sağ Üst Köşe
              x = p.random(3 * p.width / 4, p.width);
              y = p.random(0, p.height / 4);
              break;
            case 2: // Sol Alt Köşe
              x = p.random(0, p.width / 4);
              y = p.random(3 * p.height / 4, p.height);
              break;
            case 3: // Sağ Alt Köşe
              x = p.random(3 * p.width / 4, p.width);
              y = p.random(3 * p.height / 4, p.height);
              break;
            default:
              break;
          }

          // Düşman bilgilerini ekle
          en.push({
            x: x,
            y: y,
            vx: p.random(-2, 2),
            vy: p.random(-2, 2),
            color: isRed ? p.color(255, 0, 0) : p.color(0, 255, 0), // Kırmızı veya yeşil
            isSafe: !isRed, // Yeşil toplar güvenli
          });
        };

        const addCycleEnemies = () => {
          // Top sırası: 5 kırmızı -> 3 yeşil
          if (cycleCount < 5) {
            addEnemy(true); // 5 kırmızı top
          } else if (cycleCount < 8) {
            addEnemy(false); // 3 yeşil top
          }
          cycleCount++;
          if (cycleCount >= 8) cycleCount = 0; // Döngüyü sıfırla
        };

        p.draw = () => {
          // Arka planı çiz
          if (backgroundImage) {
            p.image(backgroundImage, 0, 0, p.width, p.height); // Arka planı canvas boyutuna göre ölçekle
          } else {
            p.background(backgroundColor);
          }

          p.noCursor();

          if (g) {
            if (p.frameCount % 2 === 0) {
              pr += 0.4; // Ana top büyüklüğünü artır
              s++;
            }
            if (p.frameCount % 10 === 0) {
              addCycleEnemies();
            }

            const dynamicRadius = pr; // Ana topun görsel boyutunu belirler
            const enemyRadius = 10; // Düşmanların yarıçapı

            // Düşman topları çiz ve çarpışma kontrolü yap
            for (let i = en.length - 1; i >= 0; i--) {
              const e = en[i];
              e.x += e.vx;
              e.y += e.vy;
              if (e.x < 0 || e.x > p.width) e.vx *= -1;
              if (e.y < 0 || e.y > p.height) e.vy *= -1;

              // Çarpışma kontrolü
              const distanceToEnemy = p.dist(e.x, e.y, p.mouseX, p.mouseY); // Düşman ile ana topun merkezi arasındaki mesafe
              const collisionDistance = dynamicRadius / 2 + enemyRadius; // Çarpışma için toplam mesafe

              if (distanceToEnemy <= collisionDistance) {
                if (!e.isSafe) {
                  basla(); // Kırmızı topa temas ederse oyunu sıfırla
                  return;
                } else {
                  en.splice(i, 1); // Yeşil topa temas ederse topu kaldır
                  pr *= 0.8; // Ana topun büyüklüğünü %20 azalt
                  continue;
                }
              }

              p.fill(e.color);
              p.circle(e.x, e.y, enemyRadius * 2); // Düşman boyutu
            }
            if (en.length >= 44 && yellowBall === null) {
              yellowBall = addYellowBall(); // Sarı topu oluştur
            }
            if (yellowBall) {
              yellowBall.x += yellowBall.vx;
              yellowBall.y += yellowBall.vy;
              if (yellowBall.x < 0 || yellowBall.x > p.width) yellowBall.vx *= -1;
              if (yellowBall.y < 0 || yellowBall.y > p.height) yellowBall.vy *= -1;

              // Sarı top çizimi
              p.fill(yellowBall.color);
              p.circle(yellowBall.x, yellowBall.y, yellowBall.radius * 2);

              // Sarı top ile çarpışma kontrolü
              const distanceToYellow = p.dist(yellowBall.x, yellowBall.y, p.mouseX, p.mouseY);
              if (distanceToYellow <= dynamicRadius / 2 + yellowBall.radius) {
                // Sarı topa temas edildiğinde kırmızı topları kaldır
                en = []; // Sadece yeşil topları bırak
                yellowBall = null; // Sarı topu kaldır
              }
            }

            // Ana topun görselini çiz
            if (mainImage) {
              p.image(
                mainImage,
                p.mouseX - dynamicRadius / 2,
                p.mouseY - dynamicRadius / 2,
                dynamicRadius,
                dynamicRadius
              );
            } else {
              p.fill(255, 255, 255, 150); // Şeffaf beyaz renk
              p.circle(p.mouseX, p.mouseY, dynamicRadius); // Ana top
            }

            // Skor - Sağ Üst Köşe
            const margin = 150; // Sağ üst köşe için kenar boşluğu
            p.fill(255); // Beyaz renk
            p.textSize(22); // Skor yazı boyutu
            p.text(`Score: ${s}`, p.width - margin, 75);
            if (p.select("img")) {
              p.select("img").remove(); // GIF'i canvas üzerinden kaldır
            }
          } else {
            p.cursor();

            // Oyun başlamadan önceki ekran
            const gifWidth = 300;
            const gifHeight = 400;
            const gifX = p.width - 500;
            const gifY = (p.height - 400) / 2;

           
            const textX = gifX + 20;
            p.fill(255);
            p.textAlign(p.LEFT);
            p.text("Let's run away!", textX, gifY);
            p.text("Run away from red balls and touch green balls ", textX, gifY + 25);
            p.text("Yellow ball clears all balls", textX, gifY + 52);
            p.text("Click to start ! ", textX, gifY + 200);

            p.text("Score : " + s, textX, p.height - 30);
          }
        };


      };
      const canvas = new p5(sketch, sketchRef.current);
      return () => canvas.remove(); // Bileşen kaldırıldığında p5.js canvas'ını temizler.
    }


  }, [game]);


  return (
    <section className={ClassSec} id="home">
      {/* Hero Content */}
      <div className="hero-section-content">
        <div className="container ">
          <div className="row align-items-center">
            {/* Welcome Content */}
            <div className={ColClass}>
              <div className="welcome-content">
                <div className="promo-section">
                  <h3 className="special-head">{specialHead}</h3>
                </div>
                <h1 data-wow-delay="0.2s">{textUp}</h1>
                <p className="w-text">{textDown}</p>
                <div className="dream-btn-group" data-wow-delay="0.4s">

                  <a href="https://ape.pro/solana/D13VkjDiCxtgRJsH4s1VCxKS4bFZq5UEz2iRsSbapump" className="btn more-btn" target="_blank" rel="noopener noreferrer">
                    {link2}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={wrapperClass}>
                <img draggable="false" src={img} alt="" />
              </div>
            </div>
            

          </div>
        </div>
      </div>


    </section>
  );
}

export default SecHeroSection;