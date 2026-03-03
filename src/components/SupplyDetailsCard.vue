<template>
  <div class="card">
    <h3>Detalhes do Abastecimento</h3>

    <div class="grid">
      <p><strong>ID:</strong> {{ supply.id }}</p>
      <p><strong>Motorista:</strong> {{ supply.driverId }}</p>
      <p><strong>Placa:</strong> {{ supply.plate }}</p>
      <p><strong>Data:</strong> {{ formatDate(supply.date) }}</p>
      <p><strong>Combustível:</strong> {{ supply.fuelType }}</p>
      <p><strong>Litros:</strong> {{ supply.liters }} L</p>
      <p><strong>Preço/Litro:</strong> {{ formatMoney(supply.pricePerLiter) }}</p>
      <p><strong>Odômetro:</strong> {{ supply.odometer }} km</p>
      <p v-if="supply.hourmeter">
        <strong>Horímetro:</strong> {{ supply.hourmeter }}
      </p>
      <p><strong>Posto:</strong> {{ supply.stationName }}</p>
      <p><strong>CNPJ:</strong> {{ supply.stationCnpj }}</p>
      <p><strong>Status:</strong> 
        <span :class="statusClass">
          {{ supply.status }}
        </span>
      </p>
    </div>

    <div class="obs" v-if="supply.obs">
      <strong>Observação:</strong>
      <p>{{ supply.obs }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  supply: Object
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("pt-BR");
};

const formatMoney = (value) => {
  return value?.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
};

const statusClass = computed(() => {
  if (props.supply.status === "APPROVED") return "approved";
  if (props.supply.status === "REJECTED") return "rejected";
  return "";
});
</script>

<style scoped>
.card {
  margin-top: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 20px;
}

.obs {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px solid #eee;
}

.approved {
  color: green;
  font-weight: bold;
}

.rejected {
  color: red;
  font-weight: bold;
}
</style>