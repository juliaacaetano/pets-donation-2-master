<template>
  <v-container fluid class="body">
    <v-row class="row">
      <v-col cols="1"></v-col>
      <v-col cols="5" class="pt-3 ctexto">
        <v-card-text >
          <h1>Realize seu login</h1>
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
          <v-text-field 
            label="Email" 
            v-model="user.mail" 
            outlined>
          </v-text-field>
          <v-text-field 
            label="Senha" 
            v-model="user.password"
            :type="show ? 'text' : 'password'"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show = !show"
            outlined>
          </v-text-field>
          <v-btn @click="entrar" color="indigo lighten-3"  rounded> Login </v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-snackbar color="red" 
      v-model="errorLogin" 
      danger 
      multline 
      timeout="2000">
      Usuário ou senha inválidos
    </v-snackbar>
    <v-dialog v-model="novaConta" persistent max-width="300">
      <v-card>
        <v-card-title>Conta não encontrada.</v-card-title>
        <v-card-text>
          A conta não foi localizada. Deseja criar um nova conta com os dados
          informados?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="criarNovaConta">Sim</v-btn>
          <v-btn text @click="novaConta = false">Não</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
      novaConta: false,
    };
  },
  methods: {
    async entrar() {
      try {
        await fb.auth.signInWithEmailAndPassword(
          this.user.mail,
          this.user.password
        );
        this.$router.push({ name: "home" });
      } catch (error) {
        const errorCode = error.code;
        switch (errorCode) {
          case "auth/wrong-password":
            this.errorLogin = true;
            break;
          case "auth/invalid-email":
            this.errorLogin = true;
            break;
          case "auth/user-not-found":
            this.novaConta = true;
            break;
          default:
            this.errorLogin = true;
            break;
        }
      }
    },
    async criarNovaConta() {
      this.novaConta = false;
      await fb.auth.createUserWithEmailAndPassword(
        this.user.mail,
        this.user.password
      );
      this.entrar();
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

