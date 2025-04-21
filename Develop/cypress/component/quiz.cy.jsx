import Quiz from '../../client/src/components/Quiz';
import React from "react";
import { testQuestions } from '../fixtures/questions.json'
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
    it('', () => {
        cy.mount(<Quiz />);

    });
});      