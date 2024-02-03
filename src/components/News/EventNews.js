import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function EventNews({ item }) {
  const { id, banner, title, image, alt, date } = { ...item };
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="news-thumb mb-4">
        <Link to={`/news/${id}`}>
          <img src={image} className="img-fluid news-image" alt={alt} />
        </Link>
        <div className="news-text-info">
          <span className="category-tag me-3 bg-info">{banner}</span>

          <strong>{date}</strong>

          <h5 className="news-title mt-2">
            <Link to={`/news/${id}`} className="news-title-link">
              {title}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

EventNews.propTypes = {
  banner: PropTypes.string,
  alt: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};

export default EventNews;
