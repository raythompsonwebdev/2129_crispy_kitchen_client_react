import React from 'react';
import PropTypes from 'prop-types';
import BreakfastItem from '../components/Menu/BreakfastItem.js';
import LunchItem from '../components/Menu/LunchItem.js';
import DinnerItem from '../components/Menu/DinnerItem.js';

function Menu({ menu }) {
  console.log(menu);

  const Breakfast = menu
    .filter((item) => item.type === 'breakfast')
    .map((item) => <BreakfastItem item={item} key={item.id} />);

  const Lunch = menu
    .filter((item) => item.type === 'lunch')
    .map((item) => <LunchItem item={item} key={item.id} />);

  const Dinner = menu
    .filter((item) => item.type === 'dinner')
    .map((item) => <DinnerItem item={item} key={item.id} />);

  return (
    <main>
      <header className="site-header site-menu-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-12 mx-auto">
              <h1 className="text-white">Our Menus</h1>

              <strong className="text-white">
                Perfect for all Breakfast, Lunch and Dinner
              </strong>
            </div>
          </div>
        </div>

        <div className="overlay"></div>
      </header>

      <section className="menu section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">Breakfast Menu</h2>
            </div>
            {Breakfast}
          </div>
        </div>
      </section>

      <section className="menu section-padding bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">Lunch Menu</h2>
            </div>
            {Lunch}
          </div>
        </div>
      </section>

      <section className="menu section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-lg-5 mb-4">Dinner Menu</h2>
            </div>
            {Dinner}
          </div>
        </div>
      </section>
    </main>
  );
}

Menu.defaultProps = {
  NewsItems: [],
};

Menu.propTypes = {
  NewsItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
    })
  ),
};

export default Menu;
