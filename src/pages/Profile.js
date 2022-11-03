import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  const getEmail = () => {
    if (JSON.parse(localStorage.getItem('user')) !== null) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return email;
    }
  };
  const getLocalStorage = getEmail();

  const clearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div className="bg-white">
      <Header header profile search={ false } title="Profile" />
      <Footer />
      <div className="bg-vesuvius-900 mx-1 my-1 rounded">
        <p
          className="text-center text-white"
          data-testid="profile-email"
        >
          { getLocalStorage }

        </p>
      </div>
      <div className="bg-vesuvius-800 rounded mx-1 my-1">
        <Link to="/done-recipes">
          <button
            className="
          border-2
          border-vesuvius-500
          bg-white
           hover:bg-vesuvius-700
            font-bold
            py-1 px-4 rounded
             focus:outline-none
              focus:shadow-outline
              mx-0.5
              my-0.5
              shadow
          text-vesuvius-700 "
            data-testid="profile-done-btn"
            type="button"
          >
            Done Recipes
          </button>
        </Link>
        <Link to="/favorite-recipes">
          <button
            className="
          border-2
          border-vesuvius-500
          bg-white
           hover:bg-vesuvius-700
            font-bold
            py-1 px-4 rounded
             focus:outline-none
              focus:shadow-outline
              mx-0.5
              my-0.5
              shadow
          text-vesuvius-700 "
            data-testid="profile-favorite-btn"
            type="button"
          >
            Favorite Recipes
          </button>
        </Link>
        <Link data-testid="profile-logout-btn" to="/">
          <button
            className="
          border-2
          border-vesuvius-500
          bg-vesuvius-900
           hover:bg-vesuvius-300
            font-bold
            py-1 px-4 rounded
             focus:outline-none
              focus:shadow-outline
              mx-0.5
              my-0.5
              shadow
          text-white "
            onClick={ clearLocalStorage }
            type="button"
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}
