<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <header>
    <div class="header-top">
        <div class="social">
            <a href="#" class="fab fa-facebook"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-pinterest"></a>
            <a href="#" class="fab fa-linkedin"></a>
        </div>
        
        <div class="alert">
            <p>
             <b>Frete Grátis</b> esta semana, pedidos acima de - R$30
            </p>
        </div>


        <div class="actions">
            <select name="currency" id="">
                <option value="usd">USD &dollar;</option>
                <option value="eur">EUR &euro;</option>
                <option value="brl">BRL R$</option>
            </select>
        </div>

        <select name="language">
            <option value="en-US">Português</option>
            <option value="en-ES">Espanish</option>
            <option value="fr">Francias</option>
        </select>
    </div>



    <div class="header-main " >
        <div id="menu" class="fas fa-bars"></div>

        <a href="" class="logo"><i class="fas fa-gem"></i> jewel</a>

        <nav class="navbar">
            
            <a href="#about">Sobre</a>
            <a href="#products">Loja</a>
            <a href="#services">Serviços</a>
            <a href="#blogs">Blogs</a>
           
        </nav>

        <div class="icons">
            <button class="action-btn">
                <a href="#" class="fas fa-user"></a>
            </button>
            <button class="action-btn">
                <a href="#" class="fas fa-heart"></a>
                <span class="count">0</span>
            </button>
            <button class="action-btn">
                <a href="#" class="fas fa-shopping-cart"></a>
                <span class="count">0</span>
            </button>
        </div>
    </div>
</header>


  </template>
  
  <script>


 export default {
  
    name: 'Header' 
 }
  </script>
  