import { Container, Middle } from "./styles";
import { Button } from "../../Components/Button";
import { Header, } from "../../Components/Header";
import { FiPlus } from "react-icons/fi";

export function Home({icon: Icon, ...rest}) {
    return(
        <Container>
            <Header />
            <Middle>
                <h1>Meus Filmes</h1>
                <Button icon={FiPlus} title='Adicionar Filme'>
                </Button>
            </Middle>
        </Container>        
    );
}