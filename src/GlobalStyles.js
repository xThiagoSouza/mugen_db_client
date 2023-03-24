import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --color-primary: #33312E;
  --color-secondary: #F5E9E2;
  --color-title: #734;
  --color-text-title: #FFF;
  --color-text-secondary: #FFF;
  --color-menu: #ccc9a1;
  --color-menu-secondary: #424024;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

body, html, #root {
  width: 100%;
  height: 100%;
}

body {
  background: var(--color-primary);
  color: var(--color-primary);
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

ul {
  list-style: none;
  cursor: pointer;
}

img {
  background: var(--color-primary);
}
`;
