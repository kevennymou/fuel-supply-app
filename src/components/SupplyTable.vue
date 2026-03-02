<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Placa</th>
        <th>Litros</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="supply in supplies" :key="supply.id">
        <td>{{ supply.id }}</td>
        <td>{{ supply.plate }}</td>
        <td>{{ supply.liters }}</td>
        <td>{{ supply.pricePerLiter }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps(["supplies"]);
</script>