<template>
  <v-container class="pa-8" fluid>
    <v-col class="h1">Cadastre o seu animal</v-col>
    <v-card-text>
      <v-form class="px-3">
        <v-text-field label="Nome do Animal" v-model="nomeanimal"></v-text-field>
        <v-text-field label="Raça do Animal" v-model="raca"></v-text-field>
        <v-select
          :items="items"
          label="Espécie do Animal"
          outlined
        ></v-select>
        <v-text-field label="Idade do Animal" v-model="idade"></v-text-field>
        <v-text-field label="Nome Doador" v-model="nomedoador"></v-text-field>
        <v-text-field label="E-mail Doador" v-model="email"></v-text-field>
        <v-text-field label="Cidade Doador" v-model="cidade"></v-text-field>
        <template>
    <v-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
       placeholder="Pick an avatar"
      prepend-icon="mdi-camera"
      label="Foto do Animal"
    ></v-file-input>
</template>
        <v-text-field label="Descrição do Animal" v-model="foto"></v-text-field>
        <v-btn flat class="sucess mx-0 mt-3" @click="enviar">Cadastrar</v-btn>
      </v-form>
    </v-card-text>
    <v-snackbar color="red" v-model="errodados" danger multline timeout="2000">Preencha todos os campos!</v-snackbar>
    <v-snackbar color="green" v-model="enviook" danger multline timeout="2000">Cadastro realizado com sucesso!</v-snackbar>
  </v-container>
</template>>

<script>
export default{
  data: () => ({
      items: ['Cachorro', 'Gato', 'Coelho', 'Pássaro', 'Outros Animais'],
    }),
    return: {
      name: "",
      mail: "",
      content: "",
      enviook: false,
      errodados: false,
    
    },
  };
  
</script>

<style>

</style>