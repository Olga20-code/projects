<script setup>
const menu = [
  {
    "list": [
      {
        "name": 'Головна',
        "path": '/'
      },
      {
        "name": 'Послуги',
        "path": '/services'
      },
      {
        "name": 'Про нас',
        "path": '/about'
      },
      {
        "name": 'Контакти',
        "path": '/contacts'
      }
    ]
  }

]
</script>

<template>
  <nav class="menu">
    <router-link
        v-for="(element, i) in menu[0].list"
        :to="element.path"
        class="item"
        :key="i"
    >
      {{element.name}}
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
  @import "@scss/global";

  .menu {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @include m(768px){
      padding: 10px 0;
    }

    a, .item {
      margin: 0 20px;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: .3s;

      @include m(768px){
        margin: 0 8px;
        font-size: 12px;
      }
    }

    .router-link-active{
      border-color: $almond;
    }
  }
</style>