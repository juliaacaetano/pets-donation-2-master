<template>
  <v-container class="pa-8" fluid>
    <v-col class="h2">Informe os dados pessoais solicitados abaixo para realizar o seu cadastro!</v-col>
    <v-card-text>
      <v-form class="px-3">
        <v-text-field label="Seu nome" v-model="nome"></v-text-field>
        <v-text-field label="Seu e-mail" v-model="mail"></v-text-field>
        <v-text-field label="Seu cpf" v-model="cpf"></v-text-field>
        <v-text-field label="Seu telefone" v-model="fone"></v-text-field>
        <v-text-field label="Sua cidade" v-model="cidade"></v-text-field>
        <v-text-field label="URL foto" v-model="foto"></v-text-field>
        <v-btn flat class="sucess mx-0 mt-3" @click="salvarPerfil" color="indigo lighten-3"  rounded>Salvar</v-btn>
      </v-form>
    </v-card-text>
    <v-snackbar color="red" v-model="errodados" danger multline timeout="2000">Preencha todos os campos!</v-snackbar>
    <v-snackbar color="green" v-model="enviook" danger multline timeout="2000">Cadastro realizado com sucesso!</v-snackbar>
  </v-container>
</template>>

<script>
import * as fb from "@/plugins/firebase";
export default{
  data() {
    return {
      uid: "",
      nome: "",
      mail: "",
      cpf: "",
      fone: "",
      cidade: "",
      foto: "",
      enviook: false,
      errodados: false,
      show1: false,
      show2: false,
      temPerfil: false,
    };
  },
  async mounted() {
  
    this.uid = fb.auth.currentUser.uid;
    const userProfile = await fb.profileCollection
      .where("uid", "==", this.uid)
      .get();
    if (userProfile.docs.length > 0) {
      this.temPerfil = true;
      const perfil = userProfile.docs[0];
      this.profileId = perfil.id;
      this.nome = perfil.data().nome;
      this.mail = perfil.data().mail;
      this.cpf = perfil.data().cpf;
      this.fone = perfil.data().fone;
      this.cidade = perfil.data().cidade;
      this.foto = perfil.data().foto;
    }
  },
  methods: {
    async salvarPerfil() {
      if (this.temPerfil) {
        await fb.profileCollection.doc(this.profileId).update({
          nome: this.nome,
          mail: this.mail,
          cpf: this.cpf,
          fone: this.fone,
          cidade: this.cidade,
          foto: this.foto,        
        });
      } else {
        await fb.profileCollection.add({
          uid: this.uid,
          nome: this.nome,
          mail: this.mail,
          cpf: this.cpf,
          fone: this.fone,
          cidade: this.cidade,
          foto: this.foto,
        });
      }
    },
    enviar() {
      if (this.nome.length < 5 && this.mail.length < 5) {
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