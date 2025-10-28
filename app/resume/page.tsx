// app/resume/page.tsx
import React from "react";
import { resumeData } from "../src/data"; // Import the data
import "./globals.css"; // Import the local CSS file

const Resume = () => {
  const { skillmessage, datamessage, education, work, skills, databases } =
    resumeData.resume;

  return (
    <div className="resume-page">
      <section id="resume">
        {/* Education Section */}
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education.map((edu) => (
                  <div key={edu.school}>
                    <h3>{edu.school}</h3>
                    <h3>{edu.school1}</h3>
                   
                    <h3>{edu.school2}</h3>
                    <h3>{edu.school3}</h3>

                    <p>{edu.degree}</p>
                    <p>{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Section */}
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {work.map((job) => (
              <div key={job.company}>
                <h3>{job.company}</h3>
                <p className="info">
                  {job.title}
                  <span>&bull;</span> <em className="date">{job.years}</em>
                </p>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">
                {skills.map((skill) => {
                  const className = "bar-expand " + skill.name.toLowerCase();
                  return (
                    <li key={skill.name}>
                      <span
                        style={{ width: skill.level }}
                        className={className}
                      ></span>
                      <em>{skill.name}</em>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Database Section */}
        <div className="row database">
          <div className="three columns header-col">
            <h1>
              <span>Database</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{datamessage}</p>

            <div className="bars">
              <ul className="database">
                {databases.map((data) => {
                  const className = "bar-expand " + data.name.toLowerCase();
                  return (
                    <li key={data.name}>
                      <span
                        style={{ width: data.level }}
                        className={className}
                      ></span>
                      <em>{data.name}</em>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
