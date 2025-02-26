// app/about/page.tsx
"use client"; // This tells Next.js to render this component on the client-side

import React from "react";
import Image from "next/image";
import { resumeData } from "../src/data"; // Import the data

const About = () => {
  const {
    name,
    image,
    bio,
    address: { street, city, state, zip },
    phone,
    email,
    resume: { resumeLink }, // Add resumeLink from resumeData
  } = resumeData.main;

  const profilepic = `/images/${image}`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeLink; // Use the resumeLink from resumeData
    link.download = 'resume.pdf'; // Set the default filename
    link.click();
  };

  return (
    <div className="about-page">
      <div className="container">
        <section id="about">
          <div className="row">
            <div className="three columns">
              <Image
                className="profile-pic"
                src={profilepic}
                alt={`${name}'s Profile Pic`}
                width={200}
                height={200}
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <button onClick={handleDownload} className="button">
                      <i className="fa fa-download"></i> Download Resume
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
