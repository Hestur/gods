import React, {Component} from 'react';


class Nyhedsbrev extends Component {
    
    render() { 
        return ( 
            <div className="nyhedsbrev">
            <p className="nyhedsbrevtitle">Tilmeld Nyhedsbrev</p>
            <p className="req"><span>*</span>skal udfyldes</p>
            <form className="mailform">
                Email Address: <span>*</span><br/>
                <input className="inputfield"  type="mailinput"/>
                <br/>
                First Name:<br/>
                <input className="inputfield"  type="nameinput"/>
                <br/>
                Last Name:<br/>
                <input className="inputfield"  type="lastnameinput"/>
                <br/>
                <p className="ptag">Vælg nyhedsbrev:</p>
                <input type="checkbox" value="no" id="check1"></input>
                <label for="check1">Møllerup Alle</label>
                <br/>
                <input type="checkbox" value="nono" id="check2"></input>
                <label for="check1">Verdensballetten</label>
                <br/>
                <input type="checkbox" value="noyes" id="check3"></input>
                <label for="check1">Møllerup Hamp</label>
                <br/>
                <br/>
                <button type="submit">Tilmeld</button>
           
        


               


            </form>
            </div>
         );
    }
}
 
export default Nyhedsbrev;