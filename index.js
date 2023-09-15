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




const memoItem = document.querySelector("#memo-items");

const form = document.querySelector("#add-items");

// create element and render memo 

function renderMemo(doc) {

  let li = document.createElement("li");
  let name = document.createElement("span");
  let desc = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  desc.textContent = doc.data().desc;
  cross.textContent = "X"


  li.appendChild(name);
  li.appendChild(desc);
  li.appendChild(cross)

  memoItem.appendChild(li);

  //deleting data

  cross.addEventListener("click", e => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute("data-id");

    //find a doc on the dom
    db.collection("memo")
      .doc(id)
      .delete();
  });


}

// get data from firestore 

// db.collection('memo').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     renderMemo(doc);
//   })
// })


// Adding data

form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("memo").add({
    name: form.name.value,
    desc: form.desc.value
  });

  form.name.value = '';
  form.desc.value = '';

})


//  real time listener
db.collection("memo").orderBy("desc").onSnapshot(snapshot => {

  // We also rendered data in real-time using
  let changes = snapshot.docChanges();

  changes.forEach(change => {
    if (change.type == "added") {
      renderMemo(change.doc);
    } else if (change.type == "removed") {
      let li = memoItem.querySelector("[data-id=" + change.doc.id + "]");
      memoItem.removeChild(li);
    }
  });
});