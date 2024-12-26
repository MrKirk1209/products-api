<template>
  <div class="product-card">
    <router-link style="text-decoration: none; color: inherit;" :to="`carts/${product.id}`">
    <h2>{{ product.title }}</h2>
    <div class="product-image">
    <img :src="product.image" alt="product-image" />
    </div>
    <p>Category: {{ product.category }}</p>
    <p>Price: ${{ product.price }}</p>
    <p>Rating: {{ product.rating.rate }} / 5</p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  
};
</script>

<style>
.product-card {
  border: 1px solid;
  padding: 16px;
  margin: 8px;
  border-radius: 20px;
  border-color: #FCCB06;
  border-width: 8px;
  width: 370px;
  height:350px;
}
.product-card p{
  padding: 3px;
}
.product-image img{
  width: 180px;
  height: 240px;
}
.product-image{
  display: flex;
  justify-content: center;
}
</style>