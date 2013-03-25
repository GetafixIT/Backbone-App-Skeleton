define(['jasmine'], function(Model) {

    describe('App :: Check application dependencies are loaded', function() {

        it('Underscore to be loaded', function() {
            expect(_).toBeDefined();
        });

        it('Zepto to be loaded', function() {
            expect($).toBeDefined();
        });

        it('Backbone to be loaded', function() {
            expect($).toBeDefined();
        });

        it('EJS to be loaded', function() {
            expect(EJS).toBeDefined();
        });

    });

});