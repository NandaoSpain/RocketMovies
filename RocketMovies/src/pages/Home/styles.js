import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px 105px auto; 
    grid-template-areas:
    "header header header" 
    "titulo null button" 
    "content content content";

    > h1 {
        margin: 50px 80px;
        grid-area: titulo;
    }

    > button {
        grid-area: button;
        margin: 60px -80px;
    }
`;
