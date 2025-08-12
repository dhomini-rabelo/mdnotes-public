# Planejamento Projeto MD Notes (mdnotes.space) - Versão 1 MVP Básico

Uma plataforma para criar notas em Markdown.

## Páginas

- Landing Page Simples: Página inicial do projeto com informações sobre o projeto.
  
- Página de Login: Permite que os usuários façam login na plataforma.
  - Usuários fazem login com do google em plataforma de terceiros.
  - Usuários com perfil completo devem ter um username único, e devem informar sua área de trabalho(ex: T.I)

- Página de Gerenciamento de Notas
  - Header:
    - Logo do projeto.
    - Workspace selecionado, com opção de selecionar outro workspace.
    - Botão "Por que Markdown?"
      - Modal com informações sobre o que é Markdown e como utilizá-lo.
      - Link para o site oficial do Markdown, com tudo que o markdown possui.
    - Opção de congiguração do usuário que abre modal:
        - Sair da conta.
        - Tema editor de código: light ou dark. Default: dark.
  - Sidebar (esquerda):
    - pastas (folders) do workspace selecionado.
    - notas (notes) da pasta selecionada.
    - opção de criar nova pasta.
    - opção de criar nova nota.
  - Conteúdo Principal:
    - Acima do editor de notas, exibir o título da nota. (canto esquerdo)
    - Botão para ver todos os atalhos do editor de nota. (canto direito)
    - Botão de Salvar Nota. (canto direito)
    - Botão de Visualizar Nota. (canto direito)
    - Editor de Notas (Monaco Editor)

## Site

- O site será em inglês.

## Regras do site

- Se um usuário anônimo tentar acessar a página de gerenciamento de notas, ele deve ser redirecionado para a página de login.
- Assim que o usuário abrir a página de gerenciamento de notas pela primeira vez logado, o usuário deve selecionar um workspace ou criar um novo workspace através de um modal.

## Regras de negócio

- Usuários podem separar notas por workspaces e pastas.
- O usuário pode criar apenas 1 workspace, 1 pasta e 1 notas na versão 1.
- Notas podem ter até 1.000 caracteres.

## Stack

- Frontend: React.js
- Backend: Node.js (Serverless)
- Banco de Dados: DynamoDB
- Autenticação: Firebase
- Hospedagem: SST

## Modelagem banco de dados

- Usuários
  - id: string (UUID)
  - username: string (único)
  - email: string (único)

- Workspaces
  - id: string (UUID)
  - icon: string
  - owner_id: string (referência ao usuário)
  - name: string (nome do workspace)

- Pastas
  - id: string (UUID)
  - icon: string
  - workspace_id: string (referência ao workspace)
  - owner_id: string (referência ao usuário)
  - name: string (nome da pasta)

- Nota
  - id: string (UUID)
  - folder_id: string (referência à pasta)
  - title: string (título da nota)
  - content: string (conteúdo em Markdown)
  - created_at: timestamp
  - updated_at: timestamp

## Casos de uso (Backend)

- Usuário
  - Login
  - Criação
  - Verificação de dados completos

- Workspace
  - Criação
  - Listagem de workspaces por ID de usuário

- Pasta
  - Criação
  - Listagem de pastas por ID de workspace com notas (apenas título e ID)

- Nota
  - Criação
  - Edição
  - Obter nota por ID (título e conteúdo)

