import { Star } from "../Star";
import { Container } from "./styles";
import { useState } from "react";

export function Cards() {
    const stars = [...new Array(5).keys()]
    const onClickStar = (index) => {
        setActiveIndex(index);
    }
    const [activeIndex, setActiveIndex] = useState();

    return(
        <Container>
            <section>
                <h1>Interestellar</h1>
                <div>
                    {stars.map(index => <Star onClick={() => onClickStar(index)} key={`star_${index}`} isActive={index <= activeIndex}/>)}
                </div>                
            </section>  
            <p>As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.
</p>
        </Container>
    );
}