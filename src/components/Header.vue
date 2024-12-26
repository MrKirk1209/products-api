<template>
<div class="header">
  <div class="header-container">
    <div class="logo">
      <img src="@/assets/light.svg" alt="logo">
      <p>Sales</p>
    </div>
      <nav class="nav">
      <ul>
        <li><a href="" v-on:click="this.$router.push('/')">Main</a></li>
        <li><a href="#">Basket</a></li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script setup>

</script>

<style scoped>
.header{
  display: flex;
  align-items: center;
  position: sticky;
  top: 0; 
  width: 100%;
  background-color: #B1DDF1;
  z-index: 1000; 
  font-family: 'Roboto', sans-serif;
}
.header-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 1440px;
}
.logo img{
  width: 70px;
  height: 70px;
}
.logo{
  display: flex;
  align-items: center;
  flex-direction: row;
}
.logo p{
font-size: 32px;
}
.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}
.nav li {
  margin-right: 20px;
}
.nav a {
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s ease;
}

</style>


