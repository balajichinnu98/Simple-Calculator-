let output = document.querySelector(".output");
let result = document.querySelector(".result");
let keys = document.querySelectorAll("button");


keys.forEach(key=> {
    key.addEventListener("click", cal);
});


function cal() {
    let buttonText = this.innerText;
    if(buttonText === "C") { 
        output.innerText = " ";
        result.innerText = "0";
    }
    else if(buttonText === "=") { 
        result.innerText = eval(output.innerText);
    
    }

    // textContent - get the elements and not a human readable
    // innerText - makes it a human readable element
    else {
       output.textContent += buttonText;
    
    }
    
}
