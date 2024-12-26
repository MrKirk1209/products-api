<template>
<div class="container-product-card-onpage">
    <div class="product-card-onpage">
    <h2>{{ product.title }}</h2>
    <div class="product-image-onpage">
    <img :src="product.image" alt="product-image" />
    </div>
    <p class="category">Category: {{ product.category }}</p>
    <p class="price">Price: ${{ product.price }}</p>
    <p class="eating">Rating: {{ product.rating?.rate }} / 5</p>
    <p class="number-of-reviews">Number of reviews: {{ product.rating?.count }}</p>
    <p class="description">Description: {{ product.description }}</p>
    <div class="in-buscket">
    <button>In basket</button>
    </div>
    </div>
</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {ref} from 'vue';

const product = ref({});
const route = useRoute();
const productId = route.params.id; 

fetch(`https://fakestoreapi.com/products/${productId}`)
.then(res => res.json())
.then(json => {
    product.value = json; 
})
</script>
<style scoped>
.container-product-card-onpage {
    width: 1110px;
    margin: 0 auto;

}
.product-image-onpage img{
    width: 30%;
}
.product-image-onpage{
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
.product-card-onpage {
  border: 1px solid;
  padding: 16px;
  margin: 8px;
  border-radius: 20px;
  border-color: #FCCB06;
  border-width: 8px;
}
.product-card-onpage h2 {
  font-size: 24px;
  margin-bottom: 8px;
}
.product-card-onpage p {
  font-size: 20px;
  margin-bottom: 8px;
}
.product-card-onpage button {
  font-size: 20px;
  width: 20%;
  height: 50px;
  border-radius: 20px;
  background-color: #B1DDF1;
  border-color: #FCCB06;
}
.in-buscket{
    display: flex;
    justify-content: center;
}
</style>
