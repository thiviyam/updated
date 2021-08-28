import React, { Component } from 'react'
import './personalinfo.css';

export default class Chefinfo extends Component
 {
 
    constructor(props) {
        super(props)
    
        this.state = {
             Name: '',
            //  Gender: '',
             
             Address: '',
             City: '',
             State: '',
             Pincode: '',
             Phno:  '',
             Email:'',
            //  POI: '', POIno: '',
             Kname : '',
             Preference: '',
            //  Exp:'',
             Nofy: '0',
             Promises: '',
            //  FSSAIno:'', True: '',
             Terms: '', Cdate: ''

        }
    }

    

    cname = (event) => {  this.setState ( {Name : event.target.value} ) }
   //   cnation = (event) => { this.setState ( { Nation: event.target.value} ) }
    caddress = (event) => { this.setState ( { Address: event.target.value} ) }
    ccity = (event) => { this.setState ( { City: event.target.value} ) }
    cstate = (event) => { this.setState ( { State: event.target.value} ) }
    cpincode = (event) => { this.setState ( { Pincode: event.target.value} ) }
    cphno = (event) => { this.setState ( { Phno: event.target.value} ) } 
    // caphno = (event) => { this.setState ( { Aphno: event.target.value} ) }
    cemail = (event) => { this.setState ( { Email: event.target.value} ) }
    // cpoi = (event) => { this.setState ( { POI: event.target.value} ) }
    // cpoin = (event) => { this.setState ( { POIno: event.target.value} ) }
    ckname = (event) => { this.setState ( { Kname: event.target.value} ) }
    cprefer = (event) => { this.setState ( { Preference: event.target.value} ) }
    // cexp = (event) => { this.setState ( { Exp: event.target.value} ) }
    // cnofy = (event) => { this.setState ( { Nofy: event.target.value} ) }
    cpromi = (event) => { this.setState ( { Promises: event.target.value} ) }
    
    
    cterms = (event) => { this.setState ( { Terms: event.target.value} ) }
    ccdate = (event) => { this.setState ( { Cdate: event.target.value} ) }

    submitted = (eve) => { eve.preventDefault(); console.log (this.Martial)}

    render() {
        return (
            <div className = "bod">
                <h3>Registration Details</h3><br/>
            <form onSubmit={this.submitted}> 
                 <div className="container">
               <label className="label"> Name </label>
                <input type="text" value = {this.state.Name} onChange = {this.cname} className = "ip1" required></input> <br/>

            

                <div className="Address-container">

                

                <label className="label"> Address </label>                
                <input value = {this.state.Address} onChange ={this.caddress} className = "ipage" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label  className="label"> City </label>
                <input type="text" value = {this.state.City} onChange = {this.ccity} className = "ipage" required></input> <br/>

                <label className="label"> State </label>
                <input type="text" value = {this.state.State} onChange = {this.cstate} className = "ipage" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label className="label" > Pincode </label>
                <input type="text" inputMode= "numeric" value = {this.state.Pincode} onChange = {this.cpincode} className = "ipage" required></input> <br/>

                 <label className="label"> Phone Number </label>
                <input type="text" inputMode= "numeric" value = {this.state.Phno} onChange = {this.cphno} className = "ipage " required></input> &ensp; &ensp; &ensp; &nbsp;

                

                
                <label className="label"> E-mail Id </label>
                <input type="email" value = {this.state.Email} onChange = {this.cemail} className = "ipage" required></input> &ensp; &ensp; &ensp; &nbsp;

                

                     </div>



 
                              
                <label className="label"> Your Kitchen Name </label>                
                <input type="text" placeholder="Enter your preferable name" value = {this.state.Kname} onChange = {this.ckname} className = "ip1" required></input> <br/>
            


                <label className="label"> Dietry Restriction</label>
                <select className = "ip selectarea" required  onChange = {this.cprefer}>
                    <option value='' disabled> Choose your preference that you cook</option>
                    <option value = {this.state.Preference} onChange = {this.cprefer}>Veg</option>
                    <option value = {this.state.Preference} onChange = {this.cprefer}>Non-veg</option>
                    <option value = {this.state.Preference} onChange = {this.cprefer}>Both</option>
                    </select> <br/> 

               

                <label className="label"> Promises </label>                
                <input type="text" placeholder="eg: no ajinomoto, no food colorants, no artificial ingredients etc.." value = {this.state.Promises} onChange = {this.cpromi} className = "ip1" ></input> <br/> <br/>

              
            
             <label  className="label">Upload your Kitchen photo  </label>
                 <input type="file" className="upload"></input><br/><br></br>
            




                   <label className="label" > Upload the FSSAI certificate </label>
                 <input type="file" className="upload" required ></input>

                

                  <div className="diiv"><br/>

                
                                           <b>
                          <ol>
                              <li> I certify that all information provided in this registration application is true .
                                  I understand that any false information or ommission of information may reject me from consideration of a home chef</li>
                              <br/> <li> I have read and understood the above declaration before signing this</li>
                          </ol>
 
                        <input type="checkbox"  value = {this.state.Terms} onChange = {this.cterms} required className="agreem"></input> <label> <u>I agree to the Terms and Conditions</u></label> <br/> 

                      </b>
                      <br></br>
                 
                
</div>
                

                 <button type="reset" className="butn">RESET</button>
                <button type="submit" className="butn">SUBMIT</button>
                                   </div>
              </form> 
            </div>
        )
    }
}
