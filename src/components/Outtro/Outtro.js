import React, { Component } from "react";
import DKC from "./DKC";
import Instagram from "./Instagram";
import Nyhedsbrev from "./Nyhedsbrev";

class Outtro extends Component {
  render() {
    return (
      <div>
        <DKC />
<div className="outtrobot">
        <Instagram />
        <Nyhedsbrev />
        </div>
      </div>
    );
  }
}

export default Outtro;
