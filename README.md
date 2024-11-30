# Plataforma de Video Sportube

## Como Inicializar o Projeto
* Este projeto é composto por uma aplicação Angular (frontend) e um servidor JSON (backend) para gerenciar os dados. Siga os passos abaixo para rodar ambos os ambientes:

### Pré-requisitos
* Certifique-se de ter os seguintes itens instalados no seu sistema:

* Node.js (versão 16 ou superior)
* Angular CLI
* npm (Node Package Manager)

### Passos para Inicialização
* 1 Clone o Repositório:
`git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
`

* 2 Instale as Dependências:

    * Navegue até a pasta do projeto e execute o comando:   
`npm install`

* 3 Inicialize o Frontend (Angular)
    * Para rodar a aplicação Angular, utilize: `ng serve`
    * A aplicação estará disponível no navegador em http://localhost:4200.
* 4 Inicialize o Backend (JSON-Server)
    * Em outro terminal, rode o comando: `npm run json-server
`






## Sobre o projeto
    - O projeto VideoPlataform Sportube utiliza de ferramentas atuais para um frontend bem arquitetado e robusto.
    - O projeto é desenvolvido em Angular18, utilizando o banco de dados json-sever, para simular um servidor local.
    - O sportube ultiliza serviços para manter a lógica das requisições independentes e reutilizáveis.
    - O projeto implementa estado global, utilizando o `NgRx` e o `RxJs`.

### requisitos

* Rotas da Plataforma:
    * Login [ x ]
    * Home / pagina principal / [ x ]
    * Rota para todos os vídeos [ x ]
    * Rota para  video selecionado [ x ]
    * Rota de favoritos [ x ]
    * Rota para videos curtidos [ x ]
    * layout do figma, com todas as rotas e funcionalidades [ X ]

### Descrição das Rotas 
- Login:  ` / `
    * Na pagina de login exite um container centralizado, para o usuário fazer o login ou se cadastrar.

- Home: ` /home `
    * Na pagina de home exite um container centralizado, para o usuário visualizar os vídeos em destaque,
    na lateral esquerda se encontra uma sidebar com os detalhes do usuário, botao para a pagina home, favoritos, assistir mais tarde e videos com gostei.

- Videos: ` /videos `
    * Na pagina de videos existe uma sessão para o usuário visualizar os todos os vídeos da plataforma.

- Video Único: `/videos/:id`
    * Na pagina do video selecionado existe uma sessão para o usuário visualizar o vídeo da plataforma, tendo a opção de curtir.

- Favoritos: `/favorites`
    * Esta rota está responsável por trazer na interface os videos "Curtidos" pelo usuário.

- Curtidas `/like-videos`
    * Esta rota está responsável por trazer na interface os videos "Favoritados" pelo usuário.

### paleta de cores :
    --primary-color: #3841E6;
    --text: #EDF0F7;
    --sidebar-gray: #111926;
    --sidebar-gray-light: #F8F7FD;
    --sidebar-gray-background: #6067EB;
    --success: #00C896;
    --orange: #cd7f32;
