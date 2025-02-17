import Contact from "../../components/Contact"
import './Footer.scss'

const Footer = ({
  FooterPattern,
  FooterLogo,
  text="",
  IcoName,
  TextFooter,
  dataContact
}) => {

    return (
      <footer className="footer-area bg-img" style={{backgroundImage: `url(${FooterPattern})`}}>
        <Contact dataContact={dataContact} />
        <div className="footer-content-area addMLInSmall">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-lg-4 col-md-6">
                <div className="footer-copywrite-info">
                  {/* Copywrite */}
                  <div className="copywrite_text" data-wow-delay="0.2s">
                    <div className="footer-logo">
                      <a href="#"><img src={FooterLogo} alt="logo" /> </a>
                    </div>
                    <p>{text}</p>
                  </div>
                  {/* Social Icon */}
                  <div className="footer-social-info" data-wow-delay="0.4s">
                    {IcoName && IcoName.map((item , key) => (
                        <a key={key} href="#"><i className={item.IcoName} aria-hidden="true" /></a>    
                    ))}
                  </div>
                </div>
              </div>
              {TextFooter && TextFooter.map((item , key) => (
                <div key={key} className={item.classBlock}>
                  <div className="contact_info_area d-sm-flex justify-content-between">
                    <div className={item.classInfo}>
                      <h5>{item.title}</h5>
                      <a href><p>{item.text1}</p></a>
                      <a href><p>{item.text2}</p></a>
                      <a href><p>{item.text3}</p></a>
                      <a href><p>{item.text4}</p></a>
                      {item.text5 && <a href><p>{item.text5}</p></a>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer