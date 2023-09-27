describe ('Petstore API Inventory Testing', () => {
    it('Create User', () => {
        let body = {
            "id": 0,
            "username": Cypress.env('username'),
            "firstName": "Nico",
            "lastName": "Simatupang",
            "email": "nico123@email.com",
            "password": Cypress.env('password'),
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
    
    const loginUser = {
        method : 'GET',
        url : '/user/login',
        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }
    it('Login Registered User', () => {
        cy.request(loginUser).as('loginUser')
        // loginUser = cy.request('GET', '/user', body).as('createUser')
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.eq(200);
        });
    })
})
