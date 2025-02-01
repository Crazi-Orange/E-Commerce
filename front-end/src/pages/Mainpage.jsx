import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from './Slider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Mainpage = () => {
    return (
        <div className='h-auto'>
            <main className='p-4'>
                <Slider />
            </main>
        </div>
    );
};
export default Mainpage;