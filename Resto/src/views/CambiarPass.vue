
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
            <input type="text" class="form-control w-100 mt-1" placeholder="email@email.com" v-model="Usuario.email"/>
            <span id="name" class="alert alert-danger" v-if="errorEmail">Mail invalido</span>
            <label class="w-100 mt-3" for="pass">Nuevo Password</label>
            <input
              type="password"
              class="form-control w-100 mt-1"
              placeholder="Contraseña"
              v-model="Usuario.pass"
            />
            <span id="name" v-if="errorPass" class="alert alert-danger"
              >Password no valido</span
            >
            <label for="confirmPass" class="w-100 mt-3"
              >Confirma tu Nuevo Password</label
            >
            <input
              type="password"
              class="form-control w-100 mt-1"
              placeholder="Contraseña"
              v-model="UsuarioConf.confEmail"
            />
            <span id="name" v-if="errorConfPass" class="alert alert-danger"
              >No coincide el Password
             </span>
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
const { usuario } = storeToRefs(store);
const { modificarPass } = store;
return { usuario, modificarPass };
},
data() {
return {
  Usuario: {},
  UsuarioConf: {},
  errorEmail: false,
  errorConfEmail: false,
  sinCambios= false,
};
},
methods: {
async validar() {
  if (this.Usuario.email) {
    this.errorEmail =!await this.chequearEmail(this.Usuario.email);
    this.errorConfEmail = this.Usuario.email != this.UsuarioConf.confEmail;
  }
  if (this.Usuario.pass) {
    this.errorPass = this.Usuario.pass.length < 6;
    this.errorConfPass = this.Usuario.pass != this.UsuarioConf.confPass;
  }
  
  this.sinCambios= !this.Usuario.pass&& !this.Usuario.email
 
  if (! !this.errorEmail && 
        !this.errorPass &&
        !this.errorConfPass && !this.sinCambios) {
    if (this.modificarPass(this.Usuario)) {
      this.$router.push("/");
    }
  }
},
},
mounted() {},
};
</script>