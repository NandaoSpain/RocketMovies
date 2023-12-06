import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from 'react-icons/ri';

export function Header() {
    return(
       <Container>
            <Profile>
                <img src="https://github.com/NandaoSpain.png" alt="Users Photo" />
                <div>
                    <span>Bienvenido,</span>
                    <strong>Fernando Rodrigues</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
       </Container> 
    );
}