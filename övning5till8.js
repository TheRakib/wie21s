

const InputString= (text)=> {
  console.log(text)
  return text
}
const returnedText = InputString("text");

// orderHistory 
const countTotalShopping =  (product1, product2)=> {
    return product1 + product2 
}
const shoppingHistory1= countTotalShopping(100, 400);
const shoppingHistory2= countTotalShopping(1000, 1200);
const shoppingHistory3 = countTotalShopping(2000, 3000);
console.log(shoppingHistory1+ shoppingHistory2+ shoppingHistory3);


// övning 8:
function convertToArray(str) {
   // console.log(str.split("").reverse().join(""))
    return str.split("").reverse().join("")
}
const convertedText = convertToArray("Hej")
console.log(convertedText)
