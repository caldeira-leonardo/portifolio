import { styled } from "styled-components"

export const TitleWrapper = styled.h1.attrs<{
    fontSize?: number
}>({})`
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "60")}px;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 3px;
    margin: 0;
`
