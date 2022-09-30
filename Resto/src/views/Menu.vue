<template>
  <div id="content">
    <div class="container">
      <div class="row">
        <div class="col-10">
          <h1>Our Menu</h1>
          <div class="row">
            <div v-for="(menu,index) in menues" :key="index" class="col-5">
              <div class="thumb4">
                <div class="thumbnail clearfix">
                  <figure class="">
                    <img :src="menu.link" alt="" />
                  </figure>
                  <div class="caption">
                    <div class="txt1">{{menu.titulo}}</div>
                    <div class="txt2">
                      {{menu.descripcion}}
                    </div>
                    <div class="txt3">${{menu.precio}}</div>
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
</template>
<script>
export default {
  name: "Menu",
  components: {},

  data() {
    return {
      menues: [{titulo:"mila",descripcion:"rica mila",link:"https://via.placeholder.com/160x192",precio:150},
              {titulo:"papas",descripcion:"rica mila",link:"https://via.placeholder.com/160x192",precio:150},
              {titulo:"hamburguesa",descripcion:"rica mila",link:"https://via.placeholder.com/160x192",precio:150}],
    };
  },
};
</script>
