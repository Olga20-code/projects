<script setup>
import BannerText from './BannerText.vue'

const banner = [
  {
    "text": {
      "title": 'Салон краси в Житомирі',
      "description": 'Звичка бути красивою починається з рішення обрати нову стрижку, змiнити колiр волосся, зробити манiкюр або мейкап'
    }
  }
]
</script>

<template>
  <div class="banner-section">
      <BannerText
        :title="banner[0].text.title"
        :description="banner[0].text.description"
      />
  </div>
</template>

<style lang="scss" scoped>
  @import "@scss/media-queries";

  .banner-section {
    background: url('/img/hero.jpg') no-repeat center/cover;
    background-attachment: fixed;
    background-size: cover;
    display: flex;
    min-height: 580px;
    align-items: center;
    justify-content: flex-end;
    padding: 80px;
    margin-bottom: 40px;

    @include m(768px){
      margin-bottom: 20px;
      min-height: 360px;
      padding: 6vw;
      background-attachment: initial;
    }
  }
</style>