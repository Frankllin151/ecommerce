<template>
    <Modal/>
    <Header />
   <Banner/>
  </template>
  
  <script>
  import Header from "./part/Header.vue";
  import Modal from "./part/Modal.vue";
  import Banner from "./part/Banner.vue";
  export default {
   components:{
       Header, 
       Modal, 
       Banner
   },
   
  };
  </script>
  