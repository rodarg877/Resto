<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10 col-11 mx-auto">
        <div class="row mt-5 mb-5 gx-3">
          <!-- left side div -->
          <div
            class="
              col-md-12 col-lg-7 col-11
              mx-auto
              main_cart
              mb-lg-0
              shadow
              mt-2
              mb-2
            "
          >
            <div class="card p-4">
              <h2 class="py-4 font-weight-bold">
                Carrito ({{ listaPedido.length }})
              </h2>
              <div v-for="(item, index) in listaPedido" :key="index" class="row mt-2">
                <!-- cart images div -->
                <div
                  class="
                    col-md-4 col-11
                    mx-auto
                    bg-light
                    d-flex
                    justify-content-center
                    align-items-center
                    shadow
                    product_img
                  "
                >
                  <img :src="item.img" class="img-fluid" alt="cart img" />
                </div>

                <!-- cart product details -->
                <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                  <div class="row">
                    <!-- product name  -->
                    <div class="col-6 card-title">
                      <h1 class="mb-4 product_name">{{item.nombre}}</h1>
                      <p class="mb-2">{{item.descripcion}}</p>
                    </div>
                    <!-- quantity inc dec -->
                    <div class="col-6">
                      <ul class="pagination justify-content-end ">
                        <li class="page-item">
                          <button
                            class="page-link"
                            @click="item.cantidad<=1?item.cantidad:item.cantidad--"
                          >
                            <font-awesome-icon icon="fa-solid fa-minus" />
                          </button>
                        </li>
                        <li class="page-item">
                          <input
                            type="text"
                            name=""
                            class="page-link"
                            v-model="item.cantidad"
                            id="textbox"
                            min="0"
                          />
                        </li>
                        <li class="page-item">
                          <button
                            class="page-link"
                            @click="item.cantidad++"
                          >
                            <font-awesome-icon icon="fas fa-plus" />
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- //remover move and price -->
                  <div class="row">
                    <div
                      class="col-8 d-flex justify-content-between remove_wish"
                    >
                      <button @click="eliminarItem(item)" class="btn btn-outline-danger">
                        <font-awesome-icon icon="fas fa-trash-alt" /> REMOVE
                        ITEM
                      </button>
                    </div>
                    <div class="col-4 d-flex justify-content-end price_money">
                      <h3>$<span id="itemval">{{item.precio}}</span></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div class="col-1"></div>
          <!-- right side div -->
          <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
            <div class="right_side p-3 shadow bg-white">
              <h2 class="product_name mb-4 py-2">Total</h2>
              <div class="price_indiv d-flex justify-content-between">
                <p class="pad">Precio Productos</p>
                <p class="pad">$<span id="product_total_amt">{{calcularProd()}}</span></p>
              </div>
              <div class="price_indiv d-flex justify-content-between">
                <p class="pad">Delivery</p>
                <p class="pad">$<span id="shipping_charge">{{valorDelivery}}</span></p>
              </div>
              <hr />
              <div
                class="
                  total-amt
                  d-flex
                  justify-content-between
                  font-weight-bold
                "
              >
                <p class="pad">Total</p>
                <p class="pad">$<span id="total_cart_amt">{{calcularTotal()}}</span></p>
              </div>
              <button @click="this.crearPedido()" class="btn btn-primary pad text-uppercase">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { CarritoStore } from "@/stores/carrito";
import { storeToRefs } from 'pinia';
export default {
  name: " Carrito",
  setup() {
    const store = CarritoStore();
   const {listaPedido,valorDelivery}=storeToRefs(store);
   const {finalizarPedido, eliminarPlato, obtenerPrecioDelivery,crearPedido}=store;
    return { listaPedido, finalizarPedido,eliminarPlato, obtenerPrecioDelivery,valorDelivery,crearPedido};
  },
  components: {},
  data(){
    return{
    }
  },
  methods:{
    calcularTotal(){
      return this.calcularProd()+this.valorDelivery
    },
    calcularProd(){
      return this.listaPedido.reduce((sum, p)=>sum+=(p.precio*p.cantidad),0)
    },
    eliminarItem(plato){
this.eliminarPlato(plato)
    }
  },
 async mounted(){
   this.obtenerPrecioDelivery();
}
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Mulish", sans-serif;
}
:root {
  --text-clr: #4f4f4f;
}
p {
  color: #6c757d;
}
.pad{
    padding: 0.8rem;
}
a {
  text-decoration: none;
  color: var(--text-clr);
}
a:hover {
  text-decoration: none;
  color: var(--text-clr);
}
h2 {
  color: var(--text-clr);
  font-size: 1.5rem;
}
.main_cart {
  background: #fff;
}
.card {
  border: none;
}
.product_img img {
  min-width: 200px;
  max-height: 200px;
}
.product_name {
  color: black;
  font-size: 1.4rem;
  text-transform: capitalize;
  font-weight: 500;
}
.card-title p {
  font-size: 0.9rem;
  font-weight: 500;
}
.remove-and-wish p {
  font-size: 0.8rem;
  margin-bottom: 0;
}
.price-money h3 {
  font-size: 1rem;
  font-weight: 600;
}

.page-link {
  line-height: 16px;
  width: 45px;
  font-size: 1.7rem;
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
.price_indiv p {
  font-size: 1.1rem;
}

</style>