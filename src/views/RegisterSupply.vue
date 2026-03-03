<template>
  <div class="container">
    <h2>Cadastro de Abastecimento</h2>
    <SupplyForm @submit="handleSubmit" />
    <p v-if="message" :class="success ? 'success' : 'error'">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SupplyForm from "../components/SupplyForm.vue";
//import supplyService from "../services/supplyMockService";
import supplyMockService from "../services/supplyMockService";

const message = ref("");
const success = ref(false);

const handleSubmit = async (formData) => {
  try {
    await supplyMockService.createSupply(formData);
    message.value = "Abastecimento cadastrado com sucesso!";
    success.value = true;
  } catch (error) {
    message.value = "Erro ao cadastrar.";
    success.value = false;
  }
};
</script>