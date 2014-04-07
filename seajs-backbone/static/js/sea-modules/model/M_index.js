define(function (require, exports, module) {
    "use strict";
    var $ = require('$'),
        _ = require('underscore'),
        Backbone = require('backbone');
    var M_index = Backbone.Model.extend({
        url:'/seajs-backbone/static/js/sea-modules/data/user.json',
        defaults:{
            name:'new friend'
        },
        initialize:function(){
        }
    });
    module.exports = M_index;
});