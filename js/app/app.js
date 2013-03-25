define(['view/v_mainNav', 'backbone-min'], function(mainNav) {

        _.extend(Backbone.View.prototype, {
            // Extend the Backbone.View object
            insertRoot: function(nodeType){
                var rootEle = document.createElement(nodeType);
                rootEle.setAttribute('id', this.eleId);
                document.body.appendChild(rootEle);
                this.$el[0] = rootEle;
            },
            close: function() {
                this.$el.html('');
                this.unbind();
                if (this.onClose){
                    this.onClose();
                }
            }
        });


        mainNav.init();

        return {
            init: function(){
                console.info('App module initiated')
            }
        }
    }
);
