import React, { useState } from 'react';

function Subscribe() {
  const [commentemail, setEmail] = useState(' ');

  const handleEmails = (e) => {
    setEmail(e.target.value);
  };

  const submit = (e) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Email: ${commentemail}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };
  return (
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

      <button type="submit" className="form-control mb-3" id="subscribe">
        Subscribe
      </button>

      <small>
        By signing up, you agree to our Privacy Notice and the data policy
      </small>
    </form>
  );
}

export default Subscribe;
