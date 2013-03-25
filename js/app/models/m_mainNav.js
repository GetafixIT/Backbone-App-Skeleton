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
        model: MenuItem
    });

    return {
        Model: MenuItem,
        Collection: MenuItems
    }
});