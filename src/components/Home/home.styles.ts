import { styled } from "styled-components"

export const HomeWrapper = styled.section<{ $bg: string }>`
    /* height: 100vh; */
    background: linear-gradient(
            to right,
            rgba(245, 245, 245, 0.8),
            rgba(245, 245, 245, 0.8)
        ),
        url(${props => props.$bg});
`
