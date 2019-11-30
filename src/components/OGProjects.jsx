import React from 'react';
import { Icon } from 'antd';
import Reveal from 'react-reveal/Reveal';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

const Project = ({ title, description }) => {
  return (
    <div className="og-project">
      <Reveal left duration={3000}>
        <div className="project-head">
          <Icon
            type="check-circle"
            theme="filled"
            style={{ color: 'black', fontSize: '16px' }}
          />&nbsp;
          {title}
        </div>
        <div className="project-description">{description}</div>
      </Reveal>
    </div>
  );
};

function OGProjects() {
  return (
    <div id="project" className="centered">
      <h2 className="project_heading">Projects</h2>
      <div className="project_layout centered">
        <Project
          title="Community Empowerment Projects"
          description="OG World has several projects in sports, public 
        health, and human services. The goals of these projects are to
         engage the youth, harness their talents, and improve their welfare
         , at the same time, helping society."
        />
        <Project
          title="Experiential Learning Program (ELP)"
          description="The ELP program creates a forum for Ghanaians
           and their foreign counterparts to connect for a mutually 
           beneficial engagement, the same time affecting the local 
           community positively. The programs sees many institutions
            and various groups visit Ghana to share knowledge and 
            contribute positively to society. Since 2016, the program 
            has seen 150+ students and faculty from various universities 
            in the United States visit Ghana."
        />
      </div>
    </div>
  );
}

export default OGProjects;
