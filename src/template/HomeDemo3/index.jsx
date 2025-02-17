import {useEffect} from "react";
import {addRemoveClassBody} from '../../utils'

import {
        HowToStartInfo,
        OurTeamInfo
       } from '../../data/data-containers/HomeDemo1/data-HomeDemo1.js';

import dataTokenInfoUp from '../../data/data-containers/HomeDemo1/data-TokenInfoUp.json';
import dataTokenInfoDown from '../../data/data-containers/HomeDemo1/data-TokenInfoDown.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo1/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo1/data-FaqInfo.json';
import dataContact from "../../data/data-containers/HomeDemo1/data-contact.json"
import IcoName from '../../data/data-layout/Footer/data-IcoName.json'
import TextFooter from '../../data/data-layout/Footer/data-TextFooter.json'


import {
        HomeDemo1Computer1,
        HomeDemo1Trade,
        Hero1Imag,
        HomeDemo1Payment,
        HomeDemo1Whitepaper1,
        HomeDemo1Trade1,
        HomeDemo1Dist,
        HomeDemo1Faq,
        FooterPattern,
        FooterLogo,
        } from '../../utils/allImgs'

import Header from "../../layouts/Header"
import Footer from '../../layouts/Footer'

import SecHeroSection from '../../components/HeroSection'
import SecParttns from '../../components/SecParttns'
import AboutUs from '../../components/AboutUs'
import SecToken from '../../components/SecToken'
import OurICO from '../../components/OurICO'
import Roadmap from '../../components/Roadmap'
import TokenInfo from '../../components/TokenInfo'
import HowToStart from '../../components/HowToStart'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'

const HomeDemo1 = () => {

    useEffect(() => {
      addRemoveClassBody('darker')
    },[])

    return (
      <div>
        <Header Title="Home Template1" />
        <SecHeroSection
          ClassSec="hero-section app section-padding"
          ColClass="col-12 col-lg-6 col-md-12"
          specialHead="Catch The Future asfafand Hold More Memecoins"
          textUp="$MEMCO Future OF Meme Coins."
          textDown="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolorem blanditiis ad perferendis, labore delectus dolor sit amet, adipisicing elit. Eveniet ipsum dolor sit amet."
          link1="contact us"
          link2="Learn more"
          wrapperClass="hedo-wrapper v3 floating-anim mt-s"
          img={Hero1Imag}
        />
        
        <div className="clearfix" />
        <HowToStart
          data={HowToStartInfo}
        />
        <AboutUs
          Computer1={HomeDemo1Computer1}
          Trade={HomeDemo1Trade}
          titleUp="About Our Trading Platform"
          titleDown="Decenteralized Crypto Trading Platform"
          textUp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in."
          textDown="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam."
          link="Read More"
        />
        <SecToken
          conuterHeader="TOKEN SALE EN2DS IN"
          title="33m"
          strength="75m"
          pullLeft="Softcap in 103 days"
          pullRight="Token Hardcap"
          prePrice="Pre-Sale 1 ETH = 8,000 Token"
          img={HomeDemo1Payment}
        />
        <Roadmap
          data={RoadmapInfo}
          ClassSpanTitle="roadmap section-padding-0-100"
        />
        
        <TokenInfo
          img={HomeDemo1Dist}
          dataUp={dataTokenInfoUp}
          dataDown={dataTokenInfoDown}
        />
        <OurICO
          Whitepaper1={HomeDemo1Whitepaper1}
          Trade1={HomeDemo1Trade1}
          title="Our ICO Whitepaper"
          textUp="Downoad Our Whitepaper214"
          textDown="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui iste asperiores harum maiores praesentium facere ullam blanditiis, odio dolorum. Officia quisquam eaque suscipit facere ducimus, sit quaerat. Numquam, corrupti?"
          link="Download Now"
        />
        <Faq
          ClassSpanTitle="faq-timeline-area section-padding-100-85"
          img={HomeDemo1Faq}
          data={FaqInfo}
        />
        <OurTeam
          data={OurTeamInfo}
          ClassSec="our_team_area section-padding-0-0 clearfix"
        />
        <Subscribe />
        <Footer
          FooterPattern={FooterPattern}
          FooterLogo={FooterLogo}
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad."
          IcoName={IcoName}
          TextFooter={TextFooter}
          dataContact={dataContact}
        />
      </div>
    );
};

export default HomeDemo1