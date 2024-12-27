/// <reference types="cypress" />
import { API_URL } from '../../support/apiConfig';

describe('POST API Tests', () => {
  it('should make a successful POST request', () => {
    const postData = {
      title: 'Cypress POST Test',
      body: 'This is a test post created with Cypress.',
      userId: 1,
    };

    cy.request('POST', API_URL, postData)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq(postData.title);
      });
  });
});
