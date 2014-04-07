define("/seajs-backbone/static/js/sea-modules/_output2/view/V_index-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug", "../tpl/index-debug.tpl", "jquery/select2/3.4.5/select2-zh-cn-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("jquery/jquery/1.7.2/jquery-debug"), _ = require("gallery/underscore/1.5.2/underscore-debug"), Backbone = require("gallery/backbone/1.1.0/backbone-debug"), tpl = require("../tpl/index-debug.tpl");
    require("jquery/select2/3.4.5/select2-zh-cn-debug");
    require.async("select2-css-debug");
    var V_index = Backbone.View.extend({
        el: $('<div class="container"></div>'),
        events: {
            "click #getData": "getData"
        },
        tpl: _.template(tpl),
        initialize: function() {
            this.model.bind("change:name", this.render, this);
            this.model.bind("change:options", this.render, this);
        },
        render: function() {
            this.$el.html(this.tpl({
                name: this.model.get("name"),
                options: this.model.get("options")
            }));
            this.select2 = this.$("#select");
            this.select2.select2();
            return this;
        },
        getData: function() {
            var data = this.select2.select2("val");
            console.log(data);
        }
    });
    module.exports = V_index;
});

define("/seajs-backbone/static/js/sea-modules/_output2/tpl/index-debug.tpl", [], '<h1>Hello <%=name%></h1>\n<h1>Backbone</h1>\n<p class="lead">简洁、直观、强悍、移动设备优先的前端开发框架，让web开发更迅速、简单。</p>\n<a href="#gettingStart">现在就去学习</a>\n<button class="btn btn-primary" id="getData">获取数据</button>\n<select name="select" id="select" style="width:200px;">\n    <% _.each(options,function(o){ %>\n    <option value="<%=o.val%>"><%=o.title%></option>\n    <% }) %>\n</select>');
