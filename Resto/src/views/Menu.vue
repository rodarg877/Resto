<template>
  <div id="content">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <h1>Our Menu</h1>
          <div class="row">
            <div v-for="(menu, index) in menues" :key="index" class="col-6">
              <div class="thumb4">
                <div class="thumbnail clearfix">
                  <div class="row">
                    <div class="col-6">
                      <figure class="">
                        <img :src="menu.img" alt="" />
                      </figure>
                    </div>
                    <div class="col-6">
                      <div class="caption">
                        <div class="txt1">{{ menu.nombre }}</div>
                        <div class="txt2">
                          {{ menu.descripcion }}
                        </div>
                        <div class="txt3">${{ menu.precio }}</div>
                        <ul class="pagination set_quantity">
                          <li class="page-item">
                            <button class="page-link" @click="menu.cantidad--">
                              <font-awesome-icon icon="fa-solid fa-minus" />
                            </button>
                          </li>
                          <li class="page-item">
                            <input
                              type="text"
                              name=""
                              class="page-link"
                              v-model="menu.cantidad"
                              id="textbox"
                            />
                          </li>
                          <li class="page-item">
                            <button class="page-link" @click="menu.cantidad++">
                              <font-awesome-icon icon="fas fa-plus" />
                            </button>
                          </li>
                        </ul>
                      </div>
                      <button
                        @click="agregar(menu)"
                        class="btn btn-primary btn-sm mb-2"
                      >
                        Agregar
                      </button>
                      <div v-if="menu.cantidad<=0" class="alert alert-danger" style="font-size:.7rem">cantidad incorrecta</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <h2>Our Menu</h2>

          <ul class="ul1">
            <li><a href="#">PIZZA</a></li>
            <li><a href="#">PASTA</a></li>
            <li><a href="#">ANTIPASTA</a></li>
            <li><a href="#">SALADS</a></li>
            <li><a href="#">DRINKS</a></li>
            <li><a href="#">CAKES</a></li>
          </ul>
        </div>
      </div>
    </div>
    {{listaPedido}}
  </div>
  
</template>
<script>
import { CarritoStore } from "@/stores/carrito";
import { storeToRefs } from 'pinia';
export default {
  name: "Menu",
  setup() {
    const store = CarritoStore();
    const {listaPedido} = storeToRefs(store);
    const { agregarAPedido } = store;
    return { agregarAPedido,listaPedido };
  },

  components: {},

  data() {
    return {
      errrorCantidad:false,
      cantidad:1,
      menues: [
        {
          nombre: "mila",
          descripcion: "rica mila",
          img: "https://via.placeholder.com/160x192",
          precio: 150,
          cantidad: 1,
        },
        {
          nombre: "papas",
          descripcion: "rica mila",
          img: "https://via.placeholder.com/160x192",
          precio: 150,
          cantidad: 1,
        },
        {
          nombre: "hamburguesa",
          descripcion: "rica mila",
          img: "https://via.placeholder.com/160x192",
          precio: 150,
          cantidad: 1,
        },
      ],
    };
  },
  methods: {
    agregar(plato) {
      console.log(plato);
      if (plato.cantidad >0) {
        this.agregarAPedido(plato);
      }
    },
  },
};
</script>

<style scoped>
.page-link {
  line-height: 12px;
  width: 2rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #495057;
}
.page-item input {
  line-height: 22px;
  padding: 3px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.page-link:hover {
  text-decoration: none;
  color: #495057;
  outline: none !important;
}
.page-link:focus {
  box-shadow: none;
}
</style>
