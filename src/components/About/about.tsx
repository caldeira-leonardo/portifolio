import UserInfosSections from "components/elements/UserInfosSections/UserInfosSections";
import { AboutContentWrapper, ButtonWrapper, ContentDescription, ContentTitle, KnowMeWrapper, SkillCard, SkillsContent, SkillsWrapper } from "./about.styles";
import Button from "components/elements/Button/button";
import Highlight from "components/elements/Highlight/highlight";

const About = () => {
    const skills = [
        'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'SASS', 'Styled-Components', 'Responsive Design', 'Testes Unitários', 'Documentação', 'Git'
    ];

    return <UserInfosSections
        id="about"
        title="Sobre mim"
        subtitle="Aqui você encontrará mais informações sobre mim, o que faço e minhas habilidades atuais principalmente em termos de programação e tecnologia."
    >
        <AboutContentWrapper>
            <KnowMeWrapper>
                <ContentTitle>Mais informações</ContentTitle>
                <ContentDescription>
                    Sou um <Highlight>Desenvolvedor Front-end Web e Mobile</Highlight>, construindo o Front-end de Sites e Aplicações mobile que levam facilidade e experiências ímpares aos seus usuários. Confira alguns dos meus trabalhos na seção <Highlight>Projetos</Highlight>.
                </ContentDescription>
                <ContentDescription>
                    Gosto de me manter atualizado, evoluindo minhas habilidades, além de sempre buscar <Highlight>compartilhar meus conhecimentos</Highlight> com meus colegas e amigos.
                </ContentDescription>
                <ContentDescription>
                    Estou aberto a <Highlight>oportunidades de trabalho</Highlight> aonde possa contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em entrar em <Highlight>contato</Highlight> comigo.
                </ContentDescription>
                <ButtonWrapper>
                    <Button href="./#contact">Contato</Button>
                </ButtonWrapper>
            </KnowMeWrapper>
            <SkillsWrapper>
                <ContentTitle>Minhas Habilidades</ContentTitle>
                <SkillsContent>

                    {
                        skills.map((skill) => <SkillCard key={skill}>{skill}</SkillCard>)
                    }
                </SkillsContent>

            </SkillsWrapper>
        </AboutContentWrapper>
    </UserInfosSections >;
};

export default About;
