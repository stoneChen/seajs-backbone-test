define(function (require, exports, module) {
    "use strict";
    var $ = require('$'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        M_index = require('../model/M_index'),
        V_index = require('../view/V_index');


    return function () {
        var mIndex = new M_index({
            //name:'Stone'
        })
        mIndex.fetch({
            success: function (data) {
//            mIndex.set('name',data.get('name'));
                var vIndex = new V_index({
                    model: mIndex
                })
                $('#content').html(vIndex.render().el);
            }
        });
    }
});