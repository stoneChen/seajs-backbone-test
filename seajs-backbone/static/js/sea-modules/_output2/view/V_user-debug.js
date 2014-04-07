define("/seajs-backbone/static/js/sea-modules/_output2/view/V_user-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug", "../tpl/user-debug.tpl" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), tpl = require("../tpl/user-debug.tpl");
    var count = 1;
    var V = Backbone.View.extend({
        tagName: "tr",
        //        el:$('<tr id="tr'+ (count++) +'"></tr>'),
        events: {
            mouseover: "over"
        },
        className: "list-item" + count++,
        tpl: _.template(tpl),
        initialize: function() {},
        over: function(e) {
            var $el = $(e.currentTarget);
            $el.css("background", "#00aeef");
            console.log("00aeef");
        },
        render: function() {
            var m = this.model;
            this.$el.html(this.tpl({
                firstname: m.get("firstname"),
                lastname: m.get("lastname"),
                username: m.get("username")
            }));
            return this;
        }
    });
    module.exports = V;
});

define("/seajs-backbone/static/js/sea-modules/_output2/tpl/user-debug.tpl", [], "<td>#</td>\n<td><%=firstname%></td>\n<td><%=lastname%></td>\n<td><%=username%></td>");
