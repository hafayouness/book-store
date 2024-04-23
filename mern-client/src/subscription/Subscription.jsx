import React from "react";
import "./subcription.css";
import { iconsImgs } from "../utils/images";
import { subscriptions } from "../data/data";

const Subscription = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text"> Subscriptions</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
          {subscriptions.map((subscription) => (
            <div className="grid-item" key={subscription.id}>
              <div className="grid-item-L">
                <div className="icon">
                  <img src={iconsImgs.alert} />
                </div>
                <p className="text text-silver-v1">
                  {subscription.title}
                  <span>{subscription.due_date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {subscription.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscription;
