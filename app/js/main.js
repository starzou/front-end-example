console.log('main.js loaded...');

require.config({
    paths : {
        'text' : '../lib/requirejs/text',
        'jquery' : '../lib/jquery/jquery'
    }
});

require(['module1'], function(m1) {
    console.log('module1:', m1);
    m1.say();
});
