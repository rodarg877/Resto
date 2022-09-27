<template>
  <Encabezado />
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
        <h3>CREAR TU CUENTA</h3>
      </div>
      <div class="card-body w-100 mt-3">
        <form name="registro" @submit="validar" method="post">
          <div class="input-group form-group mt-1">
            <label class="w-100" for="username">User name</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="Usuario"
              v-model="Usuario.user"
            />
            <span id="name" class="text-danger" v-if="errorUser">
              Usuario no valido</span
            >
            <label class="w-100 mt-3" for="pass"
              >Dirección de correo electrónico</label
            >
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="email@email.com"
              v-model="Usuario.email"
            />
            <span id="name" class="text-danger" v-if="errorEmail"
              >Mail invalido</span
            >
            <label class="w-100 mt-3" for="confirmPass"
              >Confirma tu dirección</label
            >
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="email@email.com"
              v-model="Usuario.confEmail"
            />
            <span id="name" class="text-danger" v-if="errorConfEmail"
              >Error en la confirmacion de email</span
            >
            <label class="w-100 mt-3" for="pass">Password</label>
            <input
              type="password"
              class="form-control w-100 mt-1"
              placeholder="Contraseña"
              v-model="Usuario.pass"
            />
            <span id="name" v-if="errorPass" class="text-danger"
              >Password no valido</span
            >
            <label for="confirmPass" class="w-100 mt-3"
              >Confirma tu Password</label
            >
            <input
              type="password"
              class="form-control w-100 mt-1"
              placeholder="Contraseña"
              v-model="Usuario.confPass"
            />
            <span id="name" v-if="errorConfPass" class="text-danger"
              >No coincide el Password
            </span>
          </div>
          <div class="form-group mt-5">
            <input
              type="submit"
              value="Registrarse"
              class="btn btn-dark float-end text-white w-100"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
 <Pie />
</template>


<script>
import Encabezado from "./Encabezado.vue";
import Pie from "./Pie.vue";
export default {
  name: "Registro",
  components: {
    Encabezado,
    Pie,
  },
  data: () => ({
    Usuario: {},
    reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    errorUser: false,
    errorEmail: false,
    errorConfEmail: false,
    errorPass: false,
    errorConfPass: false,
  }),
  methods: {
    validar(e) {
      this.errorUser = !this.Usuario.user || this.Usuario.user.length < 3;
      this.errorEmail =
        !this.Usuario.email || !this.reg.test(this.Usuario.email);
      this.errorConfEmail =
        !this.Usuario.confEmail || this.Usuario.email != this.Usuario.confEmail;
      this.errorPass = !this.Usuario.pass || this.Usuario.pass.length < 6;
      this.errorConfPass =
        !this.Usuario.confPass || this.Usuario.pass != this.Usuario.confPass;
      if (
        !this.errorUser &&
        !this.errorEmail &&
        !this.errorConfEmail &&
        !this.errorPass &&
        !this.errorConfPass
      ) {
        return true;
      }
      e.preventDefault();
    },
  },
};
</script>