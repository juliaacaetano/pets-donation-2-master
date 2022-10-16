<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Perfil do Usuário</h1>
    <v-container class="grey lighten-4" fluid>

    <v-row>
        <v-list-item v-for="card of cards" :key="card.usuario">
          <table>
            <tr>
              <v-row class="mb-3" align="center">
              <v-col >
                <td><img :src="card.foto" max-height="250" max-width="350"></td>
              </v-col>
              <v-col>
                <td><h2>{{card.doacoes }}</h2></td>
              </v-col>
              <v-col>
                <td><h2>{{card.avaliacoes}}</h2></td>
              </v-col>

              
            </v-row>
            </tr>
          
            <tr>
              <td>
                <h1>{{ card.doador }}</h1>
                <h3>{{ card.local }}</h3>
                <br>
                <hr>
                <br>
                <h2>Biografia do usuário</h2>
 
                <h4>{{ card.descricao }}</h4> 
                <br>
                <v-row class="md-3">
                  <v-icon>mdi-facebook</v-icon> 
                <h3 class="ml-3">{{ card.facebook }}</h3>
                </v-row>
                <v-row class="md-3">
                  <v-icon>mdi-instagram</v-icon> 
                <h3 class="ml-3">{{ card.instagram }}</h3>
                </v-row>
              </td>
            </tr>
            <br>
            <v-btn 
                class="ml-2 blue--text"
                color="indigo lighten-4"
                @click="info"
              >Informações de Contato
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
          card: 'Kevin dos Santos', 
          foto: "data:image/jpeg;base64,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",
          doacoes: "Animais doados",
          avaliacoes: "Avaliações",


          doador: "Kevin dos Santos",
          telefone: '(79) 99664-23652',
          email: "kevin.santos@servidor.com",
          facebook: 'Kevin Santos',
          instagram: '@Kevin_santos30',
          local: "Joinville, Santa Catarina, Brasil",
          descricao: 'Além disso, segundo estudos, quem gosta de cachorro tende a ser uma pessoa mais razoável, que se centra mais na razão que na emoção. Outro ponto que poderia ser destacado é a capacidade de demonstrar autodisciplina e planejamento, preferindo programar atividades e tarefas que assumir um comportamento mais espontâneo.',
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