import { styled } from "styled-components"
import { colors } from "theme/theme"

export const NavbarWrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 90px;
    background-color: ${colors.light};

    box-shadow: 0 10px 100px #00000010;
`

export const NavbarContent = styled.div`
    height: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 60px;
`

export const UserInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const UserImage = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: ${colors.light_grey};
    border: 2px solid ${colors.primary};
`

export const UserNameTitle = styled.h3.attrs({
    children: "Leonardo Caldeira",
})`
    margin-left: 20px;
    letter-spacing: 1px;
    font-size: 16px;
    text-transform: uppercase;
`

export const OptionsWrapper = styled.div``

export const Link = styled.a`
    text-decoration: none;
    color: ${colors.title_primary};
    font-size: 16px;
    font-weight: 600;
    padding: 20px 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-left: 25px;

    &:hover {
        color: ${colors.primary};
    }
`
