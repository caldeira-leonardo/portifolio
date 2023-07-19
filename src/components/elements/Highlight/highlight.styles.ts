import { styled } from "styled-components"
import { colors } from "theme/theme"

export const HighlightContent = styled.span<{ color?: string }>`
    font-weight: bold;
    color: ${({ color }) => (color ? color : colors.text_subtitle)};
`
