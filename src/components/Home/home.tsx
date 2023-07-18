import Button from "components/elements/Button/button";
import { HomeWrapper, HomeContent } from "./home.styles";
import backgroundImage from 'assets/main-background.svg';
import Title from "components/elements/Title/title";
import Subtitle from "components/elements/Subtitle/subtitle";

const Home = () => {

    return (
        <HomeWrapper id="home" $bg={backgroundImage}>
            <HomeContent>
                <Title>Hey, i'm Leonardo Caldeira</Title>
                <Subtitle>An adept Web Developer specializing in Frontend, constructing captivating Websites and Mobile applications that bring the imagination to LIFE.</Subtitle>
                <Button>Projects</Button>
            </HomeContent>
        </HomeWrapper>
    );
};

export default Home;