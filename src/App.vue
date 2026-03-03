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
  font-family: Arial, sans-serif;
  margin: 0;
  background: #f5f5f5;
}

nav {
  background: #0f3d2e; 
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  gap: 40px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

nav a {
  color: #fdd835; 
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  transition: 0.3s;
  position: relative;
}

nav a:hover {
  color: white;
}

nav a.router-link-active {
  color: white;
  border-bottom: 3px solid #fdd835;
  padding-bottom: 5px;
}

.container {
  padding: 25px;
  background: white;
  margin: 30px auto;
  max-width: 1000px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.success {
  color: #0f3d2e;
  font-weight: bold;
}

.error {
  color: #c62828;
  font-weight: bold;
}

</style>