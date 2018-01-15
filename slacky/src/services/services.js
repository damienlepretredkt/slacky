
function authenticate(fetch, login, password) {
  const serverUrl = "http://localhost:8080";

  return fetch(`${serverUrl}/authenticate/`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        name: login,
        password: password
      })
    })

}


export default authenticate;
