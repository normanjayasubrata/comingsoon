import React, { Component } from "react";
import "./App.css";
import Particles from "react-particles-js";
// import icon from "./normans_icon.svg";

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      image: {
        src: "assets/img/normans_icon.png",
        width: 100,
        height: 100
      },
      type: ["edge", "circle", "polygon"]
    },
    size: {
      value: 5
    },
    line_linked: {
      color: "#000000"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    }
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <Particles className="particles" params={particleOptions} />
        <div id="box">
          <div className="mytext">
            <h1>COMING</h1>
          </div>
          <div className="mytext blackbg">
            <h1>SOON</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
