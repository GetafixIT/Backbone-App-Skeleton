define(['backbone-min'], function(menuItem) {

    function initRouter(){
        // Initiate the router

        var AppRouter = Backbone.Router.extend({
            initialize: function(){
                console.info('Main nav router initiated');
            },
            routes: {
                "*actions": "defaultRoute"
            }
        });

        var app_router = new AppRouter;

        app_router.on('route:defaultRoute', function(actions) {

        });

        Backbone.history.start();
    }

    return{
        init: initRouter
    }

});