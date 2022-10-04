<template>
  <v-container class="pa-8" fluid>
    <v-container class="grey lighten-4" 
      fluid
    >
    <v-row>
        <v-list-item v-for="card of cards" :key="card.card">
          <v-list-item-content> 
            <h1>{{ card.card }}</h1>
          </v-list-item-content>
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