define(function() {
    var me = {};
    me.name = 'module2';
    me.version = '2.0.1';
    me.loadTime = new Date().getTime();
    me.say = function() {
        console.log("name: %s, version: %s, loadTime:%s", this.name, this.version, this.loadTime);
    }
    return me;
});
