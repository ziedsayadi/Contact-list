import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" ;
import axios from 'axios'
import Addcontact from "./addcontact"
import Modifyedcontact from "./Modifycontact"

class Contacts extends Component {
    render() { 
        return (
            <div className='Card'>                   
             <Addcontact getcontact={this.props.getcontact}/>
             {this.props.contactList.map((el,i)=><Modifyedcontact 
             getcontact={this.props.getcontact} 
             _id={el._id} 
             firstname={el.firstname} 
             telnum={el.telnum} 
             email={el.email}/> 
              )}       
            </div>

      
        );
    }
}
 
export default Contacts;