import React, { useState, useEffect } from 'react';

const Home = () => {
    const [message, setMessage] = useState("");

    //useEffect: méthode qui gère un cycle de vie
    // de ton component, remplace componentDidMount en POO
    useEffect(() => {
      fetch("/api/home")
        .then(res => res.text())
        .then(res => setMessage(res));
    }, []);

    return (
      <div>
        <h1>Home</h1>
        <p>{message}</p>
      </div>
    );
};

export default Home;