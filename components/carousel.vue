<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://www.cafekantary.com/images/smoothie/cover-menu.jpg',
          },
          {
            src: 'https://timelinecovers.pro/facebook-cover/download/fruits-decor-facebook-cover.jpg',
          },
          {
            src: 'https://coverfiles.alphacoders.com/979/97942.jpg',
          },
          {
            src: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325221/green-detox-smoothie-and-ingredients-on-a-wooden-table.jpg?w=1155&h=1541',
          },
        ],
      }
    },
  }
</script>