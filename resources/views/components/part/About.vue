<script >
 export default{
    name:"About",
    data(){
        return{
            image: './images/about.webp', 
            svg: "./images/quote.svg"
        }
       
    }, 
    computed:{
            caminhodaimagem(){
                return asset(this.image);
            }, 
            caminhosvg(){
                return asset(this.svg);
            }

        }
 }
</script>
<template>
    <section class="about"  id="about">
        <h1 class="heading">Sobre <span>Nós</span></h1>
    
        <div class="row">
            <div class="image">
                <img :src="image" alt="">
            </div>
            <div class="content">
                <h3>Elegância Redefinida, Paixão Aperfeiçoada</h3>
                <img class="quote" :src="svg" alt="">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi 
                        explicabo a voluptatum ex suscipit dolorum corrupti, fugiat accusamus! 
                        Nobis rem totam, quaerat quae deleniti voluptate mollitia officia non adipisci facilis!
                </p>
                <a href="#" class="btn">Leia Mais</a>
            </div>
        </div>
    </section>
</template>