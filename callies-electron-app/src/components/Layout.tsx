import React from "react";
import { Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return(
     <div>

      <p>This is the layout</p>

      <Outlet />

    </div>
  );
};