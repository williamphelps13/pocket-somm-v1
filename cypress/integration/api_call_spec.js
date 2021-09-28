describe('API Calls Error Messages', () => {

  beforeEach(() => {
    cy.intercept(`https://api.edamam.com/api/recipes/v2?type=public&q=${pairing}&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime`, {
      statusCode: 201,
      fixture: 'recipe_test_data.json',
    })
    cy.visit('http://localhost:3000')
      .get()
      .click()
  })
  
  it('Should be able to display 500 error on chosen varietal page', () => {

  })

  it('Should be able to display 404 error on chosen varietal page', () => {

  })

})