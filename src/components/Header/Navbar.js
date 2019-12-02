import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="Navclass">
        <nav>
          <ul>
            <Link to="/" className="list-item">
              Velkommen
            </Link>
            <div class="dropdown">
              <button class="dropbtn">
                ↓<i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Jagt</a>
                <a href="#">Hestepension</a>
                <a href="#">Lej Kontor</a>
                <a href="#">Lej bolig</a>
                <a href="#">Møllerup bogen</a>
                <a href="#">Hampfrø til udsæd</a>
              </div>
            </div>
            <Link to="/verdensballetten" className="list-item">
              Verdensballetten
            </Link>
            <div class="dropdown">
              <button class="dropbtn">
                ↓<i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Verdensballetten erhverv</a>
                <a href="#">Samarbejdspartnere</a>
                <a href="#">Glade gæster</a>
                <a href="#">Gourmetoplevelser</a>
                <a href="#">Praktisk info</a>
                <a href="#">Bliv frivillig</a>
              </div>
            </div>
            <Link to="/nyheder" className="list-item">
              Nyheder
            </Link>
            <Link to="/events" className="list-item">
              Events og mødefacilliteter
            </Link>
            <div class="dropdown">
              <button class="dropbtn">
                ↓<i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Ferie</a>
                <a href="#">Fest på Møllerup Gods</a>
                <a href="#">Møder</a>
                <a href="#">Oplevelser</a>
                <a href="#">Rundvisninger</a>
              </div>
            </div>
            <Link to="/feedback" className="list-item">
              Hvad siger vores gæster
            </Link>
            <Link to="/about" className="list-item">
              Om Møllerup gods
            </Link>
            <div class="dropdown">
              <button class="dropbtn">
                ↓<i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="#">Hele historien</a>
                <a href="#">Galleri</a>
                <a href="#">Virksomheder på Møllerup</a>
              </div>
            </div>
            <Link to="/kontakt" className="list-item">
              Kontakt os
            </Link>
            <Link to="/shop" className="list-item">
              Webshop
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
