import axios from "axios";

/** 
 API call to Bitsox-server Store inventory

     GET list of unsold inventory items
            then keep it in Redux store
            then display that in a React component in Root route
            
 */

// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

axios
  .get("user", {
    params: {
      ID: 1729, //request for user with a certain ID
    },
    headers: { "X-Requested-With": "XMLHttpRequest" },
  })
  .then((res) => {
    console.log(res); //successful response
  })
  .catch((err) => {
    console.log(err); // catch error
  })
  .then(() => {
    console.log("gm"); // then always executed
  });
