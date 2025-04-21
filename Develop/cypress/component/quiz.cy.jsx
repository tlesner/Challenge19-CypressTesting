import Quiz from '../../client/src/components/Quiz';
import React from "react";
import '@testing-library/cypress/add-commands';


describe('Quiz Component', () => {
    beforeEach(() => {
      cy.intercept(
        { method: 'GET', url: '/api/questions/random' },
        { fixture: 'questions.json', statusCode: 200 }
        ).as('getQuestions')
      });

    it('Should render the Quiz on the page.', () => {
		cy.mount(<Quiz />);
	});

    it('Should have a button that reads "Start Quiz".', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
    });

    it('Should let the user answer questions and complete the quiz', () => {
        cy.mount(<Quiz />);
        // Checks if the start button and first question is displayed
        cy.get('button').contains('Start Quiz').click();
        cy.get('h2').should('exist');
        //Checks for question answered
        cy.get('button').contains('1').click();
        //Once test is complete, is should comfirm completion
        cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    });
    it('Should let the user restart the Quiz', () => {
        cy.mount(<Quiz />);
        cy.get('button').contains('Start Quiz').click();
        //Checks for question answered
        cy.get('button').contains('1').click();
        //Should let user restart quiz.
        cy.get('button').contains('Take New Quiz').click();
        //confirm the test is started
        cy.get('button').should('exist');
    });
});