<template>
  <div class="container snippets">
    <div class="row" id="user-profile">
      <div class="col-lg-3 col-md-4 col-sm-4">
        <div class="main-box clearfix">
          <h2>Username</h2>
          <div class="profile-status">
            <font-awesome-icon icon="fa-regular fa-circle-check" /> Online
          </div>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt=""
            class="img-fluid img-thumbnail center-block"
          />
          <div class="profile-label mt-2">
            <a asp-action="CambiarImagen" class="btn btn-primary edit-profile">
              <i class="fa fa-pencil-square fa-lg"></i> Editar foto
            </a>
          </div>
          <div class="profile-details">
            <ul>
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-people-carry-box" />Pedidos
                en curso: <span></span>
              </li>
              <li class="mt-2">
                <font-awesome-icon icon="fa-solid fa-people-carry-box" />Pedidos
                Realizados:
                <span></span>
              </li>
            </ul>
          </div>

          <div class="profile-message-btn center-block mb-3">
            <a asp-action="Soporte" class="btn btn-success">
              <i class="fa fa-envelope mb-2"></i> Enviar Consulta
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-9 col-md-8 col-sm-8">
        <div class="main-box clearfix mt-5">
          <div class="">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="enCurso-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#enCurso-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="enCurso-tab-pane"
                  aria-selected="true"
                >
                  Pedidos en curso
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link "
                  id="finalizados-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#finalizados-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="finalizados-tab-pane"
                  aria-selected="true"
                >
                  Pedidos Finalizados
                </button>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="enCurso-tab-pane" role="tabpanel" aria-labelledby="enCurso-tab" tabindex="0">
                <div class="row mt-5">
                  <div class="col-md-3 ml-3 tarjeta">
                    <h5 id="nombre" class="tituloTarjeta"></h5>
                    <img class="tamañoJuegoVenta" src="" alt="" />
                    <h5 class="titulo2"></h5>
                    <a class="btn btn-outline-primary">Ver me</a>
                  </div>
                </div>
              </div>
              <!-- Pedido tarjeta-->
              <div class="tab-pane fade" id="finalizados-tab-pane"  role="tabpanel" aria-labelledby="enCurso-tab" tabindex="0">
                <div class="row mt-5">
                  <div class="col-md-3 ml-3 tarjeta">
                    <h5 id="nombre" class="tituloTarjeta"></h5>
                    <img class="tamañoJuegoVenta" src="" alt="" />
                    <h5 class="titulo2"></h5>
                    <a class="btn btn-outline-primary">Ver Mas</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
export default {
  name: "Perfil",
  setup() {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>