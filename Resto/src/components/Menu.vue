<template>
  <Encabezado />
  <div id="content">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <h1>Our Menu</h1>
          <div class="row">
            <div class="col-5">
              <div class="thumb4">
                <div class="thumbnail clearfix">
                  <figure class="">
                    <img src="https://via.placeholder.com/160x192" alt="" />
                  </figure>
                  <div class="caption">
                    <div class="txt1">SEASONAL VEGETABLES</div>
                    <div class="txt2">
                      Sliced vegetables, chargrilled & marinated in herbs &
                      olive oil
                    </div>
                    <div class="txt3">$12.00</div>
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
  </div>
  <Pie/>
</template>
<script>
import Encabezado from "./Encabezado.vue";
import Pie from "./Pie.vue";
export default {
  name: "Menu",
  components: {
    Encabezado,
    Pie
},

  data() {
    return {
      menues: [],
    };
  },
};
</script>
