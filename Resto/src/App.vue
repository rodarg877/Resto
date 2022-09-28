<script setup>
import Principal from "./components/Main.vue";
import Contacto from "./components/Contacto.vue";
import InicioSesion from "./components/InicioSesion.vue";
import Registro from "./components/Registro.vue";
import Menu from "./components/Menu.vue";
import Mesas from "./components/Mesas.vue";
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
        <Mesas/>
      </div>
    </div>
  </body>
</template>

<style scoped></style>
