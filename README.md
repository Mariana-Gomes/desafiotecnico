# Teste Técnico Mobile⚡

O Teste Técnico consiste em recriar uma interface de design disponibilizada no [Figma](https://www.figma.com/design/Lpdera6rS8SztMUAwzkpN0/Teste-T%C3%A9cnico-Mobile-BeTalent?node-id=7304-509&node-type=frame&t=tvb3ahA6tVeKzBMR-0), 
utilizando React Native ou Flutter. O aplicativo deve consumir dados de uma API simulada que lista funcionários e deve permitir a pesquisa na tabela pelos 
seguintes critérios: cargo, nome e telefone.

## O App 📱

![bg-mobile](https://github.com/user-attachments/assets/0206689e-2c79-4434-b04b-e923f326a43d)

## Tecnologias Utilizadas 👩🏻‍💻

- **React Native**: Biblioteca para construir aplicativos móveis.
- **Expo**: Ferramenta para desenvolvimento rápido de aplicações React Native.
- **Axios**: Biblioteca para realizar requisições HTTP, utilizada para consumir a API simulada e buscar os dados dos funcionários.
- **Styled-Components**: Biblioteca para estilização de componentes, permitindo escrever estilos CSS diretamente no código JavaScript, facilitando a criação de interfaces personalizadas e reutilizáveis.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática, proporcionando maior segurança e facilidade na manutenção do código.

## Pré-requisitos 

Antes de rodar o projeto, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão X ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
  
## Instalação do Expo e Projeto 

Para instalar o Expo CLI, execute:

```bash
  npm install -g expo-cli
```

Clone o repositório:

```bash
  git clone https://github.com/Mariana-Gomes/betalent-teste.git
```

Navegue até o diretório do projeto:

```bash
  cd betalent-teste
```

Instale as dependências

```bash 
  npm install
```

E inicie o projeto usando o Expo

```bash
  expo start
```

- Utilize o QR Code exbido no seu terminal ou na página web do Expo para abrir o aplicativo no seu dispositivo móvel. 
Certifique-se de que o aplicativo Expo Go esteja instalado no seu dispositivo, mas se preferir também é possível rodar o aplicativo no simulador ou emulador.

## Rodando a API Simulada 

É necessário deixar a api simulada rodando no terminal para que os dados possam ser visualizados na aplicação. Para isso é necessário adicionar os seguintes comandos:

```bash 
  npm install json-server
```

É necessário navegar até o diretório **service > api.ts** e alterar o valor da variavel IP para o seu ip local

```bash 
const IP = "192.168.0.108";

const api = axios.create({
  baseURL: `http://${IP}:3000`,
});
```

E por fim, use o comando abaixo para rodar a API simulada:

```bash
npx json-server database.json
```

```bash
yarn server 
```











  


