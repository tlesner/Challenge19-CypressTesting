import Quiz from "../../client/src/components/Quiz";
import React from "react";

describe('Quiz Component', () => {
    beforeEach(() => {
      cy.intercept(
        {
          method: 'GET',
          url: '/api/questions/random'
        },
        {
          fixture: 'questions.json',
          statusCode: 200
        }
        ).as('randomizeQuestions')
      });