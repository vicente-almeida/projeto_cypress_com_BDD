Feature: Login de Usuario

    Eu como consumidor
    Que já possuo cadastro
    Desejo realizar o login no site
    Para que eu possa fazer as minhas compras
    E ter uma lista pessoal de itens que desejo comprar

    Scenario: Login usuario valido

        Given Acesso a aplicacao
        When  clico no botao de signin
        And preenchi os dados de login com usuario valido
        Then o sistema realiza meu login com sucesso me autenticando na pagina

    Scenario: Login com usuario valido e senha errada

        Given Acesso a aplicacao
        When  clico no botao de signin
        And preenchi o campo email com um usuario valido
        And preenchi o campo senha com uma senha invalida
        And teclo Enter
        Then o sistema me notifica que a senha e invalida

    Scenario: Login com email invalido e senha correta

        Given Acesso a aplicacao
        When  clico no botao de signin
        And preenchi o campo email com um usuario invalido
        And preenchi o campo senha com uma senha correta
        Then o sistema me notifica que o email e invalido

    Scenario: Login com email nao cadastraddo e senha correta

        Given Acesso a aplicacao
        When  clico no botao de signin
        And preenchi os campos de login com um usuario nao cadastrado
        And clico para realizar o login
        Then o sistema me notifica que a autenticacao falhou

    Scenario: Login sem informar email

        Given Acesso a aplicacao
        When  clico no botao de signin
        And preenchi os campos de login sem informar email
        And clico para realizar o login
        Then o sistema me notifica que o campo email é obrigatorio

    Scenario: Login sem informar senha

        Given Acesso a aplicacao
        When  clico no botao de signin
        And preenchi os campos de login sem informar senha
        And clico para realizar o login
        Then O sistema me notifica que o campo senha é obrigatorio


