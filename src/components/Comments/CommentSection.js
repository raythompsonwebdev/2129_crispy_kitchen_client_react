import React from 'react';
import CommentForm from './CommentForm.js';

function CommentSection() {
  return (
    <section className="comments section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center mb-4">Comment Box</h4>
          </div>

          <div className="col-lg-7 col-12 mx-auto">
            <CommentForm />

            <div className="news-author d-flex flex-wrap align-items-center">
              <img
                src="/static/images/author/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                className="img-fluid news-author-image"
                alt=""
              />

              <div className="ms-4 w-50">
                <p className="mb-2">
                  Donec pharetra tellus nulla, aliquam elementum lorem hendrerit
                  non.
                </p>

                <a href="http://localhost:3000">David Martin</a>
              </div>

              <span className="ms-auto">14 hours ago</span>
            </div>

            <div className="news-author d-flex flex-wrap align-items-center">
              <img
                src="/static/images/author/shoeib-abolhassani-ojl7T2Ah93U-unsplash.jpg"
                className="img-fluid news-author-image"
                alt=""
              />

              <div className="ms-4 w-50">
                <p className="mb-2">
                  Quisque non libero ut mauris fermentum efficitur ac ut nibh.
                </p>

                <a href="http://localhost:3000">Jessica Noel</a>
              </div>

              <span className="ms-auto">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentSection;
