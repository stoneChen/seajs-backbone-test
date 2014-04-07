define(function (require, exports, module) {
    "use strict";
    var $ = require('$'),
        _ = require('underscore'),
        Backbone = require('backbone');
    var M = Backbone.Model.extend({
        defaults:{
            firstname:'',
            lastname:'',
            username:''
        }
    })
    module.exports = M;
});