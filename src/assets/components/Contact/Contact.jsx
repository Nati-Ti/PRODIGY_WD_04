import React, { useState } from 'react';
import './Contact.css';

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
      const response = await fetch('/forms/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setSuccess(true);
        setError('');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSuccess(false);
        setError('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setSuccess(false);
      setError('Failed to send message. Please try again later.');
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row mt-1">
          <div className="col-lg-4">
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
          <div className="col-lg-8 mt-5 mt-lg-0">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-6 form-group">
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
                <div className="col-md-6 form-group mt-3 mt-md-0">
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
              <div className="text-center">
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
