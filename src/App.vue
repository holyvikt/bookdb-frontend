<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Databáze knih</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
body{
  background-color: rgb(242,229,208);
}
#app {
  font-family: 'Open Sans', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1, h2, h3{
  font-family: 'Roboto Slab', serif;
}
</style>
