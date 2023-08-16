import React from 'react';
import SignButton from '../../dumb/signButton/SignButton';
import SignCaptcha from '../../dumb/SignCaptcha/SignCaptcha';
import SignInput from '../../dumb/SignInput/SignInput';
import SignLink from '../../dumb/SignLink/SignLink';
import SignText from '../../dumb/SignText/SignText';
import SignTitle from '../../dumb/SignTitle/SignTitle';
import './SignUpComponent.css';

function SignUpComponent( { children, ...restProps } )
{
    return(
        <div className='sign-form-wrapper' { ...restProps }>
            <form className='sign-form-base'>
                <SignTitle> Sign Up </SignTitle>
                <SignInput 
                    type='text'
                    placeholder='Name'
                />
                <SignInput 
                    type='text'
                    placeholder='Email Address'
                />
                <SignInput 
                    type='password'
                    placeholder='Password'
                    autocomplete='off'
                />
                <SignButton> Sign Up </SignButton>
                <SignText> Already a User? <SignLink>SignIn Now</SignLink></SignText>
                <SignCaptcha>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </SignCaptcha>
            </form>
        </div>
    )
}

export default SignUpComponent;