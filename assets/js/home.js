const modal  = document.getElementById("modal"); 
const navbar = document.querySelector("navbar");
const header = document.querySelector("header-main");


document.querySelector("#menu").onclick = () =>{
    navbar.classList.toggle('active')
}

window.onscroll = () =>{
    if(!isModalOpen()){
        
    }
}