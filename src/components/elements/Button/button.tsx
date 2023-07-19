import { ReactNode } from 'react';
import { ButtonContent } from './button.style';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?(): void;
}

const Button = ({ children, href, onClick }: ButtonProps) => {

    return (
        <ButtonContent href={href} onClick={onClick}>
            {children}
        </ButtonContent>
    );
};

export default Button;