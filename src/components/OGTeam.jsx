import React from 'react';
import eddy from '../static/images/eddy.jpg';
import veronica from '../static/images/veronica.jpg';
import bruno from '../static/images/bruno.jpg';
import Reveal from 'react-reveal/Reveal';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const Team = ({ img, title, description, duration }) => {
  return (
    <Reveal bottom duration={duration}>
      <div className="og-team">
        <div className="centered">
          <img className="member-img" src={img} alt={title} />
        </div>
        <div className="member-title">{title}</div>
        <div className="member-info">{description}</div>
      </div>
    </Reveal>
  );
};

function OGTeam() {
  return (
    <div id="team" className="centered">
      <h2 className="team_heading">Team</h2>
      <div className="team_layout centered">
        <Team
          img={veronica}
          title="Resource Manager"
          duration={2000}
          description="Veronica has great passion for reaching out to the 
        less privileged. She has 9 years of experience in resource management.
         Her high sense of integrity and commitment with which she takes on 
         tasks are excellent. She loves to swim and read"
        />
        <Team
          img={eddy}
          title="Director"
          duration={4000}
          description="Edward(Eddie) has over the past decade supported 
    individuals and groups willing to visit Ghana with the aim of 
    making the desired impact on the lives of others. He is passionate
     about giving the needed exposure to the youth through interactions
      with other persons from the diaspora. Edward is always determined
       to achieve success in all his endevors"
        />
        <Team
          img={bruno}
          title="Software & Media"
          duration={2000}
          description="Bruno is a software engineer currently working with OG World.
         He has a B.Sc. in Computer Science from Ashesi University. 
         He is interested in building productivity tools and enjoys technical writing.
          In his spare time, he is tinkering with new technology"
        />
      </div>
    </div>
  );
}

export default OGTeam;
