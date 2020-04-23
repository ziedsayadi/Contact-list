import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import Contacts from "./Component/contact"
import axios from "axios"
import'./App.scss' 


class App extends Component {

  
  state={
    contactList:[]
  }
  getcontact=()=>{
    axios.get("/contact").then(res=>{
      this.setState({
        contactList:res.data
      })
    })
  }
  componentDidMount=()=>{
    this.getcontact()
  }
  
  render() { 
    return (
      <div className='container'>
       <div className="card border-primary mt-3">
          <div className="card-header p-0">
            <div className="bg-primary text-white text-center py-2">
               <h3><i className="fa fa-envelope"></i> Contact App</h3>
                </div>
          </div>
       
          <Contacts getcontact={this.getcontact} contactList={this.state.contactList}/>
        
        </div>
         
        </div>

    );
  }
}
 
export default App;