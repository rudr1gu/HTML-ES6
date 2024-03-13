const btnDrawer =  document.getElementById("btnDrawer")
const menu =  document.getElementById("menu")

btnDrawer.addEventListener("click", ()=>{
    menu.style.display == "none" || menu.style.display == ""? menu.style.display = "flex" : menu.style.display = "none";
 })