import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Header';
/* import Home from './Home'; */
/* import Login from './Login';
import Signup from './Signup'; */
import Productfilter from './FilterData/Productfilter';
import Form from './Form';
import Footer from './Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to='/productfilter' />} />
          <Route path="/productfilter" element={<Productfilter />} />
          <Route path="/form" element={<Form />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

/* export default function App() {
  return (
    <>
      <Header />
      <Productfilter />
      <Form />
      <Footer />
    </>
  )
} */
