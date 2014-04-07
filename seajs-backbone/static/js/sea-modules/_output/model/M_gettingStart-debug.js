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
