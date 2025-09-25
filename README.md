# URL Shortener Frontend

Este é o frontend de um encurtador de URLs, desenvolvido em React, com build feita pelo [Vite](https://vitejs.dev/) e hospedagem na [Vercel](https://vercel.com/).

Acesse o projeto online:  
👉 [https://url-shortener-orcin-six.vercel.app/](https://url-shortener-orcin-six.vercel.app/)  

Veja o repositório do backend:  
👉 [https://github.com/vitorbcc2021/url-shortener](https://github.com/vitorbcc2021/url-shortener)

---

## Funcionalidades

- Cadastro e login de usuários
- Login rápido como recrutador (sessão temporária de 5 minutos)
- Encurtamento de URLs
- Listagem, edição e exclusão de URLs encurtadas
- Proteção de rotas (acesso restrito para usuários autenticados)
- Interface responsiva e moderna

---

## Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
├── contexts/             # Contextos de autenticação (AuthProvider, AuthContext)
├── services/             # Serviços de API (ApiService.js)
├── utils/                # Utilitários (ProtectedRoute.jsx)
├── views/
│   ├── AuthScreen/       # Telas de autenticação (login, registro, layout)
│   └── HomePage/         # Tela principal e componentes (UrlList, UrlSubmit, etc)
├── App.jsx               # Definição das rotas
├── main.jsx              # Ponto de entrada da aplicação
├── index.css             # Estilos globais
└── variables.js          # URLs da API
```

---

## Principais Arquivos

- **`main.jsx`**  
  Ponto de entrada. Envolve o app com `BrowserRouter` e `AuthProvider`.

- **`App.jsx`**  
  Define as rotas principais e protege a rota `/` com `ProtectedRoute`.

- **`contexts/AuthProvider.jsx`**  
  Gerencia autenticação, login, logout e modo recrutador.

- **`views/AuthScreen/AuthLayout.jsx`**  
  Layout das telas de autenticação, incluindo botão para login como recrutador.

- **`views/HomePage/components/UrlList/UrlList.jsx`**  
  Lista, edita e exclui URLs encurtadas do usuário.

---

## Login como Recrutador

- O botão **"Entrar como Recrutador"** permite acesso rápido sem cadastro.
- O modo recrutador dura **5 minutos**. Após esse tempo, a sessão é encerrada e as URLs encurtadas pelo recrutador são apagadas.
- Ideal para demonstrações rápidas do sistema.

---

## Scripts Disponíveis

- `npm run dev` — Inicia o servidor de desenvolvimento Vite
- `npm run build` — Gera a build de produção
- `npm run preview` — Visualiza a build localmente
- `npm run lint` — Executa o ESLint

---

## Como rodar localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Rode o projeto:
   ```bash
   npm run dev
   ```
4. Acesse [http://localhost:5173](http://localhost:5173)

---

## Deploy

- Build feita com Vite
- Hospedado na Vercel: [https://url-shortener-orcin-six.vercel.app/](https://url-shortener-orcin-six.vercel.app/)

---

## Observações

- O frontend consome uma API externa para autenticação e gerenciamento das URLs.
- O projeto utiliza React 19, React Router v7, e Context API para autenticação.
- O código segue boas práticas de organização