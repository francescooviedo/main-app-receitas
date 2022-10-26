import React, { useEffect, useState } from 'react';
import { findRenderedDOMComponentWithTag } from 'react-dom/test-utils';

import mealsAPI
 from '../helpers/functionsAPI';
export default function SearchBar() {
  const [inputText, setInputText] =useState('')
  const [inputText2, setInputText2] =useState('')
  const [retornoApi, setRetorno] = useState([])
  const [load,setLoad]=useState(false)
  useEffect(()=>{
    setInputText(inputText)
    console.log(inputText)
  },[inputText])
  const search = async ()=>{

    const {meals} = await mealsAPI(`filter.php?i=${inputText}`);
  setRetorno(meals); 
  }
  
  return (
    <div>
      <form>
        <input 
        type='text'
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
        />
      
      <input 
      type="radio" 
      id="ingredient" 
      name="fav_language" 
      value="ingredient" 
      onChange={  (e)=> setInputText2(e.target.value)}
      />
       <label htmlFor="ingredient" >ingredient</label>

      <input 
      type="radio" 
      id="name"
       name="fav_language"
        value="name"
        onChange={  (e)=> setInputText2(e.target.value)}
/>
       <label htmlFor="name">name</label>

      <input 
      type="radio" 
      id="first letter" 
      name="fav_language" 
      value="first letter"       
      onChange={  (e)=> setInputText2(e.target.value)}
/>
      <label htmlFor="first letter">first letter</label>
      <button 
      type='button'
      onClick={search}
      >search
      </button>
      </form>
      <div>
      {retornoApi.slice(0,12).map((receita)=>(
        <h5>{receita.strMeal}</h5>
      ))}
      </div>
    </div>
  );
}
