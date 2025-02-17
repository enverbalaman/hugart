import SectionHeading from "../SectionHeading"
import { hugoldDeployed } from '../../utils/allImgs'

const TokenInfo = ({ img, dataUp, dataDown }) => {

  return (

    <div className=" section-padding-100 banner-bg relative" id="tokenomics">
      {/* <div class="bubble-wrapper">
            <img src={bubbleImg} alt=""/>
            <h2 class="coin-text">$MEMCO</h2>
        </div> */}
      <div className="container">
        <SectionHeading
          ClassSpanTitle="gradient-t green"
          titleUp="%100 Fair Launch"
          titleDown="Our Token Info"
          text="%100 Fair Launch"
        />
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 col-md-12">
            <img src={hugoldDeployed} alt="" />
          </div>
          <div className="col-12 col-lg-7 col-sm-12">
            <div className="col-md-6 col-sm-6">
              <div className="who-we-contant mt-s">
                <ul className="token-information">
                  {dataUp && dataUp.map((item, key) => (
                    <li key={key}>
                      <span className={item.Num} />
                      <h6>{item.title}</h6>
                      <p className={`${item.isLast && "mb-0"}`}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="who-we-contant mt-s">
                <ul className="token-information">
                  {dataDown && dataDown.map((item, key) => (
                    <li key={key}>
                      <span className={item.Num} />
                      <h6>{item.title}</h6>
                      <p className={`${item.isLast && "mb-0"}`}>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default TokenInfo;