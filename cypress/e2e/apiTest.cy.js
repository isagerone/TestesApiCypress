import '../support/commands.js'

describe('Swagger Petstore', () => {
  beforeEach(() => {
    cy.visit("https://petstore.swagger.io/");
  });

  it('CT01: Consultar pet por Id com status available', () => {
    cy.getPetById(135).then((response) => {
    cy.validatePetResponse(response, 200, 'status', 'available')
    });
  });

  it('CT02: Consultar pet por Id com status pending', () => {
    cy.getPetById(81597053).then((response) => {
    cy.validatePetResponse(response, 404, 'message', 'Pet not found')
    });
  });

  it('CT03: Consultar pet por Id com status sold', () => {
    cy.getPetById(185379418).then((response) => {
    cy.validatePetResponse(response, 200, 'status', 'sold')
    });
  });
});