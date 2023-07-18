import Subtitle from "../Subtitle/subtitle";
import Title from "../Title/title";
import { InfoSectionsWrapper, Separator } from "./userInfosSections.style";

const UserInfosSections = ({ title, subtitle, id, children }: any) => {

    return (
        <InfoSectionsWrapper id={id}>
            <Title fontSize={40}>{title}</Title>
            <Separator />
            <Subtitle margin="20px 0" fontSize={18} maxWidth={700}>{subtitle}</Subtitle>
            {children}
        </InfoSectionsWrapper>
    );
};

export default UserInfosSections;