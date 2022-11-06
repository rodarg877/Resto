<template>
  <div
    class="
      d-flex
      flex-column
      min-vh-100
      justify-content-center
      align-items-center
    "
  >
    <div class="card p-4 text-light bg-secondary mb-5 rounded-lg ancho mt-5">
      <div class="card-header">
        <h3>Delivery</h3>
      </div>
      <div class="card-body w-100 mt-3">
        <form name="registro" @submit.prevent="asignarValor">
          <div class="input-group form-group mt-1">
           
            <label for="confirmPass" class="w-100 mt-3"
              >Ingresá el nuevo valor</label
            >
            <input
              type="number"
              class="form-control w-100 mt-1"
              placeholder="$.."
              v-model="this.valorDelivery"
            />
          </div>
          <div class="form-group mt-5">
            <input
              type="submit"
              value="Asignar"
              class="btn btn-dark float-end text-white w-100"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
export default {
data(){
    return {
        valorDelivery:0
    }

},
methods: {
      asignarValor(){
        console.log( "El valor delivery es: " +this.valorDelivery);
        try {
            await axios.post("http://localhost:8080/delivery",this.valorDelivery);
        console.log("respuesta endpoint" + valor.data);
        }catch(e){
            console.log("Error guardado en la BD");
        }
    }
}
}

</script>

<style>

</style>