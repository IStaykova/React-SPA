import { useEffect, useState } from "react";
import './TransportRequest.css';


export default function TransportRequest(){


return (
 <>
<section className="contact_section">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-4 col-md-5 offset-md-1">
        <div className="heading_container">
          <h2>Request Form</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-md-5 offset-md-1">
        <div className="form_container contact-form">
        <form onSubmit={requestSubmitHandler}>
            <div>
            <label htmlFor="cargo">Type of cargo:</label>
            <input 
            type="text" 
            name="cargo"
            id="cargo"
            // value={curRequest.cargo}
            // onChange={setNewRequest}
            />
            </div>
            <div>
            <label htmlFor="loading">Loading place:</label>
            <input 
            type="text" 
            name="loading"
            id="loading"
            // value={}
            // onChange={}
            />
            </div>
            <div>
            <label htmlFor="unloading">Unloading place:</label>
            <input 
            type="text" 
            name="unloading"
            id="unloading"
            // value={}
            // onChange={}
             />
            </div>
            <div>
            <label htmlFor="date">Loading date:</label>
            <input 
            type="text" 
            name="date" 
            placeholder="dd-mm-yy"
            id="date"
            // value={}
            // onChange={}
            />
            </div>
            <div>
            <label htmlFor="message">Additional information:</label>
            <input
              type="text"
              name="message"
              id="message"
              // value={}
              // onChange={}
              className="message-box"   
            />
            </div>
            <div className="btn_box">
              <button>SEND</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
        </form>
        
           <div className="created-request">
        
              <div key=''> 
                <h3>{} Request:</h3>
                <p>Type of cargo: {}</p>
                <p>Loading place: {}</p>
                <p>Unloading place: {}</p>
                <p>Loading date: {}</p>
                <p>Additional information: {}</p>
              </div>
          
            </div> 
        </div>
      </div>
    </div>
  </div>
</section>
</>
    )
}