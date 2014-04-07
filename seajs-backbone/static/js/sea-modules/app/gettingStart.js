define(function (require, exports, module) {
    "use strict";
    var $ = require('$'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        M_getttingStart = require('../model/M_gettingStart'),
        V_getttingStart = require('../view/V_gettingStart');
    return function (params) {
        var mGetttingStart = new M_getttingStart(params);
        mGetttingStart.fetch({
            success: function (model) {
                var vGetttingStart = new V_getttingStart({
                    model: mGetttingStart
                })
                $('#content').html(vGetttingStart.render().el);
            }
        });
    }
});