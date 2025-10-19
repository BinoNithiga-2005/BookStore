// selecting popup-box, popup-overlay, button
 let popupBox = document.querySelector(".popup-box");
 let popupOverlay = document.querySelector(".popup-overlay");
 let popupButton = document.getElementById("add-popupbutton");

 popupButton.addEventListener("click",function(){
    popupBox.style.display = "block";
    popupOverlay.style.display ="block"
 })

 //select cancel button
 let cancelButton = document.getElementById("cancel-popup")
 
 cancelButton.addEventListener("click", function(event){
    event.preventDefault()
    popupBox.style.display = "none";
    popupOverlay.style.display ="none"
 })

//select container, add-book, book-title-input, book-author-input, book-description-input

let Container = document.querySelector(".container");
let addBook = document.getElementById("add-book");
let bookTitle = document.getElementById("book-title-input");
let bookAuthor = document.getElementById("book-author-input");
let bookDescription = document.getElementById("book-description-input");

addBook.addEventListener("click", function(event){
    event.preventDefault()
    popupBox.style.display = "none"
    popupOverlay.style.display = "none"
    let div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML = `<h2>${bookTitle.value}</h2> <h5>${bookAuthor.value}</h5> <p>${bookDescription.value}</p> <button onclick="deletebook(event)">Delete</button>`
    Container.append(div)
})

function deletebook(event){
    event.target.parentElement.remove()
}
    
