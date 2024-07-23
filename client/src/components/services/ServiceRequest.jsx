import { useEffect, useState } from "react";
import './ServiceRequest.css';

export default function ServiceRequest({ serviceId, transportName }){

    const [request, setNewRequest] = useState({
        cargo: '',
        ["loading-place"]: '',
        ["unloading-place"]: '',
        date: '',
        message: '',
    });
    const [submit, setSubmit] = useState(false);
    const [createdRequest, setCreatedRequest] = useState(null);

    const requestSubmitHandler = (e) => {
      e.preventDefault();
      setSubmit(true);   
  };

  useEffect(() => {
    if (!submit) return;

    (async () => {
      const response = await fetch(`http://localhost:3030/jsonstore/transports/requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...request,
          serviceId, // Add serviceId to the request payload
        }),
      });

      const result = await response.json();
      console.log('Request created:', result);
      setCreatedRequest(result); 

      setSubmit(false); 
    })();
  }, [submit, request, serviceId]);

    const changeHandler = (e) => {
        setNewRequest(oldRequests => ({
            ...oldRequests,
            [e.target.name] : e.target.value
        }))
    };


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
            value={request.cargo}
            onChange={changeHandler}
            />
            </div>
            <div>
            <label htmlFor="loading-place">Loading place:</label>
            <input 
            type="text" 
            name="loading-place"
            id="loading-place"
            value={request["loading-place"]}
            onChange={changeHandler}
            />
            </div>
            <div>
            <label htmlFor="unloading-place">Unloading place:</label>
            <input 
            type="text" 
            name="unloading-place"
            id="unloading-place"
            value={request["unloading-place"]}
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
            value={request.date}
            onChange={changeHandler}
            />
            </div>
            <div>
            <label htmlFor="message">Additional information:</label>
            <input
              type="text"
              name="message"
              id="message"
              value={request.message}
              onChange={changeHandler}
              className="message-box"   
            />
            </div>
            <div className="btn_box">
              <button style={{ marginLeft: '150px', marginRight: '150px'}}>SEND</button>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </form>
         
          {createdRequest && (
                  <div className="created-request">
                    <h3>{transportName} Request:</h3>
                    <p>Type of cargo: {createdRequest.cargo}</p>
                    <p>Loading place: {createdRequest["loading-place"]}</p>
                    <p>Unloading place: {createdRequest["unloading-place"]}</p>
                    <p>Loading date: {createdRequest.date}</p>
                    <p>Additional information: {createdRequest.message}</p>
                  </div>
                )}
        </div>
      </div>

    </div>
  </div>
</section>
        </>
    )
}