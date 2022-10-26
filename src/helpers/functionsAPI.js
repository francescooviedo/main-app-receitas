const APIURL = 'https://www.themealdb.com/api/json/v1/1/';

const mealsAPI = (searchInput) => (
  fetch(`${APIURL}${searchInput}`)
    .then((response) => (
      response
        .json()
        .then((json) => (
          response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default mealsAPI;
