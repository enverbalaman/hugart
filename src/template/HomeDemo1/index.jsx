import { useEffect } from "react";
import { addRemoveClassBody } from '../../utils'

import {
  HowToStartInfo,
  OurTeamInfo
} from '../../data/data-containers/HomeDemo3/data-HomeDemo3.js';

import dataTokenInfoUp from '../../data/data-containers/HomeDemo3/data-TokenInfoUp.json';
import dataTokenInfoDown from '../../data/data-containers/HomeDemo3/data-TokenInfoDown.json';
import RoadmapInfo from '../../data/data-containers/HomeDemo3/data-RoadmapInfo.json';
import FaqInfo from '../../data/data-containers/HomeDemo3/data-FaqInfo.json';
import dataContact from "../../data/data-containers/HomeDemo3/data-contact.json"
import IcoName from '../../data/data-layout/Footer/data-IcoName.json'
import TextFooter from '../../data/data-layout/Footer/data-TextFooter.json'


import {
  HomeDemo3Computer1,
  HomeDemo3Trade,
  HomeDemo3Payment,
  HomeDemo3Whitepaper1,
  HomeDemo3Trade1,
  Hero3Imag,
  HomeDemo3Dist,
  HomeDemo3Faq,
  FooterPattern,
  FooterLogo,
  Hugold40
} from '../../utils/allImgs'

import Header from "../../layouts/Header"
import Footer from '../../layouts/Footer'

import SecHeroSection from '../../components/HeroSection'
import AboutUs from '../../components/AboutUs'
import SecToken from '../../components/SecToken'
import OurICO from '../../components/OurICO'
import Roadmap from '../../components/Roadmap'
import TokenInfo from '../../components/TokenInfo'
import HowToStart from '../../components/HowToStart'
import Faq from '../../components/Faq'
import OurTeam from '../../components/OurTeam'
import Subscribe from '../../components/Subscribe'
import Art from '../../components/Art'

const HomeDemo3 = () => {

  useEffect(() => {
    addRemoveClassBody('darker')
  }, [])

  return (
    <div>
      <Header Title="Hugold" />
      <SecHeroSection
        ClassSec="hero-section banner-bg section-padding mb-100"
        ColClass="col-12 col-lg-6 col-md-12"
        specialHead="Catch The Future and Hold More HUGOLD"
        textUp="$HUGOLD is hero of the SOLANA"
        textDown="Hugold is a white collar worker who has a routine life in his 40s.
          When he encounters a memory that reminds her of her past, her whole life changes.
          And we will witness this change"
        link1="Play Mini Game"
        link2="Buy HUGOLD"
        wrapperClass="hedo-wrapper floating-anim mt-s"
        img={Hugold40}
      />

      <div className="clearfix" />
      <HowToStart
        data={HowToStartInfo}
      />
      <Faq
        data={FaqInfo} />
      <Roadmap
        data={RoadmapInfo}
        ClassSpanTitle="roadmap section-padding-0-0"
      />
      <TokenInfo
        img={HomeDemo3Dist}
        dataUp={dataTokenInfoUp}
        dataDown={dataTokenInfoDown}
        ClassSpanTitle="tokenomics section-padding-0-0"
      />
      <AboutUs
        ClassSec="about-us-area section-padding-100-0 clearfix"
        Computer1={HomeDemo3Computer1}
        Trade={HomeDemo3Trade}
        titleUp="About Our Trading Pla232tform"
        titleDown="Decenteralized Crypto Trading Platform"
        textUp="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in."
        textDown="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ipsa ut quasi adipisci voluptates, voluptatibus aliquid alias beatae reprehenderit incidunt iusto laboriosam."
        link="Read More"
      />
      {/* <SecToken
          conuterHeader="TOKEN SALE42 ENDS IN"
          title="33m"
          strength="75m"
          pullLeft="Softcap in 103 days"
          pullRight="Token Hardcap"
          prePrice="Pre-Sale 1 ETH = 8,000 Token"
          img={HomeDemo3Payment}
        /> */}

      {/* <OurICO
          Whitepaper1={HomeDemo3Whitepaper1}
          Trade1={HomeDemo3Trade1}
          textUp="Download One Pager"
          textDown="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore qui iste asperiores harum maiores praesentium facere ullam blanditiis, odio dolorum. Officia quisquam eaque suscipit facere ducimus, sit quaerat. Numquam, corrupti?"
          link="Read More"
        /> */}



    </div>
  );
};

export default HomeDemo3