import React from "react";
import "./indexcontent.css";
import OGService from "../og/OGService";
import CONSTANTS from "../../util/constants";

const IndexContent = () => {
  return (
    <div className="n-content" data-hash="services">
      <div className="full service">
        <h2>services</h2>
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
        <div className="credit">https://icons8.com</div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
      </div>
    </div>
  );
};

export default IndexContent;
