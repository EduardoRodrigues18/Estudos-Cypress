/// <reference types="cypress" />
import Factory from '../dynamics/factory'
import { ELEMENTOS as elementos } from './components/_common.components'
var Chance = require('chance');
var chance = new Chance();

cpf = Factory.gerarCPF()

export class NaturaCadastro {
    static cadastrarSucesso() {
        cy.visit('/cadastre-se')
        cy.get(elementos.aceitarCoockie);
        cy.get(elementos.Cadastro.INPnomeCadastro).type(chance.first())
        cy.get(elementos.Cadastro.INPsobrenomeCadastro).type(chance.last())
        cy.get(elementos.Cadastro.INPEmailCadastro).type(email)
        cy.get(elementos);
        cy.get(elementos.Cadastro.INPgenero).check('male')
        cy.get(elementos.Cadastro.aceitarTermos())
    }
}

