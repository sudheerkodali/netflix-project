import React from 'react';
import SubscribeButton from '../dumb/forms/subscribe/SubscribeButton/SubscribeButton';
import SubscribeEmail from '../dumb/forms/subscribe/SubscribeEmail/SubscribeEmail';
import SubscribeWrapper from '../dumb/forms/subscribe/SubscribeWrapper/SubscribeWrapper';
import FeatureTitle from '../dumb/header/FeatureTitle/FeatureTitle';
import FeatureWrapper from '../dumb/header/FeatureWrapper/FeatureWrapper';
import HeaderWrapper from '../dumb/header/HeaderWrapper/HeaderWrapper';
import Logo from '../dumb/header/Logo/logo';
import NavBar from '../dumb/header/NavBar/NavBar';
import SignInButton from '../dumb/header/SignInButton/SignInButton';
import Separator from '../dumb/Separator/Separator';

function HeaderComponent()
{
    return(
        <> 
            <HeaderWrapper>
                <NavBar className='navbar-home'>
                    <Logo/>
                    <SignInButton/>
                </NavBar>
                <FeatureWrapper className='feature-wrapper-home'>
                    <FeatureTitle className='feature-title-home'>
                        Unlimited movies, TV shows and more. 
                    </FeatureTitle>
                </FeatureWrapper>
                <SubscribeWrapper>
                    <SubscribeEmail type='email'/>
                    <SubscribeButton>
                        Get Started
                    </SubscribeButton>
                </SubscribeWrapper>
            </HeaderWrapper>
           
        </>
    )
}

export default HeaderComponent;