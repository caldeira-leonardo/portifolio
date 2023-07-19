import Button from "components/elements/Button/button";
import { HomeWrapper, HomeContent } from "./home.styles";
import backgroundImage from 'assets/main-background.svg';
import Title from "components/elements/Title/title";
import Subtitle from "components/elements/Subtitle/subtitle";

const Home = () => {

    return (
        <HomeWrapper id="home" $bg={backgroundImage}>
            <HomeContent>
                <Title>Olá, me chamo Leonardo Caldeira</Title>
                <Subtitle>Um desenvolvedor Web especializado em Front-end, construindo sites cativantes e aplicativos móveis que trazem a imaginação à VIDA.</Subtitle>
                <Button href='./#projects'>Projetos</Button>
            </HomeContent>
        </HomeWrapper>
    );
};

export default Home;