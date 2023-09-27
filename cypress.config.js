const {defineConfig} = require('cypress')

module.exports = defineConfig({
    e2e : {
        baseUrl : 'https://petstore.swagger.io/v2',
        specPattern : 'cypress/support/e2e',
        supportFile : false
    },
    env : {
        username : 'nicodedrian',
        password : 'nico123'
    }
})