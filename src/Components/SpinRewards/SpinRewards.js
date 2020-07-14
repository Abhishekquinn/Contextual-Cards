import React, { Component } from "react";
import SpinWheel from "../../Shared/SpinWheel/SpinWheel";
import larrow from "../../Images/larrow.svg";
import "./SpinRewards.scss";

export default class SpinRewards extends Component {
  movetohome = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <div id="rewardcontainer" className="pagecontainer">
        <div id="actionrewards">
          <div className="backheader">
            <img src={larrow} onClick={this.movetohome} />
            <span>Your Rewards</span>
          </div>
        </div>
        <div id="rewardcontent">
          <SpinWheel></SpinWheel>

          <div className="detailscontainer">
            <div className="detailscard">
              <p>Spin the wheel now to get rewarded</p>
              <p>
                Tap on Spin or rotate the wheel anti-clockwise and release to
                start spinning{" "}
              </p>
            </div>
          </div>
          <div className="gethelp">
            <p>
              Have a question ? <span className="highlight">Get help</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
