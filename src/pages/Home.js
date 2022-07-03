//import { hot } from 'react-hot-loader/root';
import React from 'react';
import SpecialsItem from '../components/Home/SpecialsItem.js';
import Hero from '../components/Home/Hero.js';
import FeaturedNews from '../components/News/FeaturedNews.js';
import EventNews from '../components/News/EventNews.js';

const Home = (props) => {
  const { menu, news, back } = { ...props };

  const Specials = menu
    .filter((item) => item.menutype === 'special')
    .map((item) => <SpecialsItem item={item} key={item.id} />);

  const FeaturedItem = news
    .filter((item) => item.banner === 'featured')
    .map((item) => <FeaturedNews item={item} key={item.id} />);

  const EventItem = news
    .filter((item) => item.banner !== 'featured')
    .map((item) => <EventNews item={item} key={item.id} />);

  return (
    <div>
      <Hero />

      <section className="menu section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-lg-5 mb-4">Special Menus</h2>
            </div>
            {Specials}
          </div>
        </div>
      </section>

      <section
        className="BgImage"
        style={{
          backgroundImage: `url(../static/images/alex-haney-CAhjZmVk5H4-unsplash.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '500px',
        }}></section>

      <section className="news section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center mb-lg-5 mb-4">News &amp; Events</h2>
            {FeaturedItem}
            {EventItem}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
