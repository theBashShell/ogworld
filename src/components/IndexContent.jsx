import React from 'react';
import Service from '../components/Service';
import accommodation from '../static/images/accommodation.svg';
import study_abroad from '../static/images/study_abroad.svg';
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
            description="visa on arival sharp and sharpine djkdafsk  d;adsfk d ;dsjd and the main reason nothing is appearing is that"
          >
            <a href="http://www.freepik.com">
              Designed by macrovector / Freepik
            </a>
          </Service>
          <Service
            img={study_abroad}
            heading="Study Abroad / Exchange Program"
            description="come do your exchange programs with us"
          >
            <a href="http://www.freepik.com">Designed by Freepik</a>
          </Service>
          <Service
            img={accommodation}
            heading="Logisitics & Accomodation"
            description="visa on arival sharp and sharpine djkdafsk  d;adsfk d ;dsjd and the main reason nothing is appearing is that"
          >
            <a href="http://www.freepik.com">
              Designed by macrovector / Freepik
            </a>
          </Service>
          <Service
            img={more}
            heading="More..."
            description="visa on arival sharp and sharpine djkdafsk  d;adsfk d ;dsjd and the main reason nothing is appearing is that"
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
    </main>
  );
}

export default IndexContent;
