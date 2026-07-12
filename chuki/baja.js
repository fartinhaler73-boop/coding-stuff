const num = document.getElementById("changing")
const roll1 = document.getElementById("roll")
let numval = 0
roll1.addEventListener("click", () =>{
    let numval = Math.floor(Math.random() * 6) + 1;
    num.textContent = numval;
    


});
