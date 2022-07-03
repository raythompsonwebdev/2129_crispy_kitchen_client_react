import React, { useState } from 'react';

function NewsLetter() {
  const [NewsEmail, setNewsEmail] = useState(' ');

  const handleEmails = (e) => {
    setNewsEmail(e.target.value);
  };

  const submit = (e) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Email: ${NewsEmail}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
    sessionStorage.setItem('name', NewsEmail);
  };
  return (
    <section className="newsletter section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img
              src="/static/images/charles-deluvio-FdDkfYFHqe4-unsplash.jpg"
              className="img-fluid newsletter-image"
              alt=""
            />
          </div>

          <div className="col-lg-6 col-12 d-flex align-items-center mt-5 mt-lg-0 mx-auto">
            <div className="subscribe-form-wrap">
              <h4 className="mb-0">Our Newsletter</h4>

              <p>The food news every day</p>

              <form
                className="custom-form subscribe-form mt-4"
                onSubmit={submit}
                role="form">
                <input
                  type="email"
                  name="subscribe-email"
                  id="subscribe-email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Your email address"
                  onChange={handleEmails}
                  required=""
                />

                <button
                  type="submit"
                  className="form-control mb-3"
                  id="subscribe">
                  Subscribe
                </button>

                <small>
                  By signing up, you agree to our Privacy Notice and the data
                  policy
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
