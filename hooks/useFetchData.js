import { useQuery } from 'react-query';

const fetchData = async (endPoint) => {
  const response = await fetch(
    `https://pandooin.com/api/zamrood/${endPoint}?highlight=true`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const useFetchData = (endPoint) => {
  return useQuery([endPoint], () => fetchData(endPoint), {
    staleTime: 300000, // 5 minutes
    cacheTime: 900000, // 15 minutes
    refetchOnWindowFocus: false,
    retry: 1, // Retry once on failure
  });
};

export default useFetchData;
