<template>
  <nav>
    <router-link to="/">Lista</router-link>
    <router-link to="/register">Cadastro</router-link>
    <router-link to="/details">Buscar por ID</router-link>
  </nav>

  <router-view />
</template>

<style>
body {
  font-family: Arial;
  background: #f4f4f4;
}

nav {
  background: #2c3e50;
  padding: 15px;
}

nav a {
  color: white;
  margin-right: 15px;
}

.container {
  padding: 20px;
  background: white;
  margin: 20px;
  border-radius: 8px;
}

.success { color: green; }
.error { color: red; }
</style>