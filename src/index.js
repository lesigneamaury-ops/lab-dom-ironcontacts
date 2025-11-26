// HTML ELEMENTS
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((oneCeleb) => {
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${oneCeleb.pictureUrl}" />
  </td>
  <td> ${oneCeleb.name} </td>
  <td> ${oneCeleb.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

  tableBody.appendChild(exampleRow);
});

// ITERATION 2 - Delete Buttons

//Your code goes here ...
const deletebtn = document.querySelectorAll(".btn-delete");
deletebtn.forEach((oneCeleb) => {
  oneCeleb.addEventListener("click", () => {
    oneCeleb.parentNode.parentNode.remove();
  });
});

// ITERATION 3 - Like Buttons

// Your code goes here ...
const likeBtn = document.querySelectorAll(".btn-like");
likeBtn.forEach((oneCeleb) => {
  oneCeleb.addEventListener("click", () => {
    oneCeleb.classList.toggle("selected");
  });
});

// Bonus: ITERATION 4 - Add Random Contacts
const buttonAddRandom = document.querySelector("#btn-add-random");
buttonAddRandom.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomCeleb = contacts[randomIndex];
  const exampleRow = document.createElement("tr");
  exampleRow.innerHTML = `
  <td>
    <img src="${randomCeleb.pictureUrl}" />
  </td>
  <td> ${randomCeleb.name} </td>
  <td> ${randomCeleb.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
  const deleteBtn = exampleRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    deleteBtn.parentNode.parentNode.remove();
  });
  const likeBtn = exampleRow.querySelector(".btn-like");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");
  });
  tableBody.appendChild(exampleRow);
});

// Your code goes here ...
