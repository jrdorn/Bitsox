import axios from "axios";

/* Examples */

// xsrfHeaderName and xsrfCookieName: 'XSRF-TOKEN' are default

// cancelToken: new CancelToken((cancel) => {
//    ...
//  })

// GET
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

// POST
axios
  .post("user", {
    auth: {
      username: "myUser",
      password: "myPassword",
    },
    data: {
      firstName: "First",
      lastName: "Last",
    },
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// Response schema
const axiosResponse = {
  data: {},

  status: 200,

  statusText: "OK",

  headers: `response.headers['content-type']`,

  config: {},

  request: {},
};

// Error handling
axios.get("throw/error").catch((err) => {
  if (err.response) {
    //request was made and server responded with err code
    console.log(err.response.data, err.response.status, err.response.headers);
  } else if (err.request) {
    //request was made and no response was received
    console.log(err.request);
  } else {
    //the request setup triggered the error
    console.log(err.message);
  }
});
