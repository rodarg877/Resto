<script setup>
import Encabezado from "./Encabezado.vue";
import Footer from "./Footer.vue";
</script>
        
        <template>
  <body class="main">
    <div id="main">
      <div id="inner">
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
              <form name="registro" @submit="validate()">
                <div class="input-group form-group mt-3">
                  <label class="w-100" for="username">User name</label>
                  <input
                    type="text"
                    class="form-control w-100 mb-3"
                    placeholder="Usuario"
                    v-model="User"
                  />
                  <span id="name" class="invisible" style="color: red"></span>
                  <label class="w-100" for="pass"
                    >Dirección de correo electrónico</label
                  >
                  <input
                    type="email"
                    class="form-control w-100 mb-3"
                    placeholder="email@email.com"
                    name="email"
                  />
                  <label class="w-100" for="confirmPass"
                    >Confirma tu dirección</label
                  >
                  <input
                    type="email"
                    class="form-control w-100 mb-3"
                    placeholder="email@email.com"
                    name="confirmEmail"
                  />
                  <label class="w-100" for="pass">Password</label>
                  <input
                    type="password"
                    class="form-control w-100 mb-3"
                    placeholder="Contraseña"
                    name="pass"
                  />
                  <label for="confirmPass" class="w-100"
                    >Confirma tu Password</label
                  >
                  <input
                    type="password"
                    class="form-control w-100 mb-3"
                    placeholder="Contraseña"
                    name="confirmPass"
                  />
                </div>
                <div class="form-group mt-5">
                  <input
                    type="submit"
                    value="Registrarse"
                    class="btn btn-dark float-end text-white w-100"
                    name="login-btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </body>
</template>
<script>
export default {
  data: () => ({
    errorUser:null,
    errorEmail:null,
    errorConfEmail:null,
  }),
  methods: {
  },
};
</script>