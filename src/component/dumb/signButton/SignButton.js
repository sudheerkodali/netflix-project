import React from 'react';
import './SignButton.css';

function SignButton( { children, ...restProps } )
{
    return(
        <button className='sign-form-button' {...restProps} >
            { children }
        </button>
    )
}

export default SignButton;