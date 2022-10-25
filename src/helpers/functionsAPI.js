export const requestIngredient = async (ingrediente) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`);
  const { meals } = await response.json();
  console.log(meals);
  return meals;
};

export const requestNome = async (nome) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`);
  const { meals } = await response.json();
  console.log(meals);
  return meals;
};

export const requestFirstLetter = async (primeiraletra) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraletra}`);
  const { meals } = await response.json();
  console.log(meals);
  return meals;
};
