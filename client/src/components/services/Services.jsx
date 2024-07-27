import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Services(){

const [services, setServices] = useState([]); 

useEffect(() => {
  (async () => {
    const response = await fetch('http://localhost:3030/data/transports/list');
    const result = await response.json();

    setServices(result);
  })()
}, []);

    return (
  <>
  <section className="service_section layout_padding">
  <div className="service_container">
    <div className="container ">
      <div className="heading_container">
        <h2>
          Our <span>Services</span>
        </h2>
        <p>
        We offer services in three directions: international road transport, including our own fleet of over 1600 trucks and auto forwarding services covering all Europe; rail freight forwarding and sea and air freight forwarding, providing transportation to all parts of the world. Currently, the company is actively working with over 70 countries (40 of them are in Europe) and it is constantly expanding its global coverage.
        </p>
      </div>
      <div className="row">
        {services.map((service) => (
             <div key={service._id} className="col-md-6 ">
             <div className="box ">
               <div className="img-box">
                 <img src={service.imgURL} />
               </div>
               <div className="detail-box">
                 <h5>{service.title}</h5>
                 <Link to={`/services/${service._id}`}>Read More</Link>
               </div>
             </div>
           </div>
        ))}
      </div>
    </div>
  </div>
</section>
</>
    )
}