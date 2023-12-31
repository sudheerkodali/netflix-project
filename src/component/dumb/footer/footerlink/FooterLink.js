import React from 'react';
import './FooterLink.css'

function FooterLink( { children, ...restProps } )
{
    return(
        <a href='#' className='footer-link' { ...restProps } >
            { children }
        </a>
    )
}

export default FooterLink;