//console.log("hello from list js")



function addToList(event) {
    event.preventDefault();


    // läs in data från input 
    const listItem = document.querySelector("#list-Item").value;

    console.log(listItem)

    // skapa en li för varje input läsning 

   const li =document.createElement("li");
   li.textContent = listItem;
    // pusha li till .list-item div(parent)

    const listDiv = document.querySelector(".list-items");

    listDiv.appendChild(li)

  
}



document.querySelector(".list-btn").addEventListener("click", addToList);