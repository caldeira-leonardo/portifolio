import { ReactNode } from "react";
import { TitleWrapper } from "./title.styles";

interface TitleProps {
    children: ReactNode,
    fontSize?: number;
}

const Title = ({ children, fontSize }: TitleProps) => {

    return (
        <TitleWrapper fontSize={fontSize}>
            {children}
        </TitleWrapper>
    );
};

export default Title;