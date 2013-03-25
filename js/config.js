requirejs.config({
    shim: {
        'backbone-min': {
            deps: ['underscore-min', 'zepto-min', 'ejs-min'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    },
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        view: '../app/views',
        model: '../app/models',
        router: '../app/routers',
        jasmine: 'jasmine-1.3.1/jasmine',
        'jasmine-html': 'jasmine-1.3.1/jasmine-html',
        spec: '../spec'
    }
})

requirejs(["app/app"], function(app) {
    app.init();
});