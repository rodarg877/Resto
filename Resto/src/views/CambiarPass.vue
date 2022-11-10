
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
    <h3>Cambiar Contraseña</h3>
  </div>
  <div class="card-body w-100 mt-3">
    <form name="registro" @submit.prevent="validar">
        <div class="input-group form-group mt-1">
            <label class="w-100 mt-3" for="pass">Dirección de correo electrónico</label>
            <input required type="text" class="form-control w-100 mt-1" placeholder="email@email.com" v-model="Usuario.email"/>
            <span id="name" class="alert alert-danger" v-if="errorEmail">Mail invalido</span>
      </div>
      <div class="input-group mt-5">
        <input type="submit" value="modificar" class="btn btn-dark float-end text-white w-100"/>
        <span id="name" v-if="sinCambios" class="alert alert-danger  w-100 mt-1" role="alert">Falta ingresar datos</span>
      </div>
    </form>
  </div>
</div>
</div>
</template>


<script>
import { UsuarioStore } from "@/stores/usuario";
import { storeToRefs } from "pinia";
export default {
name: "CambiarPass",
components: {},
setup() {
const store = UsuarioStore();
const { modificarPass, chequearEmail } = store;
return { modificarPass, chequearEmail };
},
data() {
return {
  Usuario: {},
  UsuarioConf: {},
  errorEmail: false,
};
},
methods: {
async validar() {

  if(this.Usuario.email){
    this.errorEmail = !await this.chequearEmail(this.Usuario.email);
  }else {
    this.errorEmail = true;
  }


  console.log("Llega antes del if");
  if (!this.errorEmail) {
    console.log("Llega despues del if");
    this.modificarPass(this.Usuario)
     // this.$router.push("/");
  }
},
},
mounted() {},
};
</script>