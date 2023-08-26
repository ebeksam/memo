
const firebaseConfig = {
  apiKey: "AIzaSyAuUJOtd8AeE15gwtF70wo4swYXZQLFJxk",
  authDomain: "memo-app-4a17e.firebaseapp.com",
  projectId: "memo-app-4a17e",
  storageBucket: "memo-app-4a17e.appspot.com",
  messagingSenderId: "749093936040",
  appId: "1:749093936040:web:cc1b1532237f24fab59b9d",
  measurementId: "G-W13KP97TGW"
};

firebase.initializeApp(firebaseConfig);

   const db = firebase.firestore();

   console.log(db)


const addButton = document.querySelector("#addButton")
const itemName = document.querySelector("#item-name")
const itemDes = document.querySelector("#item-des")

addButton.addEventListener("click", addTask);

function addTask() {

 

  // Creating Element

  const ul = document.querySelector('ul')
  const li = document.createElement('li')

  // Adding Element

  ul.append(li)

  // modifying the text

  const taskName = itemName.value
  const taskDes = itemDes.value

  li.classList.add('name');

  li.innerHTML = `<h2>${taskName}</h2><p>${taskDes}</P><button class="delete-btn">X</button>`;

  // Delete Button
  const deleteButton = li.querySelector("button")
  deleteButton.addEventListener("click", function () {
      li.remove();
  });

  itemName.value = "";
  itemDes.value = "";

}

  
  
  