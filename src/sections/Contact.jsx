import React, { useRef, useState } from 'react';
import {
  Container,
  Button,
  Spinner,
  Toast,
} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [showToast, setShowToast] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_7fvij0p',      // ✅ Your Service ID
        'template_0saf28c',     // ✅ Your Template ID
        form.current,
        'wJ2mHSJ3MBx0dwqGf'     // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setShowToast(true);
          form.current.reset();

          setTimeout(() => setShowToast(false), 2000); // auto-hide toast
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <Container className="text-center">
        <h2 className="mb-4 fw-bold">Let's Connect</h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <div className="mb-3">
            <input
              type="text"
              name="from_name"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="from_email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <Button variant="dark" type="submit" disabled={isSending}>
            {isSending ? (
              <>
                <Spinner animation="border" size="sm" className="me-2" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </Button>
        </form>

        {/* ✅ Toast appears below the form */}
        {showToast && (
  <div className="d-flex justify-content-center mt-3">
    <Toast
      bg="success"
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={4000}
      autohide
      className="toast-success"
    >
      <Toast.Header>
        <strong className="me-auto">Success</strong>
      </Toast.Header>
      <Toast.Body className="text-white">
        ✅ Message sent successfully!
      </Toast.Body>
    </Toast>
  </div>
)}

        
      </Container>
    </section>
  );
};

export default Contact;
