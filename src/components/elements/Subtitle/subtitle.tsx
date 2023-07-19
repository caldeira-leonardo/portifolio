import { ReactNode } from "react";
import { SubtitleWrapper } from "./subtitle.styles";

interface SubtitleProps {
    children: ReactNode,
}

const Subtitle = ({ children }: SubtitleProps) => {

    return (
        <SubtitleWrapper >
            {children}
        </SubtitleWrapper>
    );
};

export default Subtitle;