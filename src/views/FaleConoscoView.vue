<template>
  <v-container class="pa-8" fluid>
    <v-card-text>
      <v-form class="px-3">
        <v-text-field label="Seu nome" v-model="name"></v-text-field>
        <v-text-field label="Seu e-mail" v-model="mail"></v-text-field>
        <v-textarea label="Sua mensagem" v-model="content"></v-textarea>
        <v-btn flat class="sucess mx-0 mt-3" @click="enviar">Enviar mensagem</v-btn>
      </v-form>
    </v-card-text>
    <v-snackbar color="red" v-model="errodados" danger multline timeout="2000">Preencha todos os campos!</v-snackbar>
    <v-snackbar color="green" v-model="enviook" danger multline timeout="2000">Mensagem enviada com sucesso!</v-snackbar>
  </v-container>
</template>>

<script>
export default{
  data() {
    return {
      name: "",
      mail: "",
      content: "",
      enviook: false,
      errodados: false,
    };
  },
  methods: {
    enviar() {
      if (this.name.length < 5 && this.mail.length < 5 && this.content.length < 5) {
          this.enviook = false;
          this.errodados = true;
      } else {
          this.enviook = true;
          this.errodados = false;
      }
    },
  },
}


</script>

<style>

</style>