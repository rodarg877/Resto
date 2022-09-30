<script setup></script>

<template>
  <div class="top1">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="top1_inner clearfix">
            <div class="search-form-wrapper">
              <router-link to="/registro" style="margin-right: 10px" href="#">Registrarse</router-link>
              <router-link to="/inicioSesion">Iniciar Sesion</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="top2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="top3_inner clearfix">
            <header>
              <div class="logo_wrapper">
                <router-link class="logo" to="/"><img src="../images/logoA.png" alt=""/></router-link>
              </div>
            </header>
            <div class="navbar navbar_">
              <div class="navbar-inner navbar-inner_">
                <a
                  class="btn btn-navbar btn-navbar_"
                  data-toggle="collapse"
                  data-target=".nav-collapse_"
                >
                </a>
                <div class="nav-collapse nav-collapse_ collapse">
                  <ul class="nav sf-menu clearfix">
                    <li>
                      <router-link to="/">Inicio</router-link>
                    </li>
                    <li><router-link to="/quienesSomos">Quienes Somos?</router-link></li>
                    <li class="sub-menu sub-menu-1">
                      <router-link to="/menu" data-bs-toggle="dropdown">Nuestro Menu</router-link >
                      <ul class="dropdown-menu">
                        <li>
                          <router-link to="/menu" class="dropdown-item" >pizza</router-link>
                        </li>
                        <li>
                          <router-link to="/menu" class="dropdown-item">pasta</router-link>
                        </li>
                        <li>
                          <router-link to="/menu" class="dropdown-item">salads</router-link>
                        </li>
                        <li>
                          <router-link to="/menu" class="dropdown-item">drinks</router-link>
                        </li>
                        <li>
                          <router-link to="/menu" class="dropdown-item" >cakes</router-link>
                        </li>
                      </ul>
                    </li>
                    <li><router-link to="/contacto">Contactanos</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
