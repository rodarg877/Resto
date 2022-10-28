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
    <div class="card p-4 text-light bg-secondary mb-5 rounded-lg ancho">
      <div class="card-header">
        <h3>Iniciar sesión</h3>
      </div>
      <div class="card-body w-100 mt-3">
        <form @submit.prevent="validar">
          <div class="input-group form-group mt-3">
            <div class="bg-dark rounded-start d-flex align-items-center">
              <span class="m-3"><i class="bi bi-person mt-3"></i></span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Usuario"
              v-model.trim="Usuario.nick"
            />
          </div>
          <div v-if="errorUser" class="alert alert-danger mt-2">Usuario invalido</div>
          <div class="input-group form-group mt-3">
            <div class="bg-dark rounded-start d-flex align-items-center">
              <span class="m-3"><i class="bi bi-lock"></i></span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Contraseña"
              v-model.trim="Usuario.pass"
            />
          </div>
          <div v-if="errorPass" class="alert alert-danger mt-2">password invalido</div>
          <div v-if="errorUsuario" class="alert alert-danger mt-2">password o usuario incorrecto</div>
          <div class="form-group mt-5">
            <input
              type="submit"
              value="Acceder"
              class="btn btn-dark float-end text-white w-100"
            />
          </div>
        </form>
      </div>
      <div class="card-footer">
        <div class="d-flex justify-content-center container">
          <a href="registro.html" class="col-md-3" name="register-btn"
            >Registrarse</a
          >
          <div class="col-md-1"></div>
          <a class="col-md-5" name="olvido">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UsuarioStore } from "@/stores/usuario";
import { storeToRefs } from 'pinia';
export default {
  name: "InicioSesion",
  setup() {
    const store = UsuarioStore();
   const {usuario}=storeToRefs(store);
   const {chequearUser}=store;
    return { usuario, chequearUser};
  },
  components: {},
  data() {
    return {
      Usuario: { nick: "", pass: "" },
      errorUser: false,
      errorPass: false,
      errorUsuario:false
    };
  },
  methods: {
    async validar() {
      this.errorUser = this.Usuario.nick.length < 3;
      this.errorPass = this.Usuario.pass.length < 3;
      if (!this.errorUser && !this.errorPass) {
        
       this.errorUsuario=await this.chequearUser(this.Usuario.nick, this.Usuario.pass)
      !this.errorUsuario? this.$router.push('/'):''
      }
    },
  },
};
</script>
