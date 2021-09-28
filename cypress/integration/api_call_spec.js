describe('API Calls Error Messages', () => {
  
  it('Should be able to display 404 error on chosen varietal page', () => {
    cy.intercept(`https://api.edamam.com/api/recipes/v2?type=public&q=seafood&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime`, {
      statusCode: 404,
      fixture: 'recipe_test_data.json',
    })
    cy.visit('http://localhost:3000')
      .get('.0white')
      .click()
    cy.get('.recipeError')
      .contains('Recipes not currently available - Destination not found (404 error).')
  })

  it('Should be able to display 500 error on chosen varietal page', () => {
    cy.intercept(`https://api.edamam.com/api/recipes/v2?type=public&q=seafood&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime`, {
      statusCode: 500,
      fixture: 'recipe_test_data.json',
    })
    cy.visit('http://localhost:3000')
      .get('.0white')
      .click()
    cy.get('.recipeError')
      .contains('Recipes not currently available - Something on our end is not working right now (500 error).')
  })

})