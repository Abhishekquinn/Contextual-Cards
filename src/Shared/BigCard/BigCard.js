import React, { Component } from "react";
import bell from "../../Images/bell.svg";
import dismiss from "../../Images/dismiss.svg";
import "./BigCard.scss";

var buttonPressTimer;
export default class BigCard extends Component {
  eventsOnPress = () => {
    let elem = document.getElementById("overlap");
    elem.style.transform = "translateX(100px)";
    let dismisser = document.getElementById("bgcontent");
    dismisser.style.transform = "translateX(100px)";
  };

  handleButtonPress = () => {
    console.log("handle long press");
    buttonPressTimer = setTimeout(() => {
      console.log("long press activated");
      this.eventsOnPress();
    }, 600);
  };

  handleButtonRelease = () => {
    console.log("handle button release");
    clearTimeout(buttonPressTimer);
  };

  removeCard = () => {
    const { data } = this.props;
    let elem = document.getElementById("bigcardcontainer");
    elem.style.height = "0px";
    localStorage.setItem("isVisible", data.id);
  };

  render() {
    const { data } = this.props;
    return (
      !localStorage.getItem("isVisible") && (
        <div id="bigcardcontainer" className="card transition">
          <div id="bgcontent">
            <div className="bgcard" onClick={this.removeCard}>
              <img src={bell} alt="remind later"></img>
              <p>remind later</p>
            </div>
            <div className="bgcard" onClick={this.remove}>
              <img src={dismiss} alt="dismiss"></img>
              <p>dismiss now</p>
            </div>
          </div>
          <div
            id="overlap"
            onTouchStart={this.handleButtonPress}
            onTouchEnd={this.handleButtonRelease}
            onMouseDown={this.handleButtonPress}
            onMouseUp={this.handleButtonRelease}
            onMouseLeave={this.handleButtonRelease}
            style={{
              backgroundImage: `url(${data.cards[0].bg_image.image_url})`,
            }}
          >
            <div id="bigcardcontent">
              <div id="actioncontent">
                <h3>
                  <span className="highlight">
                    {data.cards[0].formatted_title.entities[0].text}
                  </span>{" "}
                  {data.cards[0].formatted_title.entities[1].text}
                </h3>
                <p>{data.cards[0].description}</p>
                <button className="bigcardcta cta" type="button">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}
