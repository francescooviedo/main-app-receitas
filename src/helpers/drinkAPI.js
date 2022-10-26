const APIURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

const drinksAPI = (searchInput) => (
  fetch(`${APIURL}${searchInput}`)
    .then((response) => (
      response
        .json()
        .then((json) => (
          response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default drinksAPI;
