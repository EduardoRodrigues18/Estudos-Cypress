Feature: Cadastro

    Como usuário desejo realizar um cadastro
    Para acessar o site

    Scenario: Realizar cadastro com sucesso
      Given que acesso o site
      When informar meus dados
      And salvar
      Then devo ser cadastrado com sucesso