import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeader = {
  "x-rapidapi-key": "8d5d2a2cd3msha12dddadeb22130p1b8b49jsnc231130cff9f",
  "x-rapidapi-host": "cryptocurrency-news2.p.rapidapi.com",
};

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com";

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
