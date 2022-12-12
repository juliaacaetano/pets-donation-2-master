<template>
  <v-container class="pa-8" fluid>
    <v-col class="h1">Cadastre o seu animal</v-col>
    <v-card-text>
      <v-form class="px-3">
        <v-text-field label="Nome do Animal" v-model="nomeanimal"></v-text-field>
        <v-text-field label="Raça do Animal" v-model="raca"></v-text-field>
        <v-select
          :items="['Cachorro', 'Gato', 'Coelho', 'Pássaro', 'Outros Animais']"
          label="Espécie do Animal"
          outlined
          v-model="especie"
        ></v-select>
        <v-text-field label="Idade do Animal" v-model="idade"></v-text-field>
        <v-select
        :items="['Macho', 'Fêmea', 'Indefinido']"
          label="Sexo do Animal"
          outlined
          v-model="sexo"
        ></v-select>
        <v-text-field label="Nome Doador" v-model="nomedoador"></v-text-field>
        <v-text-field label="Telefone Doador" v-model="fone"></v-text-field>
        <v-text-field label="E-mail Doador" v-model="email"></v-text-field>
        <v-text-field label="Cidade Doador" v-model="cidade"></v-text-field>
        <v-text-field label="Foto do Animal" v-model="foto"></v-text-field>
        <v-textarea label="Descrição do Animal" v-model="descricao"></v-textarea>
        <v-btn flat class="sucess mx-0 mt-3" @click="salvar">Salvar</v-btn>
      </v-form>
    </v-card-text>
    <v-snackbar color="red" v-model="errodados" danger multline timeout="2000">Preencha todos os campos!</v-snackbar>
    <v-snackbar color="green" v-model="enviook" danger multline timeout="2000">Cadastro realizado com sucesso!</v-snackbar>
  </v-container>
</template>>

<script>
import * as fb from "@/plugins/firebase";
export default{
  data: () => ({
      
    }),
    return: {
      uid: "",
      nomeanimal: "",
      raca: "",
      especie: "",
      idade: "",
      sexo: "",
      nomedoador: "",
      email: "",
      fone: "",
      cidade: "",
      foto: "",
      descricao: "",
      enviook: false,
      errodados: false,
      temAnimal: false,
      listaAnimais: [],
    },
  methods: {
    async salvar() {
      await fb.animaisCollection.add({
        nomeanimal: this.nomeanimal,
        raca: this.raca,
        especie: this.especie,
        idade: this.idade,
        sexo: this.sexo,
        nomedoador: this.nomedoador,
        fone: this.fone,
        email: this.email,
        cidade: this.cidade,
        foto: this.foto,
        descricao: this.descricao,
      });
    },
  },
};
</script>

<style>

</style>