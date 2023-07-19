import github from 'assets/github_white.png';
import linkedin from 'assets/linkedin_white.png';
import { CopyrightWrapper, FooterContent, FooterInfos, FooterSeparator, FooterSocialMediaImage, FooterSubtitile, FooterTitile, FooterWrapper, NameHighlight, SocialInfos, SocialInfosWrapper } from './footer.styles';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContent>
                <FooterInfos>
                    <FooterTitile>Leonardo Caldeira</FooterTitile>
                    <FooterSubtitile>Um desenvolvedor Web especializado em Front-end, construindo <br />sites cativantes e aplicativos móveis que trazem a imaginação à VIDA.</FooterSubtitile>
                </FooterInfos>
                <SocialInfosWrapper>
                    <FooterTitile>Social</FooterTitile>
                    <SocialInfos>
                        <a href="https://github.com/caldeira-leonardo" target="_blank" rel="noreferrer">
                            <FooterSocialMediaImage src={github} alt="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/caldeira-leonardo/" target="_blank" rel="noreferrer">
                            <FooterSocialMediaImage src={linkedin} alt="linkedin" />
                        </a>
                    </SocialInfos>
                </SocialInfosWrapper>
            </FooterContent>
            <FooterSeparator />
            <CopyrightWrapper>
                © Copyright 2023. Made by <NameHighlight rel='noreferrer' href='https://www.leonardocaldeira.com.br' target='_blank'>&nbsp;Leonardo Caldeira</NameHighlight>
            </CopyrightWrapper>
        </FooterWrapper>
    );
};

export default Footer;