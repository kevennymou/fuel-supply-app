<template>
  <form class="form-grid" @submit.prevent="submitForm">

    <div class="form-group">
      <label>Driver ID</label>
      <input v-model="form.driverId" required />
    </div>

    <div class="form-group">
      <label>Litros</label>
      <input v-model.number="form.liters" type="number" required />
    </div>

    <div class="form-group">
      <label>Preço por Litro</label>
      <input v-model.number="form.pricePerLiter" type="number" required />
    </div>

    <div class="form-group">
      <label>Placa</label>
      <input v-model="form.plate" required />
    </div>

    <div class="form-group">
      <label>Tipo Combustível</label>
      <input v-model="form.fuelType" required />
    </div>

    <div class="form-group">
      <label>Odômetro</label>
      <input v-model.number="form.odometer" type="number" required />
    </div>

    <div
      class="form-group"
      v-if="form.fuelType === 'X'"
    >
      <label>Horímetro</label>
      <input v-model.number="form.hourmeter" type="number" />
    </div>

    <div class="form-group">
      <label>CNPJ Posto</label>
      <input v-model="form.stationCnpj" required />
    </div>

    <div class="form-group">
      <label>Nome Posto</label>
      <input v-model="form.stationName" required />
    </div>

    <div class="form-group full-width">
      <label>Observação</label>
      <textarea v-model="form.obs"></textarea>
    </div>

    <div class="full-width">
      <button type="submit" class="btn-submit">
        Salvar Abastecimento
      </button>
    </div>

  </form>
</template>
<script setup>
import { reactive } from "vue";

const emit = defineEmits(["submit"]);

const form = reactive({
  driverId: null,
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

<style scoped>
.form-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #0f3d2e;
}

input, textarea {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  transition: 0.3s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #0f3d2e;
  box-shadow: 0 0 5px rgba(15, 61, 46, 0.4);
}

textarea {
  min-height: 80px;
  resize: none;
}

.full-width {
  grid-column: span 3;
}

.btn-submit {
  background: #0f3d2e;
  color: #fdd835;
  border: none;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn-submit:hover {
  background: #fdd835;
  color: #0f3d2e;
}
</style>