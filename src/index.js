import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from './components/Modal.js';
import Footer from './components/Layout/Footer.js';
import Navigation from './components/Layout/Navigation.js';
import Home from './pages/Home.js';
import Contact from './pages/Contact.js';
import Menu from './pages/Menu.js';
import About from './pages/About.js';
import NewsDetail from './pages/NewsDetail.js';
import News from './pages/News.js';
import './static/css/tooplate-crispy-kitchen.css';

// news images
import newsImgOne from './static/images/news/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg';
import newsImgTwo from './static/images/news/stefan-johnson-xIFbDeGcy44-unsplash.jpg';
import newsImgThree from './static/images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg';
import newsImgFour from './static/images/news/ella-olsson-mmnKI8kMxpc-unsplash.jpg';
import newsImgFive from './static/images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg';

// menu images
import menuImgOne from './static/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg';
import menuImgTwo from './static/images/dinner/keriliwi-c3mFafsFz2w-unsplash.jpg';
import menuImgThree from './static/images/dinner/farhad-ibrahimzade-isHUj3N0194-unsplash.jpg';
import menuImgFour from './static/images/lunch/louis-hansel-cH5IPjaAYyo-unsplash.jpg';
import menuImgFive from './static/images/breakfast/lucas-swennen-1W_MyJSRLuQ-unsplash.jpg';
import menuImgSix from './static/images/breakfast/louis-hansel-dphM2U1xq0U-unsplash.jpg';
import menuImgSeven from './static/images/dinner/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg';
import menuImgEight from './static/images/lunch/farhad-ibrahimzade-D5c9ZciQy_I-unsplash.jpg';
import menuImgNine from './static/images/lunch/farhad-ibrahimzade-MGKqxm6u2bc-unsplash.jpg';
import menuImgTen from './static/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg';
import menuImgEleven from './static/images/breakfast/brett-jordan-8xt8-HIFqc8-unsplash.jpg';

const MenuItems = [
  {
    id: 0,
    menutype: 'regular',
    type: 'breakfast',
    title: 'Fresh Start',
    price: '24.50',
    rating: '4.4/5',
    reviews: 128,
    image: menuImgOne,
  },
  {
    id: 1,
    menutype: 'special',
    type: 'dinner',
    title: 'Premium Steak',
    price: '74.2',
    rating: '3/5',
    reviews: 56,
    image: menuImgTwo,
  },
  {
    id: 2,
    menutype: 'regular',
    type: 'dinner',
    title: 'Salmon Set',
    price: '60',
    rating: '3/5',
    reviews: 76,
    image: menuImgThree,
  },
  {
    id: 3,
    menutype: 'regular',
    type: 'lunch',
    title: 'Super Steak Set',
    price: '32.75',
    rating: '4.4/5',
    reviews: 128,
    image: menuImgFour,
  },
  {
    id: 4,
    menutype: 'regular',
    type: 'lunch',
    title: 'Bread & Steak Set',
    price: '42.50',
    rating: '3/5',
    reviews: 84,
    image: menuImgFive,
  },
  {
    id: 5,
    menutype: 'regular',
    type: 'breakfast',
    title: 'Baked Creamy',
    price: '16.50',
    rating: '3/5',
    reviews: 64,
    image: menuImgSix,
  },
  {
    id: 6,
    menutype: 'special',
    type: 'breakfast',
    title: 'Burger Set',
    price: '24.50',
    rating: '3/5',
    reviews: 32,
    image: menuImgSeven,
  },
  {
    id: 7,
    menutype: 'special',
    type: 'dinner',
    title: 'Seafood Set',
    price: '65.50',
    rating: '4.4/5',
    reviews: 102,
    image: menuImgEight,
  },
  {
    id: 8,
    menutype: 'special',
    type: 'lunch',
    title: 'Healthy Soup',
    price: '34.20',
    rating: '3/5',
    reviews: 64,
    image: menuImgNine,
  },
  {
    id: 9,
    menutype: 'special',
    type: 'lunch',
    title: 'Tooplate Soup',
    price: '24.20',
    rating: '3/5',
    reviews: 50,
    image: menuImgTen,
  },
  {
    id: 10,
    menutype: 'special',
    type: 'breakfast',
    title: 'Morning Fresh',
    price: '12.50',
    rating: '4.3/5',
    reviews: 102,
    image: menuImgEleven,
  },
];

const NewsItems = [
  {
    id: 0,
    banner: 'featured',
    author: '',
    title: 'How to make a healthy diet?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: newsImgOne,
    youtubelink: 'https://www.youtube.com/embed/6vebbDZxoKE?controls=0',
    alt: 'pablo-merchan-montes',
    slug: 'healthy',
    list: ['Healthy One', 'Healthy Two', 'Healthy Three', 'Healthy Four'],
  },
  {
    id: 1,
    banner: 'featured',
    title: 'Happy living and happy eating tips?',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: newsImgTwo,
    youtubelink: 'https://www.youtube.com/embed/6vebbDZxoKE?controls=0',
    alt: 'stefan-johnson',
    slug: 'eating',
    list: ['Eating One', 'Eating Two', 'Eating Three', 'Eating Four'],
  },
  {
    id: 2,
    banner: 'promotions',
    title: 'Is Coconut good for your health?',
    date: '12-April-2022',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: newsImgThree,
    youtubelink: 'https://www.youtube.com/embed/6vebbDZxoKE?controls=0',
    alt: 'gilles-lambert',
    slug: 'coconut',
    list: ['Coconut One', 'Coconut Two', 'Coconut Three', 'Coconut Four'],
  },
  {
    id: 3,
    banner: 'career',
    title: 'How to run a sushi business?',
    date: '18-April-2022',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: newsImgFour,
    youtubelink: 'https://www.youtube.com/embed/6vebbDZxoKE?controls=0',
    alt: 'ella-olsson',
    slug: 'sushi',
    list: ['Sushi One', 'Sushi Two', 'Sushi Three', 'Sushi Four'],
  },
  {
    id: 4,
    banner: 'meeting',
    title: 'Learning a fine dining experience.',
    date: '30-April-2022',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: newsImgFive,
    youtubelink: 'https://www.youtube.com/embed/6vebbDZxoKE?controls=0',
    alt: 'louis-hansel',
    slug: 'dining',
    list: ['Dining One', 'Dining Two', 'Dining Three', 'Dining Four'],
  },
];

const routing = (
  <Router>
    <Navigation />
    <React.StrictMode>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home menu={MenuItems} news={NewsItems} />}
        />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/menu" element={<Menu menu={MenuItems} />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/news/:id"
          element={<NewsDetail news={NewsItems} />}
        />
        <Route exact path="/news" element={<News news={NewsItems} />} />
      </Routes>
    </React.StrictMode>
    <Modal />
    <Footer />
  </Router>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(routing);
