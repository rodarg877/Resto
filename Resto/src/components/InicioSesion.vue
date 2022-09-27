<template>
  <Encabezado/>
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
        <form @submit="validar" method="post">
          <div class="input-group form-group mt-3">
            <div class="bg-dark rounded-start d-flex align-items-center">
              <span class="m-3"><i class="bi bi-person mt-3"></i></span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Usuario"
              v-model="Usuario.user"
            />
          </div>
          <div v-if="errorUser" class="text-danger">Usuario invalido</div>
          <div class="input-group form-group mt-3">
            <div class="bg-dark rounded-start d-flex align-items-center">
              <span class="m-3"><i class="bi bi-lock"></i></span>
            </div>
            <input
              type="password"
              class="form-control"
              placeholder="Contraseña"
              v-model="Usuario.pass"
            />
          </div>
          <div v-if="errorPass" class="text-danger">password invalido</div>
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
  <Pie/>
</template>
<script>
import Encabezado from "./Encabezado.vue";
import Pie from "./Pie.vue";
export default {
  name: "InicioSesion",
  components: {
    Encabezado,
    Pie
},
    data() {
        return {
            Usuario: { user: "", pass: "" },
            errorUser: false,
            errorPass: false,
        };
    },
    methods: {
        validar(e) {
            this.errorUser = this.Usuario.user.length < 3;
            this.errorPass = this.Usuario.pass.length < 3;
            if (!this.errorUser && !this.errorPass) {
                return true;
            }
            e.preventDefault();
        },
    },
};
</script>
