import React from 'react';
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent';
import HeaderWrapper from '../component/dumb/header/HeaderWrapper/HeaderWrapper';
import Logo from '../component/dumb/header/Logo/logo';
import NavBar from '../component/dumb/header/NavBar/NavBar';
import SignInComponent from '../component/smart/SignInComponent/SignInComponent';

function SignInPage()
{
    return(
        <>
          <HeaderWrapper>
            <NavBar className='navbar-home'>
                <Logo/>
            </NavBar>
            <SignInComponent/>
          </HeaderWrapper>
          <FooterComponent/>
        </>
    )
}

export default SignInPage;