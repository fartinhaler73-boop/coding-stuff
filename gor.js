const id = document.getElementById("clicker");
id.addEventListener("click", () => {
    console.log("hi");
    
});
const myElement = document.getElementById("bodyid");

myElement.style.backgroundColor = "black";

myElement.style.backgroundSize = "cover";
let count = 0;
const numid = document.getElementById("numid")
id.addEventListener("click", () => {
    count = count + 1
    numid.textContent = count;
});


