describe('Registration_positive', () => {
    it('None_existent_register', () => {
        cy.fixture('registerTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Логин')
            cy.get("#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input").type(data.none_existent_login)

            cy.log('Почта')
            cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input').type(data.email)

            cy.log('Пароль')
            cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input').type(data.password)

            cy.log('Повторите пароль')
            cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input').type(data.password)

            cy.log('Клик по кнопке Войти')
            cy.get("#app > div.page > div > section > form > div.form__buttons > div:nth-child(4)").click()
        })
    })
})