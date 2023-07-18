import React from 'react';
import { ButtonContent } from './button.style';

const Button = ({ children }: any) => {

    return (
        <ButtonContent>
            {children}
        </ButtonContent>
    );
};

export default Button;