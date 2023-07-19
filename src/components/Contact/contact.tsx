import Button from 'components/elements/Button/button';
import UserInfosSections from 'components/elements/UserInfosSections/UserInfosSections';
import backgroundImage from 'assets/main-background.svg';
import { ContactForm, ContactWrapper, FormField, FormInput, FormLabel, FormTextarea } from './contact.styles';

const Contact = () => {

    return <ContactWrapper $bg={backgroundImage}>
        <UserInfosSections
            id="contact"
            title="Contato"
            subtitle="Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e retornarei o mais breve possível."
        >
            <ContactForm>
                <FormField>
                    <FormLabel>Nome</FormLabel>
                    <FormInput placeholder='Digite seu nome' />
                </FormField>
                <FormField>
                    <FormLabel>Email</FormLabel>
                    <FormInput placeholder='Digite seu email' />
                </FormField>
                <FormField>
                    <FormLabel>Mensagem</FormLabel>
                    <FormTextarea rows={10} placeholder='Digite sua mensagem' />
                </FormField>
                <Button>Enviar</Button>
            </ContactForm>

        </UserInfosSections >;
    </ContactWrapper>;
};

export default Contact;;