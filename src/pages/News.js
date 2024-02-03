import React from 'react';
import PropTypes from 'prop-types';
import FeaturedNews from '../components/News/FeaturedNews.js';
import EventNews from '../components/News/EventNews.js';

function News({ news }) {
  const FeaturedItem = news
    .filter((item) => item.banner === 'featured')
    .map((item) => <FeaturedNews item={item} key={item.id} />);

  const EventItem = news
    .filter((item) => item.banner !== 'featured')
    .map((item) => <EventNews item={item} key={item.id} />);

  return (
    <main>
      <header className="site-header site-news-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">News &amp; Events</h1>

              <strong className="text-white">
                our latest updates, news, events and special promotions
              </strong>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="news section-padding bg-white">
        <div className="container">
          <div className="row">
            <h2 className="mb-lg-5 mb-4">Latest Updates</h2>
            {FeaturedItem}
          </div>
        </div>
      </section>

      <section className="news section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">News &amp; Events</h2>
            </div>
            {EventItem}
          </div>
        </div>
      </section>
    </main>
  );
}

export default News;

News.defaultProps = {
  NewsItems: [],
};

News.propTypes = {
  NewsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      banner: PropTypes.string,
    })
  ),
};
