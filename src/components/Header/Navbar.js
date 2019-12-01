import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return ( 
            <div className="Navclass">
                <nav>
                    <ul>
                        <Link to="/" className="list-item">Velkommen</Link>
                           <Link to="/verdensballetten" className="list-item">Verdensballetten</Link>
                           <Link to="/nyheder" className="list-item">Nyheder</Link>
                           <Link to="/events" className="list-item">Events og mødefacilliteter</Link>
                           <Link to="/feedback" className="list-item">Hvad siger vores gæster</Link>
                           <Link to="/about" className="list-item">Om Møllerup gods</Link>
                           <Link to="/kontakt" className="list-item">Kontakt os</Link>
                           <Link to="/shop" className="list-item">Webshop</Link>
                    </ul>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;