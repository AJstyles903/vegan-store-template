import React from 'react';
import CountContant from './contents/countContant';
import Strowberry from '../assets/images/strowberry.jpg';

export default function followus() {
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-y-1'>
                <img className="sm:col-span-2" src={Strowberry} alt="strawberry" />
                <div className="bg-[url(assets/images/strawberry-white.png)] flex flex-col justify-center items-left p-8 sm:px-16">
                    <h1 className='text-[44px] font-bold'>Follow Us</h1>
                    <p className='text-[#8b8b99] text-[16px] my-2'>A wide range of products; many unusual and tasty products; courteous staff.</p>
                    <input className='text-[#8b8b99] font-semibold text-[16px] mt-[50px] w-full p-3 rounded-[4px]' type="email" name="email" placeholder="Your Email" id="email" />
                    <button className='text-[14px] py-3 px-12 w-60 font-bold text-white bg-[#f69dad] rounded-[4px] my-4 hover:bg-white hover:text-[#f69dad] hover:border-light-pink border-solid border-2' type="button">SUBSCRIBE</button>
                </div>

            </div>
            <div className='bg-[#f6fcfa]'>
                <div className='my-6 py-20 w-full grid grid-cols-1 md:grid-cols-4 gap-4'>
                    <CountContant number="7" title="Years of Experience" />
                    <CountContant number="123k" title="Happy Customers" />
                    <CountContant number="72k" title="100% Satisfaction" />
                    <CountContant number="13k" title="Detox Smoothies" />
                </div>
            </div>
        </>
    );
}