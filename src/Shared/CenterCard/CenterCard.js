import React, { Component } from "react";
import "./CenterCard.scss";

export default class CenterCard extends Component {
  getButton = (cta) => {
    return (
      <>
        {cta.map((button, key) => {
          return (
            <div key={key}>
              <button className="center-card-cta cta" type="button">
                {button.text}
              </button>
            </div>
          );
        })}
      </>
    );
  };

  render() {
    const { data } = this.props;
    return (
      <div id="center-card-container" className="card transition">
        <div id="center-card-content">
          <div id="avatar-image-container">
            <img
              src={data.cards[0].icon.image_url}
              className="responsive-img"
              alt="avatar"
            ></img>
          </div>
          <div>
            <p className="avatar-name">{data.cards[0].title}</p>
          </div>
          <div id="card-name">
            <p>{data.cards[0].formatted_description.text}</p>
          </div>
          <div id="cta-container">{this.getButton(data.cards[0].cta)}</div>
        </div>
      </div>
    );
  }
}
