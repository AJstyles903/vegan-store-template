import React from 'react';
import FutureContant from './contents/futureContant';
import {FaCamera as Cam,FaRocket as Rock,FaTwitter as Twit,FaWeixin as Weix} from 'react-icons/fa';

export default function features() {
    return(
        <>
            <div className="bg-[#f7eee2] font-poppins py-28 w-full text-center">
                <p className="font-caveat text-[#91ac41] text-[24px]">Fresh Food</p> 
                <h1 className='text-[34px] sm:text-[44px] font-semibold tracking-[1px]'>Our Vegan Store!</h1>
                <p className="text-[16px] text-[#8b8b99] mt-3 tracking-[1.5px] px-4">Radish contains a lot of fiber, pectin and mineral salts.</p> 
                <div className='grid grid-cols-1 sm:grid-cols-4 w-[80%] mx-auto my-14'>
                <FutureContant element={<Cam className='text-[60px] text-white'/>} title="Fresh Vegetables" description="Use for cooking several types of vegetable oil." />
                <FutureContant element={<Rock className='text-[60px] text-white'/>} title="High Quality" description="This is the best source of essential fatty acids for the body." />
                <FutureContant element={<Twit className='text-[60px] text-white'/>} title="Sale" description="It is very good, if in the kitchen there will always be several bottles with different oils." />
                <FutureContant element={<Weix className='text-[60px] text-white'/>} title="Best Price" description="Remember that unrefined oils are not suitable for heat treatment." />
                </div>
            </div>
        </>
    );
}