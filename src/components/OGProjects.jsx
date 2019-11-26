import React from 'react';
import { Icon } from 'antd';
import Slide from 'react-reveal/Slide';
import config from 'react-reveal/globals';

const Project = ({ title, description }) => {
  return (
    <div className="og-project">
      <div className="project-head">
        <Icon
          type="check-circle"
          theme="filled"
          style={{ color: 'yellowgreen', fontSize: '16px' }}
        />{' '}
        {title}
      </div>
      <div>{description}</div>
    </div>
  );
};

config({ ssrFadeout: true });

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
