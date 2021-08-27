
import './App.css';
import './components/forgotpassword.css'
import { Login } from './components/login/login';
import Heading from './form/header';
import Chefinfo from './form/personalinfo';
import Userinfo from './form/userinfo';
import Cart from './ordering/cart';
import Orders from './ordering/orders';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter } from "react-router-dom";
import  forgot from "./components/forgot.component";
import Newpassword from './components/newpassword.component';
import Forgot from './components/forgot.component';
import Navigator_inside_signin from './navigator_inside_signin';



function App() {
  return (

    
    <div className="App"> 

     {/* <Heading/> */}
     {/* <Router> 
     <Switch>
        
         <Route exact path="/"> <Cart/> </Route>

          <Route path="/ordering/orders"> <Orders/> </Route>
     </Switch>
     </Router>  */}

      {/* <BrowserRouter>
        <Link to="/forgot"> forgot</Link>
        <Link to="/newpassword/:id"> newpassword</Link>
         <Switch>
        <Route exact path="/forgot" component={forgot} />
        <Route exact path="/newpassword/:id" component={newpassword} />
        
        </Switch>
    </BrowserRouter>  */}
    {/*  <Heading/> */}
     {/* <Orders/>  <Cart/>
         <Login/>
         <Forgot/>
       {/*<Chefinfo/> 
        {/* <Userinfo/> */}
  
<Navigator_inside_signin/>

     
    </div>

    
  );
}

export default App;
