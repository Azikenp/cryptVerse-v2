import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-key": "8d5d2a2cd3msha12dddadeb22130p1b8b49jsnc231130cff9f",
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl =
  "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCrypto: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

export const { useGetCryptoQuery } = cryptoApi;

