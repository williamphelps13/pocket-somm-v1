import { cleanRecipeData } from './data-cleaning'

export const getRecipes = (pairing) => {
  return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${pairing}&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status === 404) {
        throw Error('Recipes not currently available - Destination not found (404 error).')
      } else if (response.status === 500) {
        throw Error('Recipes not currently available - Something on our end is not working right now (500 error).')
      } else {
      throw Error('Recipes not currently available - Something went wrong.')
      }
    })
    .then(data => cleanRecipeData(data))
}