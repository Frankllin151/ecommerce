function IncludeComponets() {
   const MOdal = document.getElementById("MODAL");
    const header = document.getElementById("header");

    fetch("/components/modal.html")
    .then(response => response.text())
    .then(data => MOdal.innerHTML = data);

    fetch("/components/header.html")
    .then(response => response.text())
    .then(data => header.innerHTML = data);

   

   
}

window.onload = IncludeComponets()
