import { SubtitleWrapper } from "./subtitle.styles";

const Subtitle = ({ children, margin, fontSize, maxWidth }: any) => {

    return (
        <SubtitleWrapper margin={margin} fontSize={fontSize} maxWidth={maxWidth}>
            {children}
        </SubtitleWrapper>
    );
};

export default Subtitle;