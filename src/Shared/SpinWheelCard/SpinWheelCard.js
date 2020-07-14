import React, { Component } from "react";
import "./SpinWheelCard.scss";

/* renders  spin card and moves to spin page  */
export default class SpinWheelCard extends Component {

  moveToRewards = () => {
    window.location.href = "/rewards";
  };

  render() {
    const{data}=this.props;
    return (
      <div className="spinparentContainer card transition" onClick={this.moveToRewards}>
        <div className="spincardcontainer">
          <div className="textContent">
            <img src={data.cards[0].icon.image_url} alt="icon" className="responsive-img-alt"/>
            <span className="spintext">{data.cards[0].formatted_title.text}</span>
          </div>
          <div className="icon"></div>
        </div>
      </div>
    );
  }
}
