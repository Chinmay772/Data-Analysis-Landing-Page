import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navabr from './components/Navabr';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navabr />
    <Hero/>
    <Analytics/>
    <Newsletter />
    <Cards />
    <Footer />
  </React.StrictMode>
);
