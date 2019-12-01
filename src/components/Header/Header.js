import React, { Component } from 'react';
import logo from '../../assets/LOGO.png'
import Navbar from './Navbar';


class Header extends Component {

    render() { 
        return ( 
            <div className="headerclass">
            <img src={logo} alt=""/>
            <Navbar/>
            </div>
         );
    }
}
 
export default Header;