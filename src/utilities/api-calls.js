import { cleanRecipeData } from './data-cleaning'

export const getRecipes = (pairing) => {
  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${pairing}&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf`)
    .then(response => {
      if (response.ok) {
        return response.json()
    })
    .then(data => cleanRecipeData(data))
}