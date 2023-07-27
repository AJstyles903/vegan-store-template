import React from 'react';

export default function futureContant(props) {
    return(
        <>
        <div className='p-[24px] text-center'>
            <div className='bg-[#e3b375] p-[40px] rounded-full inline-block hover:scale-110 duration-300'>
                {props.element}
            </div>
                <h3 className='text-[24px] my-[24px] font-semibold'>
                {props.title}
                </h3>
                <p className='text-[#8b8b99] text-[16px] my-[16px] font-medium tracking-[1px]'>{props.description}</p>
        </div>
        </>
    );
}