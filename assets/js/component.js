function IncludeComponets() {
   const MOdal = document.getElementById("MODAL");
    const header = document.getElementById("header");
    const homebanner = document.getElementById("BANNERHOME");
    const about = document.getElementById("ABOUT");
    const exclusivo  = document.getElementById("EXCLUSIVO");
    const products  = document.getElementById("PRODUCTS");

    fetch("/components/modal.html")
    .then(response => response.text())
    .then(data => MOdal.innerHTML = data);

    fetch("/components/header.html")
    .then(response => response.text())
    .then(data => header.innerHTML = data);

    fetch("/components/banner.html")
    .then(response => response.text())
    .then(data => homebanner.innerHTML = data);

    fetch("/components/about.html")
    .then(response => response.text())
    .then(data => about.innerHTML = data);

    fetch("/components/exclusivo.html")
    .then(response => response.text())
    .then(data => exclusivo.innerHTML = data);


    fetch("/components/products.html")
    .then(response => response.text())
    .then(data => products.innerHTML = data);

   

   
}

window.onload = IncludeComponets()
