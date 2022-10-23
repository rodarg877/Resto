<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Encabezado from './components/Encabezado.vue'
import Pie from './components/Pie.vue'
</script>

<template>
  <body class="main">
    <div id="main">
      <div id="inner">
        <Encabezado/>
        <RouterView />
        <Pie/>
      </div>
    </div>
  </body>
</template>

<style scoped>
</style>
