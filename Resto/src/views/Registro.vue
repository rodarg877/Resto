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
        <h3>CREAR TU CUENTA</h3>
      </div>
      <div class="card-body w-100 mt-3">
        <form name="registro" @submit.prevent="validar">
          <div class="input-group form-group mt-1">
            <label class="w-100" for="username">User name</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="Usuario"
              v-model="Usuario.user"
            />
            <span id="name" class="alert alert-danger" v-if="errorUser">
              Usuario no valido</span
            >
            <span id="name" class="alert alert-danger" v-if="errorUsuarioDuplicado">
              El usuario ya existe</span
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
            <span id="name" class="alert alert-danger" v-if="errorEmail"
              >Mail invalido</span
            >
            <span id="name" class="alert alert-danger" v-if="errorEmailDuplicado">
              El email ya existe</span
            >
            <label class="w-100 mt-3" for="confirmPass">Repetir e-mail</label>
            <input
              type="text"
              class="form-control w-100 mt-1"
              placeholder="email@email.com"
              v-model="Usuario.confEmail"
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
              >direccion invalido</span
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
              >Confirma tu Password</label
            >
            <input
              type="password"
              class="form-control w-100 mt-1"
              placeholder="Contraseña"
              v-model="Usuario.confPass"
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
    const { registrarUsuario, chequearUsuario,chequearEmail,chequearUser } = store;
    return { registrarUsuario , chequearUsuario,chequearEmail,chequearUser };
  },
  data: () => ({
    Usuario: {},
    reg: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    errorUser: false,
    errorEmail: false,
    errorConfEmail: false,
    errorPass: false,
    errorConfPass: false,
    errorDireccion: false,
    errorUsuarioDuplicado:false,
    errorEmailDuplicado:false
  }),
  methods: {
    async validar() {
      this.errorUser = !this.Usuario.user || this.Usuario.user.length < 3;
      this.errorEmail =
        !this.Usuario.email || !this.reg.test(this.Usuario.email);
      this.errorConfEmail =
        !this.Usuario.confEmail || this.Usuario.email != this.Usuario.confEmail;

      this.errorPass = !this.Usuario.pass || this.Usuario.pass.length < 6;
      this.errorDireccion = this.Usuario.direccion.length < 6;
      this.errorConfPass =
        !this.Usuario.confPass || this.Usuario.pass != this.Usuario.confPass;
        this.errorUsuarioDuplicado= await this.chequearUsuario(this.Usuario.user)
        this.errorEmailDuplicado = await this.chequearEmail(this.Usuario.email)
        console.log(this.errorUsuarioDuplicado);
        console.log(this.errorEmailDuplicado);
      if (
        !this.errorUser &&
        !this.errorEmail &&
        !this.errorConfEmail &&
        !this.errorPass &&
        !this.errorConfPass &&
        !this.errorDireccion &&
        !this.errorUsuarioDuplicado &&
        !this.errorEmailDuplicado

      ) {
        
        console.log("Datos correctos");
        if (
          this.registrarUsuario(
            this.Usuario.user,
            this.Usuario.email,
            this.Usuario.pass,
            this.Usuario.direccion
          )
        ) {
          console.log("Se registró el usuario correctamente");
          this.chequearUser(this.Usuario.user, this.Usuario.pass)
          this.$router.push("/");
        }
      }
    },
  },
};
</script>