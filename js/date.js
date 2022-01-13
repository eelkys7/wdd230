const d = new Date();
const year = d.getFullYear();


document.querySelector("currentyear").textContent = year
document.getElementById("lastupdated").textContent = "last updated: " + document.lasmodified;