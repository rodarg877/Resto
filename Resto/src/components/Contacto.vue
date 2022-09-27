<template>
  <Encabezado />
  <div class="row">
    <div class="col-9">
      <h1>Nuestra Dirección</h1>
      <figure class="google_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13133.371713305181!2d-58.4155197!3d-34.6207733!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd97551a698def57!2sSpiagge%20Di%20Napoli!5e0!3m2!1ses-419!2sar!4v1663706057560!5m2!1ses-419!2sar"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </figure>
      <h3>La Abuela Ort</h3>
      <p>
        Independencia 3527,<br />
        Buenos Aires,<br />
        Telephone: 4657-5357<br />
        E-mail: <a href="#">LaAbuelaOrt@ortTemy.com</a>
      </p>
    </div>
    <div class="col-3">
      <h2>Servicios</h2>
      <ul class="ul1">
        <li><a href="#">Casamientos</a></li>
        <li><a href="#">Despedidas</a></li>
        <li><a href="#">Juntadas con amigos</a></li>
        <li><a href="#">Barras</a></li>
        <li><a href="#">Navidad</a></li>
        <li><a href="#">Año nuevo</a></li>
      </ul>
    </div>
  </div>
  <Pie />
</template>
<script>
import Encabezado from "./Encabezado.vue";
import Pie from "./Pie.vue";
export default {
  name: "Contacto",
  components: {
    Encabezado,
    Pie,
  },
  data: () => ({}),
  methods: {},
};
</script>
