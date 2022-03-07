/// <reference types="cypress" />
import { ELEMENTOS as elementos } from '../pages/components/_common.components'

context('Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    it('login com sucesso',()=>{
        cy.fixture("example").then((user)=>{
            cy.get(elementos.aceitarCoockie).click()
            cy.get(elementos.Login.INPemailLogin).type(user.Email)
            cy.get(elementos.Login.INPsenhaLogin).type(user.senha)
            cy.get(elementos.Login.BTNentrar).click()
            cy.wait(5000)
            cy.url().should('not.contain', 'login')
        });
    })

    it('login com campo "E-mail" vazio',()=>{
        cy.fixture("example").then((user)=>{
            cy.get(elementos.aceitarCoockie).click()
            cy.get(elementos.Login.INPsenhaLogin).type(user.senha)
            cy.get(elementos.Login.BTNentrar).click()
            cy.get(elementos.Login.MSGemailOuCpfInvalido).should('contain', 'Este campo é obrigatório')
        });
    })
    it('login com campo "senha" vazio',()=>{
        cy.fixture("example").then((user)=>{
            cy.get(elementos.aceitarCoockie).click()
            cy.get(elementos.Login.INPemailLogin).type(user.Email)
            cy.get(elementos.Login.BTNentrar).click()
            cy.get(elementos.Login.MSGsenhaobrigatoria).should('contain', 'Este campo é obrigatório')
            
        });
    })
});