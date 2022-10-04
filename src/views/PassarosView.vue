<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">PÁSSAROS</h1>

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
          card: 'Piu', 
          foto: "https://i.pinimg.com/originals/8b/82/72/8b82720676a0bf9226b6fa91a491dd29.jpg",
          idade: '5 meses',
          doador: "Inês Maria",
          email: "ines.maria@gmail.com.br",
          local: "Araquari - SC",
        },
        { 
          card: 'Louro', 
          foto: "https://farm2.staticflickr.com/1153/756723270_dd4ddf46cd.jpg",
          idade: '5 meses',
          doador: "João da Silva",
          email: "joao.silva@servidor.com",
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