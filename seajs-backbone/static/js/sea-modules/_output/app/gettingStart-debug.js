define("_output/app/gettingStart-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug", "../model/M_gettingStart-debug", "../view/V_gettingStart-debug", "../tpl/gettingStart-debug.tpl" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), M_getttingStart = require("../model/M_gettingStart-debug"), V_getttingStart = require("../view/V_gettingStart-debug");
    return function(params) {
        var mGetttingStart = new M_getttingStart(params);
        mGetttingStart.fetch({
            success: function(model) {
                var vGetttingStart = new V_getttingStart({
                    model: mGetttingStart
                });
                $("#content").html(vGetttingStart.render().el);
            }
        });
    };
});

define("_output/model/M_gettingStart-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug");
    var M_getttingStart = Backbone.Model.extend({
        url: "/seajs-backbone/static/js/sea-modules/data/input.json",
        defaults: {
            text: "这是一段文本"
        },
        initialize: function() {}
    });
    module.exports = M_getttingStart;
});

define("_output/view/V_gettingStart-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), tpl = require("_output/tpl/gettingStart-debug.tpl");
    var V_gettingStart = Backbone.View.extend({
        el: $('<div class="container gettingStart"></div>'),
        tpl: _.template(tpl),
        initialize: function() {
            this.model.bind("change:name", this.render, this);
            this.model.bind("change:list", this.render, this);
        },
        render: function() {
            var m = this.model;
            this.$el.html(this.tpl({
                text: m.get("text"),
                param1: m.get("param1"),
                param2: m.get("param2"),
                list: m.get("list")
            }));
            return this;
        }
    });
    module.exports = V_gettingStart;
});

define("_output/tpl/gettingStart-debug.tpl", [], '<input type="text" id="input" size="50" value="<%=text%>"/>\n<p>param1=<%=param1%></p>\n<p>param2=<%=param2%></p>\n<h1>起步</h1>\n<p>简要介绍Bootstrap，以及如何下载、使用，基本模版和案例，等等。</p>\n<a href="#">去首页</a>\n\n<table class="table table-bordered">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n        </thead>\n        <tbody>\n           <% _.each(list,function(o){ %>\n             <tr>\n                 <td><button class="btn-"></button></td>\n                 <td><%=o.firstname%></td>\n                 <td><%=o.lastname%></td>\n                 <td><%=o.username%></td>\n             </tr>\n           <% }) %>\n        </tbody>\n      </table>');
