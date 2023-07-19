import { styled } from "styled-components"
import { colors } from "theme/theme"

export const InfoSectionsWrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
        margin-top: 30px;
    }
`

export const Separator = styled.span`
    min-height: 6px;
    height: 6px;
    width: 30px;
    background-color: ${colors.primary};
    border-radius: 3px;
    margin: 20px;
`
