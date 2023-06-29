<script setup>
import Header from './components/Layot/Header.vue'
import Footer from './components/Layot/Footer.vue'

</script>
<template>
  <div class="center">
    <Header/>
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
@import "@scss/global";
</style>
