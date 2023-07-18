import { styled } from "styled-components"
import { colors } from "theme/theme"

export const SocialMediaWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${colors.light};
    transform: translateY(-50%);
    box-shadow: 0 10px 100px #00000010;
    padding: 4px;
    display: flex;
    flex-direction: column;
    z-index: 10;
`

export const SocialMediaLink = styled.a`
    &:hover {
        border-radius: 8px;
        background-color: ${colors.primary_transparent};
    }
`

export const SocialMediaImage = styled.img`
    width: 30px;
    height: 30px;
    padding: 16px 12px;
`
