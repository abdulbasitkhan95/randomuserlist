import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL} from "../../global/vars";

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  tagTypes: ['Search'],
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: ({page = 1, count = 10}) => `?page=${page}&results=${count}&seed=a`,
      providesTags: ['Search']
    }),
  }),
})

export const {useGetSearchQuery} = searchApi
