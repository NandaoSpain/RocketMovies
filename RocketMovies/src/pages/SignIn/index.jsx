import { FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Container, Form, Background } from "./styles";
import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

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
                <Link to="SignUp">Criar conta</Link>
            </Form>
            <Background />
        </Container>
    );
}