import React from 'react';
import Service from '../components/Service';
import Feedback from '../components/Feedback';
import ContactForm from '../components/ContactForm';
import ReachUS from '../components/ReachUs';
import more from '../static/images/more.svg';
import visa from '../static/images/passport.svg';
import logistics from '../static/images/logistics.svg';
import hmm from '../static/images/independence.jpg';
import exchange_program from '../static/images/exchange_program.svg';
import eddy from '../static/images/eddy.jpg';
import veronica from '../static/images/veronica.jpg';
import bruno from '../static/images/bruno.jpg';

function IndexContent() {
  return (
    <main id="main_content" className="page_content">
      <div className="tagline" style={{backgroundImage: `url(${hmm})`}}>
        <div className="tagline_filter">
          <h2>
            <sup>
              <s className="incorrect">Tour </s>
            </sup>
            Experience <br /> & <br /> Explore Ghana
          </h2>
        </div>
      </div>
      <section id="services">
        <h2 className="service_heading">Services</h2>
        <div className="services_container">
          <div className="services">
            <Service
              img={visa}
              heading="Visa & Ticket"
              description=" OG World facilitates visas and tickets for people visiting Ghana. Experience and explore Ghana while OG World does the heavy lifting."
            >
              <a href="http://www.freepik.com">
                Designed by macrovector / Freepik
              </a>
            </Service>
            <Service
              img={exchange_program}
              heading="Exchange Program"
              description="OG World connects institutions willing to give opportunity to young Ghanaians to develop their talent and return to their communities to help make a difference. OG world depends on its partners to achieve the objectives of this program."
            >
              <a href="http://www.freepik.com">Designed by Freepik</a>
            </Service>
            <Service
              img={logistics}
              heading="Logisitics & Accomodation"
              description="OG WORLD provides in-country logistics primarily for its guests, 
              partners and partner organizations including, internal travel arrangements, 
              setting up of meetings, visits to places of interest in Ghana as well as 
              community needs assessment for Project development."
            >
              <a href="http://www.freepik.com">Designed by Freepik</a>
            </Service>
            <Service
              img={more}
              heading="More..."
              description="OG World will help you in visiting Ghana. Coming to Ghana? Then speak to us"
            >
              <a href="http://www.freepik.com">
                Designed by macrovector / Freepik
              </a>
            </Service>
          </div>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="services_container">
          <div className="projects">
            <Service
              heading="Experiential Learning Program (ELP)"
              description="The ELP program creates a forum for Ghanaians and their 
              foreign counterparts to connect for a mutually beneficial engagement, 
              the same time affecting the local community positively. The programs 
              sees many institutions and various groups visit Ghana to share knowledge
               and contribute positively to society. Since 2016, the program has seen 
               150+ students and faculty from various universities in the United States
                visit Ghana."
            />
            <Service
              heading="Community Empowerment Projects"
              description="OG World has several projects in sports, public health, and human services. The goals of these
              projects are to engage the youth, harness their talents, and improve their welfare, at the same time, 
              helping society."
            />
          </div>
        </div>
      </section>
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
          <div className="feedback_container">
            <Feedback
              words="Thank you so much [OG World]. I absolutely cannot express my gratitude enough."
              client="MIT Student"
            />
            <Feedback
              words="Thanks for a terrific trip. Amazing company and incredible connections. It's been such a pleasure to work with [OG World]. Hope to see you again"
              client="U of W Faculty"
            />
          </div>
        </section>
      </div>
      <div id="reach_us" className="reach_container">
        <ReachUS />
      </div>
    </main>
  );
}

export default IndexContent;
