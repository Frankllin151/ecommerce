<script>
export default{
  
    data(){
        return{
           
            svgOne: "./images/exclusive-1.svg",
            svgTwo: './images/exclusive-2.svg', 
            svgThird: './images/exclusive-3.svg',
            svgFour: './images/exclusive-4.svg',  
            svgFive: './images/exclusive-5.svg',
           svgSix: "/images/exclusive-6.svg"
        }
       
    }, 
    computed:{
            caminhosvgThird(){
                return asset(this.svgThird);
            }, 
            caminhosvgTwo(){
                return asset(this.svgTwo);
            },
            caminhosvgOne(){
                return asset(this.svgOne);
            }, 
            caminhosvgFour(){
                return asset(this.svgFour);
            }, 
            caminhosvgFive(){
                return asset(this.svgFive);
            }, 
            caminhosvgSix(){
                return asset(this.svgSix);
            }

        }
 }
</script>
<template>
    <section class="exclusive">

        <h1 class="heading">exclusive <span>products</span></h1>
    
        <div class="box-container">
    
            <div class="box">
                <img :src="svgOne" alt="">
                <h3>earrings</h3>
            </div>
    
            <div class="box">
                <img :src="svgTwo" alt="">
                <h3>tiras</h3>
            </div>
    
            <div class="box">
                <img :src="svgThird" alt="">
                <h3>rings</h3>
            </div>
    
            <div class="box">
                <img :src="svgFour" alt="">
                <h3>watches</h3>
            </div>
    
            <div class="box">
                <img :src="svgFive"  alt="">
                <h3>necklaces</h3>
            </div>
    
            <div class="box">
                <img :src="svgSix" alt="">
                <h3>bracelets</h3>
            </div>
    
        </div>
    
    </section>
</template>