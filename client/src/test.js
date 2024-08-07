
// useEffect(() => {
//   (async () => {
//     const response = await fetch('http://localhost:3030/data/transports/list');
//     const result = await response.json();

//     setServices(result);
//   })()
// }, []);


  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`http://localhost:3030/data/details/${serviceId}`);
  //     const result = await response.json();
  //     setService(result);
  //   })();
  // }, [transportId]);


{/* <div className="created-request">
{transportRequest.map(request => 
     <div key={request._id}> 
     <h3>{request.serviceId} Request:</h3>
     <p>Type of cargo: {request.cargo}</p>
     <p>Loading place: {request.loading}</p>
     <p>Unloading place: {request.unloading}</p>
     <p>Loading date: {request.date}</p>
     <p>Additional information: {request.message}</p>
   </div>
)}
    </div>  */}




  //   // const { transportId } = useParams();
  // // // const navigate = useNavigate();
  // const { accessToken} = useContext(AuthContext)
  // const [values, setValues] = useState({
  //   cargo: '',
  //   loading: '',
  //   unloading: '',
  //   date: '',
  //   message: ''
  // });
  // const [requests, setRequests] = useState([]);

  // const changeHandler = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   await create(values)

  //   console.log(values)
  // }

  //   const requestBody = {
  //     ...values,
  //     serviceId
  //   };

  //     useEffect(() => {
  //       (async () => {
  //         try{
  //         const response = await fetch('http://localhost:3030/data/transport-requests', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'X-Authorization': accessToken
  //           },
  //           body: JSON.stringify(requestBody)
  //         });
  //         const result = await response.json();
  //       setValues(result);
  //         console.log(result)
  //       }
  //       catch(error){
  //           console.log(`An error occurred: ${error.message}`)
  //       }
  //       })();
  //     }, [accessToken]);
    

  //     if (response.ok) {
  //       alert('Request sent successfully');
  //       navigate('/services'); // Navigate back to the services page
  //     } else {
  //       const error = await response.json();
  //       alert(`Failed to send request: ${error.message}`);
  //     }
  //   } catch (error) {
  //     alert(`An error occurred: ${error.message}`);
  //   }
  // };
  

//   useForm.js

//   import { useState } from "react";

// export function useForm(initialValues, submitCallback){
//     const [values, setValues] = useState(initialValues);

//     const changeHandler = (e) => {
//         setValues(state => ({
//             ...state,
//             [e.target.name]: e.target.value
//         }))
//     };

//     const submitHandler = (e) => {
//         e.preventDefault();
//         submitCallback(values);

//         setValues(initialValues)
//     }

// return {
//     values,
//     changeHandler,
//     submitHandler
// };
// };



    // if (existingSubscriber) {
    //   setEmailError("Email already exists");
    //   return;
    // }

    // setEmailError('');


//     *****
//     import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Spinner from 'react-bootstrap/Spinner';

// import { useState } from "react"
// import { useGetOneTransportRequest } from "../../hooks/useTransportRequest";
// import { useForm } from "../../hooks/useForm";
// import { useLocation, useParams } from "react-router-dom";
// import { getOne } from "../../api/transport-request-api";


// const initialValues = {
//   requestId: ''
// };

// export default function ShipmentTrack(){
//   const { requestId } = useParams();
//   const [show, setShow] = useState(false);
//   const [request, setRequest] = useGetOneTransportRequest(requestId);
//   const [error, setError] = useState(null);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const fetchRequestData = async ({requestId}) => {
//   handleShow();
  
//   try {
//     const result = await getOne(requestId);
//     setRequest(result);
//     setError(null);
//     handleShow();
//   } catch (error) {
//     setError('No such Request!')
//     handleClose();
//     // setRequest(null);
//   }

//   if (!values.requestId) {
//     setError('Tracking number is required.');
//     return;
//   }
// };

// const { 
//   values, 
//   changeHandler, 
//   submitHandler } = useForm(initialValues, fetchRequestData);

//   const isButtonDisabled = !values.requestId;


//   return (
//     <>
//       <section className="track_section layout_padding">
//         <div className="track_bg_box">
//           <img src="images/track-bg.jpg" alt="" />
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="heading_container">
//                 <h2>Track Your Shipment</h2>
//               </div>
//               <p>
//                 Using Your tracking number you can check the current state of your shipment.
//                 The unique number you can find in the Request information message.
//                 We take responsibility to ensure that every order we receive is taken care of.
//                 For further questions, check Links below.
//               </p>
//               <form onSubmit={submitHandler}>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Tracking Number"
//                   name="requestId"
//                   id="requestId"
//                   value={values.requestId}
//                   onChange={changeHandler}
//                 />
//                 <button 
//                   type="submit"
//                   disabled={isButtonDisabled}>Track</button>
//               </form>
//               {error && <p style={{ color: 'red' }}>{error}</p>}
//             </div>
//           </div>
//         </div>
//       </section>

//       {request && (
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <Spinner animation="border" role="status" size="sm">
//               <span className="visually-hidden">Loading...</span>
//             </Spinner>
//             {' '}Shipment in progress
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//             <div className="request-info">
//               <h3>Request Information</h3>
//               <p>Tracking Number: {request._id}</p>
//               <p>Type of cargo: {request.cargo}</p>
//               <p>Loading place: {request.loading}</p>
//               <p>Unloading place: {request.unloading}</p>
//               <p>Loading date: {request.date}</p>
//               <p>Additional information: {request.message}</p>
//             </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       )}
//     </>
//   )
// }