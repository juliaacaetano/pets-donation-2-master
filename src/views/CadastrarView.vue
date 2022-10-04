<template>
  <v-container class="pa-8" fluid>
    <v-col class="h2">Informe os dados abaixo e, após o seu cadastro espere a ligação de nossos atendentes para confirmação de seus dados pessoais e registro do animal para adoção!</v-col>
    <v-card-text>
      <v-form class="px-3">
        <v-text-field label="Seu nome" v-model="name"></v-text-field>
        <v-text-field label="Seu e-mail" v-model="mail"></v-text-field>
        <v-text-field label="Seu cpf" v-model="cpf"></v-text-field>
        <v-text-field label="Seu telefone" v-model="fone"></v-text-field>
        <v-text-field label="Sua cidade" v-model="cidade"></v-text-field>
        <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
       placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Foto do Usuário"
    ></v-file-input>
        <v-text-field label="Seu senha" v-model="senha1"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"></v-text-field>
        <v-text-field label="Confirme sua senha" v-model="senha2"
              :type="show2 ? 'text' : 'password'"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show2 = !show2">
        </v-text-field>
        <v-btn flat class="sucess mx-0 mt-3" @click="enviar">Cadastrar</v-btn>
      </v-form>
    </v-card-text>
    <v-snackbar color="red" v-model="errodados" danger multline timeout="2000">Preencha todos os campos!</v-snackbar>
    <v-snackbar color="green" v-model="enviook" danger multline timeout="2000">Cadastro realizado com sucesso!</v-snackbar>
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
      show1: false,
      show2: false,
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