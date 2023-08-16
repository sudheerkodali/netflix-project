import React from 'react';
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent';
import HeaderWrapper from '../component/dumb/header/HeaderWrapper/HeaderWrapper';
import Logo from '../component/dumb/header/Logo/logo';
import NavBar from '../component/dumb/header/NavBar/NavBar';
import SignInComponent from '../component/smart/SignInComponent/SignInComponent';
import SignUpComponent from '../component/smart/SignUpComponent/SignUpComponent';

function SignUpPage()
{
    return(
        <>
          <HeaderWrapper>
            <NavBar className='navbar-home'>
                <Logo/>
            </NavBar>
            <SignUpComponent/>
          </HeaderWrapper>
          <FooterComponent/>
        </>
    )
}

export default SignUpPage;