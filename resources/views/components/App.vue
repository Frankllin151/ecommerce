<template>
    <Modal ref="modalComponent" />
    <Header />
   <Banner/>
   <About/>
<Exclusivo/>
  </template>
  
  <script>
  import Header from "./part/Header.vue";
  import Modal from "./part/Modal.vue";
  import Banner from "./part/Banner.vue";
 import About from "./part/About.vue";
 import Exclusivo  from "./part/Exclusivo.vue";
  export default {
   components:{
       Header, 
       Modal, 
       Banner,
       About, 
       Exclusivo
   },
   
   
  };
  </script>
  