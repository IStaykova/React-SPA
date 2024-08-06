import { useForm } from "../../hooks/useForm";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateTransportRequest, useDeleteHandler, useGetAllTransportRequests } from '../../hooks/useTransportRequest';
import './TransportRequest.css';

const initialValues = {
    cargo: '',
    loading: '',
    unloading: '',
    date: '',
    message: '',
}

export default function TransportRequest(){
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const transportId = params.get('transportId');
  const [requests, setRequests] = useGetAllTransportRequests(transportId);
  const createTransportRequest = useCreateTransportRequest();
  const deleteTransportRequest = useDeleteHandler();
  const navigate = useNavigate();
 
  const {
    changeHandler,
    submitHandler,
    values,
  } = useForm(initialValues, async ({cargo, loading, unloading, date, message}) => {
    try{
      const newRequest = await createTransportRequest(transportId, cargo, loading, unloading, date, message);
      setRequests(oldRequests => [...oldRequests, newRequest]);
      console.log(newRequest)
    } catch(err){
      console.log(err.message)
    }
  });

   const delHandler = async (requestId) => {
    const isConfirmed = confirm('Are you sure you want to delete this request?');
    if(!isConfirmed){
      return;
    }
    try {
      await deleteTransportRequest(requestId);
      setRequests(oldRequests => oldRequests.filter(request => request._id !== requestId));
    } catch (err) {
      console.error('Failed to delete request:', err);
    }
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
                <form onSubmit={submitHandler}>
                  <div>
                    <label htmlFor="cargo">Type of cargo:</label>
                    <input
                      type="text"
                      name="cargo"
                      id="cargo"
                      value={values.cargo}
                      onChange={changeHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor="loading">Loading place:</label>
                    <input
                      type="text"
                      name="loading"
                      id="loading"
                      value={values.loading}
                      onChange={changeHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor="unloading">Unloading place:</label>
                    <input
                      type="text"
                      name="unloading"
                      id="unloading"
                      value={values.unloading}
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
                      value={values.date}
                      onChange={changeHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Additional information:</label>
                    <input
                      type="text"
                      name="message"
                      id="message"
                      value={values.message}
                      onChange={changeHandler}
                      className="message-box"
                    />
                  </div>
                  <div className="btn_box">
                    <button type="submit">SEND</button>
                  </div>
                </form>



              </div>
            </div>
          </div>
        </div>
      </section>
      {requests.length > 0 ?
        (<>
          <section className="contact_section" >
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-md-5 offset-md-1">
                  <div className="heading_container">
                    <h2>My requests</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-5 offset-md-1">
                  {requests.map(request => (
                    <div key={request._id} className="form_container contact-form">
                      <div>
                        <p htmlFor="track">Tracking Number:{request._id}</p>
                      </div>
                      <div>
                        <p htmlFor="cargo">Type of cargo:{request.cargo}</p>
                      </div>
                      <div>
                        <p htmlFor="loading">Loading place:{request.loading}</p>
                      </div>
                      <div>
                        <p htmlFor="unloading">Unloading place:{request.unloading}</p>
                      </div>
                      <div>
                        <p htmlFor="date">Loading date:{request.date}</p>
                      </div>
                      <div>
                        <p htmlFor="message">Additional information:{request.message}</p>
                      </div>
                      <div className="btn_box">
                        <button onClick={() => navigate(`/transports/request/${request._id}/edit`)}>Edit</button>
                        <button onClick={() => delHandler(request._id)}>Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
        ) :
        (
          <p>No requests created</p>
        )
      }

    </>
  )
  }