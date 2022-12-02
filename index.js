// Write your code here!
const getMain = document.getElementById("main");
getMain.remove();

const newHeader = document.createElement('h1');

newHeader.setAttribute("id", "victory");
newHeader.textContent = "Keith is the champion";

// const ul = document.createElement("ul");

// adding an element to a list
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }
// element.append(ul);

// li.textContent = "Hi there!";
// console.log(li.textContent);