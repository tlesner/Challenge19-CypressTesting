describe('Tech Quiz Application', () => {
    beforeEach(() => {
      // Checks the user lands on the homepage before each test
      cy.visit('http://localhost:3001');
      cy.intercept('GET', '/api/questions/random',
        {
          fixture: 'questions.json'
        }).as('getQuestions')
    });
  
    it('should load the quiz application', () => {
      // Verify the test loads
      cy.get('button').contains('Start Quiz').should('be.visible');
    });
  
    it('Should start the test', () => {
      // Click the start button
      cy.get('button').contains('Start Quiz').click();
      
      // Simple error handling to make sure there is a page displayed
      cy.get('body').should('exist');
    });
  });