import React from "react";
import resume from "../Images/BakerQuillinResume.pdf";

const AboutPage = () => {
    
  return (
    <div>
      <h1>About Page</h1>
      <p>
        My name is Baker Quillin I have been in the process of transitioning
        into a full stack programmer. I have a perticular passion for backend
        development in perticular. <br></br>
      </p>
      <p>
        On the projects page you can see a full list of some of the projects
        that I have been working on recently with links to the github repo's{" "}
      </p>
      <p>
        You can visit my GitHub page{" "}
        <a rel="noreferrer" target="_blank" href="https://github.com/bakerquil">
          here
        </a>
        . My LinkedIn{" "}
        <a
        rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/baker-quillin-637761103"
        >
          here
        </a>{" "}
        and my resume can be found{" "}
        <a rel="noreferrer" target="_blank" href={resume}>
          here
        </a>
      </p>
    </div>
  );
};

export default AboutPage;
