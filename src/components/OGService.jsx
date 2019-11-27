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
  <Slide opposite bottom duration={5000}>
    <div className="og-service">
      <div className='card-container'>
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
    <div id="service" className="centered">
      <h2 className="service_heading">Services</h2>
      <div className="service_layout centered">
        <Service img={exchange_program} title="Exchange Program" 
        description='OG World connects institutions willing to give opportunity 
        to young Ghanaians to develop their talent and return to their communities
         to help make a difference. OG world depends on its partners to achieve the
          objectives of this program.' />
        <Service img={logistics} title="Logisitics & Accomodation" 
        description='OG WORLD provides 
        in-country logistics primarily for its guests, partners and partner 
        organizations including, 
        internal travel arrangements, setting up of meetings, visits to places
         of interest in Ghana as well as community needs assessment for Project
          development.' />
        <Service img={visa} title="Visa & Ticket" description='OG World facilitates
         visas and tickets for people visiting Ghana. Experience and explore Ghana
          while OG World does the heavy lifting.' />
        <Service img={more} title="More..." description='OG World will help you in
         visiting Ghana. Coming to Ghana? Then speak to us' />
      </div>
    </div>
  );
}

export default OGService;
