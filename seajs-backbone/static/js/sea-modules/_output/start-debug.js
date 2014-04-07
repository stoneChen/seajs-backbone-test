define("_output/start-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug" ], function(require, exports, module) {
    "use strict";
    debugger;
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug");
    var $navLis = $("#nav li");
    $navLis.click(function() {
        $navLis.removeClass("active");
        $(this).addClass("active");
    });
    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "home",
            //            ':module?:params': 'loadModule',//必须要有问号//([^/]+)(?:\?)?([^/]+)    ([^/]+)(?:\?([^/]+))?
            "*error": "errRouter"
        },
        errRouter: function(action) {
            console.error("error router:" + action);
        },
        home: function() {
            this.loadModule("index");
        },
        loadModule: function(md, params) {
            //            debugger;
            var con = {};
            if (params) {
                params.replace(/(\w+)=(\w+)/g, function(a, b, c) {
                    b && (con[b] = c);
                });
            } else {
                con = params;
            }
            //加载module目录下对应的模块
            require.async([ "./app", md ].join("/"), function(cb) {
                if (cb) {
                    cb(con);
                } else {
                    console.error("模塊加載失敗");
                }
            });
        }
    });
    var ar = new AppRouter();
    ar.route(/^([^/]+?)(\?([^/]+))?$/, function(a, b, c) {
        //可以没有问号
        this.loadModule(a, c);
    });
    Backbone.history.start();
    module.exports = null;
});
