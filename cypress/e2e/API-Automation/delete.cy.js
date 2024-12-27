/// <reference types="cypress" />
import { API_URL } from '../../support/apiConfig';

describe('DELETE API Tests', () => {
  it('should make a successful DELETE request', () => {
    cy.request('DELETE', `${API_URL}/1`)
      .then((response) => {
        expect(response.status).to.eq(200);
      });
  });
});
