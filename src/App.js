import React from 'react';
import './App.css';
import Header from './Header.js';
import Logo from "./images/Logo.png";
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import BookingForm from './BookingPage';
import Reservations from './Reservations.js'
import Booking from "./Booking";
import BookingConfirmation from './BookingConfirmation'
import {useFormContext} from "./FormContext";
import {Routes, Route, Link} from 'react-router-dom'

export default function App() {
  let { form } = useFormContext();

  const formProps = {
    name: form.name,
    date: form.date,
    time: form.time,
    guests: form.numberOfGuests,
    occasion: form.occasion,
    table: form.tablePreference,
    request: form.message,
  };
  return (
    <>
    <div className='App'>
<nav className='nav'>
  <Link to="/" className='nav-item'><img src={Logo} alt="Logo"  height={60} /></Link>
  <div className='navDiv'>
<Link to="/" className='nav-items'>Home</Link>
<Link to="/about" className='nav-items'>About</Link>
<Link to="/menu" className='nav-items'>Menu</Link>
<Link to="/reservations" className='nav-items'>Reservations</Link>
<Link to="/order-online" className='nav-items'>Order Online</Link>
<Link to="/login" className='nav-items'>Login</Link>
</div>
</nav>
<Routes>
<Route path="/" element={<></>} />
<Route path="/about" element={<Header/>} />
<Route path="/menu" element={<Header/>} />
<Route path="/reservations" element={<BookingForm/>} />
<Route path="/booking" element={<Booking />} />
<Route path="/booking-confirmation"
          element={<BookingConfirmation {...formProps} />} />
<Route path="/order-online" element={<Header/>} />
<Route path="/login" element={<Header/>} />
</Routes>
    </div>

    <Main />
    <Footer />
    </>
  );
}
