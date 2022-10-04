<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">OUTROS ANIMAIS</h1>

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
          card: 'Esguicho', 
          foto: "https://i0.statig.com.br/bancodeimagens/4b/sc/db/4bscdb8mcp1misqk86ouxdavp.jpg",
          idade: '5 meses',
          doador: "Inês Maria",
          email: "ines.maria@gmail.com.br",
          local: "Araquari - SC",
        },
        { 
          card: 'Rato', 
          foto: "https://s2.glbimg.com/UG8E6w0z5vqc1t2rswlV5lYw45k=/e.glbimg.com/og/ed/f/original/2022/02/22/terrario-hamster-como-montar-o-espaco-perfeito-para-o-meu-pet-vida-de-bicho.png",
          idade: '5 meses',
          doador: "João da Silva",
          email: "joao.silva@servidor.com",
          local: "Araquari - SC",
        },
        { 
          card: 'Cora', 
          foto: "https://cultura.uol.com.br/upload/redactor/20200924173109_cobradomilhoedit.jpg",
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