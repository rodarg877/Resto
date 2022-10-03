<template>
  <div>
  <h1>Seleccione su mesa</h1>
  <form name="agregarMesa" @submit="agregarMesa" method="post">
  <div class="row"> 
    <div v-for="mesa in mesas" :key="mesa.id" class="col-4  mb-4">
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
          v-model="seleccionado"
          :value="mesa"
        />
        <label class="btn btn-outline-primary" :for="mesa.id"
          ><img style="heigth:50%;width:50%" :src="`/src/images/mesa${mesa.cantAsientos}.png`"/>
        </label>
      </div>
    </div>
  </div>
  <div>{{seleccionado}}</div>
  <div class="text-center mt-5  mb-5">  
    <input class="btn btn-success text-center" type="submit" value="Seleccionar">
  </div>
</form>
<div>{{}}</div>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      seleccionado:{},
      mesas: [
        { id: 1, cantAsientos: 2, estaOcupado: false },
        { id: 2, cantAsientos: 2, estaOcupado: false },
        { id: 3, cantAsientos: 4, estaOcupado: false },
        { id: 4, cantAsientos: 6, estaOcupado: false },
        { id: 5, cantAsientos: 8, estaOcupado: false },
      ],
    }
  },
  methods: {
    agregarMesa(event){
      alert(this.seleccionado)
      console.log(this.seleccionado.id);
      event.preventDefault();
    }
  },
};
</script>

<style>
</style>