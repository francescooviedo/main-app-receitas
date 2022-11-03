import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import MyContext from '../Context/MyContext';
import './componentsCss/Header.css';

export default function Header({ title, header, profile, search }) {
  const history = useHistory();
  const [hidden, setHidden] = useState(false);
  const { setAPIDrinks, setAPIMeals } = useContext(MyContext);

  const handleHistoryPush = () => {
    history.push('/profile');
  };

  const handleHiddenInput = () => {
    setHidden(!hidden);
    setAPIDrinks([0, 1]);
    setAPIMeals([0, 1]);
  };

  return (
    <div
      className="
      bg-vesuvius-200
      rounded
      items-stretch
     flex-col
     fixed-top-0
     "
    >
      <div className="flex items-stretch py-4">

        <div className="px-10">
          {
            profile
        && (
          <button
            type="button"
            onClick={ handleHistoryPush }
          >
            <img
              data-testid="profile-top-btn"
              src={ profileIcon }
              alt="profile-icon"
            />
          </button>

        )
          }
        </div>
        <div className="text-center px-10 ">
          {
            header
        && (
          <header>
            <h3
              className="
              text-vesuvius-800
            "
              data-testid="page-title"
            >
              {title}
            </h3>
          </header>

        )
          }
        </div>
        <div className="items-end px-10">
          {
            search
        && (
          <button
            type="button"
            onClick={ handleHiddenInput }
          >
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="search-icon"
            />
          </button>

        )

          }
        </div>
      </div>
      <div>
        {
          hidden
        && (<SearchBar />)
        }
      </div>
    </div>
  );
}

Header.propTypes = {
  header: PropTypes.bool.isRequired,
  profile: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
