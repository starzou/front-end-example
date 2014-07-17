define(function(require) {
    var me = {};
    me.name = 'module1';
    me.version = '1.0.1';
    me.loadTime = new Date().getTime();
    me.say = function() {
        console.log("name: %s, version: %s, loadTime:%s", this.name, this.version, this.loadTime);
    }
    var module2 = require('module2');
    console.log("module2:", module2);
    module2.say();
    me.module2 = module2;

    //  var tpl1 = require('text!tpl1.html');
    //  console.log("tpl1.html : ", tpl1);

    return me;
});

//define(['module2'], function(module2) {
//  var me = {};
//  me.name = 'module1';
//  me.version = '1.0.1';
//  me.loadTime = new Date().getTime();
//  me.say = function() {
//      console.log("name: %s, version: %s, loadTime:%s", this.name, this.version, this.loadTime);
//  }
//
//  console.log("module2:", module2);
//  module2.say();
//  return me;
//});
