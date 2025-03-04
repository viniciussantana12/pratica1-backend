# Express API - Gerenciamento de Usuários

Este é um projeto simples de API REST utilizando **Node.js** com **Express** para gerenciar usuários.  
A API permite realizar operações **CRUD** (Create, Read, Update, Delete) por meio de requisições HTTP.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 📌 Como Executar o Projeto

### 1️⃣ Clonar o repositório  
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
2️⃣ Instalar as dependências
npm install
3️⃣ Iniciar o servidor
node index.js
O servidor será iniciado na porta 3000.

📚 Rotas da API
🔹 Obter todos os usuários
📌 GET /usuarios

🔹 Obter um usuário por ID
📌 GET /usuarios/:id

🔹 Criar um novo usuário
📌 POST /usuarios
📤 Exemplo corpo da requisição (JSON):
{
  "nome": "João Silva",
  "email": "joao@email.com"
}

🔹 Atualizar um usuário por ID
📌 PUT /usuarios/:id

🔹 Deletar um usuário por ID
📌 DELETE /usuarios/:id

📌 Esse é um projeto simples para fins de aprendizado e pode ser expandido com banco de dados e autenticação futuramente.
