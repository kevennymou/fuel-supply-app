<template>
  <div class="container">
    <h2 class="page-title">Lista de Abastecimentos</h2>

    <div class="filters">
      <div class="filter-group">
        <label>Placa</label>
        <input v-model="filters.plate" placeholder="Digite a placa" />
      </div>

      <div class="filter-group">
        <label>Motorista</label>
        <input v-model="filters.driverId" placeholder="Digite o motorista" />
      </div>

      <button class="btn-search" @click="search">
        Buscar
      </button>
    </div>

    <SupplyTable :supplies="supplies" />

    <div v-if="supplies.length === 0" class="no-results">
      Nenhum abastecimento encontrado.
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import supplyService from "../services/supplyService";
import supplyMockService from "../services/supplyMockService";
import SupplyTable from "../components/SupplyTable.vue";

const supplies = ref([]);
const totalPages = ref(0);
const page = ref(1);
const size = ref(5);

const filters = ref({
  plate: "",
  driverId: ""
});

const loadSupplies = async () => {
  try {
    const response = await supplyMockService.getSupplies({
    page: page.value,
    size: size.value,
    ...filters.value
});

    supplies.value = response.content;
    totalPages.value = response.totalPages
  } catch (error) {
    alert("Erro ao carregar abastecimentos.");
  }
};

const search = async () => {
  if (!filters.value.plate && !filters.value.driverId) {
    alert("Preencha Placa ou Motorista para buscar.");
    return;
  }

  page.value = 1; 
  await loadSupplies();
};

const changePage = (newPage) => {
  page.value = newPage;
  loadSupplies();
};

</script>

<style scoped>

.page-title {
  text-align: center;
  color: #0f3d2e;
  font-size: 28px;
  margin-bottom: 25px;
}

.filters {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  margin-bottom: 25px;
  flex-wrap: wrap;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  font-weight: bold;
  color: #0f3d2e;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  min-width: 200px;
  transition: 0.3s;
}

input:focus {
  outline: none;
  border-color: #0f3d2e;
  box-shadow: 0 0 5px rgba(15, 61, 46, 0.4);
}

.btn-search {
  background: #0f3d2e;
  color: #fdd835;
  border: none;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-search:hover {
  background: #fdd835;
  color: #0f3d2e;
}

.no-results {
  margin-top: 20px;
  font-weight: bold;
  color: #c62828;
}

</style>