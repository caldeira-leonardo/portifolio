import { TitleWrapper } from "./title.styles";

const Title = ({ children, fontSize }: any) => {

    return (
        <TitleWrapper fontSize={fontSize}>
            {children}
        </TitleWrapper>
    );
};

export default Title;