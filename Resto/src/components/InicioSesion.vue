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
          <div class=" card p-4 text-light bg-secondary mb-5 rounded-lg ancho">
            <div class="card-header">
              <h3>Iniciar sesión</h3>
            </div>
            <div class="card-body w-100 mt-3">
              <form name="login" action="" method="post">
                <div class="input-group form-group mt-3">
                  <div class="bg-dark rounded-start d-flex align-items-center">
                    <span class="m-3 "><i class="bi bi-person mt-3"></i></span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Usuario"
                    name="username"
                  />
                </div>
                <div class="input-group form-group mt-3">
                  <div class="bg-dark rounded-start d-flex align-items-center">
                    <span class="m-3 "><i class="bi bi-lock"></i></span>
                  </div>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Contraseña"
                    name="password"
                  />
                </div>

                <div class="form-group mt-5">
                  <input
                    type="submit"
                    value="Acceder"
                    class="btn btn-dark float-end text-white w-100"
                    name="login-btn"
                  />
                </div>
              </form>
            </div>
            <div class="card-footer">
              <div class="d-flex justify-content-center container">
                <a
                  href="registro.html"
                  class="col-md-3"
                  name="register-btn"
                  >Registrarse</a
                >
                <div class="col-md-1"></div>
                <a class="col-md-5" name="olvido"
                  >¿Olvidaste tu contraseña?</a
                >
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </body>
</template>