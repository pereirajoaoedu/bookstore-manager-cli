# Sumário

Clique em uma das opções para ser direcionado diretamente ao tópico desejado.

* [Descrição do Projeto](#-descrição-do-projeto)
* [Objetivo](#-objetivo)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Requisitos para Execução](#-requisitos-para-execução)
* [Configuração do Banco de Dados](#-configuração-do-banco-de-dados)
* [Instalação](#-instalação)
* [Execução](#-execução)
* [Arquitetura do Projeto](#-arquitetura-do-projeto)
* [Funcionalidades Implementadas](#-funcionalidades-implementadas)
* [Estrutura de Pastas](#-estrutura-de-pastas)
* [Exemplos de Utilização](#-exemplos-de-utilização)
* [Integrantes da Equipe](#-integrantes-da-equipe)
* [Link do Kanban](#-link-do-kanban)

# 📝 Descrição do Projeto

O *Book Manager CLI* é um sistema de gestão de livros para uma pequena livraria, permitindo o usuário de realizar a gestão de seus livros, realizando cadastros, alterações e até exclusões do mesmos, permitindo associar os autores, gerenciar os livros que estão na livraria ou emprestados aos clientes, com dados em tempo real.

Sempre que o sistema for iniciado, será validado se existe a comunicação com o banco de dados, e em seguida se as tabelas existem. Caso não existam, serão criadas, exibindo uma barra de progresso enquanto analisa e/ou cria o banco e suas tabelas.

# 🎯 Objetivo

Esta documentação tem como objetivo apresentar a funcionalidade do projeto de forma detalhada, orientando de como proceder para instalar, executar e testar o mesmo, com exemplos práticos e com passo a passo.

A ideia é que com a documentação o usuário consiga compreender o que é o projeto, como instalar e fazer uso do mesmo.

# 💻 Tecnologias Utilizadas

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TSX](https://img.shields.io/badge/TSX-3178C6?style=for-the-badge) 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![node-postgres](https://img.shields.io/badge/node--postgres-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

# 📋 Requisitos para Execução

1. Possuir os seguintes programas/recursos instalados:
* [Visual Studio Code](https://code.visualstudio.com/download?_exp_download=d53503e735);
* [Node.js](https://nodejs.org/pt-br/download);
* [Postgree SQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads).

# 🗄️ Configuração do Banco de Dados

Ao iniciar o projeto, o sistema verificará se o banco de dados existe, que caso não exista, irá criar o mesmo. Na sequência analisará cada tabela, e as que estiverem faltando, serão criadas automaticamente, exibindo uma barra de progresso conforme leitura de cada etapa, como por exemplo:


[█████░░░░░] 50% | Verificando tabela livro...

# 📦 Instalação

1. Crie uma pasta em seu computador para poder salvar o projeto. Aponte seu github para esta pasta e no terminal do mesmo, digite o seguinte comando para realizar o clone do projeto:

`git clone https://github.com/pereirajoaoedu/bookstore-manager-cli.git`

2. Em seguida, abra seu Visual Studio Code e aponte para a pasta em que se encontra o projeto recém clonado e abra o seu terminal.

# 🚀 Execução

Para iniciar o projeto no seu ambiente de desenvolvimento, é necessário que o Postgree esteja instalado e com acesso ao usuario *postgrees* com a senha *postgrees*.

```bash
npm run start
```

# 🏗️ Arquitetura do Projeto

O projeto foi estruturado utilizando o padrão de camadas para separar as responsabilidades e facilitar a manutenção:

* **Interface (CLI):** Ponto de entrada da aplicação, responsável por capturar as opções digitadas pelo usuário no terminal.
* **Services:** Camada que concentra todas as regras de negócio (ex: verificar se um livro já existe antes de cadastrar).
* **Repositories:** Camada responsável exclusivamente pela comunicação com o PostgreSQL, isolando as queries SQL do restante do código.
* **ConnectionFactory:** Gerenciamento das conexões de banco de dados e variáveis de ambiente (Dotenv).
  
# ✨ Funcionalidades Implementadas

- [x] Conexão com banco de dados relacional PostgreSQL.
- [x] Cadastro, Listagem, Atualização e Exclusão de Autores, Livros, Clientes e Empréstimos;
- [x] Relatórios distintos com apresentações de dados focada em determinados cenários;
- [x] Validação de dados, para garantir que os registros sejam realizados sem erros. 

# 📁 Estrutura de Pastas
```text
📦 bookstore-manager-cli
 ┣ 📂 controllers    # Lida com as entradas e saídas no terminal
 ┣ 📂 database       # Lida com a comunicação com o banco de dados, para teste de conexão e criação do banco e suas tabelas
 ┣ 📂 menus          # Menus de acesso às funcionalidades
 ┣ 📂 models         # Tipagens e interfaces do TypeScript
 ┣ 📂 repositories   # Funções que interagem direto com o banco (INSERT, SELECT, UPDATE e DELETE)
 ┣ 📂 services       # Lógica e regras de negócio da livraria
 ┣ 📂 src            # Consta o arquivo main.ts
 ┗ 📂 utils          # Arquivos que tratam datas, mensagens e comportamentos de apoio no programa
```
# 💡 Exemplos de Utilização

No exemplo a seguir, será simulado o cadastro de um autor.

1. Ao acessar o programa, o seguinte menu será exibido:
```bash
===============================
Bem-vindo ao Bookstore Manager!
===============================
1. Gerenciar Autores
2. Gerenciar Livros
3. Gerenciar Clientes
4. Gerenciar Empréstimos
5. Relatórios
6. Sair
===============================
Escolha uma opção: 
```
2. Escolhendo a opção 1, você será levado para o Menu de Autores:

```bash
===============================
Gerenciamento de Autores
===============================
1. Cadastrar Autor
2. Listar Autores
3. Consultar Autor por ID
4. Atualizar Autor
5. Remover Autor
6. Voltar ao Menu Principal
===============================
Escolha uma opção: 

```

3. Escolhendo a opção 1, será possível cadastrar o autor desejado:
```bash
=== Cadastro de Autor ===
Nome do autor: Machado de Assis
Data de nascimento (DD/MM/AAAA): 29/09/1908
Resumo: Joaquim Maria Machado de Assis foi um escritor brasileiro, amplamente reconhecido por críticos, estudiosos, escritores e leitores como o maior expoente da literatura brasileira.
```
4. Ao cadastrar, retornará uma mensagem de confirmação, retornando ao Menu de Autores em seguida:
```bash
Cadastro realizado com sucesso!
```

5. Para visualizar os autores cadastrados, basta escolher a opção 2 e o resultado será semelhante ao a seguir:
```bash
---------------------------
ID: 1
Nome: Fernando Feltrin
Data de Nascimento: 01/01/1980
Resumo: Especialista em Neuroimagem, Neuropsicologia e Neurociências, com atuação em diagnóstico por imagem, avaliação neuropsicológica, docência e pesquisa.
---------------------------
ID: 2
Nome: Machado de Assis
Data de Nascimento: 29/09/1908
Resumo: Joaquim Maria Machado de Assis foi um escritor brasileiro, amplamente reconhecido por críticos, estudiosos, escritores e leitores como o maior expoente da literatura brasileira.
---------------------------
```
# 👥 Integrantes da Equipe

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/pereirajoaoedu.png" width="150px;" alt="Foto do João Eduardo"/><br>
      <sub><b>João Eduardo</b></sub>
    </td>
    <td>
      <h1>João Eduardo Miranda da Silva Pereira</h1>
      <strong>Curso</strong>:<br> 
      Fundamentos para Back-end: JavaScript, TypeScript e PostgreSQL<br><br>
      <strong>Matrícula</strong>:<br>
      26861772504671<br><br>
      <strong>Descrição</strong>:<br>
      Desenvolvedor solo do projeto. Optei por realizar todas as etapas do zero, desde a arquitetura até os testes, para consolidar meu aprendizado. O uso de IA limitou-se ao papel de material de apoio para esclarecer dúvidas técnicas e de sintaxe, sem o uso de geração de código automatizado.
    </td>
  </tr>
</table>

# 📊 Link do Kanban

O Kanban do projeto foi desenvolvido utilizando a plataforma Trello, sendo visualizado [clicando aqui](https://trello.com/b/VYA3HQyr/bookstore-manager-cli).
