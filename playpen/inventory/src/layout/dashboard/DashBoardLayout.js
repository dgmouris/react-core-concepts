// Comment

import React from "react";
import "./css/dashboardlayout.css";
import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";

const DashBoardLayout = props => {
  return (
    <div>
      <TopBar />
      <SideBar
        title="fewders"
        tagline="for front end web developers"
        buttons={this.state.data}
      />
    </div>
  );
};

export default DashBoardLayout;
