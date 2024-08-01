import { useContext } from "react"
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useGetOneTransport } from "../../hooks/useTransports";

export default function TransportDetails(){
  const { isAuthenticated} = useContext(AuthContext);
  const { transportId } = useParams();
  const [transport] = useGetOneTransport(transportId);

  return (
    <>
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="box ">
                <div className="img-box">
                  <img src={transport.imgURL} />
                </div>
                <div className="detail-box">
                  <h1>{transport.title}</h1>
                  <p>{transport.content}</p>
                  {/* { isAuthenticated ?
   (  <> */}
                  <Link to={`/transports/request?transportId=${transportId}`} style={{ marginLeft: '40px' }}>Send Request</Link>
                  <Link to="/transports" style={{ marginLeft: '200px' }}>Back</Link>
                  {/* </>)
   :
   ( <Link to="/transports" style={{ marginLeft: '200px'}}>Back</Link> 
    //TODO: Link to Login to send request + message
   )
   }        */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
