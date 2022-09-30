<template>
  <Encabezado />
  <h1>Seleccione su mesa</h1>
  <div class="row">
    <div v-for="mesa in mesas" :key="mesa.id" class="col-6">
      <div
        class="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <input
          type="radio"
          class="btn-check"
          name="btnradio"
          :id="mesa.id"
          autocomplete="off"
        />
        <label class="btn btn-outline-primary" :for="mesa.id"
          ><img :src="`/src/images/mesa${mesa.cantAsientos}.png`"
        /></label>
      </div>
    </div>
  </div>
  <Pie/>
</template>

<script>
import Encabezado from "./Encabezado.vue";
import Pie from "./Pie.vue";
export default {
  components: { Encabezado, Pie },
  data() {
    return {
      mesas: [
        { id: 1, cantAsientos: 2, estaOcupado: false },
        { id: 2, cantAsientos: 2, estaOcupado: false },
        { id: 3, cantAsientos: 4, estaOcupado: false },
        { id: 4, cantAsientos: 6, estaOcupado: false },
        { id: 5, cantAsientos: 8, estaOcupado: false },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>