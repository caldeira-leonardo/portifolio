import { styled } from "styled-components"
import { colors } from "theme/theme"

export const ContactWrapper = styled.div<{ $bg: string }>`
    background: linear-gradient(
            to right,
            rgba(245, 245, 245, 0.8),
            rgba(245, 245, 245, 0.8)
        ),
        url(${props => props.$bg}) !important;

    section {
        background: none;
    }
`

export const ContactForm = styled.form`
    padding: 30px;
    width: 700px;
    background-color: ${colors.light};
    display: flex;
    flex-direction: column;

    a {
        margin-left: auto;
    }
`

export const FormLabel = styled.label`
    margin-bottom: 20px;
    font-weight: 600;
`

export const FormField = styled.div`
    padding-bottom: 40px;

    display: flex;
    flex-direction: column;
`

export const FormInput = styled.input`
    padding: 20px;
    background-color: ${colors.background};
    outline: none;
    border: none;
    font-weight: 600;
    border-radius: 5px;
`

export const FormTextarea = styled.textarea`
    padding: 20px;
    background-color: ${colors.background};
    outline: none;
    border: none;
    font-weight: 600;
    border-radius: 5px;
    resize: none;
`
