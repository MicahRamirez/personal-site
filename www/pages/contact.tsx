import React from "react";

import { AppLayout } from "../lib/app-layout/main";

const Projects = ({ hasRendered }: { hasRendered: boolean }) => {
  return (
    <AppLayout hasRendered={hasRendered}>
      <div>
        This wesbite! This project utilizes zeit's serverless architecture,
        using firebase as the datastore, ui is rendered via nextjs universal
        rendering, the design library used is material-ui. See the code{" "}
        <a href="https://github.com/MicahRamirez/personal-site"> HERE!</a>
      </div>
    </AppLayout>
  );
};

export default Projects;
