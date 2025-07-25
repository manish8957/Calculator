let input = document.getElementById("inpBox");
let buttons = document.querySelectorAll("button");

let display = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            display = eval(display);
            input.value = display;
        }

        else if(e.target.innerHTML == 'AC'){
            display = "";
            input.value = display;
        }

        else if(e.target.innerHTML == 'C'){
            display = display.slice(0,-1);
            input.value = display;
        }

        else {
            display += e.target.innerHTML;
            input.value = display;
        }
    })
})