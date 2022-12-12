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
          v-for="animal of animais"
          :key="animal.nomeanimal"
          cols="12"
          sm="6"
          md="4"
        >
         <v-card>
           <v-img
              class="white--text"
              height="200px"
              :src="animal.foto"
            >
            </v-img>

            <v-card-title
              class="text-h4 justify-center"
              v-text="animal.nomeanimal"
            >
            </v-card-title>

            <v-card-text
              class="text-h7 justify-left"
            >
              Idade: <span v-text="animal.idade"></span><br>
              Doador: <span v-text="animal.nomedoador"></span><br>
              E-mail: <span v-text="animal.email"></span><br>
              Cidade: <span v-text="animal.local"></span><br>
            </v-card-text>

            <v-card-actions class="white justify-center ml-2">
              <v-btn
                class="ml-2 black--text"
                color="indigo lighten-4"
                v-on:click="vermais"
                
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
  import * as fb from "@/plugins/firebase";
  export default {
  data() {
    return {
      uid: "",
      chave: "",
      animais: [],
    };
  },
    mounted() {
      this.uid = fb.auth.currentUser.uid;
      this.buscarAnimaisNaFirebase();
    },
    methods: {
      async buscarAnimaisNaFirebase() {
        this.animais = [];
        const logAnimais = await fb.animaisCollection
          .where("especie", "==", "Cachorro")
          .get();
        for (const doc of logAnimais.docs) {
          this.animais.push({
            id: doc.id,
            nomeanimal: doc.data().nomeanimal,
            foto: doc.data().foto,
            idade: doc.data().idade,
            nomedoador: doc.data().nomedoador,
            email: doc.data().email,
            local: doc.data().cidade,
            chave: this.nomeanimal,
          });
        }
      },
      vermais() {
        
        this.$router.push({ name: "Ver Mais"});
      }
    }
  }
</script>

<style>

</style>