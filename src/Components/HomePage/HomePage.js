// React Imports
import React from "react";
import logo from "../../Images/fampay.svg";
import { hompeageBaseUrl } from "../../urlConfig";
import Shimmer from "../../Shared/Shimmer/Shimmer";
import CardContainer from "../../Shared/CardContainer/CardContainer";
import "./HomePage.scss";
export default class HomePage extends React.PureComponent {
  // State Declaration
  state = {
    isLoaded: false,
    homePageData: null,
  };
  /* refresh when uuser reaches bottom of page*/

  onScroll = () => {
    const wrappedElement = document.getElementById("homecontainer");
    if (this.isBottom(wrappedElement)) {
      this.makeHomeApiCall();
      document.removeEventListener("scroll", this.trackScrolling);
    }
  };
/*check whether he ahs reached bottom */
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  /*get api data */
  makeHomeApiCall = () => {
    fetch(hompeageBaseUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result is", result);
          this.setState({
            isLoaded: true,
            homePageData: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  // Lifecycle Methods
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
    this.makeHomeApiCall();
  }

  componentDidUpdate = (prevProps, prevState) => {};

  getShimmer = () => {
    return (
      <div>
        <Shimmer height={400} />
        <Shimmer height={150} />
        <Shimmer height={350} />
        <Shimmer height={200} />
        <Shimmer height={200} />
      </div>
    );
  };

  renderHomePage = () => {
    const { homePageData } = this.state;

    return (
      <div className="cardcontainer">
        {homePageData.map((item, key) => {
          return <CardContainer key={key} data={item} />;
        })}
      </div>
    );
  };

  render() {
    const { isLoaded } = this.state;
    return (
      <div id="homecontainer">
        <div id="refreshercontainer" onScroll={this.handleScroll}>
          <div className="refresh"></div>
        </div>
        <div className="homecontent">
          <div id="logocontainer" className="transition">
            <img src={logo} alt="logo" className="responsive-img"></img>
          </div>
          {isLoaded ? this.renderHomePage() : this.getShimmer()}
        </div>
      </div>
    );
  }
}
