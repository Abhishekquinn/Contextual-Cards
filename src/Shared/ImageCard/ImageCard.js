import React, { Component } from "react";
import "./ImageCard.scss";
import larrow from "../../Images/larrow.svg";

export default class ImageCard extends Component {
  movetohome = () => {
    var elems = document.getElementsByClassName("transition");
    for (var i = 0; i < elems.length; i++) {
      elems[i].classList.remove("invisible");
    }
    var contentId = document.getElementById("content");
    contentId.style.display = "none";
    var header = document.getElementById("headercontainer");
    header.style.display = "none";
    var topImageelem = document.getElementById("imagecardcontainer");
    topImageelem.style.maxWidth = "320px";
  };

  moveCardtoTop = () => {
    var elems = document.getElementsByClassName("transition");
    for (var i = 0; i < elems.length; i++) {
      elems[i].classList.add("invisible");
    }

    var header = document.getElementById("headercontainer");
    header.style.display = "flex";
    var contentId = document.getElementById("content");
    contentId.style.display = "flex";
    var topImageelem = document.getElementById("imagecardcontainer");
    topImageelem.style.maxWidth = "inherit";
  };

  componentDidMount() {
    var contentId = document.getElementById("content");
    contentId.style.display = "none";
    var header = document.getElementById("headercontainer");
    header.style.display = "none";
  }

  render() {
    const { data } = this.props;
    return (
      <div id="imagecardcontainer" className="card">
        <div id="actionrewards">
          <div id="headercontainer">
            <img src={larrow} onClick={this.movetohome} />
            <span>Your Rewards</span>
          </div>
        </div>
        <div className="imagecontainer" onClick={this.moveCardtoTop}>
          <img
            alt="bg"
            src={data.cards[0].bg_image.image_url}
            className="responsive-img"
          ></img>
        </div>
        <div id="content">
          <div id="topcontent">
            <div className="sm-card">
              <div className="cardheader">
                <p>₹10 💰</p>
              </div>
              <div className="text">
                <p>Min Daily Savings</p>
              </div>
            </div>
            <div className="sm-card">
              <div className="cardheader">
                <p>10 days 🔥</p>
              </div>
              <div className="text">
                <p>Streak to maintain</p>
              </div>
            </div>
          </div>

          <div id="midcontent">
            <div className="mdcard">
              <div className="cardheader">
                <p>Upto ₹2000</p>
              </div>
              <div className="daystreak">
                <p>Instant rewards for successfull 10-Day streak</p>
              </div>
            </div>
          </div>
          <p>Remember the rules 🗒</p>
          <div id="bottomcontent">
            <div className="lgcard">
              <ul>
                <li>You must maintain a streak for 10 days</li>
                <li>
                  To maintain the streak, you must add to your savings once
                  everyday{" "}
                </li>
                <li>
                  Minimum savings to be added everyday must be ₹10 or above{" "}
                </li>
                <li>You can add a maximum of ₹200 everyday </li>
                <li>
                  The streak will break if you exit the challenge or do not add
                  the minimum amount required
                </li>
                <li>You lose if you break the savings streak</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
