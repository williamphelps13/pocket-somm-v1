export const cleanRecipeData = (data) => {
  return data.hits.map(element => {
    const {label, image, source, url, totalTime, ingredientLines} = element.recipe
    return (
      {
        name: label,
        image: image,
        source: source,
        url: url,
        serves: `Serves - ${element.recipe.yield}`,
        time: totalTime ? `Time - ${totalTime}` : '',
        ingredients: ingredientLines,
      }
    )   
  })
}