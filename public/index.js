requirejs.config({
  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  },
  paths: {
    'jquery': '/node_modules/jquery/dist/jquery',
    'bootstrap': '/node_modules/bootstrap/dist/js/bootstrap',
  }
})

define(['jquery', './assets/main', 'bootstrap'], function ($, main) {
  $(document).ready(main);
});
