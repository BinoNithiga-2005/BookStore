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

//select container, add-book,book-image-input, book-title-input, book-author-input, book-description-input

let Container = document.querySelector(".container");
let addBook = document.getElementById("add-book");
let addImage = document.getElementById("book-image-input");
let bookTitle = document.getElementById("book-title-input");
let bookAuthor = document.getElementById("book-author-input");
let bookDescription = document.getElementById("book-description-input");

addBook.addEventListener("click", function(event){
    event.preventDefault()
    popupBox.style.display = "none"
    popupOverlay.style.display = "none"
    let div = document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML = `<img src="${addImage.value}" alt="BookCover"><h2>${bookTitle.value}</h2> <h5>${bookAuthor.value}</h5> <p>${bookDescription.value}</p> <button onclick="deletebook(event)">Delete</button>`
    Container.append(div);

    // clear input fileds
document.getElementById("book-image-input").value = '';
document.getElementById("book-title-input"). value = '';
document.getElementById("book-author-input").value='';
document.getElementById("book-description-input").value='';
    
})

function deletebook(event){
    if(confirm("Are you sure you want to delete this book?")){
        event.target.parentElement.remove()
    }
}
    
