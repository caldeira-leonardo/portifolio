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
                    <Link href='./#about'>About</Link>
                    <Link href='./#projects'>Projects</Link>
                    <Link href='./#contact'>Contact</Link>
                </OptionsWrapper>
            </NavbarContent>
        </NavbarWrapper>
    );
};

export default Navbar;