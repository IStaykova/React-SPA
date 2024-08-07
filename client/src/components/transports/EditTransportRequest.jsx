import { useForm } from "../../hooks/useForm"
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneTransportRequest } from "../../hooks/useTransportRequest";
import { update } from "../../api/transport-request-api";
import { useState, useMemo } from "react";

const initialValues = {
    cargo: '',
    loading: '',
    unloading: '',
    date: '',
    message: '',
}

export default function editTransportRequest(){
    const navigate = useNavigate();
    const { requestId } = useParams();
    const [request] = useGetOneTransportRequest(requestId);
    const initialFormValues = useMemo(() => Object.assign({}, initialValues, request),[request])
    const [valuesError, setValuesError] = useState({});
    const pattern = /^\d{2}-\d{2}-\d{2}$/g;

const { 
changeHandler,
submitHandler,
values,
} = useForm(initialFormValues, async (values) => {

        const newErrors = {};

    if (!values.cargo) {
        newErrors.cargo = ('Field should not be empty');
    }
    if (!values.loading) {
        newErrors.loading = ('Field should not be empty');
    }
    if (!values.unloading) {
        newErrors.unloading = ('Field should not be empty');
    }
    if (!values.date) {
        newErrors.date = ('Field should not be empty');
    }
    else if (!values.date.match(pattern)){
        newErrors.date = ('Date is not in the correct format');
    }
    if (!message) {
        newErrors.message = ('Field should not be empty');
    }
    setValuesError(newErrors);

    if(Object.keys(newErrors).length !== 0){
        return;
    }

    try {
    await update(requestId, values);
    navigate('/transports/request');
    } catch (error) {
    console.log(error, 'Failed to update request')
    }
});

return (
<>
    <section className="contact_section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 col-md-5 offset-md-1">
                    <div className="heading_container">
                        <h2>Edit Form</h2>
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
                        {valuesError.cargo && <p style={{ color: 'red' }}>{valuesError.cargo}</p>}
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
                        {valuesError.loading && <p style={{ color: 'red' }}>{valuesError.loading}</p>}
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
                        {valuesError.unloading && <p style={{ color: 'red' }}>{valuesError.unloading}</p>}
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
                        {valuesError.date && <p style={{ color: 'red' }}>{valuesError.date}</p>}
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
                        {valuesError.message && <p style={{ color: 'red' }}>{valuesError.message}</p>}
                        <div className="btn_box">
                            <button type="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </section>
</>
)
}