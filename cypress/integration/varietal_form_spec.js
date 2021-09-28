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

  it('Whites remaining should not be visble when no whites is selected, () => {
    
  });

  it('Reds remaining should not be visble when no reds is selected, () => {
 
  });

  it('Should be able to render all 10 white varietal buttons', () => {

  });

  it('Should be able to render the all 17 red varietal buttons', () => {

  });

  it('Should be able to render the wine guide headings heading', () => {
    
  });

  it('Should be able to render the wine guide labels heading', () => {
    
  });

  it('Should be able to render the correct number of varietals when the different acidity inputs are selected', () => {
    
  });

  it('Should be able to render the correct varietals when the low acidity input is selected', () => {
    
  });

  it('Should be able to render the correct number of varietals when the different body inputs are selected', () => {
    
  });

  it('Should be able to render the correct number of varietals when the different tannin inputs are selected', () => {
    
  });

  it('Should be able to render the correct number of varietals when the different oak inputs are selected', () => {

  });

  it('Should be able to render the correct number of varietals when the different floral inputs are selected', () => {

  });

  it('Should be able to render the correct number of varietals when the different minerality inputs are selected', () => {

  });

  it('Should be able to render the correct number of varietals when a random selection of inputs are selected', () => {

  });

  it('Should be able to click a varietal and be directed to the corresponding varietal page', () => {

  });

  it('Should have corresponding varietal URL when displaying a particular varietal page', () => {

  });
})