const APIURL = 'https://www.thecocktaildb.com/api/json/v1/1/';

const drinksAPI = async (searchInput) => {
  try {
    const fetchAPI = await fetch(`${APIURL}${searchInput}`);
    const result = await fetchAPI.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default drinksAPI;
