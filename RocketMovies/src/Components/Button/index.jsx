import { Container } from "./styles";

export function Button({title, ...rest}) {
    return(
        <Container type="button" >
            {title}
        </Container>
    );
}