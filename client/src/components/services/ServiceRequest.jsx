import { useEffect, useState } from "react";

import './ServiceRequest.css';
// import transportRequestAPI from "../../api/transport-request-api";

export default function ServiceRequest(serviceId){
  // const [curRequest, setNewRequest] = useState('');

  //   const requestSubmitHandler = async (e) => {
  //     e.preventDefault();

  //     const newTransportRequest = await transportRequestAPI.create(serviceId, cargo, loading, unloading, date, message);
  
      
  //       setNewRequest(prevState => ({
  //           ...prevState,
  //           curRequest: {
  //             ...prevState.curRequest,
  //             [newTransportRequest._id]: newTransportRequest,
  //           }
  //       }));

  //   };
  
  


  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`http://localhost:3030/jsonstore/transports/types/list`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         ...curRequest,
  //         serviceId, // Add serviceId to the request payload
  //       }),
  //     });

  //     const result = await response.json();
  //     console.log('Request created:', result);
  //     setNewRequest(result); 
  //   })();
  // }, []);

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
            value={curRequest.cargo}
            onChange={setNewRequest}
            />
            </div>
            <div>
            <label htmlFor="loading-place">Loading place:</label>
            <input 
            type="text" 
            name="loading-place"
            id="loading-place"
            value={curRequest["loading-place"]}
            onChange={changeHandler}
            />
            </div>
            <div>
            <label htmlFor="unloading-place">Unloading place:</label>
            <input 
            type="text" 
            name="unloading-place"
            id="unloading-place"
            value={curRequest["unloading-place"]}
            onChange={changeHandler}
             />
            </div>
            <div>
            <label htmlFor="date">Loading date:</label>
            <input 
            type="text" 
            name="date" 
            placeholder="dd-mm-yy"
            id="date"
            value={curRequest.date}
            onChange={changeHandler}
            />
            </div>
            <div>
            <label htmlFor="message">Additional information:</label>
            <input
              type="text"
              name="message"
              id="message"
              value={curRequest.message}
              onChange={changeHandler}
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