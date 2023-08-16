import React from 'react';
import JumboImage from '../jumboImage/JumboImage';
import JumboSubHeading from '../jumboSubHeading/JumboSubHeading';
import JumboTitle from '../jumboTitle/JumboTitle';
import './JumboItem.css';

function JumboItem( { children,alignment,title,subheading,imgSrc,imgAlt, ...restProps} )
{
    return(
       <div className='jumbo-item'>
        {
            alignment===true && 
            (
                <div>
                    <JumboTitle> {title} </JumboTitle>
                    <JumboSubHeading> {subheading} </JumboSubHeading>
                </div>
            )
        }  
        {
            alignment===false && 
            (
                <div>
                    <JumboImage src={imgSrc} alt={imgAlt} />
                </div>
            )
        }      
        {
            alignment===true && 
            (
                <div>
                    <JumboImage src={imgSrc} alt={imgAlt} />
                </div>
            )
        }
        {
            alignment===false && 
            (
                <div>
                    <JumboTitle> {title} </JumboTitle>
                    <JumboSubHeading> {subheading} </JumboSubHeading>
                </div>
            )
        }       
       </div>  
    )
}

export default JumboItem;