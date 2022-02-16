Feature: Cadastro de Usuario

Eu como consumidor 
Desejo realizar o cadastro no site 
Para que eu possa fazer as minhas compras 
E ter uma lista pessoal de itens que desejo comprar

Scenario: Cadastrar usuario valido

Given Estou navegando na loja
When Clico para realizar o cadastro
And Informo meu email para cadastro
And Preencho todos os dados
And Finalizo o cadastro
Then O sistema realiza meu cadastro com sucesso me autenticado na pagina 
