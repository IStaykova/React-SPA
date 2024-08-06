
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