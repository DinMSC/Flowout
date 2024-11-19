'use client';

import { ResponsiveBar } from '@nivo/bar';
import { useData } from '@/hooks/useApi';

const Graph = () => {
  const { data, isLoading, error, refetch } = useData(); // Fetch data using the hook

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  // Process the data for percentage change and display
  const currentValue = data[data.length - 1].value;
  const previousValue = data[data.length - 2]?.value; // Handle case when there's no previous data
  const percentageChange = previousValue
    ? (((currentValue - previousValue) / previousValue) * 100).toFixed(1)
    : '0';

  // Determine if the change is positive or negative
  const isPositive = parseFloat(percentageChange) > 0;

  return (
    <>
      <div className='flex items-center justify-between pb-6'>
        <div className='flex items-center gap-2'>
          <h2 className='text-xl font-semibold'>Total customers</h2>
          <button className='rounded-md bg-gray-100 p-1.5'>X</button>
        </div>
        <button
          onClick={() => refetch()}
          className='rounded-md bg-gray-100 p-1.5'
        >
          O
        </button>
      </div>

      <div className='text-5xl font-bold'>{currentValue}</div>
      <div className='h-[200px] mt-4'>
        <ResponsiveBar
          data={data}
          keys={['value']}
          indexBy='timestamp'
          margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          colors={['#4ade80']}
          animate={true}
          enableLabel={false}
          axisTop={null}
          gridYValues={0}
          axisRight={null}
          axisBottom={null}
          axisLeft={null}
          borderRadius={4}
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: '#888888',
                  fontSize: 12,
                },
              },
            },
          }}
        />
      </div>

      <div className='mt-4 flex items-center justify-between'>
        <div className='text-sm text-gray-500'>Oct 2 - Oct 8, 2023</div>

        <div
          className={`flex items-center rounded-lg ${
            isPositive
              ? 'bg-emerald-50 text-emerald-600'
              : 'bg-red-50 text-red-600'
          } px-2 py-1 text-sm font-medium`}
        >
          {isPositive ? `+${percentageChange}%` : `${percentageChange}%`}
          <svg
            className={`ml-1 h-4 w-4 ${isPositive ? 'rotate-0' : 'rotate-180'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={
                isPositive
                  ? 'M5 10l7-7m0 0l7 7m-7-7v18'
                  : 'M19 14l-7 7m0 0l-7-7m7 7V6'
              }
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Graph;
