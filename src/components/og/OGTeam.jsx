import React, { useEffect } from "react";
import "./ogteam.css";
import CONSTANTS from "../../util/constants";

const Member = ({ pic, head, desc }) => (
  <div className="member centered">
    <div>
      <img src={pic} alt="head" />
    </div>
    <h3>{head}</h3>
    <p>{desc}</p>
  </div>
);

const OGTeam = () => {
  return (
    <section id="team" className="team">
      <div className="sec-title team-title">Team</div>
      <div className="centered whole-team">
        <Member
          pic={CONSTANTS.images.eddie}
          head="Director"
          desc="Edward(Eddie) has over the past decade supported 
          individuals and groups willing to visit Ghana with the 
          aim of making the desired impact on the lives of others.
           He is passionate about giving the needed exposure to the
            youth through interactions with other persons from the 
            diaspora. Edward is always determined to achieve success 
            in all his endevors."
        />
        <Member
          pic={CONSTANTS.images.vero}
          head="Resource Manager"
          desc="Veronica has great passion for reaching out to the
           less privileged. She has 9 years of experience in resource
            management. Her high sense of integrity and commitment with 
            which she takes on tasks are excellent. She loves to swim and read."
        />
        <Member
          pic={CONSTANTS.images.bruno}
          head="Software & Media"
          desc="Bruno 
        is a software engineer currently working with OG World. He has a B.Sc. 
        in Computer Science from Ashesi University. He is interested in building
         productivity tools and enjoys technical writing. In his spare time, he 
         is tinkering with new technology."
        />
      </div>
      <div className="swiper-pg" />
    </section>
  );
};

export default OGTeam;
