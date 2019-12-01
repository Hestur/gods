import React, { Component } from "react";
import Big from "../../assets/largehero.jpg";
import NyhederContextProvider from "./NyhederState";
import NyhedList from "./NyhedList";

class Nyheder extends Component {
  render() {
    return (
      <section className="nyheder">
        <div className="nyhedtop">
          <img src={Big} alt="" />

          <p className="headingnyhed">
            Verdensballetten på Møllerup gods lørdag d. 13. juli 2019 blev en
            skøn aften
          </p>

          <p className="nyhedsmalltext">
            Verdensballetten planlægger at komme igen næste år lørdag d. 11.
            juli 2020
          </p>

          <a href="" className="nyhedlink">
            Læs mere her
          </a>
        </div>
        <NyhederContextProvider>
          <NyhedList />
        </NyhederContextProvider>
      </section>
    );
  }
}

export default Nyheder;
