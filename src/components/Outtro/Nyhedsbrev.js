import React, {Component} from 'react';


class Nyhedsbrev extends Component {
    
    render() { 
        return ( 
            <div className="nyhedsbrev">
            <p className="nyhedsbrevtitle">Tilmeld Nyhedsbrev</p>
            <p><span>*</span>skal udfyldes</p>
            <form className="mailform">
                Email Address: <span>*</span><br/>
                <input  type="mailinput"/>
                <br/>
                First Name:<br/>
                <input  type="nameinput"/>
                <br/>
                Last Name:<br/>
                <input  type="lastnameinput"/>
                <br/>
                <p>Vælg nyhedsbrev:</p>
                <input type="checkbox" value="no" id="check1"></input>
                <label for="check1">Møllerup Alle</label>
                <br/>
                <input type="checkbox" value="nono" id="check2"></input>
                <label for="check1">Verdensballetten</label>
                <br/>
                <input type="checkbox" value="noyes" id="check3"></input>
                <label for="check1">Møllerup Hamp</label>
                <br/>
                <button type="submit">Tilmeld</button>
           
        


               


            </form>
            </div>
         );
    }
}
 
export default Nyhedsbrev;