# IPA360 - Empreendimento

## Descrição

O projeto IPA360 é um site desenvolvido para promover um empreendimento de luxo na Zona Sul. Este projeto inclui uma landing page com informações sobre o empreendimento, galeria de imagens, plantas dos apartamentos, formulário de contato e uma seção de navegação.

## Tecnologias Utilizadas

- **Vite.js**: Ferramenta de build rápida para desenvolvimento de aplicações front-end.
- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **SASS**: Pré-processador CSS que permite usar variáveis, aninhamento e outras funcionalidades avançadas.
- **EmailJS**: Serviço para envio de emails diretamente do cliente.
- **React Scroll**: Biblioteca para navegação suave entre seções da página.

## Estrutura do Projeto

ipa360/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── logo.png
│   │   │   ├── ipa360.png
│   │   │   └── 02.png
│   ├── components/
│   │   ├── Carousel/
│   │   │   └── CarouselPage.jsx
│   │   ├── ContactForm/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactForm.sass
│   │   └── NavBar/
│   │       ├── NavBar.jsx
│   │       └── NavBar.sass
│   ├── styles/
│   │   ├── mixins.sass
│   │   └── variables.sass
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
├── .gitignore
├── package.json
└── vite.config.js


## Funcionalidades

- **Navegação**: Menu de navegação com links suaves para seções específicas da página.
- **Formulário de Contato**: Formulário para envio de mensagens via EmailJS.
- **Galeria de Imagens**: Carrossel de imagens do empreendimento.
- **Responsividade**: Design responsivo para melhor visualização em dispositivos móveis e desktops.

## Instalação e Execução

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Passos

1. **Clone o repositório**

    ```bash
    git clone https://github.com/seu-usuario/ipa360.git
    ```

2. **Navegue até o diretório do projeto**

    ```bash
    cd ipa360
    ```

3. **Instale as dependências**

    ```bash
    npm install
    ```

4. **Execute o projeto em modo de desenvolvimento**

    ```bash
    npm run dev
    ```

5. **Abra o navegador e acesse**

    ```
    http://localhost:3000
    ```

## Configuração do EmailJS

Para o formulário de contato funcionar corretamente, você precisará configurar o EmailJS:

1. **Crie uma conta no [EmailJS](https://www.emailjs.com/).**
2. **Configure um novo serviço de email e um template.**
3. **Obtenha seu `service_id`, `template_id` e `user_id`.**
4. **Substitua os valores correspondentes no arquivo `ContactForm.jsx`:**

    ```javascript
    emailjs.send("service_id", "template_id", templateParams, "user_id")
    ```

## Estrutura do Código

### `NavBar.jsx`

Componente de navegação contendo links suaves para diferentes seções da página.

### `ContactForm.jsx`

Componente de formulário de contato para envio de mensagens via EmailJS.

### `CarouselPage.jsx`

Componente de carrossel para exibir imagens do empreendimento.

## Estilo

Os estilos são escritos usando SASS para aproveitar recursos como variáveis e mixins. As principais variáveis e mixins estão localizados na pasta `styles`.

## Contribuição



## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- Email: lucianavivarelli@hotmail.com
- GitHub: https://github.com/LucianaVivarelli

 
