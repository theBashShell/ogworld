import React from "react";
import "./ogservices.css";
import CONSTANTS from "../../util/constants";
import OGService from "./OGService";

const OGServices = () => {
  return (
    <section id="service" className="services centered">
      <div className="sec-title s-sec-title">Services</div>
      <div className="centered contained">
        <OGService
          pic={CONSTANTS.images.exchange_program}
          color="#ffb0b0"
          head="Exchange Program"
          text="OG World connects institutions willing to give
           opportunity to young Ghanaians to develop their 
           talent and return to their communities to help make
            a difference. OG world depends on its partners to 
            achieve the objectives of this program."
        />
        <OGService
          pic={CONSTANTS.images.logistics}
          color="#ffedb0"
          head="Logisitics & Accomodation"
          text="OG WORLD provides in-country logistics primarily 
          for its guests, partners and partner organizations 
          including, internal travel arrangements, setting up 
          of meetings, visits to places of interest in Ghana as
           well as community needs assessment for Project development."
        />
        <OGService
          pic={CONSTANTS.images.visa}
          color="#a5fec0"
          head="Visa & Ticket"
          text="OG World facilitates visas and tickets for people visiting 
          Ghana. Experience and explore Ghana while OG World 
          does the heavy lifting."
        />
        <OGService
          pic={CONSTANTS.images.more}
          color="#fde2f7"
          head="More..."
          text="Planning on visiting Ghana and have a memorable experience? 
        Speak to us."
        />
      </div>
    </section>
  );
};

export default OGServices;
