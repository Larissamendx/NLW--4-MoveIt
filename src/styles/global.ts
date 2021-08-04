import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    outline: 0;
}

:root {
    --color-primary: ${props => props.theme.colors.primary};
    --background: ${props => props.theme.colors.background};
    --line: ${props => props.theme.colors.line};
    --text: ${props => props.theme.colors.text};
    --text-highlight: ${props => props.theme.colors.text_highlight};
    --title: ${props => props.theme.colors.title};
    --red: ${props => props.theme.colors.red};
    --green: ${props => props.theme.colors.green};
    --color-secondary: ${props => props.theme.colors.secondary};
    --color-secondary-dark: ${props => props.theme.colors.secondary_dark};
    --color-secondary-light: ${props => props.theme.colors.secondary_light};
    --button-failed: ${props => props.theme.colors.button_failed};
    --button-succeeded: ${props => props.theme.colors.button_succeeded};
    --button-text: ${props => props.theme.colors.button_text};
    --button-text-failed: ${props => props.theme.colors.button_text_failed};
    --button-text-succeeded: ${props => props.theme.colors.button_text_succeded};



}

@media(max-width: 1080px) {
    html {
        font-size: 93.75%;
    }
}

@media(max-width: 720px) {
    html {
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    color: var(--text);
}

body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

`;


