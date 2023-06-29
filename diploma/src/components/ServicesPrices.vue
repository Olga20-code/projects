<script setup>
const servicesPrices = [
  {
    "title": "Послуги та ціни",
    "services": [
      {
        "title": "Нігті",
        "price": "100 грн",
        "image": "/img/services-prices/nails-min.png"
      },
      {
        "title": "Волосся",
        "price": "200 грн",
        "image": "/img/services-prices/hair-min.png"
      },
      {
        "title": "Візаж",
        "price": "300 грн",
        "image": "/img/services-prices/makeup-min.png"
      },
      {
        "title": "Чоловічий сервіс",
        "price": "400 грн",
        "image": "/img/services-prices/men-min.png"
      }
    ]
  }
]

</script>

<template>
  <section class="section services-prices">
    <h2>{{ servicesPrices[0].title }}</h2>

    <ul class="services">
      <li
          v-for="(item, i) in servicesPrices[0].services"
          :key="'services-grid' + i"
      >
        <div class="block">
          <img :src="item.image" :alt="item.title">

          <div class="text">
            <h3 class="text-uppercase">{{ item.title }}</h3>
            <p>{{ item.price }}</p>
          </div>
        </div>

        <h4>{{item.title}}</h4>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
@import "@scss/global";

  .services-prices{
    h4{
      background: $almond;
      padding: 5px 10px;
    }

    p{
      font-weight: bold;
      font-size: 20px;
    }

    .services{
      display: flex;
      margin: 0 -20px;

      @include m(1020px){
        flex-wrap: wrap;
        margin: 0 -10px;
        justify-content: center;
      }

      & > *{
        margin: 20px;

        @include m(1020px){
          flex: 1 1 calc(50% - 20px);
          margin: 10px;
          max-width: 220px;
        }

        @include m(460px){
          flex: 1 1 100%;
          margin: 10px;
          max-width: initial;
        }
      }
    }

    .block{
      position: relative;

      &:after{
        content: '';
        width: 70%;
        height: 70%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        background: rgba($almond, 0.8);
        visibility: hidden;
        opacity: 0;
        transition: .3s;
      }

      &:hover{
        &:after{
          visibility: visible;
          width: 100%;
          height: 100%;
          opacity: 1;
        }

        .text{
          transform: translateY(-50%) scale(1);
          opacity: 1;
        }
      }

      .text{
        position: absolute;
        padding: 10px;
        top: 50%;
        transform: translateY(-50%) scale(0.7);
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        opacity: 0;
        z-index: 2;
        transition: .3s;
      }
    }
  }
</style>