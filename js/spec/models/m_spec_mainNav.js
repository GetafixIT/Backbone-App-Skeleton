define(['model/m_mainNav', 'jasmine'], function(MainNav) {

    var model, collection;

    describe('Model :: Check main nav model', function() {

        beforeEach(function() {
            model = new MainNav.Model({
                name: 'TestNavItem',
                url: 'http://www.test.com/',
                title: 'Test title',
                id: 'testId',
                selected: true
            });
            collection = new MainNav.Collection;
        });

        it("Has a 'name' property equal to 'TestNavItem'", function() {
            expect(model.get('name')).toEqual('TestNavItem');
        });

        it("Has a 'url' property equal to 'http://www.test.com/'", function() {
            expect(model.get('url')).toEqual('http://www.test.com/');
        });

        it("Has a 'title' property equal to 'Test title'", function() {
            expect(model.get('title')).toEqual('Test title');
        });

        it("Has an 'id' property equal to 'testId'", function() {
            expect(model.get('id')).toEqual('testId');
        });

        it("Has an 'selected' property equal to true", function() {
            expect(model.get('selected')).toEqual(true);
        });

    });
	
});