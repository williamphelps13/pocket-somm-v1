import React, { useState, useEffect } from 'react'
import './Recipes.css'
import { getRecipes } from '../../utilities/api-calls'

const Recipes = ({ chosenVarietal }) => {
  const [currentKeyword, setCurrentKeyword] = useState('')
  const [recipeError, setRecipeError] = useState('')
  const [recipes, setRecipes] = useState([])

  
}

export default Recipes