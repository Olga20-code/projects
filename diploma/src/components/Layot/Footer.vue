<script setup>
import Menu from "@/components/Layot/Menu.vue";

const header = [
  {
    pageTitle: "Люба перукарня",
  }

]
</script>

<template>
  <footer class="footer">
    <div class="top">
      <a href="#">{{ header[0].pageTitle }}</a>
    </div>

    <Menu />
  </footer>
</template>

<style lang="scss" scoped>
  @import "@scss/global";

  .footer {
    .top {
      margin-top: 80px;
      border-bottom: 1px solid rgba($black, .1);
      border-top: 1px solid rgba($black, .1);
      text-align: center;
      padding: 20px 0;

      a{
        color: $text-black;
        font-size: 24px;
        text-align: center;
      }
    }
  }
</style>