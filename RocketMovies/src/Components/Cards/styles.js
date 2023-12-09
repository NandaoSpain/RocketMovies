import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 30px 50px 50px 50px;
    margin-top: 20px;
    border-radius: 12px;

    > h1 {
        margin-bottom: 20px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

`;