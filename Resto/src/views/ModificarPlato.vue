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
        <h3>Agregar un plato</h3>
      </div>
      <div class="card-body w-100 mt-3">
        <form name="addPlato" @submit.prevent="validarSiYaExiste">
          <div class="input-group form-group mt-1">
            <label class="w-100" for="username">Nombre del plato</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="Plato"
              v-model="Plato.nombre"
              required
            />
            
            <span id="name" class="alert alert-danger" v-if="platoYaExistente">
              El plato ya existe</span
            >
            <label class="w-100 mt-3" for="pass"
              >Descripción</label
            >
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="Descripción.."
              v-model="Plato.descripcion"
              required
            />
            <label class="w-100 mt-3" for="pass">Imgaen</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="ingresar url"
              v-model="Plato.imagen"
              required
            />

            <label class="w-100 mt-3" for="pass">Precio</label>
            <input
              type="number"
              class="form-control w-100 mt-1"
              placeholder="Precio"
              v-model="Plato.precio"
              required
            />

            <label class="w-100 mt-3" for="pass">Tipo de plato</label>
            <select  class="form-select" v-model="Plato.tipoPlato"  required>
  <option v-for="(option, index) in PlatoOptions" :key="index" :value="option" >
    {{ option}}
  </option>
</select>
          </div>
          <div class="form-group mt-5">
            <input
             type="submit"
              value="Agregar plato"
              class="btn btn-dark float-end text-white w-100"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
    Plato:{nombre:this.$route.params.id,tipoPlato:"Pizza"},
    nombrePlatoIncompleto:false,
    DescripcionIncompleto:false,
    ImagenPlatoIncompleto:false,
    PrecioPlatoIncompleto:false,
    TipoPlatoIncompleto:false,
    platoYaExistente:false,
    PlatoOptions:["Pizza","Pasta","Bebida","Minuta"]
        }
    },
    methods: {
        /*
        ValidarDatosIncompletos(){
            nombrePlatoIncompleto = this.Plato.nombre.length < 4;
            DescripcionIncompleto = this.Plato.nombre.length < 4;
            ImagenPlatoIncompleto = this.Plato.nombre.length < 4;
            PrecioPlatoIncompleto = this.Plato.nombre.length < 4;
            PrecioPlatoIncompleto = this.Plato.nombre.length < 1;
            TipoPlatoIncompleto = this.Plato.nombre.length < 4;
            Lo comento xq con los Required no seria necesario para saber si estan incompletos.
        }
        */
       async validarSiYaExiste(){
        try {
            const platoExistente = await axios.get(`http://localhost:8080/platos/${this.Plato.nombre}`);
            if(platoExistente.data.nombre != undefined){
                this.platoYaExistente = true;
                console.log("Existe el plato");
            }else {
           // this.platoYaExistente = false;
            console.log("Imagen: " + this.Plato.imagen);
             const platoExistente = await axios.post("http://localhost:8080/platos/",this.Plato);
             alert("Plato agregado")

            }
        }catch(e){
            console.log("No se pudo validar si ya existe y agregar el plato");
        }
       }
      
        
    }
   

}
</script>

<style>

</style>