import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    background: purple;
}

:root {
    --primary: tomato;
}

p {
    background: skyblue;
}
`;
