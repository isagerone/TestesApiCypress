Cypress.Commands.add('getPetById', (Id) => { 
    cy.request({
       method: 'GET',
       url: `https://petstore.swagger.io/v2/pet/${Id}`,
       failOnStatusCode: false,
 })
})

Cypress.Commands.add('validatePetResponse', (response, expectedStatus, expectedBodyProperty, expectedValue) => { 
    expect(response.status).to.eq(expectedStatus)
    if (expectedBodyProperty && expectedValue) {
        expect(response.body).to.have.property(expectedBodyProperty, expectedValue)
    }
 })
