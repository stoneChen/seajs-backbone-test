define("_output/app/userlist-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug", "../model/M_user-debug", "../collection/C_userlist-debug", "../view/V_user-debug", "../tpl/user-debug.tpl", "../view/V_userlist-debug", "../tpl/userlist-debug.tpl" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), M_user = require("../model/M_user-debug"), C_collection = require("../collection/C_userlist-debug"), V_user = require("../view/V_user-debug"), V_userlist = require("../view/V_userlist-debug");
    return function() {
        //        $.getJson({
        //            url:'../data/userlist.json'
        //        }).done(function(data){
        //                var list = new C_collection();
        //
        //            })
        new V_userlist(new C_collection());
    };
});

define("_output/model/M_user-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug");
    var M = Backbone.Model.extend({
        defaults: {
            firstname: "",
            lastname: "",
            username: ""
        }
    });
    module.exports = M;
});

define("_output/collection/C_userlist-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug", "_output/model/M_user-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), M = require("_output/model/M_user-debug");
    var C = Backbone.Collection.extend({
        url: "/seajs-backbone/static/js/sea-modules/data/userlist.json",
        model: M
    });
    module.exports = C;
});

define("_output/view/V_user-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), tpl = require("_output/tpl/user-debug.tpl");
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

define("_output/tpl/user-debug.tpl", [], "<td>#</td>\n<td><%=firstname%></td>\n<td><%=lastname%></td>\n<td><%=username%></td>");

define("_output/view/V_userlist-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug", "_output/view/V_user-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), tpl = require("_output/tpl/userlist-debug.tpl"), V_user = require("_output/view/V_user-debug");
    var V = Backbone.View.extend({
        el: $('<div class="container"></div>'),
        tpl: _.template(tpl),
        initialize: function(list) {
            var self = this;
            this.collection = list;
            this.collection.bind("add", this.addOne, this);
            this.$el.html(this.tpl());
            self.render();
            this.collection.fetch({
                success: function() {}
            });
        },
        render: function() {
            $("#content").html(this.el);
        },
        addOne: function(user) {
            var view = new V_user({
                model: user
            });
            var $tbody = this.$("tbody"), html1 = $tbody.html(), el = view.render().el, html2 = el.outerHTML;
            $tbody.append(el);
        }
    });
    module.exports = V;
});

define("_output/tpl/userlist-debug.tpl", [], '<table class="table table-bordered">\n    <thead>\n    <tr>\n        <th>#</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Username</th>\n    </tr>\n    </thead>\n    <tbody>\n    </tbody>\n</table>');
