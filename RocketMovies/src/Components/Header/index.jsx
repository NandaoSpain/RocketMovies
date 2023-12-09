import { Container, Profile } from "./styles";
import { Input } from "../Input";
import { FiSearch } from 'react-icons/fi';

export function Header() {
    return(
        <Container>
            <div>
                <h1>RocketMovies</h1>
            </div>
            <Input icon={FiSearch} placeholder='Pesquisar pelo título'/>
            <Profile>                
                <div>
                    <strong>Fernando Rodrigues</strong>
                    <a href="#">Logout</a>
                </div>
                <img src="https://github.com/NandaoSpain.png" alt="Foto do usuário" />                
            </Profile>
        </Container>
    );
}

