import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Container, Form, Background } from "./styles";
import { Button } from "../../Components/Button";

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>
                <h2>Faça seu login</h2>
                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="text" placeholder="Senha" icon={FiLock}/>
                <Button title="Entrar"/>
                <a to="SignIn">Criar conta</a>
            </Form>
            <Background />
        </Container>
    );
}