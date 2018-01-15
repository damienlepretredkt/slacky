

function findUserById(id, pool) {
  console.log("byId" + " " + id);
  return new Promise((resolve, reject) => {
    resolve({id: "Damien", login: "Damien"});
  });
}

function findUser(login, password, pool) {
  console.log("findUser" + " " + login + " " + password);
  return new Promise((resolve, reject) => {
    resolve({id: "Damien", login: "Damien"});
  });
}
