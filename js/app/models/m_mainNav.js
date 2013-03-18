define(['backbone-min'], function() {

    var MenuItem = Backbone.Model.extend({
        defaults: {
            name: 'Unspecified',
            url: '#',
            title: 'Unspecified',
            id: 'Unspecified',
            selected: false
        },
        initialize: function(){

            this.on("change:selected", function(model){
                var selected = model.get("selected");
                if(selected){
                    var name = model.get("name");
                    console.log(name + '...  add some tracking here?!');
                }
            });

        }
    });

    var MenuItems = Backbone.Collection.extend({
        model: MenuItem,
        initialize: function(){

            this.on("change:selected", function(model){

                _.each(this.collection.models, function(value, key, list){
                    var sel = value.get('id') == e.target.parentNode.id ? true : false;
                    value.set('selected', sel);
                });

            });

        }
    });

    return {
        Model: MenuItem,
        Collection: MenuItems
    }
});