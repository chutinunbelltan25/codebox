<template>
  <v-row   >
    <v-col v-for="f in fruits" :key="f.title"  >
      <v-card class="mx-auto" max-width="400">
        <v-row align="center" justify="space-around">
          <v-card-title>{{f.title}}</v-card-title>
          <v-icon color="red" @click.prevent="deleteFruit(f.title)">{{ icons.mdiDelete }}</v-icon>
        </v-row>
        <v-card-subtitle>{{f.ingredient}}</v-card-subtitle>
        <v-card-actions>
          <v-row align="center" justify="space-around">
            <v-icon color="blue">{{ icons.mdiPencil }}</v-icon>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-row>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <v-card-text>{{f.description}}</v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      </v-col>
  </v-row>
</template>

<script>
import eventBus from "@/eventBus";
import { mdiAccount, mdiPencil, mdiShareVariant, mdiDelete } from "@mdi/js";
import { fireDb } from "../firebase.js";

export default {
  props: {
    fruits: { type: Array },
    deleteFruit: { type: Function }
  },
  data: () => ({
    show: false,
    icons: {
      mdiAccount,
      mdiPencil,
      mdiShareVariant,
      mdiDelete
    }
  }),
  beforeUpdate() {
  },
  methods: {}
};
</script>
<style scoped>
</style>