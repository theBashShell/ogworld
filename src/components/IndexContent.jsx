import React, { useEffect } from 'react';
import Service from '../components/Service';
import Feedback from '../components/Feedback';
import Comment from '../components/Comment';
import ReachUS from '../components/ReachUs';
import Partner from '../components/Partner';
import northeastern from '../static/images/neu.png';
import uw from '../static/images/uow.png';
import ashesi from '../static/images/ashesi.jpeg';
import Slider from 'react-slick';
import TagLine from './TagLine';
import OGService from './OGService';
import OGProjects from './OGProjects';
import OGTeam from './OGTeam';
import OGFeedback from './OGFeedback';
import OGContact from './OGContact';

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
};

function IndexContent() {
  return (
    <main id="main_content" className="page_content">
      <TagLine />
      <OGService />
      <OGProjects />
      <OGTeam />
      <OGFeedback />
      <OGContact />
      <div id="saying" className="services_container" />
       
      <div id="reach_us" className="reach_container">
        <ReachUS />
      </div>
      <section id="partnerships" style={{ paddingTop: '58px' }}>
        <h2>Partnerships</h2>
        <Slider {...settings}>
          <Partner
            img={northeastern}
            name="north eastern university"
            program="Dialogue of Civilizations"
          />
          <Partner
            img={uw}
            name="university of washington"
            program="Entrepreneurship Ecosystems in Ghana"
          />
          <Partner
            img={ashesi}
            name="ashesi university"
            program="Ashesi Venture Incubator"
          />
          <Partner
            img="https://seeklogo.com/images/M/MIT-logo-C802537651-seeklogo.com.png"
            name="MIT logo"
          />
        </Slider>
      </section>
    </main>
  );
}

export default IndexContent;
