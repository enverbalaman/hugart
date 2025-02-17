import {data , imgSecHeading} from '../../data/data-containers/data-Home.js';

import SectionHeading from '../../components/SectionHeading'
import Preloader from '../../components/Preloader'
import SectionDemo from './SectionDemo'

const HomeContainer = () => {

    return (
      <>
        <Preloader Title="Home" />
        <section className="demo section-padding-100-70" id="demo">
          <div className="container">
            <SectionHeading
              img={imgSecHeading}
              title='Choose a demo'
              text="Our ICO Template will be a perfect platform for presenting your ico launch. This Landing Page comes in great and clean design"
            />
            <div className="row">
              <SectionDemo data={data} />
            </div>
          </div>
        </section>
      </>
    );
}

export default HomeContainer;

