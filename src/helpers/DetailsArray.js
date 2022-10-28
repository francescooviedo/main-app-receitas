const DetailsArray = (arrObjComida) => {
  if (arrObjComida !== {}) {
    const arrIngredientes = [];
    const arrayMedidas = [];
    const arrayIngredients = [];
    const arrFoodInfo = [];

    const objMeals = Object.entries(arrObjComida);
    const filEptVal = objMeals.map((entrie) => entrie.filter((entry) => entry !== ' '));
    const filNull = filEptVal.map((entrie) => entrie.filter((entry) => entry !== null));
    const filSpcval = filNull.map((entrie) => entrie.filter((entry) => entry !== ''));
    const final = filSpcval.filter((objSize) => objSize.length === 2);

    final.forEach((ingrediente) => {
      if (ingrediente[0].includes('strIngredient')) {
        arrIngredientes.push(ingrediente[1]);
      }
      if (ingrediente[0].includes('strMeasure')) {
        arrayMedidas.push(ingrediente[1]);
      }
    });
    const arrayInfo = final.reduce((prevValue, newValue) => ({
      ...prevValue,
      [newValue[0]]: newValue[1],
    }), { [final[0][0]]: final[0][1] });

    arrIngredientes.forEach((array, index) => {
      arrayIngredients.push({
        ingredient: arrIngredientes[index],
        quantity: arrayMedidas[index],
        isChecked: false,
      });
    });

    arrFoodInfo.push(arrayInfo);
    arrFoodInfo.push(arrayIngredients);
    return arrFoodInfo;
  }
};
export default DetailsArray;
