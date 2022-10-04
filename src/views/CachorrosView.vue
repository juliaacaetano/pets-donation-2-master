<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">CACHORROS</h1>

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
          card: 'Dara', 
          foto: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9sZm2vhklfV4VGBNBNv9VD4Gyl3afsRfLxnFrMspOV3APyvYv",
          idade: '1 ano',
          doador: "João da Silva",
          email: "joao.silva@servidor.com",
          local: "Araquari - SC",
        },
        { 
          card: 'Donavan', 
          foto: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ65QlzcVJIQwi3oJnUBB9xjSs3mAPVpaiT2ukiPWF2Eek-Dfgr",
          idade: '2 anos',
          doador: "Maria Candido",
          email: "m.cand@hconex.com",
          local: "Joinville - SC",
        },
        { 
          card: 'Bob', 
          foto: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_pWdcz0XRCgcQFgQmdg_Trk7D33Yv7SDvKr-XIifMUrGfwNKJ",
          idade: '8 meses',
          doador: "Carlos Roberto",
          email: "cr_souza@fx-mail.com.br",
          local: "Joinville - SC",
        },
        { 
          card: 'Pipoca', 
          foto: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNJ7jj6rRFtCymfwvrDD6m2QMBO9-hnfPVKsJyeyJt0YmiuHO7",
          idade: '3 anos',
          doador: "Joana Marcia",
          email: "marcia.1996@htz-fast.com.br",
          local: "Enseada - SC",
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