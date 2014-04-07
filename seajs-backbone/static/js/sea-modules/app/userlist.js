define(function (require, exports, module) {
    "use strict";
    var $ = require('$'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        M_user = require('../model/M_user'),
        C_collection = require('../collection/C_userlist'),
        V_user = require('../view/V_user'),
        V_userlist = require('../view/V_userlist')
    return function(){
//        $.getJson({
//            url:'../data/userlist.json'
//        }).done(function(data){
//                var list = new C_collection();
//
//            })
        new V_userlist(new C_collection());
    }
});