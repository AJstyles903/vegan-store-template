import React from 'react';
// how to use jpg file using import in jsx
import FirstProfilePhoto from '../assets/images/profile/face5.jpg';
import SecondProfilePhoto from '../assets/images/profile/face6.jpg';
import ThirdProfilePhoto from '../assets/images/profile/face7.jpg';  

export default function feedback() {
    return (
        <>

            <div className="bg-white font-poppins pt-28 w-full text-center">
                <p className="font-caveat text-[#91ac41] text-[24px]">Fresh Food</p>
                <h1 className='text-[34px] sm:text-[44px] font-semibold tracking-[1px]'>Our Vegan Store!</h1>
                <p className="text-[16px] w-full mx-auto px-8 text-[#8b8b99] mt-3 tracking-[1.5px]">According to experts, any habit can be formed in 21 days. The same statement applies to healthy eating.</p>
                <div className='justify-center grid grid-cols-1 md:grid-cols-3 w-full md:w-[75%] mx-auto my-14 px-[16px] py-[24px] gap-8'>
                    <div className='py-[40px] px-[30px] text-center bg-[#f5f6fb] rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px]'>
                    <img className="w-[25%] inline-block rounded-full" src={FirstProfilePhoto} alt='pro'/>
                        <p className='my-[24px] italic text-[#8b8b99] text-[14px] font-medium leading-[22px] tracking-[1.5px]'>Sales consultants are very polite. Many of the products have tried and are ready to prompt and recommend to customers. The staff shows that they completely share the philosophy of proper nutrition, if you can say so.</p>
                        <h6 className='text-[16px] font-semibold'>VERONICA KING</h6>
                        <p className='italic text-[12px] font-normal text-[#8b8b99]'>Cook</p>
                    </div>
                    <div className='h-fit my-auto py-[40px] px-[30px] text-center bg-[#f5f6fb] rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px] object-contain'>
                    <img className="w-[25%] inline-block rounded-full" src={SecondProfilePhoto} alt='pro'/>
                        <p className='my-[24px] italic text-[#8b8b99] text-[14px] font-medium leading-[22px] tracking-[1.5px]'>The assortment is very wide. From useful organic oils, cereals and teas to specific products for vegetarians, such as sausages and pies without meat.</p>
                        <h6 className='text-[16px] font-semibold'>JIM CASH</h6>
                        <p className='italic text-[12px] font-normal text-[#8b8b99]'>Seller</p>
                    </div>
                    <div className='py-[40px] px-[30px] text-center bg-[#f5f6fb] rounded-bl-[50px] rounded-br-[50px] rounded-tl-[50px]'>
                    <img className="w-[25%] inline-block rounded-full" src={ThirdProfilePhoto} alt='pro'/>
                        <p className='my-[24px] italic text-[#8b8b99] text-[14px] font-medium leading-[22px] tracking-[1.5px]'>I want to say a huge thank you to the management of the store and all its employees, I'm not a vegetarian, it would seem that the store is not for me, but it's not so, any person who comes here will find something useful.</p>
                        <h6 className='text-[16px] font-semibold'>PETER GOODMAN</h6>
                        <p className='italic text-[12px] font-normal text-[#8b8b99]'>Manager</p>
                    </div>
                </div>
            </div>
        </>
    );
}