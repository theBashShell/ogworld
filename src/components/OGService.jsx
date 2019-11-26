import React from 'react';
import Slide from 'react-reveal/Slide';
import config from 'react-reveal/globals';
import { Card } from 'antd';
import exchange_program from '../static/images/exchange_program.jpg';
import logistics from '../static/images/logistics.jpg';
import visa from '../static/images/visa.jpg';
import more from '../static/images/more.jpg';
const { Meta } = Card;

config({ ssrFadeout: true });

const Service = ({ img, title, description }) => (
  <Slide opposite bottom duration={2000}>
    <div className="og-service">
      <div>
        <Card
          cover={<img className="og-service-img" src={img} alt="title" />}
          hoverable
        >
          <Meta {...{ title, description }} />
        </Card>
      </div>
    </div>
  </Slide>
);

function OGService() {
  return (
    <div id="service">
      <h2 className="service_heading">Services</h2>
      <div className="service_layout">
        <Service img={exchange_program} title="Exchange Program" />
        <Service img={logistics} title="Logisitics & Accomodation" />
        <Service img={visa} title="Visa & Ticket" />
        <Service img={more} title="More..." />
      </div>
    </div>
  );
}

export default OGService;
