define(function (require, exports, module) {
    "use strict";
    var $ = require('$'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        M = require('../model/M_user');
    var C = Backbone.Collection.extend({
        url:'/seajs-backbone/static/js/sea-modules/data/userlist.json',
        model:M
    })
    module.exports = C;
});