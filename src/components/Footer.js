import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <div className="mx-1">
      <footer
        className="
      my-3
      mx-1
      max-w-sm
      rounded
      overflow-hidden
      shadow-lg
      text-center
      px-3
      py-2
      bg-vesuvius-200
      fixed bottom-0"
        data-testid="footer"
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
    </div>
  );
}
export default Footer;
