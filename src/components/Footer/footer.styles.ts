import { styled } from "styled-components"
import { colors } from "theme/theme"

export const FooterWrapper = styled.div`
    background-color: ${colors.black};
    box-sizing: border-box;
    padding: 0 20rem;
`

export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;
`

export const FooterInfos = styled.div``

export const SocialInfosWrapper = styled.div`
    color: ${colors.light};
    font-size: 30px;
`

export const SocialInfos = styled.div``

export const FooterSocialMediaImage = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

export const FooterTitile = styled.h1`
    color: ${colors.light};
    text-transform: uppercase;
    font-size: 20px;
`

export const FooterSubtitile = styled.p`
    color: ${colors.light};
    margin: 0;
    line-height: 25px;
`

export const FooterSeparator = styled.hr`
    border-color: ${colors.light_grey};
    border-bottom: none;
    margin: 0;
`

export const CopyrightWrapper = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.light};
    padding: 45px 0;
    font-size: 12px;
`
export const NameHighlight = styled.a`
    color: ${colors.light};
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
`
