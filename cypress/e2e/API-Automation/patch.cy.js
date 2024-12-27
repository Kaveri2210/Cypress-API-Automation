/// <reference types="cypress" />
import { API_URL } from '../../support/apiConfig';

describe('PATCH API Tests', () => {
  it('should make a successful PATCH request', () => {
    const patchData = {
      title: 'Cypress PATCH Test',
    };

    cy.request({
      method: 'PATCH',
      url: `${API_URL}/1`,
      body: patchData,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq(patchData.title);
    });
  });
});
