<template>
    <footer class="footer">

        <div class="box-container">
    
            <div class="box">
                <h3>Contato</h3>
                <a href="#"><i class="fas fa-phone"></i> +123-456-7890</a>
                <a href="#"><i class="fas fa-phone"></i> +123-456-7890</a>
                <a href="#"><i class="fas fa-envelope"></i>frankllinsilva300@gmail.com</a>
            </div>
    
            <div class="box">
                <h3>Links</h3>
                <a href="#"><i class="fas fa-arrow-right"></i> home</a>
                <a href="#"><i class="fas fa-arrow-right"></i>Serviços</a>
                <a href="#"><i class="fas fa-arrow-right"></i>Produtos</a>
                <a href="#"><i class="fas fa-arrow-right"></i>Pagmentos</a>
            </div>
    
            <div class="box">
                <h3>Paginas</h3>
                
                <a href="#"><i class="fas fa-arrow-right"></i>Recursos</a>
                <a href="#"><i class="fas fa-arrow-right"></i> Produtos</a>
                <a href="#"><i class="fas fa-arrow-right"></i>Categoria</a>
            </div>
    
            <div class="box">
                <h3>newsletter</h3>
                <input type="email" placeholder="Your Email Address" class="email">
                <input type="submit" value="subscribe" class="btn">
            </div>
    
        </div>
    
        <div class="credit">
            <img :src="imgPay" alt="" class="payment-img">
          
        </div>
    
    </footer>    
</template>
<script>
export default {
    data(){
        return{
           
            imgPay: "./images/payment.png",
           
        }
       
    }, 
     
}
</script>