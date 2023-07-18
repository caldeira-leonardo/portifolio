import { styled } from "styled-components"
import { colors } from "theme/theme"

export const SubtitleWrapper = styled.p.attrs<{
    maxWidth?: string
    fontSize?: number
    margin?: string
}>({})`
    font-size: ${({ fontSize }) => (fontSize ? fontSize : 24)}px;
    line-height: 36px;
    margin: ${({ margin }) => (margin ? margin : "45px 0")};
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "unset")};
    text-align: center;
    color: ${colors.text_subtitle};
`
