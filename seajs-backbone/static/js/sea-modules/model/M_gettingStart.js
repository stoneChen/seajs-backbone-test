define(function (require, exports, module) {
    "use strict";
    var $ = require('$'),
        _ = require('underscore'),
        Backbone = require('backbone');
    var M_getttingStart = Backbone.Model.extend({
        url:'/seajs-backbone/static/js/sea-modules/data/input.json',
        defaults:{
            text:'这是一段文本'
        },
        initialize:function(){
        }
    });
    module.exports = M_getttingStart;
});