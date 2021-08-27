import React from 'react';
import './header.css';
import logo from './logoho.png';
import ReactDOM from 'react-dom';
import Chefinfo from './personalinfo';
import Userinfo from './userinfo';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

export default function Heading() {

    function display()
    {
        let dis = document.getElementById("conus");
        dis.style.display = "inline";
    }

    function shift()
    {
        console.log("clicked");
        <NavLink activeClassName= "active" to = "/userinfo"> click here</NavLink>
        //ReactDOM.render( <Userinfo/>,  document.getElementById('root'));
        
    }
    return (
        <div>
            {/* <h1 className = 'headtitle'>HOME CHEF</h1>
            <img src = {logo} className='logoh'></img>
            <span id="contact" onClick={display}> Contact Us</span> <span id="conus"> Email: blabla@gmail.com Phone no: +91 9543526766 </span>
            <span className = 'subheadtitle'> Welcome to HOME CHEF !</span> */}

        <Router>
            <Link exact to = "/userinfo"> click here</Link>
            <Link exact to = "/personalinfo"> click here persinal</Link>
           <Switch>
            <Route exact path = "/userinfo" component={Userinfo}></Route>
            <Route exact path = "/personalinfo" component={Chefinfo}></Route>
            </Switch>
        </Router>
            
        </div>
    )
}
