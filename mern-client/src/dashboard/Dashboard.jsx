import React from "react";
import Cards from "../Cards/Cards";
import Transactions from "../transactions/Transactions";
import "./dashboard.css";
import Report from "../reports/Report";
import Budget from "../Budget/Budget";
import Subscription from "../subscription/Subscription";
import Saving from "../savings/Saving";
import Loans from "../loans/Loans";
import Financial from "../financial/Financial";

const Dashboard = () => {
  return (
    <div className="mt-12 mb-10">
      <div className="main-content-holder">
        <div className="content-grid-one">
          <Cards />
          <Transactions />
          <Report />
        </div>
        <div className="content-grid-two">
          <Budget />
          <div className="grid=two=item">
            <div className="subgrid-two">
              <Subscription />
              <Saving />
            </div>
          </div>
          <div className="grid-two-item">
            <div className="subgrid-two">
              <Loans />
              <Financial />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
