'use client';

import { useData } from '@/hooks/useApi';
import GraphHeader from './GraphHeader';
import GraphCharts from './GraphCharts';
import GraphFooter from './GraphFooter';

const Graph = () => {
  const { data, isLoading, error, refetch } = useData();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  const currentValue = data[data.length - 1].value;
  const previousValue = data[data.length - 2]?.value;
  const percentageChange = previousValue
    ? (((currentValue - previousValue) / previousValue) * 100).toFixed(1)
    : '0';

  const isPositive = parseFloat(percentageChange) > 0;

  return (
    <>
      <GraphHeader onRefresh={refetch} />
      <div className='text-5xl semi-bold pb-4'>{currentValue}</div>
      <GraphCharts data={data} />
      <GraphFooter
        isPositive={isPositive}
        percentageChange={percentageChange}
      />
    </>
  );
};

export default Graph;
