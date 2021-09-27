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
          <h3>{recipe.name}</h3>
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

  
}

export default Recipes