import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FeaturedNews({ item }) {
  const { banner, title, image, alt } = { ...item };
  return (
    <div className="col-lg-6 col-md-6 col-12">
      <div className="news-thumb mb-4">
        <Link to="news-detail.html">
          <img src={image} className="img-fluid news-image" alt={alt} />
        </Link>

        <div className="news-text-info news-text-info-large">
          <span className="category-tag bg-danger">{banner}</span>

          <h5 className="news-title mt-2">
            <Link to="news-detail.html" className="news-title-link">
              {title}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}

FeaturedNews.propTypes = {
  image: PropTypes.string,
  banner: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
};

export default FeaturedNews;
