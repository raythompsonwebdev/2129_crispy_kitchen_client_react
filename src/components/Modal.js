import React, { useState } from 'react';

function Modal() {
  const [resname, setFullName] = useState(' ');
  const [resemail, setEmail] = useState(' ');
  const [resphone, setPhone] = useState(' ');
  const [respersons, setPersons] = useState(' ');
  const [resdate, setDate] = useState(' ');
  const [comments, setComments] = useState(' ');

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmails = (e) => {
    setEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handlePersons = (e) => {
    setPersons(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleComments = (e) => {
    setComments(e.target.value);
  };

  const submit = (e) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${resname},\n Email: ${resemail}\n This comment: ${comments}\n Persons ${respersons}\n Phone- ${resphone}\n date- ${resdate}. \n This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  return (
    <div
      className="modal fade"
      id="BookingModal"
      tabIndex="-1"
      aria-labelledby="BookingModal"
      aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="mb-0">Reserve a table</h3>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>

          <div className="modal-body d-flex flex-column justify-content-center">
            <div className="booking">
              <form
                className="booking-form row"
                onSubmit={submit}
                method="post">
                <div className="col-lg-6 col-12">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    onChange={handleFullName}
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    pattern="[^ @]*@[^ @]*"
                    className="form-control"
                    placeholder="your@email.com"
                    onChange={handleEmails}
                    required
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>

                  <input
                    type="telephone"
                    name="phone"
                    id="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-control"
                    placeholder="123-456-7890"
                    onChange={handlePhone}
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="people" className="form-label">
                    Number of persons
                  </label>

                  <input
                    type="text"
                    name="people"
                    id="people"
                    className="form-control"
                    placeholder="12 persons"
                    onChange={handlePersons}
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="date" className="form-label">
                    Date
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value=""
                      className="form-control"
                      onChange={handleDate}
                    />
                  </label>
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="time" className="form-label">
                    Time
                    <select
                      className="form-select form-control"
                      name="time"
                      id="time">
                      <option value="5" selected>
                        5:00 PM
                      </option>
                      <option value="6">6:00 PM</option>
                      <option value="7">7:00 PM</option>
                      <option value="8">8:00 PM</option>
                      <option value="9">9:00 PM</option>
                    </select>
                  </label>
                </div>

                <div className="col-12">
                  <label
                    htmlFor="message"
                    className="form-label"
                    style={{ width: '100%' }}>
                    Special Request
                    <textarea
                      className="form-control"
                      rows="4"
                      col="10"
                      id="message"
                      name="message"
                      onChange={handleComments}
                      placeholder=""></textarea>
                  </label>
                </div>

                <div className="col-lg-4 col-12 ms-auto">
                  <button type="submit" className="form-control">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
