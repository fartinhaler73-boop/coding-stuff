const id = document.getElementById("clicker");
id.addEventListener("click", () => {
    console.log("hi");
    
});
const myElement = document.getElementById("bodyid");

let perclick = 1;
let count = 0

myElement.style.backgroundColor = "black";

myElement.style.backgroundSize = "cover";

const numid = document.getElementById("numid")
id.addEventListener("click", () => {
count = count + perclick
    numid.textContent = count;
});

const upgrade1buy = document.getElementById("uno1")
upgrade1buy.addEventListener("click", () => {
    if (count >= 100) {
        count -= 100
    
perclick += 1
numid.textContent = count;
       } else  console.log("Not enough!");
    
    
})

    if (count >= 1000000) {
        alert("You did it!!!!")
    }

            
const upgrade2 = document.getElementById("dos2")
upgrade2.addEventListener("click", () => {
    if (count >= 200) {
        count -= 200

    perclick += 2
    numid.textContent = count;
       } else  console.log("Not enough!");

})
