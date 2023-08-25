import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-900 ">
        <div className="bg-gray-900 container m-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
