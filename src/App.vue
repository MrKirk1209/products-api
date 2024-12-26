<template>
  <div class="app">
    <Header />
    <div class="container-app">
      <RouterView />
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import { RouterView } from 'vue-router';
export default {
  components: {
    Header,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const response = await fetch('https://fakestoreapi.com/products');
    this.products = await response.json();
  },
};
</script>

<style>

.app {
  font-family: Arial, sans-serif;

}
.h1-app {
  display: flex;
  justify-content: center;
}
.products {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
a {
  text-decoration: none;
  color: #1a1a1a;
}

.router-link-active,
.router-link-exact-active,
.router-link {
  text-decoration: none;
  color: #1a1a1a;
}
</style>