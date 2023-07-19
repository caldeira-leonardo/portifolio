import { Link, NavbarContent, NavbarWrapper, OptionsWrapper, UserImage, UserInfos, UserNameTitle } from './navbar.style';

const Navbar = (props: any) => {

    return (
        <NavbarWrapper>
            <NavbarContent>
                <UserInfos>
                    <UserImage />
                    <UserNameTitle />
                </UserInfos>
                <OptionsWrapper>
                    <Link href='./#'>Home</Link>
                    <Link href='./#about'>Sobre</Link>
                    <Link href='./#projects'>Projetos</Link>
                    <Link href='./#contact'>Contato</Link>
                </OptionsWrapper>
            </NavbarContent>
        </NavbarWrapper>
    );
};

export default Navbar;