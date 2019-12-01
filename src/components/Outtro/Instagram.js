import React, {Component} from "react";
import Embed from 'react-embed';
class Instagram extends Component {
  render() {
    return (
      <div className="embed">
      <Embed url='https://www.instagram.com/p/BUZDt1Ilwc8/' />
      </div>
    );
  }
}

export default Instagram;
