import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ContactUs from './components/ContactUs';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { WhatWeDo } from './components/WhatWeDo';

function App() {
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WhatWeDo />} />
        <Route path="/contact" element={
          <ContactUs
            firstname={firstname}
            setFirstname={setFirstname}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            message={message}
            setMessage={setMessage}
          />
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;