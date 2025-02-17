import {starImg} from '../../utils/allImgs'

const OurICO = ({
  Whitepaper1,
  Trade1,
  title="",
  textUp="",
  textDown="",
  link=""
}) => {

    return (

      <section className="special fuel-features section-padding-100 addMLInSmall clearfix">
        
        <div className="container has-shadow relative">
        <img src={starImg} class="star-img" alt=""/>
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 offset-lg-0 col-md-12 no-padding-left">
              <div className="welcome-meter relative " data-aos="fade-up">
                <img draggable="false" className="center-block" src={Whitepaper1} alt="" />
                <img draggable="false" className="trade1 floating-anim" src={Trade1} alt="" />
              </div>
            </div>
            <div className="col-12 col-lg-6 offset-lg-0">
              <div className="who-we-contant">
                <div className="dream-dots text-left" data-aos="fade-up">
                  <span className="gradient-text blue">{title}</span>
                </div>
                <h4 data-aos="fade-up">{textUp}</h4>
                <p data-aos="fade-up">{textDown}</p>
                <a className="btn more-btn mt-15" href="#">{link}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default OurICO;