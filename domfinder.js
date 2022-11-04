//DOM Finder Exercise

//1. Select the section with an id of container without using querySelector.
const idContainer = document.getElementById("container");
console.log(idContainer);
console.log("------------------------------------------");


//2. Select the section with an id of container using querySelector.
const container = document.querySelector("#container");
console.log(container); 
console.log("---------------------------------------------");

//3. Select all of the list items with a class of “second”.
const allSecond = document.querySelectorAll(".second")
console.log(allSecond)
//4. Select a list item with a class of third, but only the list item inside of the ol tag.
const ol_third = document.querySelector("ol .third")
console.log(ol_third)


//5. Give the section with an id of container the text “Hello!”.
//const divFound = document.querySelector('#container')
//divFound.innerText = "Hello"
//6. Add the class main to the div with a class of footer.
const foot = document.querySelector('.footer')

//7. Remove the class main on the div with a class of footer.
foot.classList.remove("main")

//8. Create a new li element.
const newListItem = document.createElement('li');


//9. Give the li the text “four”.
newListItem.innerText = "four"


//10.Append the li to the ul element.
const ul = document.querySelector("ul");
ul.appendChild(newListItem);
console.log("--------------------------")
console.log(ul)
//11.Loop over all of the lis inside the ol tag and give them a background color of “green”.
const olItems = document.querySelectorAll("ol li");

for(let item of olItems){
  item.style.color = "green";
}


//12.Remove the div with a class of footer
const removeMe = document.querySelector(".footer");
removeMe.remove()