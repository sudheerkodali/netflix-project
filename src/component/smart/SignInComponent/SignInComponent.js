import React from 'react';
import SignButton from '../../dumb/signButton/SignButton';
import SignCaptcha from '../../dumb/SignCaptcha/SignCaptcha';
import SignInput from '../../dumb/SignInput/SignInput';
import SignLink from '../../dumb/SignLink/SignLink';
import SignText from '../../dumb/SignText/SignText';
import SignTitle from '../../dumb/SignTitle/SignTitle';
import './SignInComponent.css';

function SignInComponent( { children, ...restProps } )
{
    return(
        <div className='sign-form-wrapper' { ...restProps }>
            <form className='sign-form-base'>
                <SignTitle> Sign In </SignTitle>
                <SignInput 
                    type='text'
                    placeholder='Email Address'
                />
                <SignInput 
                    type='password'
                    placeholder='Password'
                    autocomplete='off'
                />
                <SignButton> Sign In </SignButton>
                <SignText> New to NetFlix? <SignLink>SignUp Now</SignLink></SignText>
                <SignCaptcha>
                This page is protected by Google reCAPTCHA to ensure you're not a bot.
                </SignCaptcha>
            </form>
        </div>
    )
}

export default SignInComponent;