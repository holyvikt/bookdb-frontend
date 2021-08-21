<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand roboto-slab">Databáze knih</router-link>
      <router-link to="/books/create" class="nav-link text-dark">Nová kniha</router-link>
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
.roboto-slab{
    font-family: 'Roboto Slab', serif;
}
.color-dark {
  background-color: #d9aa63;
}
.button-brown {
  background-color: #d9aa63;
  color: #fbf6ef;
}
.button-brown:hover {
  background-color: #efddc0;
  color: #ad884f;
}
.col-rounded-corners {
  border-radius: 10px;
}
</style>
