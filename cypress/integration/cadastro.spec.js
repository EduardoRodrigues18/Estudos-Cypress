/// <reference types="cypress" />
import { ELEMENTOS as elementos } from '../pages/components/_common.components'
import Factory from '../dynamics/factory'

var Chance = require('chance');
var chance = new Chance();
var email = chance.email()
var cpf = Factory.gerarCPF()

context('Cadastrar com sucesso', () => {
    it('Cadastro', () => {
        cy.visit('/cadastre-se')
        cy.get(elementos.aceitarCoockie).click();
        cy.get(elementos.Cadastro.INPnomeCadastro).type(chance.first())
        cy.get(elementos.Cadastro.INPsobrenomeCadastro).type(chance.last())
        cy.get(elementos.Cadastro.INPEmailCadastro).type(email)
        cy.get(elementos.Cadastro.INPsenhaCadastro).type('12345@Edu')
        cy.get(elementos.Cadastro.INPconfimaSenha).type('12345@Edu')
        cy.get(elementos.Cadastro.INPcpf).type(cpf)
        cy.get(elementos.Cadastro.INPgenero).check('male')
        cy.get(elementos.Cadastro.INPcelular).type('54987665643')
        cy.get(elementos.Cadastro.aceitarTermos).click()
        cy.get(elementos.Cadastro.BTNcriarConta).click()
        cy.writeFile('./cypress/fixtures/example.json', {Email: email, senha: '12345@Edu'})
        cy.wait(17000)
        cy.url().should('not.have.a.property', 'cadastre-se')

    });
});