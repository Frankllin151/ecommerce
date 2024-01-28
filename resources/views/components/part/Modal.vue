<script>
export default {
    name:"Modal",
data() {
    return {
        imagem:"./images/blog-1.webp"
    }
},
computed: {
    caminhoCompletoDaImagem() {
      return asset(this.imagem);
    }
  }
}
</script>
<template>
    <div class="modal" id="modal">

        <div class="container">
            <span class="close" onclick="closeModal()">&times;</span>
            <div class="image">
                <img :src="imagem" alt="Descriçao da imagem">
            </div>
            <div class="content">
                <h2>Inscrever-se newsletter</h2>
                <p>
                    mantenha-se atualizado com as últimas tendências
                     e ofertas exclusivas em nossa requintada coleção de joias
                </p>
                <form action="" method="post">
                    <input type="email" placeholder="Digite Seu Email">
                    <button type="submit" class="btn">Inscrever-se</button>
    
                </form>
            </div>
        </div>
       </div>
</template>