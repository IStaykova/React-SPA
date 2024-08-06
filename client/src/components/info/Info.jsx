import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useCreateSubscriber, useGetAllSubscribers } from "../../hooks/useSubscribers";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { TriggerButton } from "../../utils/informationUtils";

const initialValues = { email: '' };

export default function Info() {
  const { isAuthenticated } = useAuthContext();
  const [subscribers, setSubscribers] = useGetAllSubscribers();
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState('');
  const createSubscriber = useCreateSubscriber();

  const pattern = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const {
    changeHandler,
    submitHandler,
    values
  } = useForm(initialValues, async ({ email }) => {

    if (!email.match(pattern)) {
      setEmailError('Email is not valid');
      return;
    }
    setEmailError('');

    const existingSubscriber = subscribers.find(subscriber => subscriber.email === values.email);
    if (existingSubscriber) {
      setEmailError("Email already exists");
      return;
    }

    try {
      const newSubscriber = await createSubscriber(email);
      setSubscribers(oldSubscribers => [...oldSubscribers, newSubscriber]);
      setShowModal(true);
    } catch (error) {
      console.log(error, 'Failed to subscribe');
    }
  });

  const handleClose = () => setShowModal(false);

  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Location</span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>Call +359 882 88 22 52</span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>INSTrans@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="https://www.facebook.com/facebook/?locale=bg_BG">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Privacy Policy</h4>
                <p>
                  INS Trans strictly complies with the applicable provisions of national and European legislation
                  regarding the protection and secure storage of the personal data of employees, contractors,
                  and partners.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="/">
                    <img src="images/nav-bullet.png" alt="" />
                    Home
                  </a>
                  <a className="" href="/about">
                    <img src="images/nav-bullet.png" alt="" />
                    About
                  </a>
                  <a className="" href="/transports">
                    <img src="images/nav-bullet.png" alt="" />
                    Transport
                  </a>
                  <a className="" href="/contact">
                    <img src="images/nav-bullet.png" alt="" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
              <h4>Subscribe</h4>
              <form onSubmit={submitHandler}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={changeHandler}
                  disabled={!isAuthenticated}
                />
                 <TriggerButton tooltipText="You need to log in to subscribe!" >
                  <button 
                    type="submit"
                    disabled={!isAuthenticated}
                  >Subscribe
                  </button>
                </TriggerButton>
                {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal show={showModal} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>Great, You are subscribed for our newsletter!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}