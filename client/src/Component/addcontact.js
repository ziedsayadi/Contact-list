import React, { Component } from 'react';
import axios from 'axios'
import Modal from "react-modal";

class Addcontact extends Component {
    state = {
        isOpen: false,
        _id:0,
        firstname: '',
        telnum: '',
        email: '',
        isOpen: false 
        
      };
    
      handleOpen = () => this.setState({ isOpen: !this.state.isOpen });
      close = () => this.setState({ isOpen: false });
      
       handleChange = e =>
       {
          this.setState({
        [e.target.name]: e.target.value.trim() 
        });}
        postcontact =e=>{
          e.preventDefault()
          axios
          .post("/add_contact",{
          firstname: this.state.firstname,
          telnum: this.state.telnum,
          email: this.state.email,
          
          })
    
          .then(
            this.props.getcontact(),
          this.setState({  
            _id:0,
            firstname: '',
            telnum: '',
            email: '',
            isOpen: false 
          })
          
          
          
          )
        }
    render() { 
        return (
            <div>
                <div className='input-group d-flex justify-content-center'>
                <button className='btn btn-info text-capitalize text-center ml-2 mt-3' onClick={this.handleOpen} >add contact</button>
             </div>
             <div className="bg-light text-black text-center py-2 mt-4">
               <h3><i class="far fa-address-card"></i> Add Contact Page</h3>
                </div>
                <Modal  isOpen={this.state.isOpen}  onRequestClose={this.close}>
                   <form onSubmit={this.postcontact}>
                <div className="form-group mt-4">
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
                                <input type="text" className="form-control" id="nombre" name="telnum" maxlength="8" placeholder="Telephone/Mobile number" required value={this.state.telnum} onChange={this.handleChange}></input>
                             </div>
                                </div>
                                <div className="text-center">
                                    <input type="submit" value="Submit" className="btn btn-info btn-block py-2" ></input>
                                </div>
                        </form>
                        </Modal>
            </div>
        );
    }
}
 
export default Addcontact;