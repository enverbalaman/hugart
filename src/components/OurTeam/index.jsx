import SectionHeading from "../SectionHeading"
import "./Team.scss"

const OurTeam = ({ data, ClassSec }) => {

  return (

    <section className={`${ClassSec} addMLInSmall`} id="team">
      <div className="container">
        {/* <div className="row">
            <div className="col-12">
              <SectionHeading
                ClassSpanTitle="gradient-text blue"
                titleUp="Our Team"
                titleDown="Awesome Team"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
              />

            </div>
          </div> */}
        
      </div>
    </section>
  );
}

export default OurTeam