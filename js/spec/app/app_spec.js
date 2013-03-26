define(['jasmine'], function() {

    var view;

    describe('App :: Check application dependencies are loaded', function() {

        it('UnderscoreJS library to be loaded', function() {
            expect(_).toBeDefined();
        });

        it('ZeptoJS library to be loaded', function() {
            expect($).toBeDefined();
        });

        it('BackboneJS library to be loaded', function() {
            expect($).toBeDefined();
        });

        it('EJS library to be loaded', function() {
            expect(EJS).toBeDefined();
        });


        describe('Backbone view extensions have been added', function() {

            beforeEach(function(){
                var BaseView = Backbone.View.extend({});
                view = new BaseView;
            });

            it("Backbone view object contains a 'insertRoot' function", function() {
                expect(view.insertRoot).toBeDefined();
            });

            it("Backbone view object contains a 'close' function", function() {
                expect(view.close).toBeDefined();
            });

        });


    });



});