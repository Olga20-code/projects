<script setup>
defineProps({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  }
})
</script>

<template>
  <section class="banner-text">
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
  </section>
</template>

<style lang="scss" scoped>
@import "@scss/global";

.banner-text {
  background: $white;
  max-width: 630px;
  padding: 50px 55px;

  @include m(768px){
    padding: 6vw;
  }
}
</style>