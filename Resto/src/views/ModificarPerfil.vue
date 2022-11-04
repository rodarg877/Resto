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
        <h3>MODIFICAR TU CUENTA</h3>
      </div>
      <div class="card-body w-100 mt-3">
        <form name="registro" @submit.prevent="validar">
          <div class="input-group form-group mt-1">
            <label class="w-100" for="username">User name</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="Usuario"
              v-model="Usuario.nick"
              disabled
            />
            <label class="w-100 mt-3" for="pass"
              >Dirección de correo electrónico</label
            >
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="email@email.com"
              v-model="Usuario.email"
            />
            <span id="name" class="alert alert-danger" v-if="errorEmail"
              >Mail invalido</span
            >
            <label class="w-100 mt-3" for="confirmPass">Repetir e-mail</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="email@email.com"
              v-model="UsuarioConf.confEmail"
            />
            <span id="name" class="alert alert-danger" v-if="errorConfEmail"
              >Error en la confirmacion de email</span
            >
            <label class="w-100 mt-3" for="pass">Domicilio</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="direccion..."
              v-model="Usuario.direccion"
            />
            <span id="name" class="alert alert-danger" v-if="errorEmail"
              >direccion invalida</span
            >
            <label class="w-100 mt-3" for="pass">Password</label>
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
              >Confirma tu Password </label
            >
            <input
              type="password"
              class="form-control w-100 mt-1"
              placeholder="Contraseña"
              v-model="UsuarioConf.confPass"
            />
            <span id="name" v-if="errorConfPass" class="alert alert-danger"
              >No coincide el Password
            </span>
          </div>
          <div class="form-group mt-5">
            <input
              type="submit"
              value="Registrarse"
              class="btn btn-dark float-end text-white w-100"
            />
            <span id="name" v-if="sinCambios" class="alert alert-danger " role="alert"
              >No ingreso nada para cambiar
      </span>
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
  name: "Registro",
  components: {},
  setup() {
    const store = UsuarioStore();
    const {usuario}= storeToRefs(store);
    const {modificarUsuario  } = store;
    return { usuario,modificarUsuario };
  },
  data: () => ({
    Usuario: {},
    UsuarioConf:{},
    reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    errorEmail: false,
    errorConfEmail: false,
    errorPass: false,
    errorConfPass: false,
    errorDireccion: false,
    sinCambios:false
  }),
  methods: {
    async validar() {
      if(this.Usuario.email){
        this.errorEmail = !this.reg.test(this.Usuario.email);
      this.errorConfEmail = this.Usuario.email != this.UsuarioConf.confEmail;
      }
      if(this.Usuario.pass){
      this.errorPass = this.Usuario.pass.length < 6;
      this.errorConfPass = this.Usuario.pass != this.UsuarioConf.confPass;
      }
      if(this.Usuario.direccion){
      this.errorDireccion = this.Usuario.direccion.length < 6;
      }
      const hayError=!this.errorEmail && !this.errorConfEmail &&!this.errorPass &&!this.errorConfPass &&!this.errorDireccion 
      this.sinCambios= !this.Usuario.pass&& !this.Usuario.email && (!this.Usuario.direccion || this.Usuario.direccion==this.usuario.direccion) 
      if ( hayError && sinCambios) {
        if (
          this.modificarUsuario(this.Usuario)
        ) {
          this.$router.push("/Perfil");
        }
      }
    },
  },
  mounted(){
    this.Usuario.nick=this.usuario.nick
    this.Usuario.direccion=this.usuario.direccion
  }
};
</script>