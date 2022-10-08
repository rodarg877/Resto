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
              <h2 class="py-4 font-weight-bold">Cart (2 items)</h2>
              <div class="row">
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
                  <img src="images/img2.png" class="img-fluid" alt="cart img" />
                </div>

                <!-- cart product details -->
                <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                  <div class="row">
                    <!-- product name  -->
                    <div class="col-6 card-title">
                      <h1 class="mb-4 product_name">Blue Zara Shirt</h1>
                      <p class="mb-2">SHIRT - BLUE</p>
                      <p class="mb-2">COLOR: BLUE</p>
                      <p class="mb-3">SIZE: M</p>
                    </div>
                    <!-- quantity inc dec -->
                    <div class="col-6">
                      <ul class="pagination justify-content-end set_quantity">
                        <li class="page-item">
                          <button
                            class="page-link"
                            onclick="decreaseNumber('textbox','itemval')"
                          >
                          <font-awesome-icon icon="fa-solid fa-minus" />
                          </button>
                        </li>
                        <li class="page-item">
                          <input
                            type="text"
                            name=""
                            class="page-link"
                            value="0"
                            id="textbox"
                          />
                        </li>
                        <li class="page-item">
                          <button
                            class="page-link"
                            onclick="increaseNumber('textbox','itemval')"
                          >
                            <font-awesome-icon icon="fas fa-plus"/>
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
                      <p><font-awesome-icon icon="fas fa-trash-alt"/> REMOVE ITEM</p>
                    </div>
                    <div class="col-4 d-flex justify-content-end price_money">
                      <h3>$<span id="itemval">0.00 </span></h3>
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
                <p class="pad">$<span id="product_total_amt">0.00</span></p>
              </div>
              <div class="price_indiv d-flex justify-content-between">
                <p class="pad">Delivery</p>
                <p class="pad">$<span id="shipping_charge">50.0</span></p>
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
                <p class="pad">$<span id="total_cart_amt">0.00</span></p>
              </div>
              <button class="btn btn-primary pad text-uppercase">Finalizar Compra</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
.set_quantity {
  position: relative;
}
.set_quantity::after {
  content: "(Note, 1 piece)";
  width: auto;
  height: auto;
  text-align: center;
  position: absolute;
  bottom: -20px;
  right: 1.5rem;
  font-size: 0.8rem;
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