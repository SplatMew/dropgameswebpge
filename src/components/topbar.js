import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../img/dropgames_logo.png';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light-anil text-white">
        <div className='container'>

          <Link className="navbar-brand" to="/" >
          <img src = {logo} alt = 'Logo' style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center custom-font topbartext " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item " style={{marginRight:'40px'}}>
                <Link className='nav-link text-white' to="/games">Games</Link>
              </li>
              <li className="nav-item" style={{marginRight:'40px'}}>
                <Link className='nav-link text-white' to="/blog">Blog</Link>
              </li>
              <li className="nav-item" style={{marginRight:'40px'}}>
                <Link className='nav-link text-white' to="/about-us">About us</Link>
              </li>
              <li className="nav-item" style={{marginRight:'40px'}}>
                <Link className='nav-link text-white' to="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}