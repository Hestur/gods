import React, { Component } from "react";
import AktivitetContextProvider from "./AktiviteterState";
import AktivitetList from "./AktivitetList";

class Aktiviteter extends Component {
  render() {
    return (
      <section className="aktiviteter">
        <div>
          <span className="span-line"></span>

          <div className="toptext">
            <p className="largetext">
              Møllerup Gods tilbyder en perlerække af muligheder
            </p>
            <p className="smalltext">
              Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske
              perler, vi er også en virksomhed med højt til loftet, masser af
              muligheder og god plads til aktiviteter på 425 hektar - for
              private og erhverv
            </p>
          </div>

          <AktivitetContextProvider>
            <AktivitetList />
          </AktivitetContextProvider>
        </div>
      </section>
    );
  }
}

export default Aktiviteter;
