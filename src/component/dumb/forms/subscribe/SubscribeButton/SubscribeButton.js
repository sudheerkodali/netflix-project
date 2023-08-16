import React from 'react';
import './SubscribeButton.css';

function SubscribeButton( { children, ...restProps} )
{
    return(
        <div>
            <a className='subscribe-button' href='./signup' { ...restProps }>
                { children }
            
            <img 
                className='subscribe-button-image'
                src='../../../../../images/icons/right-arrow.svg'
                alt='Try Now'
            />
            </a>
        </div>
    )
}

export default SubscribeButton;