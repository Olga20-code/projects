<script setup>

import Map from "@/components/Map.vue";
</script>

<template>
  <ul class="contact-list">

    <li>
      <h4>Вулиця Західна, 41-35</h4>
      <div class="item"><i>Адрес: </i><b>вулиця Західна, 41-35, Житомир</b></div>
      <div class="item"><i>Телефон:</i><br>
        <a href="tel:+380676374222">+38 067 637 42 22</a>
      </div>
    </li>

    <li>
      <h4>Вулиця Миру, 1</h4>
      <div class="item"><i>Адрес: </i><b>вулиця Миру, 1, Бердичів</b></div>
      <div class="item"><i>Телефон:</i><br>
        <a href="tel:+380689923322">+38 068 992 33 22</a>
      </div>
    </li>

    <li>
      <h4>вулиця Авіаційна</h4>
      <div class="item"><i>Адрес: </i><b>вулиця Авіаційна, 56, Озерне,</b></div>
      <div class="item"><i>Телефон:</i><br>
        <a href="tel:+380676096909">+38 067 609 69 09</a>
      </div>
    </li>

    <li>
      <h4>вул. Щорса, 56</h4>
      <div class="item"><i>Адрес: </i><b>вул. Щорса, 56, Тетерівка</b></div>
      <div class="item"><i>Телефон:</i><br>
        <a href="tel:+380960053505">+38 096 005 35 05</a>
      </div>
    </li>

    <li>
      <h4>Вулиця Юліана Мовчана</h4>
      <div class="item"><i>Адрес: </i><b>Р28, Черняхов</b></div>
      <div class="item"><i>Телефон:</i><br>
        <a href="tel:+380674671818">+38 067 467 18 18</a>
      </div>
    </li>
  </ul>

  <Map/>
</template>

<style scoped lang="scss">
  .contact-list{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -16px;

    & > *{
      flex: 1 1 250px;
      margin: 16px;
    }

    .item +.item{
      margin-top: 5px;
    }
  }
</style>
