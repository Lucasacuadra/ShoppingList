<template>
  <div class="hello">
    <h1>hello there</h1>
    <v-btn
      right
      fixed
      bottom
      large
      transition="slide-y-reverse-transition"
      fab
      dark
      color="#03A9F4"
      v-on="{ ...tooltip, ...dialog }"
    >
      <v-icon dark large>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped></style>
