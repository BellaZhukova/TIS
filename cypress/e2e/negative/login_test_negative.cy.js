describe('Authorization_negative', () => {
    it('None_existent_login', () => {
        cy.fixture('loginTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Некорректный логин')
            cy.get(".form-input--text").type(data.none_existent_login)

            cy.log('Некорретный пароль')
            cy.get('.form-input--password').type(data.none_existent_password)

            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
        })
    })
})