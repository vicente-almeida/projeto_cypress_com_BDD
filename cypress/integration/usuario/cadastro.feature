Feature: Cadastro de Usuario

    Eu como consumidor
    Desejo realizar o cadastro no site
    Para que eu possa fazer as minhas compras
    E ter uma lista pessoal de itens que desejo comprar

    Scenario: Cadastrar usuario valido

        Given Acesso a aplicacao
        When clico no botao de signin
        And informo meu email para cadastro
        And preencho todos os dados
        And finalizo o cadastro
        Then o sistema realiza meu cadastro com sucesso me autenticando na pagina

    Scenario: Cadastrar usuario com email invalido

        Given Acesso a aplicacao
        When clico no botao de signin
        And informo um email invalido
        Then a aplicacao notifica que o email utilizado é invalido


    Scenario: Cadastrar usuario com email ja cadastrado

        Given Acesso a aplicacao
        When clico no botao de signin
        And informo um email ja cadastrado na base
        Then a aplicacao notifica que o email utilizado ja possui cadastro
