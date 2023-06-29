<template>
  <header class="header">
    <div class="top">
      <a href="#" class="header-logo">{{ header[0].pageTitle }}</a>
    </div>

    <Menu />
  </header>
</template>

<script setup>
import Menu from "@/components/Layot/Menu.vue";

const header = [
  {
    pageTitle: "Люба перукарня"
  }

]
</script>

<style lang="scss" scoped>
  @import "@scss/global";

  .header {
    .top {
      text-align: center;
      border-bottom: 1px solid rgba($black, .1);
      padding: 20px 0;

      @include m(768px){
        padding: 10px 0;
      }

      a{
        color: $text-black;
        font-size: 24px;
        text-align: center;

        @include m(768px){
          font-size: 24px;
        }
      }
    }
  }
</style>