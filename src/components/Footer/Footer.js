import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {
    render() { 
        return ( 
            <div className="footer">
                <div className="left">
                    <p>Møllerup Gods</p>
                    <p>Møllerupvej 26</p>
                    <p>8410 Rønde</p>
                </div>

                <div className="mid">
                    <p>Telefon 87 58 69 00</p>
                    <p className="redlink">info@moellerup.dk</p>
                </div>
                <div className="right">
                    <p className="listitem">Tekst Lone Rubin</p>
                </div>
            </div>
         );
    }
}
 
export default Footer;