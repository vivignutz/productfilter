import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = () => {
    // To redirect to Productfilter only for this exercise
    return <Navigate to='/productfilter' />;
};

export default Home;
