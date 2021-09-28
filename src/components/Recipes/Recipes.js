import React, { useState, useEffect } from 'react'
import './Recipes.css'
import { getRecipes } from '../../utilities/api-calls'

const Recipes = ({ chosenVarietal }) => {
  const [currentKeyword, setCurrentKeyword] = useState('')
  const [recipeError, setRecipeError] = useState('')
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    if (chosenVarietal) {
      getPairings(chosenVarietal.pairingPossibilities[0])
    }
  }, [chosenVarietal])

  let possiblePairings

  if (chosenVarietal) {
    possiblePairings = chosenVarietal.pairingPossibilities.map((pairingKeyword, index) => {
      return (
        <li key={index}> 
          <button value={pairingKeyword} onClick={event => getPairings(pairingKeyword)}>
            {pairingKeyword}
          </button>
        </li>
      )  
    })
  }
  
  const getPairings = (pairingKeyword) => {
    setRecipes('')
    setCurrentKeyword(pairingKeyword.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()))

    getRecipes(pairingKeyword)
      .then(data => {
        displayRecipes(data)
        setRecipeError('')
      })
      .catch(error => setRecipeError(error.message))
  }

  const displayRecipes = (pairings) => {
    const recipes = pairings.map((recipe, index) => {
      const list = recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
      return (
        <article key={index}>
          <h4>{recipe.name}</h4>
          <img src={recipe.image} alt={recipe.name} />
          <p>Source - <a href={recipe.url}>{recipe.source}</a></p>
          <p>{recipe.serves}</p>
          <p>{recipe.time}</p>
          <p>Ingredients - </p>
          <ul>
              {list}
          </ul>
        </article>
        )
    })
    
    setRecipes(recipes)
  }

  return (
    <>
      <p>Favorite Pairings - Click to See Recipe Category (Currently {currentKeyword}) </p>
      <ul>
        {possiblePairings}
      </ul>
      <h3>Recipes for {currentKeyword} - </h3>
      {!recipes && !recipeError && <h4>Loading...</h4>}
      {recipeError && <h4>{recipeError}</h4>}
      {recipes}
    </>
  )
}

export default Recipes