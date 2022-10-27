const APIURL = 'https://www.themealdb.com/api/json/v1/1/';

const mealsAPI = async (searchInput) => {
  try {
    const fetchAPI = await fetch(`${APIURL}${searchInput}`);
    const result = await fetchAPI.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
export default mealsAPI;
