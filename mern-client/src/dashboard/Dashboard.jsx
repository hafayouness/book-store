import React from "react";
import Cards from "../Cards/Cards";
import Transactions from "../transactions/Transactions";
import "./dashboard.css";
import Report from "../reports/Report";
const Dashboard = () => {
  return (
    <div className="mt-12">
      <div className="main-content-holder">
        <div className="content-grid-one">
          <Cards />
          <Transactions />
          <Report />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
