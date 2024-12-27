/// <reference types="cypress" />
import { API_URL } from '../../support/apiConfig';

describe('PUT API Tests', () => {
  it('should make a successful PUT request', () => {
    const putData = {
      title: 'Cypress PUT Test',
      body: 'This is a test PUT request with Cypress.',
      userId: 1,
    };

    cy.request({
      method: 'PUT',
      url: `${API_URL}/1`,
      body: putData,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq(putData.title);
    });
  });
});
