import SectionHeading from "../SectionHeading"
import "./Contact.scss"

const Contact = ({dataContact}) => {

  return (

    <div className="contact_us_area section-padding-0-0" id="contact">
      <div className="container">
        <div className="row">
          {/* <div className="col-12">
            <SectionHeading
              ClassSpanTitle="gradient-text blue"
              titleUp="Contact us"
              titleDown="Contact With Us"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
            />
          </div> */}
        </div>
        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="contact_form">
              <form action="#" method="post" id="main_contact_form" noValidate>
                <div className="row">
                  <div className="col-12">
                    <div id="success_fail_info" />
                  </div>
                  {dataContact && dataContact.map((item , key) => (
                      <div className={item.ClassUp} key={key}>
                        <div className="group" data-wow-delay="0.5s">
                          {item.addTextArea ? (
                            <textarea name={item.nameInput} id={item.nameInput} required />
                          ):(
                            <input type="text" name={item.nameInput} id={item.nameInput} required />
                          )}
                          <span className="highlight" />
                          <span className="bar" />
                          <label>{item.title}</label>
                        </div>
                      </div>
                  ))}
                  <div className="col-12 text-center" data-wow-delay="0.6s">
                    <button type="submit" className="btn more-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Contact