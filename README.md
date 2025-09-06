📌 Sistema de Gestão de Tarefas

Um sistema de gerenciamento de tarefas simples e eficiente, desenvolvido com Node.js (backend), PostgreSQL (banco de dados) e Angular 18 (frontend).

O sistema permite:
✅ Login de usuário
✅ Visualização de quadro de tarefas (Kanban)
✅ Cadastro de novas tarefas
✅ Atualização e gerenciamento de tarefas existentes

🚀 Tecnologias Utilizadas
Backend

Node.js

Express.js

TypeScript

PostgreSQL

[Prisma ou TypeORM] (dependendo do que você usou)

JWT
para autenticação

Frontend

Angular 18

TailwindCSS
(se estiver usando)

RxJS

NgRx
(opcional para estado global)

📂 Estrutura do Projeto
/project-root
│── backend/ # Código do backend (Node.js + Express + PostgreSQL)
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middlewares/
│ │ └── app.ts
│ └── package.json
│
│── frontend/ # Código do frontend (Angular 18)
│ ├── src/
│ │ ├── app/
│ │ │ ├── auth/ # Login
│ │ │ ├── board/ # Quadro de tarefas
│ │ │ ├── tasks/ # Cadastro/edição de tarefas
│ │ │ └── shared/
│ └── package.json
│
└── README.md

🔑 Funcionalidades
🔐 Autenticação

Tela de login com JWT

Proteção de rotas no backend e frontend

📋 Quadro de Tarefas

Visualização das tarefas em um quadro estilo Kanban

Status: A Fazer | Em Progresso | Concluído

📝 Gestão de Tarefas

Criar nova tarefa

Editar tarefa existente

Alterar status da tarefa

Excluir tarefa

📌 Próximos Passos (Melhorias Futuras)

🔍 Busca e filtros de tarefas

📅 Integração com calendário

👥 Suporte a múltiplos usuários no mesmo quadro

📱 Versão mobile responsiva
