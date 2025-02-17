import "./AboutUs.scss";
import { Hugold3 } from '../../utils/allImgs';
import { hugoldGif1 } from '../../utils/allImgs';

const AboutUs = ({
  ClassSec = "about-us-area section-padding-100 banner-bg addMLInSmall mt-50",
  Computer1,
  Trade,
  titleUp,
  titleDown,
  textUp,
  textDown,
  gifUrl = "",
  leftText = "A childhood memory was the starting point. What is your destination at the end of this journey?  By accompanying Hugold, you can dream endlessly and witness the fulfillment of these dreams.All you have to do is join this journey and not miss the adventures. After some time has passed, Hugold will be seen as the best decision of your life.",
  rightText = "Hugold witnessed how much the value of things has increased from the past to this day. This situation has also been experienced by him. Instead of enjoying his financial freedom, he wanted to offer you an opportunity. We need to act together to create a world where we can be free together. Soon we will see beautiful days, do you not want to witness ?",
}) => {
  const address =
    "kaspa:qph5led52ma4ax9sgy9n5l89h46598dlue667ke8mu0rtj90zpzu5k8m6zkef";
  const shortAddress = `${address.slice(0, 20)}.....${address.slice(-20)}`;
  const fullUrl = `https://kas.fyi/address/${address}`;

  return (
    <section className={ClassSec} id="about">
      <div className="container">
        <div className="row">
          {/* Sol taraf metin */}
          <div className="col-12 col-lg-4 left-content">
            <h5>A remembrance of the past</h5>
            <p>{leftText}</p>
          </div>

          {/* Orta kısmında GIF */}
          <div className="col-12 col-lg-4 text-center gif-container">
            <img src={hugoldGif1} alt="Animated GIF" className="centered-gif" />
          </div>

          {/* Sağ taraf metin */}
          <div className="col-12 col-lg-4 right-content">
            <h5>Reality in the future</h5>
            <p>{rightText}</p>
          </div>
        </div>

        {/* Ek metinler */}
        {/* <div className="contract-add align-items-center mt-4">
          <i className="fa fa-star"></i>
          <h6 className="mr-3 mb-0">Deployed Wallet: </h6>
          <span className="w-text">
            <a
              href={fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {shortAddress}
            </a>
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
