<template>
    
    <div>
      <form @submit.prevent="enviarFormulario" action="" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="dadosFormulario.email" placeholder="Email" required>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="dadosFormulario.senha" placeholder="Senha" required>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="dadosFormulario.nome" placeholder="Nome" required>

        <button type="submit">Enviar</button>
    </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
            return {
                mensagem: 'Olá, Vue.js!',
                dadosFormulario: {
                    email: '',
                    senha: '',
                    nome: ''
                }
            };
        },
        methods: {
            enviarFormulario() {
                // Lógica para enviar os dados usando Axios
                axios.post('/api/autenticar', this.dadosFormulario)
                    .then(response => {
                        console.log('Resposta do servidor:', response.data);
                        // Altere a mensagem com base na resposta do servidor
                        this.mensagem = 'Formulário enviado com sucesso!';
                    })
                    .catch(error => {
                        console.error('Erro ao enviar os dados:', error);
                        // Altere a mensagem para indicar um erro
                        this.mensagem = 'Ocorreu um erro ao enviar o formulário.';
                    });
            }
        }
  };
  </script>
  