<template>
  <v-container fluid class="body">
    <v-row class="row">
      <v-col cols="1"></v-col>
      <v-col cols="5" class="pt-3 ctexto">
        <v-card-text >
          <h1>FAÇA JÁ SEU LOGIN</h1>
        </v-card-text>
        <v-divider></v-divider>
           <v-img align="center" max-width="900" src="@/assets/images/foto.png"></v-img>  
      </v-col>
      <v-col cols="2"></v-col>
      <v-col class="text-center">
        <v-form class="login">
          <h1 class="titlelogin">
            LOGIN
            <v-divider></v-divider>
          </h1>
          <v-text-field label="Email" outlined></v-text-field>
          <v-text-field label="Senha" outlined></v-text-field>
          <v-btn @click="entrar" color="indigo lighten-3"> Login </v-btn>
          <h5 class="titlecadastro">Quer experimentar? Clique abaixo</h5>
          <v-btn @click="cadastrar" color="indigo lighten-3"> cadastrar </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    async cadastrar() {
      this.$router.push({ name: "Cadastro" });
    },
    async entrar() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.ctexto {
  padding-left: 3rem;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.bar {
  margin-bottom: 1rem;
  background: indigo lighten-3;
  padding: 1rem 0 1rem 0;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
/* botão login e cadastro */

.body {
  font-family: "Roboto";
  padding: 1;
}
.login {
  padding-bottom: 1rem;
  padding-top: 1rem;
  text-align: center;
  max-width: 16rem;
}
.subtitle {
  text-align: start;
}
.titlelogin {
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  font-family: "Roboto";
}
.titlecadastro {
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
h3 {
  font-weight: bold;
}
img {
  max-height: 7rem;
  max-width: 7rem;
}
.row {
  margin-top: 3rem;
}
</style>

