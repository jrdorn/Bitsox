#!/usr/bin/env node

const fetch = require("node-fetch");

//list all users in db
const testPG = () => {
  return new Promise((resolve, reject) => {
    fetch(`https://bitsox-server.herokuapp.com/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => resolve(json));
  });
};
(async () => {
  console.log(await testPG());
})();
