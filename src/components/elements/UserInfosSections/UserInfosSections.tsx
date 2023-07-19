import { ReactNode } from "react";
import Title from "../Title/title";
import { InfoSectionsWrapper, SectionSubtitle, Separator } from "./userInfosSections.style";

interface UserInfosSectionsProps {
    children: ReactNode;
    title: string,
    subtitle: string,
    id: string;
}

const UserInfosSections = ({ title, subtitle, id, children }: UserInfosSectionsProps) => {

    return (
        <InfoSectionsWrapper id={id}>
            <Title fontSize={40}>{title}</Title>
            <Separator />
            <SectionSubtitle >{subtitle}</SectionSubtitle>
            {children}
        </InfoSectionsWrapper>
    );
};

export default UserInfosSections;