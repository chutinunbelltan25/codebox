<template>
  <v-layout>
    <v-flex class="text-center">
      <Carousel />
      <blockquote class="blockquote">
        &#8220;Add Smooothie Fruit&#8221;
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
      <SmoothieCard @addSmoothie="addSmoothie" />
    </v-flex>
  </v-layout>
</template>

<script>
import { fireDb } from "../firebase.js";
import { eventBus } from "@/eventBus";
import SmoothieCard from "../components/SmoothieCard";
import Carousel from "../components/carousel";

export default {
  components: {
    SmoothieCard,
    Carousel
  },
  name: "addSmoothie",
  data() {
    return {
      title: "",
      ingredient: "",
      description: ""
    };
  },
  created() {
    fireDb.collection("order").doc("order").get().then((snapshot) => {
      this.showCardSmoothie = snapshot.data()
      console.log(snapshot.data())
      console.log(data().document)
});
    eventBus.$on("order", snapshot => {
      
        this.title = data.title;
        this.ingredient = data.ingredient;
        this.description = data.description;
        console.log(snapshot.data())
      
    });
  },
  methods: {
    data() {
      return {
        writeSuccessful: false
      };
    },
    async saveSmoothie() {
      const ref = fireDb.collection("order").doc("order");
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
      // eventBus.$emit("save-book", document);
      // (this.title = ""),
      //   (this.ingredient = ""),
      //   (this.description = ""),
    let addSmoothie = (await fireDb.collection("order").doc("order").get()).data()

      console.log("hhhhhhh",addSmoothie);
    
      console.log(
        (
          await fireDb
            .collection("order")
            .doc("order")
            .get()
        ).data()
      );
    }
  }
};
</script>