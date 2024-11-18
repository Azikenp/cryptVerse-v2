import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
  "x-rapidapi-host": import.meta.env.VITE_NEWS_RAPIDAPI_HOST,
};

const baseUrl = import.meta.env.VITE_NEWS_API_URL;

const createRequest = (url) => ({ url, headers: cryptoNewsHeader });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory }) => createRequest(`/v1/${newsCategory}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
