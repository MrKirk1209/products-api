<template>
  
  <div class="filters">
    <p for="category">Category:</p>

    <select v-model="filters.category" id="category">

      <option value="">All</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="jewelery">Jewelry</option>
      <option value="electronics">Electronics</option>
      <option value="women's clothing">Women's Clothing</option>
    </select>

    <p for="rating">Minimum Rating:</p>

    <input type="number" v-model="filters.minRating" id="rating" min="1" max="5" step="0.5" placeholder="Enter min rating" />
    <button @click="applyFilters">Apply Filters</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        category: '',
        maxPrice: null,
        minRating: 1,
      },
    };
  },
  methods: {
    applyFilters() {
      this.$emit('filter-changed', { ...this.filters });
    },
  },
};
</script>

<style scoped>
.filters {
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.filters p{
  font-size: 20px;
}
.filters input {
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;
  border-width: 2px;
}

.filters select {
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;
  border-width: 2px;
  background-color: #ffffff;
  border-color: #FCCB06;
}
.filters input {
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;
  border-width: 2px;
  background-color: #ffffff;
  border-color: #FCCB06;
}
.filters button {
  padding: 5px;
  border: 1px solid;
  border-radius: 10px;
  border-width: 2px;
  background-color: #B1DDF1;
  border-color: #FCCB06;
  font-size: 20px;
}
</style>
