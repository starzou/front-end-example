console.log('main.js loaded...');

require.config({
    paths : {
        'text' : '../lib/requirejs/text',
        'jquery' : '../lib/jquery/jquery',
        'underscore' : '../lib/backbone/underscore',
        'backbone' : '../lib/backbone/backbone'
    }
});

require(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
    console.log('module:', $);
    console.log('module:', _);
    console.log('module:', Backbone);
});
