<script setup>
import Principal from "./components/Main.vue";
import Contacto from "./components/Contacto.vue";
import InicioSesion from "./components/InicioSesion.vue";
import Registro from "./components/Registro.vue";
import Menu from "./components/Menu.vue";
</script>

<template>
  <body class="main">
    <div id="main">
      <div id="inner">
        <Principal />
        <Contacto />
        <Registro />
        <InicioSesion />
        <Menu />
      </div>
    </div>
  </body>
</template>

<style scoped></style>
