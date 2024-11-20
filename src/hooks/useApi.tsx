import { GRAPH_DATA } from '@/constants/apis';
import { useQuery } from '@tanstack/react-query';

export const useData = () => {
  const getGraphData = async () => {
    const response = await fetch(GRAPH_DATA);

    if (!response.ok) {
      throw new Error('Failed to fetch graph data');
    }

    return response.json();
  };

  const queryKey = ['graphData'];

  const { data, isLoading, error, refetch } = useQuery({
    queryKey,
    queryFn: getGraphData,
  });

  return { data, isLoading, error, refetch };
};
