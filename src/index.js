document.addEventListener("DOMContentLoaded", (e) => {
  const tableBody = document.querySelector("#table-body");
  const dogForm = document.querySelector("#dog-form");

  dogForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const updatedDog = {
      name: dogForm.name.value,
      breed: dogForm.breed.value,
      sex: dogForm.sex.value,
    };

    const dogId = e.target.dataset.id;
    updateDog(dogId, updatedDog).then((actualUpdatedDog) => {
      const dogRow = document.querySelector(`tr[data-id='${dogId}']`);

      dogRow.innerHTML = `
      <td>${actualUpdatedDog.name}</td>
  <td>${actualUpdatedDog.breed}</td>
  <td>${actualUpdatedDog.sex}</td>
  <td><button>Edit</button></td>
      `;
    });
  });

  function populateDogForm(dog) {
    dogForm.name.value = dog.name;
    dogForm.breed.value = dog.breed;
    dogForm.sex.value = dog.sex;

    //give form info about which dog we are editing

    dogForm.dataset.id = dog.id;
  }

  function renderDogRow(dog) {
    const dogRow = document.createElement("tr");
    dogRow.dataset.id = dog.id;
    dogRow.innerHTML = `
  <td>${dog.name}</td>
  <td>${dog.breed}</td>
  <td>${dog.sex}</td>
  <td><button>Edit</button></td>
 `;

    const button = dogRow.querySelector("button");
    button.addEventListener("click", () => {
      populateDogForm(dog);
    });

    tableBody.append(dogRow);
  }

  function renderAllDogs(dogs) {
    dogs.forEach(renderDogRow);
  }

  getAllDogs().then(renderAllDogs);
});
