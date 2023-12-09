import { Container } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { Form } from "./styles";
import { Avatar } from "./styles";
import { Link } from "react-router-dom";

export function Profile() {
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Avatar>
                <img src="https://github.com/NandaoSpain.png" alt="Foto do usuário" />
                <label htmlFor="avatar">
                    <FiCamera />
                    <input id="avatar" type="file" />
                </label>
            </Avatar>

            <Form>
                <Input placeholder="Nome" type="text" icon={FiUser}/>
                <Input placeholder="Email" type="text" icon={FiMail}/>
                <Input placeholder="Senha atual" type="password" icon={FiLock}/>
                <Input placeholder="Nova senha" type="password" icon={FiLock}/>

                <Button title="Salvar" />
            </Form>
            
        </Container>
    )
}