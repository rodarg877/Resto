<template>
  <div class="bot1"></div>
  <div class="bot2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bot2_inner clearfix">
            <div class="menu_bot">
              <ul id="menu_bot" class="clearfix">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="index-1.html">Quienes Somos?</a></li>
                <li><a href="index-2.html">Nuestro Menu</a></li>
                <li><a href="index-5.html">Contactanos</a></li>
              </ul>
            </div>

            <div class="social_wrapper">
              <ul class="social clearfix">
                <li>
                  <a href="#"><img src="../images/social_ic1.png" /></a>
                </li>
                <li>
                  <a href="#"><img src="../images/social_ic2.png" /></a>
                </li>
                <li>
                  <a href="#"><img src="../images/social_ic3.png" /></a>
                </li>
              </ul>
            </div>
          </div>
          <footer>
            <div class="copyright">
              Copyright © 2022. . All rights reserved.
            </div>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bot1 {
  height: 22px;
  background: url(../images/px3.jpg) 0 0 repeat-x;
}
.bot2 {
  background: url(../images/px4.jpg) 0 0 repeat;
  padding-top: 40px;
  padding-bottom: 0px;
}
.social_wrapper {
  float: right;
}
.social {
  display: inline-block;
  margin: 0 0px;
  padding-top: 0px;
  list-style: none;
  white-space: nowrap;
}
.social li {
  display: inline-block;
  margin: 0 5px;
  float: left;
}
.social li a {
  opacity: 1;
  filter: alpha(opacity=100);
  transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
}
.social li a:hover {
  opacity: 0.6;
  filter: alpha(opacity=60);
}
footer {
  position: relative;
  z-index: 1;
  background: url(../images/footer.png) 0 0 repeat-x;
  margin-top: 20px;
  padding-top: 22px;
  padding-bottom: 14px;
}
.copyright {
  color: #ffffff;
  padding-top: 0px;
  line-height: 20px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>