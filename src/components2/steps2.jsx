import React from 'react';
import StepsContant from './contents/stepsContant';
import {RiScissors2Fill as Scissors} from 'react-icons/ri';
import {FaPaintBrush as Brush} from 'react-icons/fa';
import {FaBagShopping as Bag} from 'react-icons/fa6';
import {FaRegFaceSmileBeam as Smilyface} from 'react-icons/fa6';

const stepSection = ()=> {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-4 w-full'>
                <StepsContant bg="bg-[#5acda6]" element={<Scissors className='w-auto h-24 font-black text-center rotate-90 inline-block hover:scale-110 duration-300'/>} title="Step 01." description="Vegetables are an integral part of the human diet. They are extremely useful because of the high content of carbohydrates, various acids, vitamins and active elements in the form, easy for digestion." />
                <StepsContant bg="bg-[#91ac41]" element={<Brush className='w-auto h-24 font-black text-center inline-block hover:scale-110 duration-300'/>} title="Step 02." description="Fresh tomatoes are ideal for replenishing the loss of minerals. These vegetables contain a lot of acids that our body needs for full-fledged work." />
                <StepsContant bg="bg-[#e4b476]" element={<Bag className='w-auto h-24 font-black text-center inline-block hover:scale-110 duration-300'/>} title="Step 03." description="In the content of vitamin C, sweet peppers are superior to lemons and even black currants! The greatest amount of vitamin is contained around the stalk, that is, in the part of the product that is usually cut during cleaning." />
                <StepsContant bg="bg-[#f69dad]" element={<Smilyface className='w-auto h-24 font-black text-center inline-block hover:scale-110 duration-300'/>} title="Step 04." description="If you sometimes eat hot chili peppers, this will help normalize cerebral circulation, ease the condition with bronchial asthma, cough, sore throat, flu." />
            </div>
        </>
    );
}

export default stepSection;