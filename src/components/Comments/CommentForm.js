import React, { useState } from 'react';

function CommentForm() {
  const [commentname, setUserName] = useState(' ');
  const [commentemail, setEmail] = useState(' ');
  const [comments, setComments] = useState(' ');

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleEmails = (e) => {
    setEmail(e.target.value);
  };

  const handleComments = (e) => {
    setComments(e.target.value);
  };

  const submit = (e) => {
    // eslint-disable-next-line no-console
    console.log(
      // eslint-disable-next-line react/destructuring-assignment
      `You have entered Username:${commentname}, Email: ${commentemail} & This comment: ${comments}. This form is under maintenance and will be ready to use shortly`
    );
    e.preventDefault();
  };

  return (
    <form className="custom-form comment-form" onSubmit={submit} role="form">
      <input
        type="text"
        name="comment-name"
        id="comment-name"
        className="form-control"
        placeholder="Your Name"
        onChange={handleUserName}
        required
      />

      <input
        type="email"
        name="comment-email"
        id="comment-email"
        pattern="[^ @]*@[^ @]*"
        className="form-control"
        placeholder="Your Email"
        onChange={handleEmails}
        required=""
      />

      <textarea
        className="form-control"
        rows="5"
        id="comment"
        name="comment"
        placeholder="Write a comment"
        onChange={handleComments}
        required></textarea>

      <div className="col-lg-3 col-4 mx-auto">
        <button type="submit" className="form-control" id="subscribe">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
