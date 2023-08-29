// import { addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuUJOtd8AeE15gwtF70wo4swYXZQLFJxk",
  authDomain: "memo-app-4a17e.firebaseapp.com",
  projectId: "memo-app-4a17e",
  storageBucket: "memo-app-4a17e.appspot.com",
  messagingSenderId: "749093936040",
  appId: "1:749093936040:web:cc1b1532237f24fab59b9d",
  measurementId: "G-W13KP97TGW"
};

// init Firebase App
firebase.initializeApp(firebaseConfig);

//init services
   const db = firebase.firestore();

// collection ref


// const colRef = collection(db, 'memo')
const addButton = document.querySelector("#addButton")
const itemName = document.querySelector("#item-name")
const itemDes = document.querySelector("#item-des")
const ul = document.querySelector('ul');
 
  
addButton.addEventListener("click", addTask);

function addTask() {
  // Creating Element
  const li = document.createElement('li');

  // Adding Element
  ul.append(li);

  // Modifying the text
  const taskName = itemName.value;
  const taskDes = itemDes.value;

  li.classList.add('name');
  li.innerHTML = `<h2>${taskName}</h2><p>${taskDes}</p><button class="delete-btn">X</button>`;

  // Delete Button
  const deleteButton = li.querySelector(".delete-btn");
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  // Clear input values
  itemName.value = "";
  itemDes.value = "";
}
addButton.addEventListener("click", () => {
  const taskName = itemName.value;
  const taskDes = itemDes.value;

  db.collection("memo").add({
    name: taskName,
    desc: taskDes
  })
  .then(() => {
    console.log("Item added to Firestore");
  })
  .catch(error => {
    console.error("Error adding item:", error);
  });
});