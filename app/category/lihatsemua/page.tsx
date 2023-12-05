'use client'
import React, { useState } from 'react';
import { BsChevronCompactUp } from 'react-icons/bs';

type Props = {};

const LihatSemua = (props: Props) => {
  const [isFeaturedOpen, setFeaturedOpen] = useState(false);
  const [isElectronicsOpen, setElectronicsOpen] = useState(false);

  return (
    <div className='max-w-[600px] mx-auto p-2 left-0'>
      <div onClick={() => setFeaturedOpen(!isFeaturedOpen)} className='flex flex-row max-w-screen-md items-center justify-between cursor-pointer'>
        <p className='mr-auto'>Featured</p>
        <BsChevronCompactUp
          className={`transition ease-in duration-150 transform ${isFeaturedOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {isFeaturedOpen && <div className='ml-4'>Content for Featured</div>}

      <div onClick={() => setElectronicsOpen(!isElectronicsOpen)} className='flex flex-row items-center justify-between cursor-pointer mt-4'>
        <p className='mr-auto'>Elektronik</p>
        <BsChevronCompactUp
          className={`transition ease-in duration-150 transform ${isElectronicsOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>
      {isElectronicsOpen && <div className='ml-4'>Content for Electronics</div>}
    </div>
  );
}

export default LihatSemua;
