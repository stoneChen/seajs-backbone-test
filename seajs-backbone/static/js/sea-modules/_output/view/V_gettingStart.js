define("_output/view/V_gettingStart",["jquery/jquery/1.7.2/jquery","gallery/underscore/1.5.2/underscore","gallery/backbone/1.1.0/backbone","$","../tpl/gettingStart.tpl"],function(a,b,c){"use strict";var d=a("jquery/jquery/1.7.2/jquery"),e=a("gallery/underscore/1.5.2/underscore"),f=a("gallery/backbone/1.1.0/backbone"),g=a("../tpl/gettingStart.tpl"),h=f.View.extend({el:d('<div class="container gettingStart"></div>'),tpl:e.template(g),initialize:function(){this.model.bind("change:name",this.render,this),this.model.bind("change:list",this.render,this)},render:function(){var a=this.model;return this.$el.html(this.tpl({text:a.get("text"),param1:a.get("param1"),param2:a.get("param2"),list:a.get("list")})),this}});c.exports=h}),define("_output/tpl/gettingStart.tpl",[],'<input type="text" id="input" size="50" value="<%=text%>"/>\n<p>param1=<%=param1%></p>\n<p>param2=<%=param2%></p>\n<h1>起步</h1>\n<p>简要介绍Bootstrap，以及如何下载、使用，基本模版和案例，等等。</p>\n<a href="#">去首页</a>\n\n<table class="table table-bordered">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>First Name</th>\n            <th>Last Name</th>\n            <th>Username</th>\n          </tr>\n        </thead>\n        <tbody>\n           <% _.each(list,function(o){ %>\n             <tr>\n                 <td><button class="btn-"></button></td>\n                 <td><%=o.firstname%></td>\n                 <td><%=o.lastname%></td>\n                 <td><%=o.username%></td>\n             </tr>\n           <% }) %>\n        </tbody>\n      </table>');