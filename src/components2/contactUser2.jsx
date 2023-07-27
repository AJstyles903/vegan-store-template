import React from 'react';

export default function contactUser() {
    return (
        <>
            <div className='bg-white'>
                <div className='w-[75%] mx-auto font-poppins'>
                    <div className='text-center'>
                        <h1 className='text-[34px] sm:text-[44px] font-normal text-[#8b8b99] my-4'>Vimeo Video</h1>
                        <div className="bg-[#e4b476] h-[2px] mb-10 w-[8%] mx-auto"></div>
                        <iframe className='mx-auto' src="https://player.vimeo.com/video/275412279" allow="autoplay;encrypted-media" autoplay allowFullScreen></iframe>
                    </div>
                    <div className='py-28'>
                        <div className="flex gap-14 flex-col md:flex-row">
                            <div>
                                <h6 className='font-caveat text-[24px] text-[#91ac41]'>Contact Us</h6>
                                <h1 className='text-[34px] sm:text-[44px] font-bold'>Address Information</h1>
                                <p className='text-[#8b8b99] text-[16px] my-4'>Overeating is one of the most common causes of overweight and digestive problems.</p>
                                <h3 className='text-[24px] font-semibold mt-8'>London Store</h3>
                                <p className='text-[14px] sm:text-[16px] font-normal text-[#8b8b99] leading-9'>
                                    Roeterseiland Campus Building E <br />
                                    6th floor London <br />
                                    Monday to Friday : 9am to 8pm <br />
                                    examplemail.mail.com
                                </p>
                                <h3 className='text-[24px] font-semibold mt-8'>Berlin Store</h3>
                                <p className='text-[14px] sm:text-[16px] font-normal text-[#8b8b99] leading-9'>
                                    Roeterseiland Campus Building E <br />
                                    6th floor London <br />
                                    Monday to Friday : 9am to 8pm <br />
                                    examplemail.mail.com
                                </p>
                            </div>
                            <div>
                                <h6 className='font-caveat text-[24px] text-[#91ac41]'>Meet Our Team</h6>
                                <h1 className='text-[34px] sm:text-[44px] font-bold'>Get In Touch</h1>
                                <p className='text-[#8b8b99] text-[14px] sm:text-[16px] my-4'>The task of proper nutrition - to remove from the diet harmful food and enrich it useful.</p>
                                <div className='flex flex-col gap-4'>

                                    <input className='p-[16px] rounded-[4px] border-light-gray border-solid border-2' type="text" placeholder='Name' />
                                    <input className='p-[16px] rounded-[4px] border-light-gray border-solid border-2' type="text" max={10} placeholder='Phone' />
                                    <input className='p-[16px] rounded-[4px] border-light-gray border-solid border-2' type="text" placeholder='Subject' />
                                    <input className='p-[16px] rounded-[4px] border-light-gray border-solid border-2' type="email" placeholder='E-mail' />
                                    <textarea className='p-[16px] rounded-[4px] border-light-gray border-solid border-2' placeholder="Message"></textarea>
                                    <button className='bg-[#aad236] px-8 py-2 text-[16px] text-white rounded-[4px] font-bold w-fit' type="button">SUBMIT NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}