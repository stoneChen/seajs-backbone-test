<h1>Hello <%=name%></h1>
<h1>Backbone</h1>
<p class="lead">简洁、直观、强悍、移动设备优先的前端开发框架，让web开发更迅速、简单。</p>
<a href="#gettingStart">现在就去学习</a>
<button class="btn btn-primary" id="getData">获取数据</button>
<select name="select" id="select" style="width:200px;">
    <% _.each(options,function(o){ %>
    <option value="<%=o.val%>"><%=o.title%></option>
    <% }) %>
</select>