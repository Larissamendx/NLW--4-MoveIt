import { Container, Icons } from "../styles/components/Lateral";

export function Lateral () {
    return (
        <Container>
            <div>
                <img src="icons/logo2.svg" alt="Logo"/>
            </div>
            <Icons>
                <a href="#">
                    <img src="icons/home.svg" alt="Home"/>
                </a>
                <a href="#">
                    <img src="icons/ranking.svg" alt="Ranking"/>
                </a>
            </Icons>
        </Container>
    );
}