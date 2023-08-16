import React from 'react';
import Separator from '../../Separator/Separator';
import JumboItem from '../jumboItem/JumboItem';
import './JumboComponent.css';



function JumboComponent( )
{
    const data = [
        {
            'title' : 'Enjoy on your TV.',
            'subheading' : 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
            'imgSrc' : 'images/home/home-tv.png'
        },
        {
            'title' : 'Download your shows to watch offline.',
            'subheading' :'Save your favourites easily and always have something to watch.',
            'imgSrc' : 'images/home/home-mobile.jpg'
        },
        {
            'title' : 'Watch everywhere.',
            'subheading' :'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            'imgSrc' : 'images/home/home-imac.png'
        },
        {
            'title' : 'Create profiles for children.',
            'subheading' :'Send children on adventures with their favourite characters in a space made just for them—free with your membership.',
            'imgSrc' : 'images/home/home-children.png'
        }
    ];
    return(
       <div className='jumbo-component'>
            {
                    data.map((item:{...}, index:number) => (
                        <>
                            <JumboItem alignment={index%2===0} title={item.title} subheading={item.subheading} imgSrc={item.imgSrc} />
                            <Separator/>
                        </>
                    )) 
            }
       </div>
    )
}

export default JumboComponent;