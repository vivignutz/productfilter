import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Productfilter from './FilterData/Productfilter';
import Form from './Form';
import Footer from './Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/productfilter" component={Productfilter} />
          <Route path="/form" component={Form} />
      {/* <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} /> */}
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
