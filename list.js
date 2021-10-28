//console.log("hello from list js")



function addToList(event) {
    event.preventDefault();

   console.log(event)
}



document.querySelector(".list-btn").addEventListener("click", addToList);