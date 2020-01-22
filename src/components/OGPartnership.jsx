import React from "react";
import { Carousel } from "antd";
import northeastern from "../static/images/neu.png";
import uofw from "../static/images/uow.png";
import Reveal from "react-reveal/Reveal";
import config from "react-reveal/globals";

config({ ssrFadeout: true });

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 700,
  autoplaySpeed: 3000,
  cssEase: "linear",
  pauseOnHover: true,
  fade: true,
  centerMode: true
};

const Partner = ({ img, partner }) => {
  return (
    <div className="partner-container centered">
      <Reveal bottom duration={5000}>
        <img className="partner-img" src={img} alt={partner} />
      </Reveal>
    </div>
  );
};

function OGPartnerships() {
  return (
    <div id="partnership">
      <h2 className="partnership_heading">Partnerships</h2>
      <Carousel {...settings}>
        <Partner img={northeastern} partner="Northeastern University" />
        <Partner img={uofw} partner="University of Washington" />
        <Partner
          img="https://cdn-images-1.medium.com/max/1200/1*hgDXhOwMcZLL6OhJuN7WdQ.jpeg"
          partner="Ashesi D:Lab"
        />
        <Partner
          img="https://www.rogerson.org/wp-content/uploads/MIT-logo-with-spelling-office-red-gray-design6.png"
          partner="Massachusetts Institute of Technology"
        />
        <Partner
          img="https://www.nexti2i.com/wp-content/uploads/2019/08/NEXTi2i_footerlogo_grey-300x170.png"
          partner="The New Entrepreneurs Xchange for Transformation"
        />
      </Carousel>
    </div>
  );
}

export default OGPartnerships;
