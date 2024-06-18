describe('VacancyCreate', () => {
    it('vacancy_create_positive', () => {
        cy.fixture('loginTest').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.main_url)

            cy.log('Некорректный логин')
            cy.get(".form-input--text").type(data.login)

            cy.log('Некорретный пароль')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()

            cy.log('Клик на кнопку Выбрать роль')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav > div:nth-child(7) > p").click()

            cy.log('Клик по кнопке Создать вакансию')
            cy.get("#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(6) > section > div.vacancies-block__filters-wrapper > button").click()

            cy.fixture('createVacancy').then(data => {
                cy.log('Навзание компании')
                cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input").type(data.name,{force: true})

                cy.log('Требования')
                cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > textarea").type(data.requirements)

                cy.log('Обязанности')
                cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(6) > div > textarea").type(data.responsibilities)

                cy.log("Клик на кнопку Обновить вакансию")
                cy.get("body > div:nth-child(9) > div.desktop-modal > div > div.vacancy-add-form-wrapper > form > div.form__buttons > div > button").click({force:true})
            })
        })

    })
})