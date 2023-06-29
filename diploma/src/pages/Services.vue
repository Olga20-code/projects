<script setup>
import ServicesPrices from "@/components/ServicesPrices.vue";

const servicesPage = [
  {
    "title": "Всі послуги від Backstage",
  }
]
</script>

<template>
  <div class="text-center">
    <h1>{{ servicesPage[0].title }}</h1>
  </div>

  <ServicesPrices/>
</template>

<style scoped lang="scss">
</style>