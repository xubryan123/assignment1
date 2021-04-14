/*dark mode function: 
-create dark mode class within css 
-set variable to body element using document.body
-toggle dark mode class using element.classList.toggle()

hide buttons function: 
-use js to access the button using document.getElementById()
-set the button to change display property to none onclick using .style.display = 'none'

save button function:
-use console.log to prompt user to enter title of note
-add object to object array
-return title name in variable
-select nav bar using document.getElementById()
-create new element using document.createElement() using title name variable
-add to nav using .appendChild()*/

const btn = document.querySelector(".darkbutton");


function darkMode(){
    const rightcolor = document.querySelector(".right")
    const leftcolor = document.querySelector(".left")
    rightcolor.classList.toggle("dark-mode");
    leftcolor.classList.toggle("dark-mode");
}

// function populateNotesList(arr) {
//     const list = document.querySelector(".notes");
//     for (let item of arr) {
//         let elem = document.createElement("li");
//         let text = document.createTextNode(item);
//         elem.appendChild(text);
//         elem.appendChild(elem);
//     }
// }

// let myNotes = []

btn.addEventListener("click", darkMode);