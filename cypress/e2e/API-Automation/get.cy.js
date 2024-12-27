/// <reference types="cypress" />
import { API_URL } from '../../support/apiConfig';

describe('GET API Tests', () => {
  it('should make a successful GET request', () => {
    cy.request('GET', API_URL)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
  });
});
