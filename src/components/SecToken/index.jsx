import { SlideCountdown } from 'react-fancy-countdown';
import { Line } from 'rc-progress';

const SecToken = ({
      conuterHeader,
      title,
      strength,
      pullLeft,
      pullRight,
      prePrice,
      img
    }) => {

      return (

        <div className="section-padding-0-100 addMLInSmall">
          <div className="container pre-sale-bg">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6 col-md-12 ">
                <div className="ico-counter">
                  <div className="counter-down">
                    <div className="content">
                      <div className="conuter-header">
                        <h3 className="w-text text-center">{conuterHeader}</h3>
                      </div>
                      <div className="counterdown-content">
                        {/* Countdown  */}
                        <div className="count-down titled circled text-center">
                          <SlideCountdown
                            weeks={false}
                            deadline="2025-12-31 14:23:22"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-12 mt-s">
                <div className="ico-progress">
                  <ul className="list-unstyled list-inline clearfix mb-10">
                    <li className="title">{title}</li>
                    <li className="strength">{strength}</li>
                  </ul>
                  {/* skill strength */}
                  <div className="current-progress">
                    <Line percent="70" trailWidth="3" strokeWidth="4" strokeColor="#fb881d" />
                  </div>
                  <span className="pull-left">{pullLeft}</span>
                  <span className="pull-right">{pullRight}</span>
                </div>
                <h4 className="pre-price">{prePrice}</h4>
                <img src={img} alt="" />
                <div className="text-left">
                  <a className="btn dream-btn mt-30 fadeInUp" data-wow-delay="0.6s" href="#">Buy More HUGOLD</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );


}

export default SecToken