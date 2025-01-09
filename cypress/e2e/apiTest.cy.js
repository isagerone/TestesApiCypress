import '../support/commands.js'
import massa from'../fixtures/massaDeDados.json'

describe('Swagger Petstore', () => {
  beforeEach(() => {
    cy.visit(massa.UrlBase);
    cy.get('.ch2-dialog-actions > .ch2-allow-all-btn').click();
    
  });

  it('CT01: Consultar pet por Id com status available', () => {
    cy.getPetById(massa.IdAvailable).then((response) => {
    cy.validatePetResponse(response, 200, 'status', 'available')
    });   
  });

  it('CT02: Consultar pet por Id com status pending', () => {
    cy.getPetById(massa.IdPending).then((response) => {
    cy.validatePetResponse(response, 200, 'status', 'pending')
    });
  });

  it('CT03: Consultar pet por Id com status sold', () => {
    cy.getPetById(massa.IdSold).then((response) => {
    cy.validatePetResponse(response, 200, 'status', 'sold')
    }); 
  });

  it('CT04: Consultar pet com Id inválido', () => {
    cy.getPetById(massa.IdInvalido).then((response) => {
    cy.validatePetResponse(response, 404, 'message', 'Pet not found')
    });
  });

  it('CT05: Consultar pet com Id em branco', () => {
    cy.getPetById(massa.IdEmBranco).then((response) => {
      expect(response.status).to.eq(405);
      cy.log(response.status)
    });
  });
});