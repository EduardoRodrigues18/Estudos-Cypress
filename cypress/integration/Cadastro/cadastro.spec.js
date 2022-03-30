/// <reference types="cypress" />
import { NaturaCadastro } from '../../pages/cadastro.page';

context('Cadastrar com sucesso', () => {
    it('Cadastro', () => {
        NaturaCadastro.cadastrarSucesso()

    });
});