

const firebaseConfig = {
  apiKey: "AIzaSyBSH3_E9sdh__YJdY_C4Vqrm1tr1gYUDbY",
  authDomain: "memo-app-5e3c8.firebaseapp.com",
  projectId: "memo-app-5e3c8",
  storageBucket: "memo-app-5e3c8.appspot.com",
  messagingSenderId: "978171784125",
  appId: "1:978171784125:web:e0fc1092bbb09cbd8c80d4"
};

// init Firebase App
firebase.initializeApp(firebaseConfig);

//init services
const db = firebase.firestore();

// collection ref


// const colRef = collection(db, 'memo')
// const addButton = document.querySelector("#addButton")
// const itemName = document.querySelector("#item-name")
// const itemDes = document.querySelector("#item-des")
// const ul = document.querySelector('ul');
 
  
addButton.addEventListener("click", addTask);

function addTask() {

const itemName = document.getElementById("item-name")
const itemDes = document.getElementById("item-des")

 // Modifying the text
 const taskName = itemName.value;
 const taskDes = itemDes.value;

  db.collection("memo").add({
    name: taskName,
    desc: taskDes
  })

   // Clear input values
   itemName.value = "";
   itemDes.value = "";


  // // Creating Element
  // const li = document.createElement('li');

  // // Adding Element
  // ul.append(li);

  // li.classList.add('name');
  // li.innerHTML = `<h2>${taskName}</h2><p>${taskDes}</p><button class="delete-btn">X</button>`;

  // // Delete Button
  // const deleteButton = li.querySelector(".delete-btn");
  // deleteButton.addEventListener("click", function () {
  //   li.remove();
  // });

 
}


function getItems(){

  db.collection("memo").onSnapshot((snapshot) => {
    console.log(snapshot)

    let items = []
    snapshot.docs.forEach((doc) => {
     items.push({
      id: doc.id,
      ...doc.data()
    })
    })

    generateItems(items)
  })
}

function generateItems(items){

  let itemHTML = ""
  items.forEach((item) => {
     console.log(item)
    itemHTML += `
    <li class="name">
    <h2>${item.name}</h2>
    <p>${item.desc}</p>
    <button class="delete-btn">X</button>
    </li>
    `
  })

  document.querySelector(".memo-items").innerHTML = itemHTML
}

getItems()
// 
//   const taskName = itemName.value;
//   const taskDes = itemDes.value;

  
//   .then(() => {
//     console.log("Item added to Firestore");
//   })
//   .catch(error => {
//     console.error("Error adding item:", error);
//   });
// });