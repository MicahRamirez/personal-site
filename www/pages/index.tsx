import "typeface-roboto";
import React from "react";

import { AppLayout } from "../lib/app-layout/main";

const Main = ({ hasRendered }: { hasRendered: boolean }) => {
  return (
    <AppLayout hasRendered={hasRendered}>
      <p>Content</p>
    </AppLayout>
  );
};

export default Main;
