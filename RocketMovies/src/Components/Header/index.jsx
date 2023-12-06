import { Input } from "../Input";
import { Container, Profile } from "./styles";
import { FiSearch } from 'react-icons/fi';


export function Header() {
    return(
       <Container>
            <h1>RocketMovies</h1>
            <Input icon={FiSearch} placeholder="Pesquisar pelo título"/>
            <Profile>
                <div>
                    <strong>Fernando Rodrigues</strong>
                    <a href="#">Logout</a>
                </div>
                <img src="https://github.com/NandaoSpain.png" alt="Users Photo" />
            </Profile>
            
       </Container> 
    );
}