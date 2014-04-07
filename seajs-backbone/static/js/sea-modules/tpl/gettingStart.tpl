<input type="text" id="input" size="50" value="<%=text%>"/>
<p>param1=<%=param1%></p>
<p>param2=<%=param2%></p>
<h1>起步</h1>
<p>简要介绍Bootstrap，以及如何下载、使用，基本模版和案例，等等。</p>
<a href="#">去首页</a>

<table class="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
           <% _.each(list,function(o){ %>
             <tr>
                 <td><button class="btn-"></button></td>
                 <td><%=o.firstname%></td>
                 <td><%=o.lastname%></td>
                 <td><%=o.username%></td>
             </tr>
           <% }) %>
        </tbody>
      </table>