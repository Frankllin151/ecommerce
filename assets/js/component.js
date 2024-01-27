function IncludeComponets() {
   const MOdal = document.getElementById("MODAL");
    const header = document.getElementById("header");
    const homebanner = document.getElementById("BANNERHOME");
    const about = document.getElementById("ABOUT");
    const exclusivo  = document.getElementById("EXCLUSIVO");
    const products  = document.getElementById("PRODUCTS");
    const services  = document.getElementById("SERVICES");
    const offer = document.getElementById("OFFER");
    const blog = document.getElementById("BLOG");
    const footer = document.getElementById("FOOTER");

    fetch("/components/footer.html")
    .then(response => response.text())
    .then(data => footer.innerHTML = data);

    fetch("/components/blog.html")
    .then(response => response.text())
    .then(data => blog.innerHTML = data);

    fetch("/components/offer.html")
    .then(response => response.text())
    .then(data => offer.innerHTML = data);

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

    fetch("/components/services.html")
    .then(response => response.text())
    .then(data => services.innerHTML = data);

   

   
}

window.onload = IncludeComponets()
