"use client"; // Mark as a client component

import React, { useEffect, useState } from "react";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import About from "./comp/About";
import Resume from "./comp/Resume";
import Contact from "./comp/Contact";
import Testimonials from "./comp/Testimonials";
import Portfolio from "./comp/Portfolio";

import ".";

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [showResumeData, setShowResumeData] = useState(false);

  useEffect(() => {
    fetch("/resumeData")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  const toggleResumeData = () => {
    setShowResumeData(!showResumeData);
  };

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />

      <button onClick={toggleResumeData}>
        {showResumeData ? "Hide Resume Data" : "Show Resume Data"}
      </button>

      {showResumeData && (
        <div className="resume-data">
          <h2>Resume Data</h2>
          <pre>{JSON.stringify(resumeData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;