<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Perfil do Usuário</h1>
    <v-container class="grey lighten-4" fluid>
      <v-row>
        <table>
          <tr>
            <v-row class="mb-3" align="center">
              <v-col class="mr-8">
                <td><v-img :src=this.foto></v-img></td>
              </v-col>
              <v-col>
                <td><h1>{{this.nome}}</h1></td>
              </v-col>
            </v-row>
          </tr>
          <tr>
            <v-row class="md-5">
              <h3 class="ml-3">{{this.cidade}}</h3>
            </v-row>
            <v-row class="md-5">
                <v-icon class="ml-3">mdi-phone-classic</v-icon>
                <h3 class="ml-3">{{this.fone}}</h3>
            </v-row>
            <v-row class="md-5">
                <v-icon class="ml-3">mdi-mail</v-icon>
                <h3 class="ml-3">{{this.mail}}</h3>
            </v-row>
          </tr>
        </table>
      </v-row>    
    </v-container>
  </v-container>
</template>

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
  }
</script>

<style>

</style>