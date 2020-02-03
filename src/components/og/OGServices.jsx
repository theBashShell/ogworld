import React from "react";
import "./ogservices.css";
import CONSTANTS from "../../util/constants";
import OGService from "./OGService";

const OGServices = () => {
  return (
    <section className="services centered">
      <OGService
        pic={CONSTANTS.images.exchange_program}
        head="Exchange Program"
        text="OG World connects institutions willing to give
           opportunity to young Ghanaians to develop their 
           talent and return to their communities to help make
            a difference. OG world depends on its partners to 
            achieve the objectives of this program."
      />
      <OGService
        pic={CONSTANTS.images.logistics}
        head="Logisitics & Accomodation"
        text="OG WORLD provides in-country logistics primarily 
          for its guests, partners and partner organizations 
          including, internal travel arrangements, setting up 
          of meetings, visits to places of interest in Ghana as
           well as community needs assessment for Project development."
      />
      <OGService
        pic={CONSTANTS.images.logistics}
        head="Visa & Ticket"
        text="OG World facilitates visas and tickets for people visiting 
          Ghana. Experience and explore Ghana while OG World 
          does the heavy lifting."
      />
      <OGService
        pic={CONSTANTS.images.logistics}
        head="More..."
        text="Planning on visiting Ghana and have a memorable experience? 
        Speak to us."
      />
    </section>
  );
};

export default OGServices;
