<script setup>
import Encabezado from "./Encabezado.vue";
import Pie from "./Pie.vue";
</script>

<template>
  <Encabezado/>

  <div id="slider_wrapper">
    <div id="slider">
      <img src="../images/slider_bg.png" alt="" class="slider_bg" />
      <div id="slider_inner">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="0"
              class=""
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              class="active"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              class=""
            ></button>
          </div>
          <div id="caroufredsel_slider1" class="carousel-inner">
            <div class="carousel-item clearfix">
              <img src="../images/carrusel2.jpg" class="img" />
            </div>
            <div class="carousel-item clearfix active">
              <img src="../images/carrousel3.jpg" class="img" />
            </div>
            <div class="carousel-item clearfix">
              <img src="../images/pizza.jpg" class="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="content">
    <div class="container">
      <div class="row">
        <div class="col-9">
          <h1>Bienvenidos a La Abuela Ort</h1>

          <div class="thumb1">
            <div class="thumbnail clearfix">
              <figure class="img-polaroid w1">
                <img src="../images/bodegon.jpg" alt="" />
              </figure>
              <div class="caption">
                <p>
                  La Abuela Ort es un clásico bodegón de tradición italiana que
                  se encuentra en el barrio porteño de Boedo. Al pasar por la
                  puerta del lugar en la avenida Independencia 3527, se
                  observará más de una vez que decenas de personas aguardan por
                  conseguir una mesa. Es que su popularidad y el hecho que tomen
                  muchas reservas hace que haya que esperar para poder ingresar.
                  Los sabores de sus comidas llevan a los clientes a un viaje
                  imaginario hacia Italia. Hay que ir por las pastas. Quienes
                  acudieron al lugar, recomiendan probar sus sorrentinos verdes
                  con crema y fucciles con estofado.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-4"></div>
            <div class="col-5"></div>
          </div>
        </div>
        <div class="col-3">
          <div class="box1_wrapper">
            <div class="box1_inner">
              <img src="../images/box1.png" alt="" class="box1" />
              <div class="txt">
                <div class="txt1">estamos Abiertos</div>
                <div class="txt2">
                  Lun-Vie: 10am-11pm<br />Sab-Dom: 10am-12pm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pie/>
</template>
