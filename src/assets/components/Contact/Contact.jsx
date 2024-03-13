import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await sendEmail(event);
      setSuccess(true);
      setError('');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSuccess(false);
      setError('Failed to send message. Please try again later.');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }

    setSubmitting(false);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAILJS_USER_ID)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          throw new Error('Failed to send email');
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row mt-1 align-items-start">
          <div className="col-lg-4 mt-lg-0">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>Angola St, Addis Ababa, Ethiopia</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>natnaelti94@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+251 908 781 851</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0 ">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row m-0">
                <div className="col-md-6 form-group mt-md-0">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="my-3">
                {submitting && <div className="loading">Loading</div>}
                {error && <div className="error-message">{error}</div>}
                {success && <div className="sent-message">Your message has been sent. Thank you!</div>}
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
