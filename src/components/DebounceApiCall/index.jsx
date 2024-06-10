import React, { useEffect, useState } from 'react'
import './debounce.css'
import useDebounce from './useDebounce';

const DebounceApiCall = () => {

  const [searchParam, setSearchParam] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [pending, setPending] = useState(false);

  const debounceParamValue = useDebounce(searchParam, 1500);

  async function fetchListOfRecipes() {
    try {
      setPending(true);
      const apiResponse = await fetch(`https://dummyjson.com/recipes/search?q=${debounceParamValue}`);
      const result = await apiResponse.json();


      if (result?.recipes?.length > 0) {
        setRecipes(result.recipes);
      }else{
        setRecipes([])
      }

    } catch (error) {
      console.log(error.message);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetchListOfRecipes();
  }, [debounceParamValue]);

  return (
    <div className='debounce-container'>
      <h1>Debounce API Call</h1>
      <div className="search-wrapper">
        <input
          value={searchParam}
          type="text"
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder='Enter Recipe Name'
        />
        {
          pending ? <h3>Pending Please wait</h3> : null
        }
        <ul>
          {
            recipes?.length > 0 ? recipes.map((recipeItem) => <li>
              {recipeItem.name}
            </li>) : <h3>No Recipe found</h3>
          }
        </ul>
      </div>
    </div>
  )
}

export default DebounceApiCall