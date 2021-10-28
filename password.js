
//läsa in data från två input fälten 

 function checkPassword(e){
     console.log("events ", e)
     e.preventDefault();

    const password = document.querySelector("#password").value;
    
    console.log(password);
    const repeatedPassword = document.querySelector("#password-repeat").value;
    console.log(repeatedPassword);

    //Jämför om värderna matchar ?? 
    if(password == repeatedPassword){
        console.log("password matches");
    }
    else {
        console.log("password doesn't match. Please Try again")
    }
 
 }

// lyssna på btn event
document.querySelector(".btn").addEventListener("click", checkPassword )