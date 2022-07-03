import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="index.html">
          Crispy Kitchen
        </a>

        <div className="d-lg-none">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal">
            Reservation
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" title="Home page">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link" title="About page">
                Story
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/menu" className="nav-link" title="Menu page">
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/news" className="nav-link" title="News page">
                Our Updates
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link active"
                title="Contact page">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-none d-lg-block">
          <button
            type="button"
            className="custom-btn btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#BookingModal">
            Reservation
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
