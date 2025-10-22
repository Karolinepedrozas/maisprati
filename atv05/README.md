text
# MovieFinder

Aplicação em ReactJS para busca, visualização de detalhes e favoritos de filmes usando a API do OMDb.

## 🚀 Como rodar a aplicação

1. **Faça download ou clone este repositório.**
2. **Abra o terminal na pasta do projeto:**
cd CAMINHO/DA/SUA/PASTA

text
3. **Instale as dependências:**
npm install

text
4. **Configure sua chave da OMDb API:**
- Cadastre-se em [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
- Informe sua chave em `src/api.js`:
  ```
  const API_KEY = 'SUA_API_KEY_AQUI';
  ```
5. **Inicie a aplicação:**
npm start

text
6. **Acesse no navegador:**  
[http://localhost:3000](http://localhost:3000)

---

## Funcionalidades

- Busca de filmes por nome com paginação
- Visualização de detalhes do filme (diretor, elenco, sinopse, poster, avaliação)
- Favoritar e desfavoritar filmes (localStorage)
- Página de favoritos
- Indicador de loading e mensagens de erro

---

## Observações

- Necessário internet para funcionar.
- Favoritos são salvos somente localmente no navegador.

---