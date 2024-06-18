describe('VacancyPublish', () => {
    it('vacancy_publish', () => {
        cy.fixture('loginTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Некорректный логин')
            cy.get(".form-input--text").type(data.login)

            cy.log('Некорретный пароль')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()

            cy.log('Клик на кнопку Вакансии')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(7) > p").click()

            cy.log('Клик на кнопку Опубликовать')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(6) > section > div.infinite-loader.vacancy-list > div:nth-child(1) > div > div.vacancy-item__footer-wrapper > div > div.vacancy-footer__button-wrapper > button.button.button__background-color-green.button__size-small.button__color-white").click()

        })

    })
})