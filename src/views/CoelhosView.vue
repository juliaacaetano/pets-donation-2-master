<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">COELHOS</h1>

    <v-card flat tile>

    <v-container class="grey lighten-4" 
      fluid
    >
    <v-row>
        <v-spacer></v-spacer>
        <v-col
          v-for="card in cards"
          :key="card.card"
          cols="12"
          sm="6"
          md="4"
        >
         <v-card>
           <v-img
              class="white--text"
              height="200px"
              :src="card.foto"
            >
            </v-img>

            <v-card-title
              class="text-h4 justify-center"
              v-text="card.card"
            >
            </v-card-title>

            <v-card-text
              class="text-h7 justify-left"
            >
              Idade: <span v-text="card.idade"></span><br>
              Doador: <span v-text="card.doador"></span><br>
              E-mail: <span v-text="card.email"></span><br>
              Cidade: <span v-text="card.local"></span><br>
            </v-card-text>

            <v-card-actions class="white justify-center ml-2">
              <v-btn
                class="ml-2"
                color="indigo lighten-4"
              >
                <a href="https://web.whatsapp.com/" target="_blank">Compartilhar</a>
              </v-btn>
              <v-btn
                class="ml-2 blue--text"
                color="indigo lighten-4"
                @click="vermais"
              >Ver Mais
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
  </v-container>
</template>>

<script>
  export default {
    data: () => ({
      
      cards: [
        { 
          card: 'Greg', 
          foto: "data:image/jpeg;base64,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",
          idade: '5 meses',
          doador: "Carlos Roberto",
          email: "cr_souza@fx-mail.com.br",
          local: "Araquari - SC",
        },
        { 
          card: 'Pompom', 
          foto: "https://s2.static.brasilescola.uol.com.br/be/2022/01/coelho.jpg",
          idade: '5 meses',
          doador: "João da Silva",
          email: "joao.silva@servidor.com",
          local: "Araquari - SC",
        },
        { 
          card: 'Rodolfo', 
          foto: "https://www.petlove.com.br/images/breeds/227685/profile/original/perfil-california.jpg?1598027225",
          idade: '5 meses',
          doador: "Maria Candido",
          email: "m.cand@hconex.com",
          local: "Araquari - SC",
        },
      ],
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