<template>
  <form @submit.prevent="submitForm">
    <input v-model="form.driverId" placeholder="Driver ID" required />
    <input v-model.number="form.liters" type="number" placeholder="Litros" required />
    <input v-model.number="form.pricePerLiter" type="number" placeholder="Preço por Litro" required />
    <input v-model="form.plate" placeholder="Placa" required />
    <input v-model="form.fuelType" placeholder="Tipo Combustível" required />
    <input v-model.number="form.odometer" type="number" placeholder="Odômetro" required />

    <input
      v-if="form.fuelType === 'X'"
      v-model.number="form.hourmeter"
      type="number"
      placeholder="Horímetro"
    />

    <input v-model="form.stationCnpj" placeholder="CNPJ Posto" required />
    <input v-model="form.stationName" placeholder="Nome Posto" required />
    <textarea v-model="form.obs" placeholder="Observação"></textarea>

    <button type="submit">Salvar</button>
  </form>
</template>

<script setup>
import { reactive } from "vue";

const emit = defineEmits(["submit"]);

const form = reactive({
  driverId: "",
  liters: null,
  pricePerLiter: null,
  plate: "",
  fuelType: "",
  odometer: null,
  hourmeter: null,
  stationCnpj: "",
  stationName: "",
  obs: ""
});

const submitForm = () => {
  if (!form.driverId || !form.liters) {
    alert("Preencha os campos obrigatórios!");
    return;
  }

  emit("submit", { ...form });
};
</script>