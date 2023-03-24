import React from 'react';

const Home = ({ email, password }) => {
    return (
      <div>
        <h1>Welcome to the Home page!</h1>
        <p>You have successfully logged in with the following credentials:</p>
        <ul>
          <li>Email: {email}</li>
          <li>Password: {password}</li>
        </ul>
      </div>
    );
}

export default Home;