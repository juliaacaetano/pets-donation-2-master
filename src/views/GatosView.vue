<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">GATOS</h1>

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
          card: 'Fido', 
          foto: "data:image/jpeg;base64,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",
          idade: '5 meses',
          doador: "Inês Maria",
          email: "ines.maria@gmail.com.br",
          local: "Araquari - SC",
        },
        { 
          card: 'Dinho', 
          foto: "https://img.estadao.com.br/thumbs/640/resources/jpg/5/0/1522880008605.jpg",
          idade: '5 meses',
          doador: "João da Silva",
          email: "joao.silva@servidor.com",
          local: "Araquari - SC",
        },
        { 
          card: 'Ineszinha', 
          foto: "https://static.natgeo.pt/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=768",
          idade: '5 meses',
          doador: "Regina Aparecida",
          email: "r.aparecida@nex.cohcom",
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