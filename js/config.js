requirejs.config({
    shim: {
        'backbone-min': {
            deps: ['underscore-min', 'zepto-min', 'ejs-min'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        view: '../app/views',
        model: '../app/models',
        router: '../app/routers'
    }
})

requirejs(["app/app"], function(app) {
    app.init();
});