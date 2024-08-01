import { Link } from "react-router-dom";
import { useGetAllTransports } from "../../hooks/useTransports";

export default function Transports(){
  const [transports] = useGetAllTransports();

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
              {transports.map((transport) => (
                <div key={transport._id} className="col-md-6 ">
                  <div className="box ">
                    <div className="img-box">
                      <img src={transport.imgURL} />
                    </div>
                    <div className="detail-box">
                      <h5>{transport.title}</h5>
                      <Link to={`/transports/${transport._id}`}>Read More</Link>
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