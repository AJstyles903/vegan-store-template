import React, { useState } from 'react';
import logo from '../assets/images/logo1.png';
import { BsFillCaretDownFill as Down } from 'react-icons/bs';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <header className="relative bg-[url(assets/images/landing-background.png)] bg-left w-full h-[80vh] sm:h-[100vh] font-poppins font-semibold bg-no-repeat">
                <nav className='bg-white py-2 sm:py-4 px-4 sm:px-8 items-center fixed w-full flex justify-between'>
                            <img className='w-[30px] sm:w-[40px]' src={logo} onClick={() => setToggle(!toggle)} alt="logo" />
                    <div className='sm:flex'>
                        <ul className="hidden sm:flex text-[14px] bg-white text-black flex-row">
                            <li className='mx-4 relative' onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                                <a className="flex p-4" href="#dropdown"> Demo Pages
                                    <Down className='ml-2 mt-1' />
                                </a>
                                <div className={`${isOpen ? 'visible' : 'hidden'} w-full text-left shadow-md rounded-[4px] border-t-2 border-t-[#aad236] bg-white sm:absolute sm:w-[190px] sm:right-0 sm:top-9 `} id="dropdown">
                                    <ul className='text-[16px] font-normal p-[20px]'>
                                        <li className='p-1'>
                                            <a href="/">Menu Item 1</a>
                                        </li>
                                        <li className='p-1 border-t-2 border-b-2'>
                                            <a href="/">Menu Item 2</a>
                                        </li>
                                        <li className='p-1'>
                                            <a href="/">Menu Item 3</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='mx-4 p-4'>
                                <a href="/">Watch Video</a>
                            </li>
                            <li className='mx-4 p-4'>
                                <a className="flex" href="/">Blocks
                                    <Down className='ml-2 mt-1' />
                                </a>
                            </li>
                        </ul>
                        <ul className={`${toggle ? 'left-0' : '-left-96'} sm:hidden duration-500 absolute flex text-[14px] flex-col h-screen w-[70%] top-11 bg-white text-black md:flex-row`}>
                            <li className='mx-4 relative' onMouseEnter={() => setIsOpen(!isOpen)} onMouseLeave={() => setIsOpen(!isOpen)}>
                                <a className="flex p-4" href="#dropdown"> Demo Pages
                                    <Down className='ml-2 mt-1' />
                                </a>
                                <div className={`${isOpen ? 'visible' : 'hidden'} w-full text-left shadow-md rounded-[4px] border-t-2 border-t-[#aad236] bg-white`} id="dropdown">
                                    <ul className='text-[16px] font-normal p-[20px]'>
                                        <li className='p-1'>
                                            <a href="/">Menu Item 1</a>
                                        </li>
                                        <li className='p-1 border-t-2 border-b-2'>
                                            <a href="/">Menu Item 2</a>
                                        </li>
                                        <li className='p-1'>
                                            <a href="/">Menu Item 3</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className='mx-4 p-4'>
                                <a href="/">Watch Video</a>
                            </li>
                            <li className='mx-4 p-4'>
                                <a className="flex" href="/">Blocks
                                    <Down className='ml-2 mt-1' />
                                </a>
                            </li>
                        </ul>
                        <button className='bg-[#aad236] px-6 sm:px-10 py-2 text-[10px] sm:text-[14px] text-white rounded-[4px]' type="button">BUY NOW</button>
                    </div>
                </nav>
                <div className='w-full text-center h-[80vh] sm:h-[100vh] flex flex-col justify-center items-center px-4 sm:px-60'>
                    <h1 className='text-[22px] sm:text-[44px] leading-[27px] sm:leading-[55px] tracking-[5px] sm:tracking-[10px]'>Vegan Store Simple Website Template</h1>
                    <p className='text-[#8b8b99] text-[10px] sm:text-[14px] tracking-[0.5px] sm:tracking-[1px] font-normal mt-1 sm:mt-4 pt-4 sm:pt-8'>With nutrition, all the vital functions of the body are connected. It is the source of the development of tissues and cells, their constant renewal, the saturation of man with energy.</p>
                </div>
            </header>
        </>
    );
}

export default Header;