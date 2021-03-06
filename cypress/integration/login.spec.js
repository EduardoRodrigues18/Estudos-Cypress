/// <reference types="cypress" />
import { should } from 'chai';
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
            cy.url().should('not.contain', 'login')
        });
    })

    it('login com campo "E-mail" vazio',()=>{
        cy.fixture("example").then((user)=>{
            cy.get(elementos.aceitarCoockie).click()
            cy.get(elementos.Login.INPsenhaLogin).type(user.senha)
            cy.get(elementos.Login.BTNentrar).click()
            cy.get(elementos.Login.MSGemailOuCpfInvalido).should('contain', 'Não conseguimos realizar seu login, por favor confirme seu login e senha.')
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