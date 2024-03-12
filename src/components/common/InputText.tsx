import React, { ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';

interface Props{
    placeholder?: string;
}

const InputText = React.forwardRef(({placeholder} : Props, ref: ForwardedRef<HTMLInputElement>) => {
    return(
        <InputTextStyle placeholder={placeholder} ref = {ref}/>
    )
})

const InputTextStyle = styled.input.attrs({type: "text"})`
padding: 0.25rem 0.75rem;
border: 1px solid ${({theme}) => theme.color.border};
border-radius : ${({theme}) => theme.borderRadius.default};
fonst-size : 1rem;
line-height: 1.5;
color: ${({theme}) => theme.color.text};
`;

export default InputText;