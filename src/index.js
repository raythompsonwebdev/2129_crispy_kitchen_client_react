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
import './static/css/bootstrap-icons.css';
import './static/css/bootstrap.min.css';
import './static/css/tooplate-crispy-kitchen.css';
import './static/js/jquery.min.js';
import './static/js/bootstrap.bundle.min.js';
import './static/js/custom.js';

import MenuItems from './static/data/menu.json';
import NewsItems from './static/data/news.json';

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
