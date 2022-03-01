const baseURL = "http://localhost:3000/dogs";

function getAllDogs() {
  return fetch(baseURL).then((response) => response.json());
}

function updateDog(id, updateDog) {
  return fetch(baseURL + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateDog),
  }).then((response) => response.json());
}
