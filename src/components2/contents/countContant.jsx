import React from 'react';

export default function countContant(props) {
    return (
        <>
            <div className='text-center mt-4'>
                <h3 className='text-[44px] font-semibold text-center'>{props.number}</h3>
                <p className='text-[#57e3b5] italic text-[14px] px-[64px] tracking-[1px]'>{props.title}</p>
            </div>
        </>
    );
}