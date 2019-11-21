requirejs.config({
  shim: {
    'bootstrap': {
      deps: ['jquery']
    }
  },
  paths: {
    // 'jquery': '/node_modules/jquery/dist/jquery',
    // 'bootstrap': '/node_modules/bootstrap/dist/js/bootstrap',
    jquery:    '//cdn.bootcss.com/jquery/1.12.4/jquery.min',
    bootstrap: '//cdn.bootcss.com/twitter-bootstrap/3.4.1/js/bootstrap.min'
  }
})

define(['jquery', './assets/main', 'bootstrap'], function ($, main) {
  $(document).ready(main);
});
