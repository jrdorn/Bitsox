/**
 RTK Query core functionality
  use once per app, with 'one API slice per base URL'
  automatically generates hooks corresponding to the defined endpoints

  const Foobar = () => {
    render(<div>foobar</div>);
  };
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { render } from "react-dom";

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
    // get user auth
    getAuth: builder.query({
      query: () => "/auth",
    }),

    // get user cart items
    getCart: builder.query({
      query: () => "/cart",
    }),

    // get private user info (wishlist, routes, account config)
    getPrivate: builder.query({
      query: () => "/private",
    }),

    // get shop inventory items
    getShop: builder.query({
      query: () => "/shop",
    }),

    //
    // getFileById: builder.query<any, { id, fileId }>({
    //   query: arg => {
    //     const { id, fileId } = arg;
    //     return `/service/${id}/files/${fileId}`;
    //   },
    // }),
  }),
});

/**
  
import { skipToken } from "@reduxjs/toolkit/query";



User local component state to set query param:

  const [myState, setState] = useState(skipToken) // initialize with skipToken to skip at first
  const result = useMyQuery(myState)

Set state in click handler:

  const changePage = () => {
    setState(5)
  }


Form submit -> use mutation. Not interested in the long term result, but
want to trigger change on the server by sending data

  const [trigger, result] = useMyMutation()

  const handleSubmit = () => {
    trigger(someValue)
  }

 */

/* export auto-generated hooks for React components */

export const { useGetAuthQuery } = bitsoxAPI;

export const { useGetCartQuery } = bitsoxAPI;

export const { useGetPrivateQuery } = bitsoxAPI;

export const { useGetShopQuery } = bitsoxAPI;
