<script>
export default {
    data(){
        return{
           
            imgProduct: "./images/product-1.webp",
           
        }
       
    }, 
    computed:{
            imgPorudctway(){
                return asset(this.imgProduct);
            }, 
        }   
}
</script>
<template>
    <section class="products" id="products">

        <h1 class="heading">latest <span> products</span></h1>
    
        <div class="box-container">
            <div class="box">
                <div class="image">
                    <img :src="imgProduct" alt="">
                    <div class="icons">
                        <a href="#" class="fas fa-shopping-bag"></a>
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                </div>
    
                <div class="content">
                    <h3>gold</h3>
                    <div class="price">
                        <div class="amount">R$260.00</div>
                        <div class="cut">R$348.00</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span>180 reviews</span>
                    </div>
                </div>
    
               
            </div>
            <div class="box">
                <div class="image">
                    <img :src="imgProduct" alt="">
                    <div class="icons">
                        <a href="#" class="fas fa-shopping-bag"></a>
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                </div>
    
                <div class="content">
                    <h3>gold</h3>
                    <div class="price">
                        <div class="amount">R$260.00</div>
                        <div class="cut">R$348.00</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span>180 reviews</span>
                    </div>
                </div>
    
               
            </div>
            <div class="box">
                <div class="image">
                    <img :src="imgProduct" alt="">
                    <div class="icons">
                        <a href="#" class="fas fa-shopping-bag"></a>
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                </div>
    
                <div class="content">
                    <h3>gold</h3>
                    <div class="price">
                        <div class="amount">R$260.00</div>
                        <div class="cut">R$348.00</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span>180 reviews</span>
                    </div>
                </div>
    
               
            </div>
            <div class="box">
                <div class="image">
                    <img :src="imgProduct" alt="">
                    <div class="icons">
                        <a href="#" class="fas fa-shopping-bag"></a>
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                </div>
    
                <div class="content">
                    <h3>gold</h3>
                    <div class="price">
                        <div class="amount">R$260.00</div>
                        <div class="cut">R$348.00</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span>180 reviews</span>
                    </div>
                </div>
    
               
            </div>
            <div class="box">
                <div class="image">
                    <img :src="imgProduct" alt="">
                    <div class="icons">
                        <a href="#" class="fas fa-shopping-bag"></a>
                        <a href="#" class="fas fa-heart"></a>
                        <a href="#" class="fas fa-eye"></a>
                    </div>
                </div>
    
                <div class="content">
                    <h3>gold</h3>
                    <div class="price">
                        <div class="amount">R$260.00</div>
                        <div class="cut">R$348.00</div>
                        <div class="offer">20% off</div>
                    </div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <span id="span">180 reviews</span>
                    </div>
                </div>
    
               
            </div>
            
        </div>
    </section>
</template>