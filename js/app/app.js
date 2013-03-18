define(['view/v_mainNav', 'backbone-min'], function(mainNav) {

//        _.extend(Backbone.View.prototype, {
//            // Example of how to extend the Backbone.View object
//            getId: function() { return this.$el.selector.replace('#', '') }
//        });


        mainNav.init();

        return {
            init: function(){
                console.info('App module initiated')
            }
        }
    }
);
