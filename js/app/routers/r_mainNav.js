define(['backbone-min'], function(Test) {

    function initRouter(){
        // Initiate the router

        var AppRouter = Backbone.Router.extend({
            routes: {
                "tests/": "specRunner"
            }
        });

        var views = {};
        var app_router = new AppRouter;

        app_router.on('route:specRunner', function(){
            if(!views.tests){
                views.tests = new Test.View();
            }
            else{
                views.tests.render();
            }
        });

        Backbone.history.start();
    }

    return{
        init: initRouter
    }

});