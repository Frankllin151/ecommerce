<template>
    <Modal ref="modalComponent" />
    <Header />
   <Banner/>
   <About/>
<Exclusivo/>
<ProductsVue/>
<Service/>
<SpecialOffer/>
<Blog/>
<Footer/>

  </template>
  
  <script>
  import Header from "./part/Header.vue";
  import Modal from "./part/Modal.vue";
  import Banner from "./part/Banner.vue";
 import About from "./part/About.vue";
 import Exclusivo  from "./part/Exclusivo.vue";
import ProductsVue from './part/Products.vue';
import Service from './part/Services.vue';
import SpecialOffer from "./part/SpecialOffer.vue";
import Blog from "./part/Blog.vue";
import Footer from "./part/Footer.vue";
  export default {
   components:{
       Header, 
       Modal, 
       Banner,
       About, 
       Exclusivo, 
       ProductsVue, 
       Service, 
       SpecialOffer, 
       Blog,
       Footer
   },
   
   
  };
  </script>
  