import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '5fd4d3385amsh42465db265bb126p1c142cjsn1eca564a916a');

      return headers;
    },
  }),
  
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/track' }),
    // getSongDetails: builder.query({ query: ({ songId }) => '/charts/track' }),
  }),
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;
