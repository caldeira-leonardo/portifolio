import { styled } from "styled-components"
import { colors } from "theme/theme"

export const ButtonContent = styled.a`
    background: ${colors.primary};
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    font-weight: 700;
    border-radius: 5px;
    box-shadow: 0 5px 15px 0 #00000015;
    transition: transform 0.3s;

    padding: 16px 72px;
    font-size: 20px;

    &:hover {
        transform: translateY(-3px);
    }

    cursor: pointer;
`
