import React, { Component } from "react";

import BigCard from "../BigCard/BigCard";
import SpinWheelCard from "../SpinWheelCard/SpinWheelCard";
import ImageCard from "../ImageCard/ImageCard";
import CenterCard from "../CenterCard/CenterCard";
import SmallCard from "../SmallCard/SmallCard";

/*Type of cards */
const SMALL_DISPLAY_CARD = "HC1";
const BIG_DISPLAY_CARD = "HC3";
const CENTER_CARD = "HC4";
const IMAGE_CARD = "HC5";
const SMALL_CARD_WITH_ARROW = "HC6";

export default class Card extends Component {
  render() {
    const { data } = this.props;
    if (data.design_type === BIG_DISPLAY_CARD) {
      return <BigCard key={data.id} data={data} />;
    } else if (data.design_type === SMALL_CARD_WITH_ARROW) {
      return <SpinWheelCard key={data.id} data={data} />;
    } else if (data.design_type === CENTER_CARD) {
      return <CenterCard key={data.id} data={data} />;
    } else if (data.design_type === IMAGE_CARD) {
      return <ImageCard key={data.id} data={data} />;
    } else if (data.design_type === SMALL_DISPLAY_CARD) {
      return <SmallCard key={data.id} data={data} />;
    } else {
      return <></>;
    }
  }
}
