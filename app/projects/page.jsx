// app/projects/page.tsx
import "../styles/globals.css";

const ProjectsPage = () => {
  // Example data
  const completedProjects = [
    {
      id: 5,
      title: "WalkHero",
      description: "Track and improve your walking routine.",
    },
    {
      id: 4,
      title: "School Management",
      description: "Streamlined admin and academic management.",
      link: "https://code-marshal-onlinesite-5w39.vercel.app",
    },
    {
      id: 3,
      title: "Hospital Booking & Consultancy",
      description: "Simplified appointment scheduling and consultations.",
    },
    {
      id: 2,
      title: "Restaurant App",
      description: "Interactive restaurant menu and online ordering system.",
      link: "http://vercel-kappa-three-38.vercel.app",
    },
  ];

  const ongoingProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Seamless online shopping experience.",
    },
    {
      id: 3,
      title: "Smart Home App",
      description: "Control your smart devices from anywhere.",
    },
  ];

  return (
    <div className="pageContainer">
      <h1 className="pageTitle">Stuff I've Built So Far</h1>

      {/* Completed Projects */}
      <section className="projectsSection">
        <h2 className="sectionTitle">Completed Projects</h2>
        <div className="projectsContainer">
          {completedProjects.map((project) => (
            <div key={project.id} className="projectCard">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectLink"
                >
                  Visit Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="projectsSection">
        <h2 className="sectionTitle">Ongoing Projects</h2>
        <div className="projectsContainer">
          {ongoingProjects.map((project) => (
            <div key={project.id} className="projectCard ongoing">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="projectDescription">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
