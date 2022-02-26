//RTK Query core functionality
//use this once per app, with 'one API slice per base URL'
//automatically generates hooks corresponding to the defined endpoints
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { render } from "react-dom";

// const Foobar = () => {
//   render(<div>foobar</div>);
// };

//define a service using a base URL and expected endpoints
//  API slice object
export const bitsoxAPI = createApi({
  //cache reducer added at 'state.api'
  reducerPath: "api",
  //all requests will have URLs starting with the baseUrl
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bitsox-server.herokuapp.com/api/",
  }),
  //operations and requests for the server
  endpoints: (builder) => ({
    //getItems endpoint is a query that returns data
    getItems: builder.query({
      query: () => "/items",
    }),
  }),
});

//
//auto-generated hook
export const { useGetItemsQuery } = bitsoxAPI;
