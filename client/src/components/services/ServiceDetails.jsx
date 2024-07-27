import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function ServiceDetails(){

  const { isAuthenticated } = useContext(AuthContext);
  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3030/data/details/${serviceId}`);
      const result = await response.json();
      setService(result);
    })();
  }, [serviceId]);


return (
<>
<section className="service_section layout_padding">
  <div className="service_container">
    <div className="row">
      <div className="col-md-6 ">
        <div className="box ">
          <div className="img-box">
            <img src={service.imgURL}/>
          </div>
          <div className="detail-box">
            <h1>{service.title}</h1>
            <p>{service.content}</p>
   { isAuthenticated ?
   (  <>
      <Link to="/services/request" style={{ marginLeft: '40px'}}>Send Request</Link>
      <Link to="/services" style={{ marginLeft: '200px'}}>Back</Link>
      </>)
   :
   ( <Link to="/services" style={{ marginLeft: '200px'}}>Back</Link> 
    //TODO: Link to Login to send request + message
   )
   }       
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
)}