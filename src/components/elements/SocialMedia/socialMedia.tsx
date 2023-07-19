import { SocialMediaImage, SocialMediaLink, SocialMediaWrapper } from "./socialMedia.styles";
import github from 'assets/github.png';
import linkedin from 'assets/linkedin.png';

const SocialMedia = () => {
    return (
        <SocialMediaWrapper>
            <SocialMediaLink href="https://github.com/caldeira-leonardo" target="_blank">
                <SocialMediaImage src={github} alt="github" />
            </SocialMediaLink>
            <SocialMediaLink href="https://www.linkedin.com/in/caldeira-leonardo/" target="_blank">
                <SocialMediaImage src={linkedin} alt="linkedin" />
            </SocialMediaLink>
        </SocialMediaWrapper>
    );
};

export default SocialMedia;