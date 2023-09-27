it('Create User', () => {
    let body = {
        "id": 0,
        "username": Cypress.env('username'),
        "firstName": "Nico",
        "lastName": "Simatupang",
        "email": "nico123@email.com",
        "password": "nico123",
        "phone": "081234567890",
        "userStatus": 0
    }
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    // Adds new Todo item by defining Todo name
    cy.get('@createUser').then(createUser => {
        expect(createUser.status).to.eq(200);
    });
});