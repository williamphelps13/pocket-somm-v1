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

  
}

export default Recipes