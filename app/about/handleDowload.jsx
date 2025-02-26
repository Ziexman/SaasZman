import React from 'react';

const DownloadResume = ({ resumeData }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeData; // Assuming `resumeData` is a URL or Blob
    link.download = 'resume.pdf'; // Specify a default filename if needed
    link.click();
  };

  return (
    <p>
      <button onClick={handleDownload} className="button">
        <i className="fa fa-download"></i> Download Resume
      </button>
    </p>
  );
};

export default DownloadResume;
