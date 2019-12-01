import React, { Component } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Header/Intro";
import { BrowserRouter, Route } from "react-router-dom";
import Aktiviteter from "./components/Aktiviteter/Aktiviteter";
import Nyheder from "./components/Nyheder/Nyheder";
import Outtro from "./components/Outtro/Outtro";
import Footer from "./components/Footer/Footer";
import Verdensballetten from "./components/blanks/Verdensballetten";
import NyhederBlank from "./components/blanks/BlankNyheder";
import Events from "./components/blanks/Events";
import Feedback from "./components/blanks/Feedback";
import Omos from "./components/blanks/Omos";
import Kontakt from "./components/blanks/Kontakt";
import Webshop from "./components/blanks/Webshop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/verdensballetten" component={Verdensballetten} />
        <Route path="/nyheder" component={NyhederBlank} />
        <Route path="/events" component={Events} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/about" component={Omos} />
        <Route path="/kontakt" component={Kontakt} />
        <Route path="/shop" component={Webshop} />
        <Intro />
        <Nyheder />
        <Aktiviteter />
        <Outtro />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
