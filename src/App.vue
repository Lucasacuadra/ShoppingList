<template>
  <v-app>
    <v-main>
      <ShoppingList />
    </v-main>
  </v-app>
</template>

<script>
  import ShoppingList from './components/ShoppingList.vue';

  export default {
    components: {
      ShoppingList
    }
  };
</script>

<style></style>
