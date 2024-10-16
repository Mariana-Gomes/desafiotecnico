# ⚡Teste Técnico Mobile

O Teste Técnico consiste em recriar uma interface de design disponibilizada no [Figma](https://www.figma.com/design/Lpdera6rS8SztMUAwzkpN0/Teste-T%C3%A9cnico-Mobile-BeTalent?node-id=7304-509&node-type=frame&t=tvb3ahA6tVeKzBMR-0), 
utilizando React Native ou Flutter. O aplicativo deve consumir dados de uma API simulada que lista funcionários e deve permitir a pesquisa na tabela pelos 
seguintes critérios: cargo, nome e telefone.

## 📱 O App 

![bg-mobile](https://github.com/user-attachments/assets/969b63ea-e4ad-4c2c-81a3-f3d53b8b51cb)

## 👩🏻‍💻 Tecnologias Utilizadas

- *React Native*: Biblioteca para construir aplicativos móveis.
- *Expo*: Ferramenta para desenvolvimento rápido de aplicações React Native.
- *Axios*: Biblioteca para realizar requisições HTTP, utilizada para consumir a API simulada e buscar os dados dos funcionários.
- *Styled-Components*: Biblioteca para estilização de componentes, permitindo escrever estilos CSS diretamente no código JavaScript.
- *TypeScript*: Superset do JavaScript que adiciona tipagem estática, proporcionando maior segurança e facilidade na manutenção do código.

# ⚙️ Instruções para Rodar o Projeto

## 1. Clone o repositório
```bash
git clone https://github.com/Mariana-Gomes/desafiotecnico.git
cd desafiotecnico
```

## 2. Instale as dependências

Você pode usar **npm** ou **yarn** para instalar as dependências do projeto.

- Usando **npm**:
  ```bash
  npm install
  ```

- Ou, se preferir usar **Yarn**:
  ```bash
  yarn install
  ```

## 3. Inicie a API simulada

Para rodar o servidor da API simulada (`json-server`), certifique-se de estar na pasta raiz do projeto no seu terminal e execute o seguinte comando:


- Usando **npm**:
  ```bash
  npm run server
  ```

- Ou, usando **Yarn**:
  ```bash
  yarn server
  ```

### 🚨 Importante!


Para que o servidor da api simulada funcione corretamente, pode ser necessário alterar o valor do **IP** no arquivo `src/service/api.ts`.

```typescript
const IP = "192.168.0.108";
```

Nesse caso, basta alterar o valor dessa variável para o **IPv4** do computador que irá rodar o projeto

#### Como localizar o IPv4:

- **Windows**: Abra o `cmd` e execute `ipconfig`. O `IPv4 Address` estará listado.
- **macOS**: Abra o Terminal e execute `ifconfig`. Procure por `inet` na interface de rede (Wi-Fi ou Ethernet).
- **Linux**: Abra o Terminal e execute `ip a` ou `ifconfig`. O `inet` será exibido na interface de rede.

#### Observação:
Se for rodar o projeto em um emulador, pode apenas alterar o valor da variável **IP** para `localhost`, ficando dessa forma:

```typescript
const IP = "localhost";
```

## 4. Rodar o app

Após ajustar o IP e garantir que o servidor esteja rodando, abra um segundo terminal, também na pasta raiz do projeto, e execute o seguinte comando para rodar o app:

- Usando **npm**:
  ```bash
  npm start
  ```

- Ou, usando **Yarn**:
  ```bash
  yarn start
  ```
