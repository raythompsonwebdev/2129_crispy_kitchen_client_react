import React from 'react';
import GoogleMap from '../components/GoogleMap.js';

const Contact = () => {
  return (
    <main>
      <header className="site-header site-contact-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">Say Hi</h1>

              <strong className="text-white">
                We are happy to get in touch with you
              </strong>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4">Leave a message</h2>
            </div>

            <div className="col-lg-6 col-12">
              <form
                className="custom-form contact-form row"
                action="#"
                method="post">
                <div className="col-lg-6 col-6">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-lg-6 col-6">
                  <label htmlFor="contact-phone" className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="telephone"
                    name="contact-phone"
                    id="contact-phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-control"
                    placeholder="123-456-7890"
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>

                  <input
                    type="email"
                    name="contact-email"
                    id="contact-email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="Your Email"
                    required=""
                  />

                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>

                  <textarea
                    className="form-control"
                    rows="5"
                    id="contact-message"
                    name="contact-message"
                    placeholder="Your Message"></textarea>
                </div>

                <div className="col-lg-5 col-12 ms-auto">
                  <button type="submit" className="form-control">
                    Send
                  </button>
                </div>
              </form>
            </div>

            <div className="col-lg-4 col-12 mx-auto mt-lg-5 mt-4">
              <h5>Weekdays</h5>

              <div className="d-flex mb-lg-3">
                <p>Monday to Friday</p>

                <p className="ms-5">10:00 AM - 08:00 PM</p>
              </div>

              <h5>Weekends</h5>

              <div className="d-flex">
                <p>Saturday and Sunday</p>

                <p className="ms-5">11:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="col-12">
              <h4 className="mt-5 mb-4">
                121 Einstein Loop N, Bronx, NY 10475, United States
              </h4>

              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
