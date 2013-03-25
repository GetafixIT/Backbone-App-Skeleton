define(['model/m_mainNav', 'router/r_mainNav', 'backbone-min'], function(mainNav, router) {

    var MainNavView = Backbone.View.extend({
        eleId: 'mainNav_container',
        initialize: function(){
            var view = this;

            // Populates the collection with menu item models
            _.each(this.pages, function(value, key, list){
                view.collection.push(new mainNav.Model(value));
            });

            this.insertRoot('nav');
            this.render();
            router.init();
        },
        collection: new mainNav.Collection(),
        template: new EJS({url: 'js/app/templates/t_mainNav.ejs'}),
        pages: [
            {name: 'Tests', url: '#/tests', title: 'Runs the specs defined', id: 'mainNav1', selected: true}
        ],
        render: function(){
            this.template.update(this.$el[0], {menuItems: this.collection});
        },
        events: {
            "click li a": "updateSelected"
        },
        updateSelected: function(e){
            var selectedModel = this.collection.get(e.target.parentNode.id);
            selectedModel.set('selected', true);
            _.each(_.without(this.collection.models, selectedModel), function(value){
                value.set('selected', false);
            });
            this.render();
        }
    });


    return {
        init: function(){
            new MainNavView();
        }
    }

});
