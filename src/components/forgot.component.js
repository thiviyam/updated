import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";
import Newpassword from './newpassword.component';


export default class Forgot extends Component{

  handleSubmit = e =>{
e.preventDefault();

const data ={
  email :this.email,
  mobile:this.mobile
};
axios.post('forgot', data).then ( res=>{ console.log(res)})
.catch(
  err=>{console.log(err);
  }
)


};
    render()
    {
  return (
     <div className="forgotcomponent">
                   <div class="container bg-color=rgb(238,252,252)">
                      <div class="row">
                        <div class="col-md-4"> </div>
                          <div class="col-md-6 "> <br/>
                            
                              <h4 class="text-center" >Forgot Password?</h4> <br/>
                                
                                                    <form  onSubmit={this.handleSubmit} id="register-form" role="form" autocomplete="off" class="form" method="post">
                                                            <div class="form-group text-center">
                                                                 
                                                                            <span class="input-group-addon "><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                                                            <div class="row">
                                                                            <p >Reset password Using Email</p>
                                                                            <input id="email" name="email" placeholder="email address" class="form-control"  type="email" onChange={e => this.email = e.target.value}/>
                                                                            </div>
                                                                            <p>---------------------OR----------------------</p>

                                                                            <div class="row">
                                                                            <p>Reset password Using Mobile Number</p>
                                                                            <input type="tel" id="mobile" name="mobile" class="form-control" placeholder="mobile number" onChange={e => this.mobole = e.target.value}/>
                                                                               
                                                                            </div>   
                                                                             <div class="row"></div>                             
                                                                            <div class="row">
                                                                             <p></p>
                                                                              <Link to="/components/newpassword.component"> <input name="recover-submit" class="butn-login" value="Verify" type="button"/> </Link> 
                                                                            </div>
                                                                        
                                                            </div>
                                                      </form>
                                </div>
                            </div>
                          </div>
                           
                        </div>
                   ); 
    }
}

