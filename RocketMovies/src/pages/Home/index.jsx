import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";

export function Home() {
    return(
        <Container>
            <Header />
            <h1>Meus Filmes</h1>
            <Button title="Adicionar filme"/>
        </Container>
    );
}