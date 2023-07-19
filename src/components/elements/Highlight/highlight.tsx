import { HighlightContent } from "./highlight.styles";

const Highlight = ({ children, color }: any) => {
    return <HighlightContent color={color}>{children}</HighlightContent>;
};

export default Highlight;
