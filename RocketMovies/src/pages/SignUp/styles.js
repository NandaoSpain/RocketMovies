import styled from "styled-components";
import backgroundImg from '../../../../../../../photo.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat ;    
    background-size: cover;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: center;

    > button {
        width: 100%;
    }
    

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    a {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > div:nth-child(8) {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-top: 36px;
        align-self: center;
        display: flex;
        align-items: center;
        gap: 6px;

    }
`;
