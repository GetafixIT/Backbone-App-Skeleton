define(['model/m_mainNav', 'router/r_mainNav', 'backbone-min'], function(mainNav, router) {

    var MainNavView = Backbone.View.extend({
        el: $("#mainNav_container"),
        initialize: function(){
            var view = this;

            // Populates the collection with menu item models
            _.each(this.pages, function(value, key, list){
                view.collection.push(new mainNav.Model(value));
            });

            this.render();
            router.init();
        },
        collection: new mainNav.Collection(),
        template: new EJS({url: 'js/app/templates/t_mainNav.ejs'}),
        pages: [
            {name: 'Home', url: '/projects/Backbone/#/', title: 'Click here for the home page', id: 'mainNav1', selected: true},
            {name: 'Page 1', url: '/projects/Backbone/#/page1', title: 'Click here for page 1', id: 'mainNav2'},
            {name: 'Page 2', url: '/projects/Backbone/#/page2', title: 'Click here for page 2', id: 'mainNav3'}
        ],
        render: function(){
            this.template.update(this.$el[0], {menuItems: this.collection});
        },
        events: {
            "click li a": "updateSelected"
        },
        updateSelected: function(e){
            this.collection.get(e.target.parentNode.id).set('selected', true)
            this.render();
        }
    });


    return {
        init: function(){
            new MainNavView();
        }
    }

});
