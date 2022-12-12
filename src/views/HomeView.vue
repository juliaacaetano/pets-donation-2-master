
<template>
  <v-container fill-height fluid>
    <v-container>
      <template>
      <v-carousel
        cycle
        height="300"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
         
        >
          <v-sheet
            :src="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="text-h2">
                <v-img

              :src="slides[i]"
            >
            </v-img>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>

      </v-carousel> 
      </template>
      <br>
      <v-row>
        <v-col class="text--secondary" cols="6">
          <h1 class="h2">Pet's Donation</h1>
          <br>
          <body1>A Pet's Donation é uma iniciativa sem fim lucrativos por onde milhares de cães, gatos e outros animais têm a chance de encontrar um lar todos os dias.
           Nosso objetivo é promover a adoção de animais domésticos, aumentar a conscientização sobre posse responsável e promover uma cultura de doação vizando o bem-estar animal.
          </body1>
          <br><br>
         
<br>
<template>
   <v-row >
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="indigo lighten-3"
          black
          rounded
          v-bind="attrs"
          v-on="on"
        >
          Fale Conosco
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h6">
          Endereços para contato
        </v-card-title>     
 <v-card-text ><v-icon>mdi-email</v-icon> petsdonations@gmail.com </v-card-text>
 <v-card-text ><v-icon>mdi-instagram</v-icon> @pets.donation</v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>




        </v-col>
                  
        <v-col cols="auto">
          <v-img max-height="300" max-width="400" src="@/assets/images/pets_logo.png"></v-img>  
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text--secondary" cols="auto">
          <br><br>
          <v-img max-height="200" max-width="200" src="https://t1.ea.ltmcdn.com/pt/razas/5/3/7/vira-lata-caramelo_735_0_600.jpg"></v-img>
          <br>
          <v-btn color="indigo lighten-3" @click="cachorros"  rounded>Cachorros</v-btn>
        </v-col>
        <v-col class="text--secondary" cols="auto">
          <br><br>
          <v-img max-height="188" max-width="225" src="https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg"></v-img>
          <br>
          <v-btn color="indigo lighten-3" @click="gatos"  rounded>Gatos</v-btn>
        </v-col>
        <v-col class="text--secondary" cols="auto">
          <br><br>
          <v-img max-height="188" max-width="205" src="https://www.petz.com.br/blog/wp-content/uploads/2020/07/adocao-de-coelho.jpg"></v-img>
          <br>
          <v-btn color="indigo lighten-3" @click="coelhos"  rounded>Coelhos</v-btn>
        </v-col>
        <v-col class="text--secondary" cols="auto">
          <br><br>
          <v-img max-height="188" max-width="187" src="https://ivensmiranda.files.wordpress.com/2016/11/cd-canto-campainha-canario-belga-original-p-aves-em-gaiola-15814-mlb20109008167_062014-f.jpg"></v-img>
          <br>
          <v-btn color="indigo lighten-3" @click="passaros"  rounded>Pássaros</v-btn>
        </v-col>
        <v-col class="text--secondary" cols="auto">
          <br><br>
          <v-img max-height="188" max-width="188" src="https://t2.uc.ltmcdn.com/pt/posts/1/6/2/como_saber_se_minha_tartaruga_esta_hibernando_16261_600.jpg"></v-img>
          <br>
          <v-btn color="indigo lighten-3" @click="outros"  rounded>Outros Animais</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  
</template>

<script>
export default{
  data () {
      return {
        colors: [
          'blue',
          'purple',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'https://uploaddeimagens.com.br/images/004/256/377/full/carrossel1.jpeg?1670810771',
          'https://uploaddeimagens.com.br/images/004/256/379/full/carrosel2.jpeg?1670810891',
          'https://uploaddeimagens.com.br/images/004/256/381/full/carrosel3.jpeg?1670810941',
          'https://uploaddeimagens.com.br/images/004/256/383/full/carrosel4.jpeg?1670810983',
          'https://uploaddeimagens.com.br/images/004/256/385/full/carrosel5.jpeg?1670811027',
        ],
      };
    },
  
  
  methods: {
    faleconosco() {
      this.$router.push({ name: "Fale Conosco"});
    },
    cachorros() {
      this.$router.push({ name: "Cachorros"});
    },
    gatos() {
      this.$router.push({ name: "Gatos"});
    },
    coelhos() {
      this.$router.push({ name: "Coelhos"});
    },
    passaros() {
      this.$router.push({ name: "Passaros"});
    },
    outros() {
      this.$router.push({ name: "Outros"});
    }
  }
};


</script>


