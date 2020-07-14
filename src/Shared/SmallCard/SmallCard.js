import React, { Component } from "react";
import "./SmallCard.scss";

/*
renders small card on basis of scrollability
*/

export default class SmallCard extends Component {
  getElement = (data) => {
    const { is_scrollable } = data;
    if (is_scrollable) {
      return (
        <div className="scrollable" key={1}>
          {data.cards.map((card, key) => {
            return (
              <div
                className="smallcard"
                key={key}
                style={{ backgroundColor: `${card.bg_color}` }}
              >
                <div className="small-card-content">
                  <div className="small-card-text-content">
                    <img
                      src={card.icon.image_url}
                      alt="icon"
                      className="responsive-img-alt"
                    ></img>
                    <div>
                      <span className="card-name-text">
                        {card.formatted_title.text}
                      </span>
                      {card.formatted_description && (
                        <p className="avatar-name">
                          {card.formatted_description.entities[0].text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="non-scrollable-container" key={2}>
          {data.cards.map((card, key) => {
            return (
              <div
                className="small-card-non-scrollable"
                key={key}
                style={{ backgroundColor: `${card.bg_color}` }}
              >
                <div className="small-card-content">
                  <div className="small-card-text-content">
                    <img
                      src={card.icon.image_url}
                      alt="icon"
                      className="responsive-img-alt"
                    ></img>
                    <div>
                      <span className="card-name-text">Small Card</span>
                      {card.formatted_description && (
                        <p className="avatar-name">
                          {card.formatted_description.entities[0].text}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
   const{data}=this.props;

    return <div className="small-card-container transition">{this.getElement(data)}</div>;
  }
}
