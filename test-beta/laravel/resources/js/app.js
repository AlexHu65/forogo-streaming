require('./bootstrap');
require('./sweetalert.min.js');


import Vue from 'vue';
import Form from './Form';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
    el: "#form",
    components: { Form },
    template: "<Form/>"
});


// deprecated version
(function ($) {
  $.fn.extend({
    size: function () {
      return $(this).length;
    }
  });
})(jQuery);




// mapa
var contactoMapa = function(){
  var map = new GMaps({
    el: '#map',
    lat: '21.1522672',
    lng: '-101.725602',
    zoom: 15,
    panControl : false,
    streetViewControl : false,
    mapTypeControl: false,
    overviewMapControl: false
  });
  map.addMarker({
    lat: '21.1522672',
    lng: '-101.725602',
    icon: url +  '/images/icon.png',
    infoWindow: {
      content: '<strong>Difraxion</strong> <br />Blvd. Campestre 2737 <br />Cañada del Refugio 37358 <br />León, Gto.México'
    }
  });
};
contactoMapa();

AOS.init();
