<template>
  <div class="container">
    <h2 class="page-title">Buscar Abastecimento por ID</h2>

    <div class="search-box">
      <div class="input-group">
        <label>ID do Abastecimento</label>
        <input v-model="id" type="number" placeholder="Digite o ID" />
      </div>

      <button class="btn-search" @click="search">
        Buscar
      </button>
    </div>

    <SupplyDetailsCard
      v-if="supply"
      :supply="supply"
    />

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import supplyMockService from "../services/supplyMockService";
import SupplyDetailsCard from "../components/SupplyDetailsCard.vue";

const id = ref(null);
const supply = ref(null);
const error = ref("");

const search = async () => {
  if (!id.value) {
    error.value = "Informe um ID válido.";
    supply.value = null;
    return;
  }

  try {
    const response = await supplyMockService.getSupplyById(id.value);
    supply.value = response;
    error.value = "";
  } catch (err) {
    supply.value = null;
    error.value = "Abastecimento não encontrado.";
  }
};
</script>

<style scoped>

.container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
}

.page-title {
  text-align: center;
  color: #0f3d2e;
  font-size: 28px;
  margin-bottom: 30px;
}

.search-box {
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.input-group {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.input-group label {
  font-weight: bold;
  color: #0f3d2e;
  margin-bottom: 6px;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: 0.3s;
}

input:focus {
  outline: none;
  border-color: #0f3d2e;
  box-shadow: 0 0 6px rgba(15, 61, 46, 0.4);
}

.btn-search {
  background: #0f3d2e;
  color: #fdd835;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  height: 42px;
}

.btn-search:hover {
  background: #fdd835;
  color: #0f3d2e;
}

.error {
  margin-top: 20px;
  color: #c62828;
  font-weight: bold;
  text-align: center;
}

</style>