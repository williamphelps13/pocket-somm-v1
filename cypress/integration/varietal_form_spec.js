describe('Varietal Form Page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should have homepage url when displaying varietal form page', () => {
    cy.url().should('eq', 'http://localhost:3000/')
  });

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

  it('Should be able to render the page directions', () => {
    cy.get('.directions')
      .contains('Select a wine varietal to see immediate pairings or refine your current preferences with our selection guide')
  });

  it('Should be able to render the whites remaining heading', () => {
    cy.get('.whitesLeft')
      .contains('Whites Remaining')
  });

  it('Should be able to render the reds remaining heading', () => {
    cy.get('.redsLeft')
      .contains('Reds Remaining')
  });

  it('Whites remaining should not be visble when no whites is selected', () => {
    cy.get('input[value="not white"]')
      .click()
    cy.get('.whitesLeft')
      .should('not.exist')
  });

  it('Reds remaining should not be visble when no reds is selected', () => {
    cy.get('input[value="not red"]')
      .click()
    cy.get('.redsLeft')
      .should('not.exist')
  });

  it('Should be able to render all 27 varietal buttons', () => {
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
  });

  it('Should be able to render the wine guide headings', () => {
    cy.get('h2')
      .contains('Wine Color')
    cy.get('h2')
      .contains('Wine Structure')
    cy.get('h2')
      .contains('Wine Tasting Notes')
  });

  it('Should be able to render the wine guide sub headings', () => {
    cy.get('h3')
      .contains('White')
    cy.get('h3')
      .contains('Red')
    cy.get('h3')
      .contains('Acidity')
    cy.get('h3')
      .contains('Body')
    cy.get('h3')
      .contains('Tannin')
    cy.get('h3')
      .contains('Oak')
    cy.get('h3')
      .contains('Floral')
    cy.get('h3')
      .contains('Minerality')
  });

  it('Should be able to render wine guide labels', () => {
    cy.get('label')
      .contains('No')
    cy.get('label')
      .contains('Low')
    cy.get('label')
      .contains('Full')
    cy.get('label')
      .contains('High')
  });

  it('Should be able to render the correct number of varietals when white yes is selected', () => {
    cy.get('input[name="white"][value="white"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
  })

  it('Should be able to render the correct number of varietals when red yes is selected', () => {
    cy.get('input[name="red"][value="red"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
  })

  it('Should be able to render the correct number of varietals when the different acidity inputs are selected', () => {
    cy.get('input[name="acidity"][value="no preference"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
    cy.get('input[name="acidity"][value="low"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 2)
    cy.get('input[name="acidity"][value="medium"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 15)
    cy.get('input[name="acidity"][value="high"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 13)
  });

  it('Should be able to render the correct number of varietals when the different body inputs are selected', () => {
    cy.get('input[name="body"][value="no preference"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
    cy.get('input[name="body"][value="light"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 8)
    cy.get('input[name="body"][value="medium"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 18)
    cy.get('input[name="body"][value="full"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 12)
  });

  it('Should be able to render the correct number of varietals when the different tannin inputs are selected', () => {
    cy.get('input[name="tannin"][value="no preference"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
    cy.get('input[name="tannin"][value="low"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 15)
    cy.get('input[name="tannin"][value="medium"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 22)
    cy.get('input[name="tannin"][value="high"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 16)
  });

  it('Should be able to render the correct number of varietals when the different oak inputs are selected', () => {
    cy.get('input[name="oak"][value="no preference"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
    cy.get('input[name="oak"][value="no"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 9)
    cy.get('input[name="oak"][value="yes"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 18)
  });

  it('Should be able to render the correct number of varietals when the different floral inputs are selected', () => {
    cy.get('input[name="floral"][value="no preference"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
    cy.get('input[name="floral"][value="no"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 4)
    cy.get('input[name="floral"][value="yes"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 23)
  });

  it('Should be able to render the correct number of varietals when the different minerality inputs are selected', () => {
    cy.get('input[name="minerality"][value="no preference"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 27)
    cy.get('input[name="minerality"][value="no"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 8)
    cy.get('input[name="minerality"][value="yes"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 19)
  });

  it('Should be able to render the correct number of varietals when a random selection of inputs are selected', () => {
    cy.get('input[name="white"][value="white"]')
      .click()
    cy.get('input[name="red"][value="red"]')
      .click()
    cy.get('input[name="acidity"][value="medium"]')
      .click()
    cy.get('input[name="body"][value="medium"]')
      .click()
    cy.get('input[name="tannin"][value="medium"]')
      .click()
    cy.get('input[name="oak"][value="yes"]')
      .click()
    cy.get('input[name="floral"][value="yes"]')
      .click()
    cy.get('input[name="minerality"][value="yes"]')
      .click()
    cy.get('.varietalButton')
      .its('length')
      .should('eq', 1)
  });

  it('Should be able to click a varietal and be directed to the corresponding varietal page', () => {
    cy.intercept('https://api.edamam.com/api/recipes/v2?type=public&q=seafood&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime', {
      statusCode: 201,
      fixture: '../fixtures/recipe_test_data.json',
    })
    cy.get('.0white')
      .click()
    cy.get('h2')
      .contains('Albarino')
  });

  it('Should have corresponding varietal URL when displaying a particular varietal page', () => {
    cy.intercept('https://api.edamam.com/api/recipes/v2?type=public&q=seafood&app_id=533846ff&app_key=%20bc8343dc9b259018b578577a1e32eaaf&field=label&field=image&field=source&field=url&field=yield&field=ingredientLines&field=totalTime', {
      statusCode: 201,
      fixture: '../fixtures/recipe_test_data.json',
    })
    cy.get('.0white')
      .click()
    cy.url().should('eq', 'http://localhost:3000/Albarino')
  });
})