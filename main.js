
let container = document.getElementById("container");
let message
// Creo il ciclo
for (let i =1 ; i<=100 ; i++) {
    const quadrato = document.createElement("span") 
    // se è divisibile sia per 3 che per 5 vuol dire divisibile per 15
    if (i%15==0) {
        message = "FizzBuzz"
        quadrato.classList.add("green")
        
    }
    // divisibile per 3
    else if (i%3==0) {
        message = "Fizz"
        quadrato.classList.add("red")
        
        

    }
    // divisibile per 5
    else if (i%5==0) {
        message = "Buzz"
        quadrato.classList.add("purple")
    }
    // altrimenti stampo il valore normale
    else {
        message = i 
        quadrato.classList.add("blue")
    }
    console.log(message);
   
    quadrato.append(message)
    
    container.append(quadrato);
    }



