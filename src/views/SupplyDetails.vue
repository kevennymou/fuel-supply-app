<template>
  <div>
    <h2>Buscar por ID</h2>

    <input v-model="id" placeholder="Digite o ID" />
    <button @click="search">Buscar</button>

    <div v-if="supply">
      <pre>{{ supply }}</pre>
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
//import supplyService from "../services/supplyService";
import supplyMockService from "../services/supplyMockService";


const id = ref("");
const supply = ref(null);
const error = ref("");

const search = async () => {
  try {
    const response = await supplyMockService.getSupplyById(id.value);
    supply.value = response.data;
    error.value = "";
  } catch (err) {
    supply.value = null;
    error.value = "Abastecimento não encontrado.";
  }
};
</script>