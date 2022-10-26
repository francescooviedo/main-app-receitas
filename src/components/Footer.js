import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer
      data-testid="footer"
      style={ { position: 'fixed', bottom: '0px' } }
    >
      <Link to="/drinks">

        <button
          type="button"
        >
          <img data-testid="drinks-bottom-btn" src={ drinkIcon } alt="drink" />
        </button>
      </Link>
      <Link to="/meals">

        <button
          type="button"
        >
          <img data-testid="meals-bottom-btn" src={ mealIcon } alt="meals" />
        </button>
      </Link>
    </footer>

  );
}
export default Footer;
