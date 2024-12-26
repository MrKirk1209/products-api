<template>
<div class="container-main">
    <div class="filter-pag">
  <Filter @filter-changed="updateFilters" />
    </div>
  <div class="container-pag">
    <div class="pag">
      <p class="pag-button" @click="prevPage" :disabled="currentPage === 1">LAST</p>
      <span class="pag-number">{{ currentPage }} / {{ continuePages }}</span>
      <p class="pag-button" @click="nextPage" :disabled="currentPage === continuePages">NEXT</p>
    </div>
    
    <div class="products">
      <Home v-for="(value, key) in currentPageProducts" :key="key" :product="value" />
    </div>
    
    <div class="pag">
      <p class="pag-button" @click="prevPage" :disabled="currentPage === 1">LAST</p>
      <span class="pag-number">{{ currentPage }} / {{ continuePages }}</span>
      <p class="pag-button" @click="nextPage" :disabled="currentPage === continuePages">NEXT</p>
    </div>
    </div>
  </div>
</template>

<script setup>
import Home from '@/components/Home.vue';
import { ref, computed } from 'vue';
import Filter from '@/components/Filter.vue';

const data = ref([]);
const filteredData = ref([]); 

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    data.value = json;
    filteredData.value = json; 
    console.log(data);
  });

const productsPerPage = 10;
const currentPage = ref(1);
const continuePages = computed(() => Math.ceil(filteredData.value.length / productsPerPage));

const currentPageProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage;
  const end = start + productsPerPage;
  return filteredData.value.slice(start, end);
});


const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    scrollToTop();
  }
};

const nextPage = () => {
  if (currentPage.value < continuePages.value) {
    currentPage.value++;
    scrollToTop();
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};


const updateFilters = (filters) => {
  filteredData.value = data.value.filter(product => {
    const matchesCategory = filters.category ? product.category === filters.category : true;
    const matchesPrice = filters.maxPrice ? product.price <= filters.maxPrice : true;
    const matchesRating = product.rating.rate >= filters.minRating;
    return matchesCategory && matchesPrice && matchesRating;
  });
  currentPage.value = 1;
};
</script>

<style scoped>
.container-main {
  max-width: 1440px;
  margin: 0 auto;
}
.products {
  display: flex;
  flex-wrap: wrap;
}
.filter-pag {
  gap: 10px;
}
.pag {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 1440px;
  padding: 20px;
  margin: 0 auto;
}

.pg-number {
  font-weight: 900;
  display: flex;
  align-items: center;
}

.pag-button {
  padding-left: 5px;
  padding-right: 5px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 5px;
  border-color: #000000;
  border-width: 2px;
  background-color: #FCCB06;
}

.sh-pg__arr {
  cursor: pointer;
}
</style>
