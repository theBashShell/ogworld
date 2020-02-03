import React from "react";
import CONSTANTS from "../../util/constants";
import "./ogprojects.css";

const Project = ({ pic, head, desc }) => {
  return (
    <div className="pj centered">
      <div className="pj-img">
        <img src={pic} alt={head} />
      </div>
      <h3>{head}</h3>
      <p>{desc}</p>
    </div>
  );
};

const OGProjects = () => {
  return (
    <section className="proj">
      <div className="sec-title proj-title">Projects</div>
      <div className="centered pj-contained">
        <Project
          pic={CONSTANTS.images.cep}
          head="Community Empowerment Projects"
          desc="OG World has several projects in sports, public
         health, and human services. The goals of these projects 
         are to engage the youth, harness their talents, and improve
          their welfare , at the same time, helping society."
        />
        <Project
          pic={CONSTANTS.images.elp}
          head="Experiential Learning Program"
          desc="The ELP program creates a forum for Ghanaians and their
         foreign counterparts to connect for a mutually beneficial 
         engagement, the same time affecting the local community positively.
          The programs sees many institutions and various groups visit Ghana
           to share knowledge and contribute positively to society. Since 2016,
            the program has seen 150+ students and faculty from various
             universities in the United States visit Ghana."
        />
      </div>

      <div className="credit">https://icons8.com</div>
    </section>
  );
};

export default OGProjects;
