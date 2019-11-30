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
import OGPartnership from './OGPartnership';

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
      <OGPartnership />
    </main>
  );
}

export default IndexContent;
