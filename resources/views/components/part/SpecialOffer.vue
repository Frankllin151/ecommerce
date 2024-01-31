<template>
    <section class="offer">

        <div class="row">
    
            <div class="image">
                <img :src="imgOffer" alt="" height="358">
            </div>
    
            <div class="image">
                <img :src="imgOfferTwo" alt="" height="445">
            </div>
    
            <div class="content">
                <span>Oferta Especial</span>
                <h3>Nova Coleção Diamantes</h3>
                <div class="divider"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas praesentium inventore eum cumque, harum veniam tempore aperiam, dolor molestiae dicta debitis sapiente. Tempore, deleniti. Exercitationem commodi laboriosam blanditiis impedit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quas praesentium inventore eum cumque</p>
                <a href="#" class="btn"> Apenas $440.00</a>
            </div>
    
        </div>
    
    </section>
</template>
<script>
export default {
    data(){
        return{
           
            imgOffer: "./images/offer-1.webp",
            imgOfferTwo: "./images/offer-2.webp",


           
        }
       
    }, 
    computed:{
        imgOfferOnectway(){
                return asset(this.imgOffer);
            }, 

            imgOfferTwoctway(){
                return asset(this.imgOfferTwo);
            }, 
        }   
}
</script>