import styled from 'styled-components';


export const Container = styled.div`    
    width: 100%;
    margin: 0 auto;
`;

export const Middle = styled.div`
    display: grid;
    height: 105px;
    width: 100%;
    grid-template-columns: 400px auto 400px;
    grid-template-areas: "A B C";
    gap: 50px;
    align-items: center;
    margin: 0 30px;
    justify-content: space-between;
    padding: 10px 60px;

    
    > h1 {
        grid-area: A;
        
    }

    > button {
        grid-area: C;
        
    }
`;