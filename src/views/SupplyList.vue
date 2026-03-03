<template>
  <div class="container">
    <h2>Lista de Abastecimentos</h2>

    <div class="filters">
      <input v-model="filters.plate" placeholder="Placa" />
      <input v-model="filters.driverId" placeholder="Motorista" />
      <button @click="loadSupplies">Buscar</button>
    </div>

    <SupplyTable :supplies="supplies" />
    <Pagination :page="page" @change="changePage" />

    <div v-if="totals">
      <h3>Total Litros: {{ totals.totalLiters }}</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import supplyService from "../services/supplyService";
import supplyMockService from "../services/supplyMockService";
import SupplyTable from "../components/SupplyTable.vue";

const supplies = ref([]);
const totals = ref(null);
const page = ref(1);

const filters = ref({
  plate: "",
  driverId: ""
});

const loadSupplies = async () => {
  try {
    const response = await supplyMockService.getSupplies({
      page: page.value,
      ...filters.value
    });

    supplies.value = response.data.content;
    totals.value = await supplyMockService.getTotals().then(r => r.data);
  } catch (error) {
    alert("Erro ao carregar abastecimentos.");
  }
};

const changePage = (newPage) => {
  page.value = newPage;
  loadSupplies();
};

loadSupplies();
</script>