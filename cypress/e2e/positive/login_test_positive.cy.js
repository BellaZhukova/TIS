describe('Authorization_positive', () => {
    it('None_existent_login', () => {
        cy.fixture('loginTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Логин')
            cy.get(".form-input--text").type(data.login)

            cy.log('Пароль')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
        })
    })
})