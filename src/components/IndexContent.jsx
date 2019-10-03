import React from 'react';
import Service from '../components/Service';
import Feedback from '../components/Feedback';
import ContactForm from '../components/ContactForm';
import logistics from '../static/images/logistics.svg';
import exchange_program from '../static/images/exchange_program.svg';
import visa from '../static/images/passport.svg';
import more from '../static/images/more.svg';

function IndexContent() {
  return (
    <main id="main_content" className="page_content">
      <div className="tagline">
        <h2>
          <sup>
            <s className="incorrect">Tour </s>
          </sup>
          Experience <br /> & <br /> Explore Ghana
        </h2>
      </div>
      <section id="services" className="services">
        <h2 className="service_heading">Services</h2>
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
            description="OG WORLD provides in-country logistics primarily for its guests, partners and partner organizations including, internal travel arrangements, setting up of meetings, visits to places of interest in Ghana as well as community needs assessment for Project development."
          >
            <a href="http://www.freepik.com">Designed by Freepik</a>
          </Service>
          <Service
            img={more}
            heading="More..."
            description="OG World will help you in visitig Ghana and "
          >
            <a href="http://www.freepik.com">
              Designed by macrovector / Freepik
            </a>
          </Service>
        </div>
      </section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects">
          <Service
            heading="Experiential Learning Program (ELP)"
            description="The ELP program creates a forum for Ghanaians and their foreign counterparts to connect for a mutually beneficial engagement, the same time affecting positively the local community. The programs sees many institutions and various groups visit Ghana to share knowledge and contribute posively to society. Since 2016, the program has seen 150+ students and faculty from various universities in the United States visit Ghana."
          />
          <Service
            heading="Community Empowerment Projects"
            description="the community"
          />
        </div>
      </section>

      <section id="feedback" className="services">
        <h2>What People Have to Say</h2>
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
      {/*<section id="reach_out" className="reach_out">
        <h2>Reach Out</h2>
        <ContactForm />
  </section>*/}
    </main>
  );
}

export default IndexContent;
