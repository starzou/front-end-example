var page = require('webpage').create(), system = require('system'), url;
if (system.args.length === 1) {
    console.log('请输入URL');
    // phantom.exit();
}

url = system.args[1];
url = 'http://127.0.0.1:8020/front-end-example/jquery.html';

page.open(url, function() {
    page.render(url + '-' + new Date().getTime() + '.png');
    phantom.exit();
});
