import { styled } from "styled-components"

export const HomeWrapper = styled.section<{ $bg: string }>`
    background: linear-gradient(
            to right,
            rgba(245, 245, 245, 0.8),
            rgba(245, 245, 245, 0.8)
        ),
        url(${props => props.$bg});

    display: flex;
    justify-content: center;
    align-items: center;
`

export const HomeContent = styled.div`
    max-width: 920px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`
