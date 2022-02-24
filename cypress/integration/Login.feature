Feature: Login

    Como usuário desejo realizar login
    Para acessar o site

    Scenario: Realizar Login com sucesso
      Given que acesso a página de login
      When informar meus dados
      And clicar em entrar
      Then devo estar logado com sucesso