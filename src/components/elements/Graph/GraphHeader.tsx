import React from 'react';
import { FaArrowsRotate } from 'react-icons/fa6';
import { FaInfo } from 'react-icons/fa';

interface GraphHeaderProps {
  onRefresh: () => void;
}
const GraphHeader: React.FC<GraphHeaderProps> = ({ onRefresh }) => {
  return (
    <div className='flex items-center justify-between pb-1'>
      <div className='flex items-center gap-2'>
        <h2 className='text-2xl'>Total customers</h2>
        <button className='rounded-md bg-[#f3f5f7] p-1.5 w-[38px] flex justify-center items-center'>
          <FaInfo color='#a0a2a8' />
        </button>
      </div>
      <button
        onClick={onRefresh}
        className='rounded-md border-2 border-gray-100 p-1.5 cursor-pointer w-[38px] flex flex-row justify-center items-center'
      >
        <FaArrowsRotate color='#909392' />
      </button>
    </div>
  );
};

export default GraphHeader;
