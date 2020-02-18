<template>
<v-row >
    <v-col>
  <v-card class="mx-auto" max-width="400"  >
      <v-row align="center" justify="space-around">
        <v-card-title>{{snapshot.data().title}}</v-card-title>
        <v-icon color="red">{{ icons.mdiDelete }}</v-icon>
      </v-row>
    <v-card-subtitle>{{bookAuthor}}dfsdfsdf</v-card-subtitle>
    <v-card-actions>
    <v-row align="center" justify="space-around">
    <v-icon  color="blue">{{ icons.mdiPencil }}</v-icon>
    <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-row>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          {{bookDescription}}dsfsdfsdf
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
    </v-col>
    <v-col>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>{{bookTitle}}dsfsdfsdf</v-card-title>
    <v-card-subtitle>{{bookAuthor}}dfsdfsdf</v-card-subtitle>
    <v-card-actions>
      <v-row align="center" justify="space-around">
    <v-icon >{{ icons.mdiPencil }}</v-icon>
    <v-icon >{{ icons.mdiDelete }}</v-icon>
    </v-row>
    </v-card-actions>
  </v-card>
  </v-col>
</v-row>
</template>

<script>
import eventBus from "@/eventBus";
import {
    mdiAccount,
    mdiPencil,
    mdiShareVariant,
    mdiDelete,
  } from '@mdi/js'
export default {
  props: {
    showCardSmoothie
  },
  data: () => ({
      show: false,
      icons: {
        mdiAccount,
        mdiPencil,
        mdiShareVariant,
        mdiDelete, 
      },
    }),
};
</script>
<style scoped>

</style>