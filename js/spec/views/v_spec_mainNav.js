define(['view/v_mainNav', 'model/m_mainNav', 'jasmine', 'backbone-min'], function(View, Model) {

    var model, view;

    describe('View :: Check main nav view', function() {



        beforeEach(function() {
            Backbone.history.stop();

            $('.bbWidget').remove();

            model = new Model.Model;
            view = new View.View;


        });

        it("A container element id was defined", function() {
            expect(view.eleId).toEqual('mainNav_container');
        });

        it("Some menu items have been defined", function() {
            expect(view.pages.length).toBeGreaterThan(0);
        });

        it("The template 'js/app/templates/t_mainNav.ejs' to be available", function() {
            expect(view.template.name).toMatch('js/app/templates/t_mainNav.ejs');
        });

        it("A root node with id 'mainNav_container' to have been inserted by the view", function() {
            expect($('#mainNav_container').length).toBeGreaterThan(0);
        });

        it("A test menu item with id 'testNavItem' to have been inserted into the root node", function() {
            expect($('#testNavItem', '#mainNav_container').length).toBeGreaterThan(0);
        });

    });

});