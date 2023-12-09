import styled from "styled-components";

export const Container = styled.div`
    height: 105px;
    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: grid;
    grid-template-columns: 400px 1fr 400px;
    gap: 50px;
    align-items: center;   

    > div {
        justify-self: center;
        
        h1 {
            color: ${({ theme }) => theme.COLORS.PINK};
            padding: 30px 50px;
            
        }
    }
`;  

export const Profile = styled.div`    
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 0px 30px;
    
    > div {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        
        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        > strong {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.PINK}
        }
        
    }
    
    > img {
        width: 86px;
        height: 86px;
        border-radius: 50%;
    }
`;
