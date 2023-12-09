import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Container, Form, Background } from "./styles";
import { Button } from "../../Components/Button";

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>
                <h2>Crie sua conta</h2>
                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="text" placeholder="Senha" icon={FiLock}/>
                <Button title="Entrar"/>
                <div>
                <FiArrowLeft />
                <a to="SignIn">Voltar para o Login</a>
                </div>
            </Form>
            <Background />
        </Container>
    );
}