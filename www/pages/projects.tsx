import React from "react";

const Projects = (props: any) => {
  return (
    <div {...props}>
      This wesbite! This project utilizes zeit's serverless architecture, using
      firebase as the datastore, ui is rendered via nextjs universal rendering,
      the design library used is material-ui. See the code{" "}
      <a href="https://github.com/MicahRamirez/personal-site"> HERE!</a>
    </div>
  );
};

export default Projects;
