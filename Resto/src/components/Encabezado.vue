<script>
import { UsuarioStore } from "../stores/usuario.ts";
import {CarritoStore} from "../stores/carrito.ts"
import { storeToRefs } from "pinia";

export default {
  name: "Encabezado",
  setup() {
    const store = UsuarioStore();
    const store2 = CarritoStore();
    const { usuario } = storeToRefs(store);
    const {listaPedido} = storeToRefs(store2);
    const { cerrarSesion, setUsuario } = store;
    return { usuario, cerrarSesion, setUsuario, listaPedido };
  },
  components: {},
  data() {
    return {
      pizza:"Pizza",
      pasta:"Pasta",
      minutas:"Minuta",
      bebidas:"Bebida"
      //usuarioLocal = localStorage.getItem('usuario')
    };
  },
  methods: {
    cerrarSesionEn() {
      this.cerrarSesion();
    },

  },
  mounted(){
    //console.log(localStorage.getItem('usuario'));
    if(localStorage.getItem('usuario')){
      this.setUsuario(localStorage.getItem('usuario')) 
    }
    
  }
};
</script>

<template>
  <div>
    <div class="top1 ">
    <ul class="nav justify-content-end">
      <li v-if="usuario == null" class="nav-item mt-2">
        <router-link to="/registro" style="font-size: 1rem;" class="nav-link">Registrarse</router-link>
      </li>
      <li v-else class="nav-item">
        <router-link to="/carrito"  class="nav-link" ><i style="font-size: 2rem;" class="bi bi-cart3 ">
          <span style="font-size: 0.8rem;" class="position-absolute top-45 start-100 translate-middle badge rounded-pill bg-danger">
             {{this.listaPedido.length}}
            <span class="visually-hidden">unread messages</span>
           </span>
    </i>
</router-link>
      </li>
      <li v-if="usuario == null" class="nav-item mt-2">
        <router-link to="/inicioSesion" style="font-size: 1rem;" class="nav-link " v-if="usuario == null">Iniciar Sesion</router-link>
      </li>
      <li v-else class="nav-item mt-2">
        <router-link to="/" style="font-size: 1rem;" class="nav-link" @click="cerrarSesionEn">Cerrar Sesion</router-link>
      </li>
    </ul>
  </div>
    <div class="top2">
      <div class="">
        <div class="row">
          <div class="col-12">
            <div class="top3_inner clearfix ">
              <header>  
                <div class="logo_wrapper">
                  <router-link class="logo" to="/"
                    ><img src="../images/logoA.png" alt=""
                  /></router-link>
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
                      <li>
                        <router-link to="/quienesSomos"
                          >Quienes Somos?</router-link
                        >
                      </li>
                      <li class="sub-menu sub-menu-1">
                        <router-link to="/menu" data-bs-toggle="dropdown"
                          >Nuestro Menu</router-link            

                        >
                        <ul class="dropdown-menu">
                          <li>
                            <router-link :to="{name:'menu',params:{id:pizza}}"> Pizza </router-link>
                          </li>

                          <li>
                            <router-link :to="{name:'menu',params:{id:pasta}}"> Pasta </router-link>
                          </li>
                          <li>
                            <router-link :to="{name:'menu',params:{id:minutas}}"> Minutas </router-link>
                          </li>
                          <li>
                            <router-link :to="{name:'menu',params:{id:bebidas}}"> Bebidas </router-link>
                          </li>
                        </ul>
                      </li>

                    </ul>
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

<style scoped></style>
