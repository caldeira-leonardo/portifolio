import { HomeWrapper } from "./home.styles";
import backgroundImage from 'assets/main-background.svg';

const Home = () => {

    return (
        <HomeWrapper id="home" $bg={backgroundImage}>
            Home
        </HomeWrapper>
    );
};

export default Home;