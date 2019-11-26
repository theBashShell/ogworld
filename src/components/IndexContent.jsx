import React, { useEffect } from 'react';
import $ from 'jquery';
import Service from '../components/Service';
import Feedback from '../components/Feedback';
import Comment from '../components/Comment';
import ContactForm from '../components/ContactForm';
import ReachUS from '../components/ReachUs';
import Partner from '../components/Partner';
import more from '../static/images/more.svg';
import visa from '../static/images/passport.svg';
import logistics from '../static/images/logistics.svg';
import hmm from '../static/images/independence.jpg';
import exchange_program from '../static/images/exchange_program.svg';
import eddy from '../static/images/eddy.jpg';
import veronica from '../static/images/veronica.jpg';
import bruno from '../static/images/bruno.jpg';
import northeastern from '../static/images/neu.png';
import uw from '../static/images/uow.png';
import ashesi from '../static/images/ashesi.jpeg';
import Slider from 'react-slick';
import TagLine from './TagLine';
import OGService from './OGService';
import OGProjects from './OGProjects'; 

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  lazyLoad: 'ondemand',
};

function IndexContent() {
  return (
    <main id="main_content" className="page_content">
      <TagLine />
      <OGService />
      <OGProjects />
      <section id="team">
        <h2>Team</h2>
        <div className="team_container">
          <div className="services team">
            <Service
              imgClass="team_img"
              serviceClass="team_card"
              img={eddy}
              heading="Director"
              description="Edward(Eddie) has over the past decade 
              supported individuals and groups willing to visit
               Ghana with the aim of making the desired impact on 
               the lives of others. He is passionate about giving
               the needed exposure to the youth through interactions
               with other persons from the diaspora. Edward is always
                determined to achieve success in all his endevors"
            />
            <Service
              imgClass="team_img"
              serviceClass="team_card"
              img={veronica}
              heading="Resource Manager"
              description="Veronica has great passion for reaching out to 
              the less privileged. She has 9 years of experience in
               resource management. Her high sense of integrity and 
               commitment with which she takes on tasks are excellent.
                She loves to swim and read"
            />
            <Service
              imgClass="team_img"
              serviceClass="team_card"
              img={bruno}
              heading="Software & Media"
              description="Bruno is a software engineer currently working 
              with OG World. He has a B.Sc. in Computer Science from Ashesi
               University. He is interested in building productivity tools
               and enjoys technical writing. In his spare time, he is tinkering
               with new technology."
            />
          </div>
        </div>
      </section>
      <div id="saying" className="services_container">
        <section id="feedback" className="services">
          <h2 className="feedback_head">What People Have to Say</h2>
          <div className="feedback_container" />
        </section>
      </div>
      <Comment />
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
