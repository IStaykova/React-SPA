import { useForm } from "../../hooks/useForm"
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneTransportRequest } from "../../hooks/useTransportRequest";
import { update } from "../../api/transport-request-api";
import { useMemo } from "react";

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
    const initialFormValues = useMemo(() => Object.assign({}, initialValues, request),[request]);
    const { 
        changeHandler,
        submitHandler,
        values,
        } = useForm(initialFormValues, async (values) => {
         const updatedRequest = await update(requestId, values);
        navigate('/transports/request');
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
        </>
    )
  }