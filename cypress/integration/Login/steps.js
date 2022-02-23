/// <reference types="cypress" />
import { ELEMENTOS as elementos } from '../../pages/components/_common.components'

Given(/^que acesso a página de login$/, () => {
    cy.visit('/login')
});

When(/^informar meus dados$/, () => {
    cy.fixture("example").then((user)=>{
    cy.get(elementos.aceitarCoockie).click()
    cy.get(elementos.Login.INPemailLogin).type(user.Email)
    cy.get(elementos.Login.INPsenhaLogin).type(user.senha)
    })
});

When(/^clicar em entrar$/, () => {
    cy.get(elementos.Login.BTNentrar).click()
});

Then(/^devo estar logado com sucesso$/, () => {
    cy.url().should('not.contain', 'login')
});
