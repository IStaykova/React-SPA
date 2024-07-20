import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

export default function ServiceDetails(){

  const [service, setService] = useState({});
  const { serviceId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:3030/jsonstore/transports/types/details/${serviceId}`);
      const result = await response.json();

      setService(result);
    })();
  }, []);

    return (
        <>
  <section className="service_section layout_padding">
  <div className="service_container">
    {/* <div className="container "> */}
      <div className="row">
        <div className="col-md-6 ">
          <div className="box ">
            <div className="img-box">
              {/* <img src={service.img} alt="" /> */}
            </div>
            <div className="detail-box">
              <h5>{service.title}</h5>
              <p>{service.content}</p>
              <Link to="" style={{ marginLeft: '40px'}}>Click Here to Book</Link>
              <Link to="/services" style={{ marginLeft: '200px'}}>Back</Link>
            </div>
          </div>
        </div>
        </div>
  </div>
</section>
        </>
    )
}