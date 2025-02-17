import SectionHeading from "../SectionHeading"
import React from "react";

const HowToStart = ({ data }) => {

  const getUrl = (num) => {
    if (num === 1) {
      return "https://raydium.io/swap/?inputMint=sol&outputMint=GpZBDLuQeDMoCgoQTxw24J3HTnqdLQAkgmoJ6SYqfq9k";
    } else if (num === 2) {
      return "https://pump.fun/coin/D13VkjDiCxtgRJsH4s1VCxKS4bFZq5UEz2iRsSbapump?coins_sort=market_cap";
    }
    return "#"; // Varsayılan (bir bağlantı verilmemişse)
  };

  return (
    <section className="darky how section-padding-100-70 addMLInSmall">
      <div className="container" id="howtobuy">
        <SectionHeading
          ClassSpanTitle="gradient-t green"
          titleDown="How To Buy HUGOLD ?"
          text="You too can change your life like our hero through the purchase of Hugold.
          This will be a memorable memory for you."
        />
        <div className="row">
          {data && data.map((item, key) => (
            <div className="col-12 col-md-6 col-lg-4" key={key}>
              {/* Content */}
              <div
                className={`service_single_content box-shadow text-center mb-100 ${item.num !== 1 ? "coming-soon-overlay" : ""}`}
                data-aos="fade-up"
              >
                {/* Overlay only if num !== 1 */}
                {item.num == 3 && (
                  <div className="coming-soon-label">
                    Coming Soon
                  </div>
                )}

                {/* Icon */}
                <div className="service_icon">
                  <img draggable="false" src={item.img} className="white-icon" alt="" />
                </div>
                <h6>{item.title}</h6>
                <p>
                  <a
                    href={getUrl(item.num)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.text}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
