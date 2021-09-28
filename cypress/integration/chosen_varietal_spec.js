describe('Chosen Varietal Page', () => {

  beforeEach(() => {
    cy.intercept('https://api.edamam.com/api/recipes/v2?type=public&q=seafood&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime', {
      fixture: '../fixtures/recipe_test_data.json'
    })
    cy.visit('http://localhost:3000')
      .get('.0-white')
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
    cy.get('.return')
      .should('exist')
  });

  it('Should be able to click the Return to All Varietals button and return to the varietal form page', () => {
    cy.get('.return')
      .click()
    cy.get('.varietal-button')
      .its('length')
      .should('eq', 27)
  });

  it('Should be able to render the chosen varietal name heading', () => {
    cy.get('h2')
      .contains('Albarino')
  });

  it('Should be able to render the chosen varietal color', () => {
    cy.get('.color-info')
      .contains('Color - white')
  });

  it('Should be able to render the chosen varietal typical acidity levels', () => {
    cy.get('.acidity-info')
      .contains('Typical Acidity Levels - medium plus')
  });

  it('Should be able to render the chosen varietal typical body', () => {
    cy.get('.body-info')
      .contains('Typical Body - light | medium')
  });

  it('Should not be able to render the chosen varietal tannin when the varietal is a white wine', () => {
    cy.get('.tannin-info')
      .should('not.exist')
  });

  it('Should be able to render a recipe heading for the chosen varietal', () => {
    cy.get('.recipe-heading')
      .contains('Recipes for Seafood -')
  });

  it('Should be able to render a recipe card for the chosen varietal', () => {
    cy.get('.recipe-name')
      .contains('Chicken Vesuvio')
  });
})