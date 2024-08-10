import { useQuery } from 'react-query';

const fetchData = async (endPoint, query = '') => {
  const response = await fetch(
    `https://pandooin.com/api/zamrood/${endPoint}${query}`
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

const useFetchData = (endPoint, query = '') => {
  return useQuery([endPoint, query], () => fetchData(endPoint, query), {
    staleTime: 300000,
    cacheTime: 900000,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};


export default useFetchData;
