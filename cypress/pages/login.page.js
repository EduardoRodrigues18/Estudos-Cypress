import { ELEMENTOS as elementos } from './components/_common.components'

export class NaturaLogin {
    static logarSucesso() {
        cy.fixture("example").then((user)=>{
            cy.get(elementos.aceitarCoockie).click()
            cy.get(elementos.Login.INPemailLogin).type(user.Email)
            cy.get(elementos.Login.INPsenhaLogin).type(user.senha)
            cy.get(elementos.Login.BTNentrar).click()
            cy.wait(5000)
            cy.url().should('not.contain', 'login')
        });
    }

    static logarSemEmail() {
        cy.fixture("example").then((user)=>{
            cy.get(elementos.aceitarCoockie).click()
            cy.get(elementos.Login.INPsenhaLogin).type(user.senha)
            cy.get(elementos.Login.BTNentrar).click()
            cy.get(elementos.Login.MSGemailOuCpfInvalido).should('contain', 'Este campo é obrigatório')
        });
    }

    static logarSemSenha() {
        cy.fixture("example").then((user)=>{
            cy.get(elementos.aceitarCoockie).click()
            cy.get(elementos.Login.INPemailLogin).type(user.Email)
            cy.get(elementos.Login.BTNentrar).click()
            cy.get(elementos.Login.MSGsenhaobrigatoria).should('contain', 'Este campo é obrigatório')
            
        });
    }
}

