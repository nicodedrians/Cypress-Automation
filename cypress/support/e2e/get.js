describe ('Petstore API Inventory Testing', () => {
    it('Get Store Inventory - GET', () => {
        cy.request('/store/inventory').as('getInventory');
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })
})