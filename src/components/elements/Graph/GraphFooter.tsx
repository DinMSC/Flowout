import { FaArrowTrendDown, FaArrowTrendUp } from 'react-icons/fa6';

interface GraphFooterProps {
  isPositive: boolean;
  percentageChange: string;
}

const GraphFooter: React.FC<GraphFooterProps> = ({
  isPositive,
  percentageChange,
}) => {
  return (
    <div className='flex items-center justify-between'>
      {/* Ovdje datum */}
      <div className='text-xl text-gray-500'>Oct 2 - Oct 8, 2023</div>
      <div
        className={`flex items-center rounded-md ${
          isPositive
            ? 'bg-emerald-200 text-emerald-600'
            : 'bg-red-50 text-red-600'
        } px-2 py-1 text-xl font-medium`}
      >
        {isPositive ? (
          <>
            +{percentageChange}%
            <FaArrowTrendUp className='ml-1' />
          </>
        ) : (
          <>
            {percentageChange}%
            <FaArrowTrendDown className='ml-1' />
          </>
        )}
      </div>
    </div>
  );
};

export default GraphFooter;