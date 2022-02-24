//RTK Query core functionality
//use this once per app, with 'one API slice per base URL'
//automatically generates hooks corresponding to the defined endpoints
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { render } from "react-dom";

const Foobar = () => {
  render(<div>foobar</div>);
};

//define a service using a base URL and expected endpoints
// export const bitsoxAPI = createApi({
//     reducerPath: 'foobarApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://baseurl.com/api/' }),
//     endpoints: (builder) => ({
//         getItemByName: builder.query<Foobar, string>({
//             query: (name) => `foobar/${name}`,
//         })
//     })
// })

//
// export const { useGetItemByName } = bitsoxApi;
