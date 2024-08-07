
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

import { useState } from "react"
import { useGetOneTransportRequest } from "../../hooks/useTransportRequest";
import { useForm } from "../../hooks/useForm";
import { useLocation, useParams } from "react-router-dom";
import { getOne } from "../../api/transport-request-api";

const initialValues = {
  requestId: ''
};

export default function ShipmentTrackForm({show, handleClose}){
  const { requestId } = useParams();
  const [request, setRequest] = useGetOneTransportRequest(requestId);
  const [error, setError] = useState(null);

  const fetchRequestData = async () => {
  
  try {
    const result = await getOne(values.requestId);
    setRequest(result);
    setError(null);
  } catch (error) {
    if (error.response && error.response.status === 404) {
        setError('No such Request!');
      } else {
        setError('An error occurred.');
      }
  }
  if (!values.requestId) {
    setError('Tracking number is required.');
    return;
  }
};

const { 
  values, 
  changeHandler, 
  submitHandler } = useForm(initialValues, fetchRequestData);

  const isButtonDisabled = !values.requestId;

  return (
    <>
        <form onSubmit={submitHandler}>
        <input
            type="text"
            placeholder="Enter Your Tracking Number"
            name="requestId"
            id="requestId"
            value={values.requestId}
            onChange={changeHandler}
        />
        <button 
            type="submit"
            disabled={isButtonDisabled}>Track</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}

      {request && (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Spinner animation="border" role="status" size="sm">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            {' '}Shipment in progress
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="request-info">
              <h3>Request Information</h3>
              <p>Tracking Number: {request._id}</p>
              <p>Type of cargo: {request.cargo}</p>
              <p>Loading place: {request.loading}</p>
              <p>Unloading place: {request.unloading}</p>
              <p>Loading date: {request.date}</p>
              <p>Additional information: {request.message}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      )}
    </>
  )
}