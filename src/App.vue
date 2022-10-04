<template>
  <v-app>
    <v-app-bar app color="indigo lighten-1" dark elevation="1">
      <v-app-bar-nav-icon @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
      <h3>PET'S DONATION</h3>
      <v-spacer></v-spacer>
      <v-icon>mdi-magnify</v-icon>
      <v-btn class="ml-2" color="indigo lighten-3" @click="login">Entrar</v-btn>
      <v-btn class="ml-2" color="indigo lighten-3" @click="cadastro">Cadastrar</v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="sidebar" :mini-variant.sync="mini">
      <v-list dense color="indigo lighten-1" dark>
        <v-list-item>
          <v-list-item-action>
            <v-icon @click.stop="sidebar = !sidebar">mdi-chevron-left
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <h3>Menu</h3>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list-item class="px=2" @click="mini = !mini">
        <v-list-item-avatar>
          <v-icon>mdi-account</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>Julia Caetano</v-list-item-content>
        <v-btn icon small><v-icon>mdi-chevron-left</v-icon></v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> 
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app><span class="caption">Projetos Integrados &copy;2022</span></v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sidebar: true,
      mini: false,
      items: [
        {title: "Início", icon: "mdi-account", to: "/"},
        {title: "Cadastro de Animais", icon: "mdi-donkey", to: "/animais"},
        {title: "Perfil", icon: "mdi-account-cog", to: "/perfil"},
        {title: "Fale Conosco", icon: "mdi-phone", to: "/faleconosco"},
        {title: "Sair", icon: "mdi-exit-run", to: "/"},       
      ]
    };
  },
  methods: {
      login() {
        this.$router.push({ name: "Login"});
    },
      cadastro() {
        this.$router.push({ name: "Cadastro"});
      }
  }
};
</script>

<style>
</style>