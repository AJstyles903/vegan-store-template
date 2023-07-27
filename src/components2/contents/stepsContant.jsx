import React from 'react';

export default function stepsContant(props) {
    return (
        <>
            <div className={`font-poppins py-28 px-12 text-center text-white ${props.bg}`}>
                {props.element}
                <h3 className='text-[24px] my-6 font-semibold'>
                    {props.title}
                </h3>
                <p className='text-[14px] mb-[14px] font-normal leading-[22px] tracking-[1.5px]'>
                    {props.description}
                </p>
            </div>
        </>);
}