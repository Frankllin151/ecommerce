<template>
    <section class="blogs" id="blogs">

        <h1 class="heading">our <span> blogs</span></h1>
    
        <div class="box-container">
    
            <div class="box">
                <div class="image">
                    <img :src="imgProductOne" alt="">
                </div>
                <div class="content">
                    <a href="#" class="link"> Criando beleza Atemporal Juntos</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et!</p>
                    <div class="icon">
                        <a href="#"><i class="fas fa-clock"></i> 25th Jan, 2024</a>
                        <a href="#"><i class="fas fa-user"></i> Por admin</a>
                    </div>
                </div>
            </div>
    
            <div class="box">
                <div class="image">
                    <img :src="imgProductTwo" alt="">
                </div>
                <div class="content">
                    <a href="#" class="link"> Criando beleza Atemporal Juntos</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et!</p>
                    <div class="icon">
                        <a href="#"><i class="fas fa-clock"></i> 25th Jan, 2024</a>
                        <a href="#"><i class="fas fa-user"></i> Por admin</a>
                    </div>
                </div>
            </div>
    
            <div class="box">
                <div class="image">
                    <img :src="imgProductThird" alt="">
                </div>
                <div class="content">
                    <a href="#" class="link">Criando beleza Atemporal Juntos</a>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum et!</p>
                    <div class="icon">
                        <a href="#"><i class="fas fa-clock"></i> 25th Jan, 2024</a>
                        <a href="#"><i class="fas fa-user"></i> Por admin</a>
                    </div>
                </div>
            </div>
    
        </div>
    
    </section>
</template>
<script>
export default {
    data(){
        return{
           
            imgProductOne: "./images/blog-1.webp",
            imgProductTwo: "./images/blog-2.webp",
            imgProductThird: "./images/blog-3.webp",
           
        }
       
    }, 
    
}
</script>