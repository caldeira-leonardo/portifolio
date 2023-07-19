import { ReactNode } from "react";
import { HighlightContent } from "./highlight.styles";

interface HighlightProps {
    children: ReactNode;
}

const Highlight = ({ children }: HighlightProps) => {
    return <HighlightContent>{children}</HighlightContent>;
};

export default Highlight;
