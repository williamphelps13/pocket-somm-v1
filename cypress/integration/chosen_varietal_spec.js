describe('Chosen Varietal Page', () => {

  beforeEach(() => {
    cy.intercept(`https://api.edamam.com/api/recipes/v2?type=public&q=${pairing}&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime`, {
      statusCode: 201,
      fixture: 'recipe_test_data.json',
    })
    cy.visit('http://localhost:3000')
      .get()
      .click()
  })

  it('Should have varietal url when displaying chosen varietal page', () => {
    cy.url().should('eq', 'http://localhost:3000/Albarino')
  })

  it('Should be able to render the page heading', () => {
    cy.get('h1')
      .contains('Pocket Somm')
  });

  it('Should be able to render the app purpose', () => {
    cy.get('.purpose')
      .contains('Serving up wine varietal guidance and food pairings.')
  });

  it('Should be able to render the app O vs OE key', () => {
    cy.get('.key')
      .contains('E - European countries | OE - Outside Europe')
  });

  it('Should be able to render the Return to All Varietals button', () => {
  
  });

  it('Should be able to click the Return to All Varietals button and return to the varietal form page', () => {
  
  });

  it('Should be able to render the chosen varietal name heading', () => {
  
  });

  it('Should be able to render the chosen varietal name heading', () => {
  
  });

  it('Should be able to render the chosen varietal color', () => {
  
  });

  it('Should be able to render the chosen varietal typical acidity levels', () => {
  
  });

  it('Should be able to render the chosen varietal typical body', () => {
  
  });

  it('Should not be able to render the chosen varietal tannin when the varietal is a white wine', () => {
  
  });

  it('Should be able to render the chosen varietal similar varietals', () => {
  
  });

  it('Should be able to render the chosen varietal favorite pairings', () => {
  
  });

  it('Should be able to render a recipe heading for the chosen varietal', () => {
  
  });

  it('Should be able to render a recipe card for the chosen varietal', () => {
  
  });

  it('Should be able to render a loading message in the recipe section for the chosen varietal', () => {
  
  });

  it('Should be able to click a similar varietal and be directed to that varietals page', () => {
  
  });

  it('Should be able to click a different favorite pairing and render a recipe card for that pairing', () => {
  
  });





})