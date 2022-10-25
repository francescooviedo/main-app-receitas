import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';
import MyContext from '../Context/MyContext';

export default function Header({ title, header, profile, search }) {
  const { handleChange, inputSearch, setInputSearch } = useContext(MyContext);

  const history = useHistory();
  const [hidden, setHidden] = useState(false);

  const handleHistoryPush = () => {
    history.push('/profile');
  };

  const handleHiddenInput = () => {
    setHidden(!hidden);
    setInputSearch('');
  };

  return (
    <div>
      {
        header
        && (
          <header>
            <h3 data-testid="page-title">
              {title}
            </h3>
          </header>

        )
      }
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
      {

        hidden
        && (
          <div>

            <input
              type="text"
              value={ inputSearch }
              data-testid="search-input"
              onChange={ handleChange }
            />
            <SearchBar />
          </div>

        )
      }
    </div>

  );
}

Header.propTypes = {
  header: PropTypes.bool.isRequired,
  profile: PropTypes.bool.isRequired,
  search: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
