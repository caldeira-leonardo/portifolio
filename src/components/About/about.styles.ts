import { styled } from "styled-components"
import { colors } from "theme/theme"

export const AboutContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 130px;
`

export const KnowMeWrapper = styled.div`
    text-align: justify;
`

export const SkillsWrapper = styled.div``

export const ContentTitle = styled.h1`
    font-size: 32px;
`

export const ContentDescription = styled.p`
    font-size: 18px;
    max-width: 550px;
    color: ${colors.text_subtitle};
    line-height: 30px;
`

export const ButtonWrapper = styled.div`
    margin-top: 30px;
`

export const SkillsContent = styled.div`
    display: flex;
    width: 500px;
    flex-wrap: wrap;
`

export const SkillCard = styled.div`
    width: min-content;
    padding: 10px 20px;
    background-color: ${colors.light_grey_transparent};
    color: ${colors.grey};
    font-weight: 600;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 20px;
    white-space: nowrap;
`
