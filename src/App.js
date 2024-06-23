import './App.css';
import './styles/ratipagina.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage, NotFound, AboutUs, Games, ContactUs, DevBlog } from './pages/pages.js';
import TopBar from './components/topbar.js';

function App() {
  return (

    <Router >
      <TopBar />
      <div className="bg-white  min-h-screen 
                      bg-img
                      items-center">
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/games' element={<Games />} />
          <Route path='/blog' element={<DevBlog />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </div>

    </Router>

  );
}

export default App;
