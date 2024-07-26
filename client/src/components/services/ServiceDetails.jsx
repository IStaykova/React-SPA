import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import ServiceRequest from "./ServiceRequest";

export default function ServiceDetails(){

  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3030/jsonstore/transports/types/details/${serviceId}`);
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
              {/* <Link to="/services/request" style={{ marginLeft: '40px'}}>Send Request</Link> */}
              {/* <Link to="/services" style={{ marginLeft: '200px'}}>Back</Link> */}
            </div>
          </div>
        </div>
        </div>
  </div>
  <div>
  <ServiceRequest {...service}/>
  </div>
</section>
</>
    )}