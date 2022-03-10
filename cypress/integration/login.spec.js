/// <reference types="cypress" />
import { ELEMENTOS as elementos } from '../pages/components/_common.components'
import {NaturaLogin} from '../pages/login.page'

context('Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    it('login com sucesso',()=>{
        NaturaLogin.logarSucesso()
    })

    it('login com campo "E-mail" vazio',()=>{
        NaturaLogin.logarSemEmail()
    })
    it('login com campo "senha" vazio',()=>{
        NaturaLogin.logarSemSenha()
    })
});