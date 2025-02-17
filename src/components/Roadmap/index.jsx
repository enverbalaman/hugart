import SectionHeading from "../SectionHeading"
import "./Roadmap.scss"

const Roadmap = ({ data, ClassSpanTitle }) => {

  return (

    <section className={`${ClassSpanTitle} addMLInSmall`} id="roadmap">
      <SectionHeading
        ClassSpanTitle="gradient-text blue"
        // titleUp="ICO Roadmap"
        titleDown="HUGOLD's Roadmap"
        text="Hugold awakens from his financial slumber and begins his journey to infinite wealth.
        By following our hero, who is a pioneer on this path, you can achieve financial freedom"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              {data && data.map((item, key) => (
                <div className="timeline" key={key}>
                  <div className="icon" />
                  <div className="date-content">
                    <div className="date-outer"> <span className="date"> <span className="month">{item.month}</span> <span className="year">{item.year}</span> </span>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <h5 className="title">{item.title}</h5>
                    {
                      item.data.map((item, key) => {
                        return <p key={key} className="description text-light-gray"> - {item} </p>;
                      })
                    }

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}

export default Roadmap