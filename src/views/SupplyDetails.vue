<template>
  <div>
    <h2>Buscar Abastecimento</h2>

    <input v-model="id" placeholder="Informe o ID" />
    <button @click="search">Buscar</button>

    <div v-if="supply">
      <pre>{{ supply }}</pre>
    </div>

    <p v-if="error" style="color:red">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getSupplyById } from "../services/supplyService";

const id = ref("");
const supply = ref(null);
const error = ref("");

const search = async () => {
  try {
    error.value = "";
    const response = await getSupplyById(id.value);
    supply.value = response.data;
  } catch {
    error.value = "Abastecimento não encontrado.";
  }
};
</script>