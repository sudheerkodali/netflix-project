import React from 'react';
import AccordionComponent from '../component/dumb/accordion/accordionComponent/AccordionComponent';
import FooterComponent from '../component/dumb/footer/footerComponent/FooterComponent';
import HeaderWrapper from '../component/dumb/header/HeaderWrapper/HeaderWrapper';
import SignInButton from '../component/dumb/header/SignInButton/SignInButton';
import JumboComponent from '../component/dumb/jumbo/jumboComponent/JumboComponent';
import Separator from '../component/dumb/Separator/Separator';
import HeaderComponent from '../component/smart/HeaderComponent';



function HomePage()
{
    return(
        <>
            <HeaderComponent/>
            <Separator/>
            <JumboComponent/>
            <AccordionComponent/>
            <Separator/>
            <FooterComponent/>
        </>
    )
}

export default HomePage;