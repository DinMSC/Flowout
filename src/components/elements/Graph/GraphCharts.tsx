import { ResponsiveBar } from '@nivo/bar';

interface GraphChartsProps {
  data: { timestamp: string; value: number }[];
}

const GraphCharts: React.FC<GraphChartsProps> = ({ data }) => (
  <div className='h-[120px] mt-8 mb-[20px] border-b'>
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
      borderRadius={6}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
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
      defs={[
        {
          id: 'myGradient',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: '#4ed958' },
            { offset: 100, color: '#bdf8c1' },
          ],
        },
      ]}
      fill={[
        {
          match: {
            id: 'value',
          },
          id: 'myGradient',
        },
      ]}
    />
  </div>
);

export default GraphCharts;
