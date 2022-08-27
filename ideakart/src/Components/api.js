export default function getData() {
    return fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json);
  }
  