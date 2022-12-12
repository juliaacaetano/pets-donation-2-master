<template>
  <v-container class="pa-8" fluid>
    <v-container class="grey lighten-4" fluid>
    <v-row>
        <v-list-item v-for="card of cards" :key="card.card">
          <table>
            <tr>
              <td>
                <h1> {{card.card }}</h1>
                <h3>Sexo: {{ card.sexo }}</h3>
                <h3>Idade: {{ card.idade }}</h3>
                <h3>Doador: {{ card.doador }}</h3>
                <h3>E-mail: {{ card.email }}</h3>
                <h3>Telefone: {{ card.telefone }}</h3>
                <h3>Instagram: {{ card.instagram }}</h3>
                <h3>Localidade: {{ card.local }}</h3>
                <br>
                <h3>{{ card.descricao }}</h3>    
              </td>
              <td><img :src="card.foto" max-height="250" max-width="350"></td>
            </tr>
            <br>
            <v-btn
                class="ml-2 blue--text"
                color="indigo lighten-4"
                @click="adotar"
              >Adotar
              </v-btn>
          </table>
        </v-list-item>
      </v-row>
    </v-container>
  </v-container>
</template>>

<script>
  export default {
    data: () => ({
      
      cards: [
        { 
          card: 'Dara', 
          foto: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9sZm2vhklfV4VGBNBNv9VD4Gyl3afsRfLxnFrMspOV3APyvYv",
          sexo: 'fêmea',
          idade: '1 ano',
          doador: "João da Silva",
          telefone: '(79) 99664-23652',
          email: "joao.silva@servidor.com",
          instagram: '@joaozinho_silvaa',
          local: "Araquari - SC",
          descricao: 'Cão super dócil e ativo, adora brincar e tem ótima adaptação a crianças e outros animais. Por ser de pequeno porte se adapta a pequenoespaços e é ideal para apartamentos.',
        },
      ]
    }),
    methods: {
      vermais() {
        this.$router.push({ name: "Ver Mais"});
      }
    }
  }
</script>

<style>

</style>