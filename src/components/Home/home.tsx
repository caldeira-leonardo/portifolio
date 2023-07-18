import Button from "components/elements/Button/button";
import { HomeWrapper, HomeContent, HomeTitle, HomeSubtitle } from "./home.styles";
import backgroundImage from 'assets/main-background.svg';

const Home = () => {

    return (
        <HomeWrapper id="home" $bg={backgroundImage}>
            <HomeContent>
                <HomeTitle>Hey, i'm Leonardo Caldeira</HomeTitle>
                <HomeSubtitle>An adept Web Developer specializing in Frontend, constructing captivating Websites and Mobile applications that bring the imagination to LIFE.</HomeSubtitle>
                <Button>Projects</Button>
            </HomeContent>
        </HomeWrapper>
    );
};

export default Home;