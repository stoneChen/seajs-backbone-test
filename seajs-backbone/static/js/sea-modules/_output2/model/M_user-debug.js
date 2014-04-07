define("/seajs-backbone/static/js/sea-modules/_output2/model/M_user-debug", [ "jquery/jquery/1.7.2/jquery-debug", "gallery/underscore/1.5.2/underscore-debug", "gallery/backbone/1.1.0/backbone-debug", "$-debug" ], function(require, exports, module) {
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
