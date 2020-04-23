import React, { Component } from 'react';
import axios from 'axios'
import Modal from "react-modal";
 
class Modifyedcontact extends Component {
    state = {
          isOpen: false,      
          firstname:this.props.firstname ,
          email: this.props.email ,
          telnum:this.props.telnum ,
          isOpen: false
        
      };

    deletecontact=(e)=>{
        e.preventDefault()
        axios
        .delete(`/delet_contact/${this.props._id}`)
        .then(this.props.getcontact())
    }
     handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
     close = () => this.setState({ isOpen: false });
    
     handleChange = e =>
     {
        this.setState({
      [e.target.name]: e.target.value 
      });}
  
      putcontact =e=>{
        e.preventDefault();
       
        axios
        .put(`/modify_contact/${this.state._id}`,{
          firstname: this.state.firstname,
          telnum: this.state.telnum,
          email: this.state.email
        })
        .then(
          this.props.getcontact(),
        this.setState({
         
          isOpen: false 
        })
        )
      }
    render() { 
        return (
          <div className='mt-4 Card'>
            <div class="container imge-cont"> 
                      <div class="our-team">
                        <div class="picture">
                          <img class="img-fluid" src="https://png.pngtree.com/svg/20170802/f96d8acc9e.png"/>
                       </div>
                          <div class="team-content">
                     <h3 class="name">{this.state.firstname}</h3>
                     <h6 class="mail">{this.state.email}</h6>
                    <h6 class="numtel">{this.state.telnum}</h6>
                    </div>
                      <ul class="social">
                      <li><span  class="fas fa-trash" aria-hidden="true" onClick={this.deletecontact} ></span></li>
                      <li><span  class="fas fa-pen" aria-hidden="true" onClick={this.handleOpen}></span></li>
                      </ul>
                    </div>
                 </div>
             
                <div className>   
                    <Modal  isOpen={this.state.isOpen}  onRequestClose={this.close}>
                    <form onSubmit={this.putcontact}>
                <div className="form-group">
                     <div className="input-group mb-2">
                        <div className="input-group-prepend">
                             <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                         </div>
                    <input type="text" className="form-control" id="nombre" name="firstname" placeholder="Contact Name" required value={this.state.firstname} onChange={this.handleChange}></input>
                  </div>
                </div>
                    <div className="form-group">
                        <div className="input-group mb-2">
                             <div className="input-group-prepend">
                                 <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                             </div>
                                <input type="email" className="form-control" id="nombre" name="email" placeholder="somone@gmail.com" required value={this.state.email} onChange={this.handleChange}></input>
                                        </div>
                </div>

                    <div className="form-group">
                         <div className="input-group mb-2">
                              <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fas fa-phone-square-alt text-info"></i></div>
                                        </div>
                                <input type="text" className="form-control" id="nombre" name="telnum" placeholder="Telephone/Mobile number" required value={this.state.telnum} onChange={this.handleChange}></input>
                             </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" value="Submit" className="btn btn-info btn-block py-2" ></input>
                                </div>
                        </form>
                        </Modal>
                </div>
            </div>

        );
    }
}
 
export default Modifyedcontact;