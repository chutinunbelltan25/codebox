<template>
  <v-layout>
    <v-flex class="text-center">
      <blockquote class="blockquote">
        <h1 class=".display-2">Add Smooothie Fruit</h1> 
        <footer>
          <v-layout align-center justify-center>
            <v-col cols="12" sm="6">
              <v-form>
                <v-text-field v-model="title" label="Title"></v-text-field>
                <v-text-field v-model="ingredient" label="ingredient"></v-text-field>
                <v-textarea v-model="description" label="description"></v-textarea>
                <v-btn @click.stop="saveSmoothie" depressed color="primary">Add New Smoothie</v-btn>
              </v-form>
              <div class="my-2">
                <em>&mdash;Chutinun Tantasathiar</em>
              </div>
            </v-col>
          </v-layout>
        </footer>
      </blockquote>
      <SmoothieCard :deleteFruit="deleteFruit" :fruits="fruits" />
    </v-flex>
  </v-layout>
</template>

<script>
import { fireDb } from "../firebase.js";
import { eventBus } from "@/eventBus";
import SmoothieCard from "@/components/SmoothieCard";

export default {
  name: "inspire",
  components: {
    SmoothieCard,
  },
  data: () => ({
    fruits: []
  }),
  beforeUpdate(){
    console.log(this.fruits)
  },
  created() {
    this.loadData();
    console.log(this.fruits);
  },
  methods: {
    loadData() {
      fireDb
        .collection("order")
        .get()
        .then(e => {
          let fruitList = [];
          e.docs.map(doc => {
            fruitList.push(doc.data());
          });
          this.fruits = fruitList;
        });
    },
    async saveSmoothie() {
      const ref = fireDb.collection("order").doc(this.title);
      const document = {
        title: this.title,
        ingredient: this.ingredient,
        description: this.description
      };
      try {
        let tmp = await ref.set(document);
      } catch (e) {
        console.error(e);
      }
      this.writeSuccessful = true;
      this.loadData();
    },
    deleteFruit: function(titleFruit) {
      fireDb
        .collection("order")
        .doc(titleFruit)
        .delete()
        .then(() => {
          console.log("Deleted Completed");
        })
        .catch(err => {
          console.error("Error message: ", err);
        });

      this.loadData();
    }
  }
};
</script>