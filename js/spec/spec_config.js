require(['jasmine-html'], function(jasmine){

    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;

    var htmlReporter = new jasmine.HtmlReporter();

    jasmineEnv.addReporter(htmlReporter);

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    var specs = [];

    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    loadCss('js/lib/jasmine-1.3.1/jasmine.css');

    specs.push('spec/app/app_spec');
    specs.push('spec/models/m_spec_mainNav');
    specs.push('spec/views/v_spec_mainNav');
    


    $(function(){
        require(specs, function(){
            jasmineEnv.execute();
        });
    });

});