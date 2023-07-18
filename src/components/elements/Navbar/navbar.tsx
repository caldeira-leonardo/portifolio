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
                    <Link href='/#Home'>Home</Link>
                    <Link href='/#About'>About</Link>
                    <Link href='/#Projects'>Projects</Link>
                    <Link href='/#Contact'>Contact</Link>
                </OptionsWrapper>
            </NavbarContent>
        </NavbarWrapper>
    );
};

export default Navbar;