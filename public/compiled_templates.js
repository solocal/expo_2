define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("content", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div data-role=\"content\">\n\n    ";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n";
  return buffer;
  }));

Handlebars.registerPartial("footer", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n<div data-role=\"footer\" data-theme=\"a\">\n    <h1>Massachusetts Institute of Technology</h1>\n</div><!-- /footer -->\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.showFooter, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }));

Handlebars.registerPartial("header", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n<div data-role=\"header\" class=\"nav-special\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"a\">\n    <h1>147th Commencement</h1>\n    <div data-role=\"navbar\" class=\"nav-special\" data-theme=\"a\">\n        <ul>\n            <li><a href=\"index.html\" data-transition=\"slide\" id=\"home\" data-icon=\"custom\" data-theme=\"b\"></a></li>\n        </ul>\n    </div><!-- /navbar -->\n</div><!-- /header -->\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.showHeader, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }));

Handlebars.registerPartial("page", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = self.invokePartial(partials.header, 'header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = self.invokePartial(partials.content, 'content', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.debug) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.debug; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.debug) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = self.invokePartial(partials.footer, 'footer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<script>\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n    ga('create', 'UA-40822526-1', 'solocal.mobi');\n    ga('send', 'pageview');\n\n</script>\n";
  return buffer;
  }));

Handlebars.registerPartial("popup", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p align=\"center\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <button data-role=\"button\" data-inline=\"true\" data-rel=\"back\" data-theme=\"c\" class=\"button-cancel\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.cancel)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <button data-role=\"button\" data-inline=\"true\" data-rel=\"back\" data-transition=\"flow\" data-theme=\"b\" class=\"button-confirm\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n    ";
  return buffer;
  }

  buffer += "<div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\" data-add-back-btn=\"false\">\n    <h3 align=\"center\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div data-role=\"content\" data-theme=\"d\" class=\"ui-corner-bottom ui-content\">\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.message, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <br/>\n\n    <div style=\"text-align:center\">\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.cancel), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.confirm), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    </div>\n\n</div>";
  return buffer;
  }));

this["Handlebars"]["templates"]["2013.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "\r\n    <!-- Begin id socialpanel -->\r\n    <div data-role=\"panel\" id=\"socialpanel\" data-position=\"right\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n        <div class=\"panel-content\">\r\n            <br>\r\n            <ul>\r\n                <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/facebook.svg\" alt=\"Facebook\">Facebook</a></li>\r\n                <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/google.svg\" alt=\"Google+\">Google+</a></li>\r\n                <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/linkedin.svg\" alt=\"LinkedIn\">LinkedIn</a></li>\r\n                <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/pinterest.svg\" alt=\"Pinterest\">Pinterest</a></li>\r\n                <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/twitter.svg\" alt=\"Twitter\">Twitter</a></li>\r\n\r\n\r\n            </ul>\r\n\r\n        </div><!-- /panel-content -->\r\n    </div><!-- /menupanel -->\r\n\r\n    <!-- Begin HEADER -->\r\n    <div data-role=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"c\">\r\n        <h1>2013 - Michael Uzquiano</h1>\r\n        <!-- Begin NavBar -->\r\n        <div data-role=\"navbar\" class=\"nav-special-2\" data-grid=\"c\" data-theme=\"c\">\r\n            <ul>\r\n                <li><a href=\"directory.html\" data-transition=\"slide\" id=\"back1\" data-icon=\"custom\" data-theme=\"a\">Directory</a></li>\r\n                <li><a href=\"#popupOfficers\" data-rel=\"popup\" data-transition=\"slidedown\" data-position-to=\"window\" data-role=\"button\" id=\"officers\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">Class</a></li>\r\n                <li><a href=\"#\" data-role=\"button\" id=\"photos3\" data-icon=\"custom\" data-theme=\"a\">Photos</a></li>\r\n                <li><a href=\"#socialpanel\" data-role=\"button\" id=\"social\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">Social</a></li>\r\n            </ul>\r\n        </div><!-- /navbar -->\r\n    </div><!-- /header -->\r\n\r\n    <div data-role=\"content\">\r\n\r\n        <div class=\"gn-1\"><h2>Class of 2013</h2></div>\r\n\r\n        <div class=\"gn-5\"><img src=\"photos/bagpipes.jpg\" alt=\"Person\"></div>\r\n        <br>\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-theme=\"d\" data-divider-theme=\"a\">\r\n\r\n            <li data-role=\"list-divider\">2013<span class=\"ui-li-count\">4,234</span></li>\r\n\r\n            <li>Graduate 1</li>\r\n            <li>Graduate 2</li>\r\n            <li>Graduate 3</li>\r\n            <li>Graduate 4</li>\r\n            <li>Graduate 5</li>\r\n            <li>Graduate 6</li>\r\n            <li>Graduate 7</li>\r\n            <li>Graduate 8</li>\r\n            <li>Graduate 9</li>\r\n            <li>Graduate 10</li>\r\n            <li>Graduate 11</li>\r\n            <li>Graduate 12</li>\r\n            <li>Graduate 13</li>\r\n            <li>Graduate 14</li>\r\n            <li>Graduate 15</li>\r\n            <li>Graduate 16</li>\r\n            <li>Graduate 17</li>\r\n            <li>Graduate 18</li>\r\n            <li>Graduate 19</li>\r\n            <li>Graduate 20</li>\r\n            <li>Graduate 21</li>\r\n            <li>Graduate 22</li>\r\n            <li>Graduate 23</li>\r\n            <li>Graduate 24</li>\r\n            <li>Graduate 25</li>\r\n            <li>Graduate 26</li>\r\n            <li>Graduate 27</li>\r\n            <li>Graduate 28</li>\r\n            <li>Graduate 29</li>\r\n            <li>Graduate 30</li>\r\n\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <div data-role=\"popup\" id=\"popupOfficers\" data-theme=\"a\" style=\"max-width: 400px; min-width: 275px;\" class=\"ui-corner-all\">\r\n        <div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\">\r\n            <h1>2013 Officers</h1>\r\n        </div>\r\n\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-theme=\"d\" data-divider-theme=\"a\">\r\n\r\n            <li><a href=\"#\" data-transition=\"slide\">Janet Doe, <em>Chair</em></a></li>\r\n            <li><a href=\"#\" data-transition=\"slide\">Bob Doe, <em>Co-Chair</em></a></li>\r\n            <li><a href=\"#\" data-transition=\"slide\">Marilyn Doe, <em>Secretary</em></a></li>\r\n            <li><a href=\"#\" data-transition=\"slide\">Oscar Doe, <em>Treasurer</em></a></li>\r\n        </ul>\r\n    </div>\r\n\r\n";
  });

this["Handlebars"]["templates"]["account.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- Begin HEADER -->\r\n<div data-role=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"c\">\r\n    <h1>Michael Uzquiano</h1>\r\n    <!-- Begin NavBar -->\r\n    <div data-role=\"navbar\" class=\"nav-special-2\" data-grid=\"c\" data-theme=\"c\">\r\n        <ul>\r\n            <li><a href=\"news.html\" data-role=\"button\" data-transition=\"slide\" id=\"tools\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">News</a></li>\r\n            <li><a href=\"directory.html\" data-role=\"button\" data-transition=\"slide\" id=\"directory\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">Directory</a></li>\r\n            <li><a href=\"#\" data-role=\"button\" id=\"logout\" data-icon=\"custom\" data-theme=\"a\">My Tools</a></li>\r\n            <li><a href=\"profile.html\" data-role=\"button\"  data-transition=\"slide\" id=\"profile2\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">My Profile</a></li>\r\n        </ul>\r\n    </div><!-- /navbar -->\r\n</div><!-- /header -->\r\n\r\n<!-- Begin CONTENT -->\r\n<div data-role=\"content\">\r\n    <br>\r\n\r\n    <div class=\"gn-5\"><img src=\"img/alumni1.svg\"  alt=\"Alumni\" ></div>\r\n    <br>\r\n    <br>\r\n    <div class=\"gn-6\"><img src=\"img/global.svg\"  alt=\"My Connection\" ></div>\r\n    <br>\r\n\r\n\r\n\r\n\r\n\r\n</div><!-- /content -->";
  });

this["Handlebars"]["templates"]["directory.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "    <div data-role=\"header\" class=\"nav-special\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"b\">\r\n        <h1>Michael Uzquiano</h1>\r\n\r\n        <div data-role=\"navbar\" class=\"nav-special\" data-theme=\"b\">\r\n            <ul>\r\n                <li><a href=\"account.html\" data-transition=\"slide\" id=\"back1\" data-icon=\"custom\" data-theme=\"a\"></a></li>\r\n            </ul>\r\n        </div><!-- /navbar -->\r\n    </div><!-- /header -->\r\n\r\n    <div data-role=\"content\">\r\n\r\n\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-theme=\"d\" data-divider-theme=\"a\">\r\n\r\n            <li data-role=\"list-divider\">Class Directory<span class=\"ui-li-count\">30</span></li>\r\n\r\n            <li class=\"current\"><a href=\"2013.html\" data-transition=\"slide\">2013</a></li>\r\n            <li>2012</li>\r\n            <li>2011</li>\r\n            <li>2010</li>\r\n            <li>2009</li>\r\n            <li>2008</li>\r\n            <li>2007</li>\r\n            <li>2006</li>\r\n            <li>2005</li>\r\n            <li>2004</li>\r\n            <li>2003</li>\r\n            <li>2002</li>\r\n            <li>2001</li>\r\n            <li>2000</li>\r\n            <li>1999</li>\r\n            <li>1998</li>\r\n            <li>1997</li>\r\n            <li>1996</li>\r\n            <li>1995</li>\r\n            <li>1994</li>\r\n            <li>1993</li>\r\n            <li>1992</li>\r\n            <li>1991</li>\r\n            <li>1990</li>\r\n            <li>1980-1989</li>\r\n            <li>1970-1979</li>\r\n            <li>1960-1969</li>\r\n            <li>1950-1959</li>\r\n            <li>1940-1949</li>\r\n            <li>1930-1939</li>\r\n\r\n        </ul>\r\n\r\n    </div>\r\n";
  });

this["Handlebars"]["templates"]["home.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- Begin id menupanel -->\r\n<div data-role=\"panel\" id=\"menupanel\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/info2.svg\" alt=\"Program D\">About the Association</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/network.svg\" alt=\"Program D\">Networks</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/benefits.svg\" alt=\"Program C\">Benefits and Services</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/volunteer.svg\" alt=\"Chancellor\">Volunteering</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/learn.svg\" alt=\"Chancellor\">Learning</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/travel.svg\" alt=\"Board\">Travel Club</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/news.svg\" alt=\"Speaker D\">News and Events</a></li>\r\n\r\n        </ul>\r\n\r\n        <h4><i>Contact Us</i></h4>\r\n\r\n        <div class=\"gn-5\">\r\n            <a href=\"tel:1+910-691-9838\" data-role=\"button\" data-icon=\"phone\" data-mini=\"true\" data-theme=\"b\" >Southern Alumni</a>\r\n        </div>\r\n\r\n    </div><!-- /panel-content -->\r\n</div><!-- /menupanel -->\r\n\r\n<!-- Begin id gradpanel -->\r\n<div data-role=\"panel\" id=\"gradpanel\" data-position=\"right\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/blog.svg\" alt=\"Degrees\">Daily Blog</a></li>\r\n        </ul>\r\n\r\n\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/facebook.svg\" alt=\"Facebook\">Facebook</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/google.svg\" alt=\"Google+\">Google+</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/linkedin.svg\" alt=\"LinkedIn\">LinkedIn</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/pinterest.svg\" alt=\"Pinterest\">Pinterest</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/twitter.svg\" alt=\"Twitter\">Twitter</a></li>\r\n\r\n        </ul>\r\n\r\n        <br>\r\n    </div>\r\n</div><!-- /infopanel -->\r\n\r\n<!-- Begin id infopanel -->\r\n<div data-role=\"panel\" id=\"infopanel\" data-position=\"right\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/events.svg\" alt=\"Events\">Tech Reunions</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/archives.svg\" alt=\"Cmte\">View Archives</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/board.svg\" alt=\"Credits\">Current Students</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/parents.svg\" alt=\"Credits\">Parent's Association</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/holder.svg\" alt=\"Privacy\">Giving to Southern</a></li>\r\n        </ul>\r\n\r\n        <h4><i>&copy; 2013</i></h4>\r\n        <div class=\"gn-5\">\r\n            <a href=\"http://www.solocal.mobi\" data-role=\"button\" data-icon=\"page\" data-mini=\"true\" data-theme=\"a\" >Solocal, Inc.</a>\r\n            <a href=\"tel:1+910-691-9838\" data-role=\"button\" data-icon=\"phone\" data-mini=\"true\" data-theme=\"a\" >Call</a>\r\n            <a href=\"mailto:smann@solocal.mobi\" data-role=\"button\" data-icon=\"email\" data-mini=\"true\" data-theme=\"a\" >Email</a>\r\n        </div>\r\n\r\n    </div>\r\n</div><!-- /infopanel -->\r\n\r\n<!-- Begin HEADER -->\r\n<div data-role=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"none\">\r\n\r\n    <!-- Begin NavBar -->\r\n    <div data-role=\"navbar\" class=\"nav-special\" data-grid=\"b\" data-theme=\"none\">\r\n        <ul>\r\n            <li><a href=\"#menupanel\" data-role=\"button\" id=\"menutop2\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\"></a></li>\r\n            <li><a href=\"#gradpanel\" data-role=\"button\" id=\"social\" data-icon=\"custom\" data-theme=\"a\"></a></li>\r\n            <li><a href=\"#infopanel\" data-role=\"button\" id=\"info1\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\"></a></li>\r\n        </ul>\r\n    </div><!-- /navbar -->\r\n</div><!-- /header -->\r\n\r\n<!-- Begin CONTENT -->\r\n<div data-role=\"content\">\r\n    <br>\r\n\r\n    <div class=\"gn-5\"><img src=\"img/alumni1.svg\"  alt=\"Alumni\" ></div>\r\n\r\n    <br>\r\n    <br>\r\n\r\n    <form action=\"\" method=\"\" data-mini=\"true\" class=\"ui-body ui-body-b ui-corner-all\">\r\n\r\n        <div style=\"padding:10px 20px;\">\r\n\r\n            <div class=\"gn-2\"><h4>Please Login</h4></div>\r\n\r\n            <label for=\"un\" class=\"ui-hidden-accessible\">Username:</label>\r\n            <input type=\"text\" name=\"user\" id=\"un\" value=\"\" placeholder=\"username\" data-theme=\"d\" />\r\n\r\n            <label for=\"pw\" class=\"ui-hidden-accessible\">Password:</label>\r\n            <input type=\"password\" name=\"pass\" id=\"pw\" value=\"\" placeholder=\"password\" data-theme=\"d\" />\r\n\r\n            <a href=\"account.html\" data-role=\"button\" data-theme=\"b\" data-mini=\"true\">Login</a>\r\n\r\n            <div class=\"center\"><p><i>Not Registered yet?</i></p></div>\r\n            <a href=\"#\" data-role=\"button\" data-mini=\"true\" data-theme=\"a\">Create New Account</a>\r\n        </div>\r\n\r\n    </form>\r\n\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n\r\n    <div data-role=\"popup\" id=\"popupGlance\" data-theme=\"a\" style=\"max-width: 400px; min-width: 275px;\" class=\"ui-corner-all\">\r\n        <div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\">\r\n            <h1>At a Glance</h1>\r\n        </div>\r\n\r\n        <div data-role=\"content\" data-theme=\"d\" class=\"ui-corner-bottom ui-content\">\r\n            <div class=\"gn-2\"><h5>Doctoral Hooding</h5></div>\r\n            <div class=\"glance\">\r\n                <ul>\r\n                    <li><strong>Date:</strong> June 6, 2013</li>\r\n                    <li><strong>Location:</strong> Rockwell Cage</li>\r\n                    <li><strong>Time:</strong> 11:30 AM to 1:30 PM</li>\r\n                    <li><strong>Admission Begins:</strong> 10:30 AM</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"gn-2\"><h5>Commencement Ceremony</h5></div>\r\n            <div class=\"glance\">\r\n                <ul>\r\n                    <li><strong>Date:</strong> June 7, 2013</li>\r\n                    <li><strong>Location:</strong> Killian Court</li>\r\n                    <li><strong>Time:</strong> 10:00 AM</li>\r\n                    <li><strong>Admission Begins:</strong> 7:30 AM</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"gn-5\">\r\n                <a href=\"#\" data-role=\"button\" data-rel=\"back\" data-icon=\"delete\" data-mini=\"true\" data-theme=\"a\" >Close</a>\r\n            </div>\r\n\r\n        </div><!-- /popcontent -->\r\n\r\n    </div><!-- /popup -->\r\n\r\n</div><!-- /content -->";
  });

this["Handlebars"]["templates"]["news.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- Begin id socialpanel -->\r\n<div data-role=\"panel\" id=\"socialpanel\" data-position=\"right\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/facebook.svg\" alt=\"Facebook\">Facebook</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/google.svg\" alt=\"Google+\">Google+</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/linkedin.svg\" alt=\"LinkedIn\">LinkedIn</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/pinterest.svg\" alt=\"Pinterest\">Pinterest</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/twitter.svg\" alt=\"Twitter\">Twitter</a></li>\r\n\r\n\r\n        </ul>\r\n\r\n    </div><!-- /panel-content -->\r\n</div><!-- /menupanel -->\r\n\r\n<!-- Begin HEADER -->\r\n<div data-role=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"c\">\r\n    <h1>2013 - Michael Uzquiano</h1>\r\n    <!-- Begin NavBar -->\r\n    <div data-role=\"navbar\" class=\"nav-special-2\" data-grid=\"c\" data-theme=\"c\">\r\n        <ul>\r\n            <li><a href=\"account.html\" data-transition=\"slide\" id=\"back1\" data-icon=\"custom\" data-theme=\"a\">Home</a></li>\r\n            <li><a href=\"#popupOfficers\" data-rel=\"popup\" data-transition=\"slidedown\" data-position-to=\"window\" data-role=\"button\" id=\"officers\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">Class</a></li>\r\n            <li><a href=\"#\" data-role=\"button\" id=\"photos3\" data-icon=\"custom\" data-theme=\"a\">Photos</a></li>\r\n            <li><a href=\"#socialpanel\" data-role=\"button\" id=\"social\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">Social</a></li>\r\n        </ul>\r\n    </div><!-- /navbar -->\r\n</div><!-- /header -->\r\n\r\n<div data-role=\"content\" class=\"news\" data-theme=\"c\">\r\n\r\n    <ul data-role=\"listview\" data-inset=\"true\" data-theme=\"d\" data-divider-theme=\"a\">\r\n\r\n        <li data-role=\"list-divider\" class=\"listheader\">Welcome to the Class of 2013!</li>\r\n\r\n        <li class=\"listitem\" data-link-uri=\"/newsitem.html\" data-node-id=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.classchair),stack1 == null || stack1 === false ? stack1 : stack1._doc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n            <h3 class=\"ui-li-heading\">From the Class Chair</h3>\r\n            <img src=\"/preview/"
    + escapeExpression(((stack1 = ((stack1 = depth0.classchair),stack1 == null || stack1 === false ? stack1 : stack1._doc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/listview?size=200\" width=\"200\" class=\"ui-li-thumb\">\r\n            <p class=\"ul-li-desc\">\r\n                <b>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.classchair),stack1 == null || stack1 === false ? stack1 : stack1.headline)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b>\r\n                <br/><br/>\r\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.classchair),stack1 == null || stack1 === false ? stack1 : stack1.body)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n            </p>\r\n        </li>\r\n\r\n        <li class=\"listitem\">\r\n            <h3 class=\"ui-li-heading\">Recent Graduates - Spotlight: "
    + escapeExpression(((stack1 = ((stack1 = depth0.spotlight),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.spotlight),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3>\r\n            <img src=\"/preview/"
    + escapeExpression(((stack1 = ((stack1 = depth0.spotlight),stack1 == null || stack1 === false ? stack1 : stack1._doc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/spotlight?size=200\" class=\"ui-li-thumb\">\r\n            <p class=\"ul-li-desc\">\r\n                "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.spotlight),stack1 == null || stack1 === false ? stack1 : stack1.about)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n                <br/>\r\n                <br/>\r\n                <b>From:</b> Atlanta, Georgia\r\n                <br/>\r\n                <b>Degree:</b> "
    + escapeExpression(((stack1 = ((stack1 = depth0.spotlight),stack1 == null || stack1 === false ? stack1 : stack1.degreeTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = ((stack1 = depth0.spotlight),stack1 == null || stack1 === false ? stack1 : stack1.schoolTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n            </p>\r\n        </li>\r\n\r\n        <li class=\"listitem\">\r\n            <h3 class=\"ui-li-heading\">Come back to the Hill</h3>\r\n            <img src=\"photos/_promotion_reunion_weekend.jpg\" class=\"ui-li-thumb\">\r\n            <p class=\"ul-li-desc\">\r\n                Join us June 5 to June 7 for a Weekend of memories, friendship, networking and enjoyment.\r\n            </p>\r\n        </li>\r\n\r\n        <li class=\"listitem\">\r\n            <h3 class=\"ui-li-heading\">Commencement</h3>\r\n            <img src=\"photos/_article_graduation.jpg\" class=\"ui-li-thumb\">\r\n            <p class=\"ul-li-desc\">\r\n                Last Sunday, the 153rd graduating class commencement was presided over\r\n                in Crocker Hall.\r\n            </p>\r\n        </li>\r\n\r\n        <li class=\"listitem\">\r\n            <h3 class=\"ui-li-heading\">Weekend Courses</h3>\r\n            <img src=\"photos/_article_continuing_education.jpg\" class=\"ui-li-thumb\">\r\n            <p class=\"ul-li-desc\">\r\n                Keep your mind sharp.  Continue your education with weekend courses\r\n                for Alumni.\r\n            </p>\r\n        </li>\r\n\r\n        <li class=\"listitem\">\r\n            <h3 class=\"ui-li-heading\">Get Involved</h3>\r\n            <img src=\"photos/_article_local_alumni_office.jpg\" class=\"ui-li-thumb\">\r\n            <p class=\"ul-li-desc\">\r\n                Get involved with your local alumni chapter!\r\n            </p>\r\n        </li>\r\n\r\n    </ul>\r\n\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["newsitem.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!-- Begin id socialpanel -->\r\n<div data-role=\"panel\" id=\"socialpanel\" data-position=\"right\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/facebook.svg\" alt=\"Facebook\">Facebook</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/google.svg\" alt=\"Google+\">Google+</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/linkedin.svg\" alt=\"LinkedIn\">LinkedIn</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/pinterest.svg\" alt=\"Pinterest\">Pinterest</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/twitter.svg\" alt=\"Twitter\">Twitter</a></li>\r\n\r\n\r\n        </ul>\r\n\r\n    </div><!-- /panel-content -->\r\n</div><!-- /menupanel -->\r\n\r\n<!-- Begin HEADER -->\r\n<div data-role=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"c\">\r\n    <h1>2013 - Michael Uzquiano</h1>\r\n    <!-- Begin NavBar -->\r\n    <div data-role=\"navbar\" class=\"nav-special-2\" data-grid=\"c\" data-theme=\"c\">\r\n        <ul>\r\n            <li><a href=\"news.html\" data-transition=\"slide\" id=\"back1\" data-icon=\"custom\" data-theme=\"a\">News</a></li>\r\n            <li><a href=\"#popupOfficers\" data-rel=\"popup\" data-transition=\"slidedown\" data-position-to=\"window\" data-role=\"button\" id=\"officers\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">Class</a></li>\r\n            <li><a href=\"#\" data-role=\"button\" id=\"photos3\" data-icon=\"custom\" data-theme=\"a\">Photos</a></li>\r\n            <li><a href=\"#socialpanel\" data-role=\"button\" id=\"social\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"a\">Social</a></li>\r\n        </ul>\r\n    </div><!-- /navbar -->\r\n</div><!-- /header -->\r\n\r\n<div data-role=\"content\" class=\"newsitem\" data-theme=\"d\">\r\n\r\n    <h2>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.newsitem),stack1 == null || stack1 === false ? stack1 : stack1.headline)),stack1 == null || stack1 === false ? stack1 : stack1['long'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n\r\n    <img src=\"/preview/"
    + escapeExpression(((stack1 = ((stack1 = depth0.newsitem),stack1 == null || stack1 === false ? stack1 : stack1._doc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/fullview?size=512\" style=\"width: 400px\">\r\n\r\n    <p>\r\n        "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.newsitem),stack1 == null || stack1 === false ? stack1 : stack1.body)),stack1 == null || stack1 === false ? stack1 : stack1['long'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n    </p>\r\n\r\n</div>\r\n";
  return buffer;
  });

this["Handlebars"]["templates"]["popup-candidate.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-role=\"popup\" data-overlay-theme=\"a\" data-theme=\"a\" style=\"max-width:400px;\" class=\"ui-corner-all\">\r\n\r\n    <div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\">\r\n        <h1 align='center'>"
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n    </div>\r\n\r\n    <div data-role=\"content\" data-theme=\"d\" class=\"ui-corner-bottom ui-content\">\r\n        <h3 class=\"ui-title\">Accomplishments:</h3>\r\n        <p style=\"white-space:normal\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.accomplishments)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n        <h3 class=\"ui-title\">Ambitions:</h3>\r\n        <p style=\"white-space:normal\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.ambitions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n        <fieldset class=\"ui-grid-a\">\r\n            <div class=\"ui-block-a\"><button type=\"submit\" data-theme=\"b\">Gifting</button></div>\r\n            <div class=\"ui-block-b\"><button type=\"submit\" data-theme=\"b\">Social</button></div>\r\n        </fieldset>\r\n        <div class=\"gn-5\">\r\n            <a href=\"#\" data-role=\"button\" data-rel=\"back\" data-icon=\"delete\" data-mini=\"true\" data-theme=\"a\" >Cancel</a>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["profile.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "    <div data-role=\"header\" class=\"nav-special\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"b\">\r\n        <h1>Michael Uzquiano</h1>\r\n\r\n        <div data-role=\"navbar\" class=\"nav-special\" data-theme=\"b\">\r\n            <ul>\r\n                <li><a href=\"account.html\" data-transition=\"slide\" id=\"back1\" data-icon=\"custom\" data-theme=\"a\"></a></li>\r\n            </ul>\r\n        </div><!-- /navbar -->\r\n    </div><!-- /header -->\r\n\r\n    <div data-role=\"content\">\r\n\r\n        <div class=\"gn-2\"><img src=\"photos/michael.jpg\" alt=\"Person\"></div>\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"d\" data-divider-theme=\"b\">\r\n\r\n            <li data-role=\"list-divider\">Class Information</li>\r\n            <li>\r\n                <p><strong>Class:</strong> 2013</p>\r\n                <p><strong>Study:</strong> School of Engineering</p>\r\n                <p><strong>Degree:</strong> Bachelor of Science</p>\r\n                <p><strong>Major:</strong> Electrical Engineering and Computer Science</p>\r\n\r\n\r\n            </li>\r\n\r\n            <li data-role=\"list-divider\">Associations</li>\r\n            <li>\r\n                <p><strong>Assistive Technology Club</strong></p>\r\n                <p><strong>ACExplore</strong></p>\r\n                <p><strong>American Red Cross</strong></p>\r\n\r\n            </li>\r\n\r\n        </ul>\r\n\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"d\" data-divider-theme=\"b\">\r\n\r\n            <li data-role=\"list-divider\">Contact Information</li>\r\n            <li>\r\n                <p><strong>123 Anywhere Ave.</strong></p>\r\n                <p><strong></strong> </p>\r\n                <p><strong>San Antonio, TX</strong></p>\r\n                <p><strong>11111-0000 </strong></p>\r\n                <br>\r\n\r\n                <fieldset class=\"ui-grid-a\">\r\n\r\n                    <div class=\"ui-block-a\"><a href=\"#\" data-role=\"button\" data-icon=\"phone\" data-mini=\"true\" data-theme=\"b\" >Call</a></div>\r\n                    <div class=\"ui-block-b\"><a href=\"#\" data-role=\"button\" data-icon=\"email\" data-mini=\"true\" data-theme=\"b\" >Email</a></div>\r\n                    <div class=\"ui-block-a\"><a href=\"#\" data-role=\"button\" data-icon=\"facebook\" data-mini=\"true\" data-theme=\"a\" >Facebook</a></div>\r\n                    <div class=\"ui-block-b\"><a href=\"#\" data-role=\"button\" data-icon=\"twitter\" data-mini=\"true\" data-theme=\"a\" >Twitter</a></div>\r\n\r\n                </fieldset>\r\n\r\n                <br>\r\n\r\n            </li>\r\n\r\n        </ul>\r\n\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"d\" data-divider-theme=\"b\">\r\n\r\n            <li data-role=\"list-divider\">Current Employment</li>\r\n            <li>\r\n                <p><strong>President</strong></p>\r\n                <p><strong>CloudCMS</strong> </p>\r\n                <p><strong>San Antonio, TX</strong></p>\r\n                <p><strong>11111-0000 </strong></p>\r\n                <br>\r\n\r\n            </li>\r\n\r\n        </ul>\r\n\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"d\" data-divider-theme=\"b\">\r\n\r\n            <li data-role=\"list-divider\">Current or Recent Project #1</li>\r\n            <li>\r\n                <p><strong></strong></p>\r\n                <p><strong></strong> </p>\r\n                <p><strong></strong></p>\r\n\r\n                <br>\r\n\r\n            </li>\r\n\r\n        </ul>\r\n\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"d\" data-divider-theme=\"b\">\r\n\r\n            <li data-role=\"list-divider\">Current or Recent Project #2</li>\r\n            <li>\r\n                <p><strong></strong></p>\r\n                <p><strong></strong> </p>\r\n                <p><strong></strong></p>\r\n\r\n                <br>\r\n\r\n            </li>\r\n\r\n        </ul>\r\n\r\n        <ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"d\" data-divider-theme=\"b\">\r\n\r\n            <li data-role=\"list-divider\">Current or Recent Project #3</li>\r\n            <li>\r\n                <p><strong></strong></p>\r\n                <p><strong></strong> </p>\r\n                <p><strong></strong></p>\r\n\r\n                <br>\r\n\r\n            </li>\r\n\r\n        </ul>\r\n\r\n    </div>\r\n\r\n";
  });

this["Handlebars"]["templates"]["school-candidates.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n<div class=\"grads\">\r\n    <h2>"
    + escapeExpression(((stack1 = ((stack1 = depth0.school),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n    <p style=\"white-space:normal\">Established "
    + escapeExpression(((stack1 = ((stack1 = depth0.school),stack1 == null || stack1 === false ? stack1 : stack1.foundationYear)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n    <p style=\"white-space:normal\"><em>Dean "
    + escapeExpression(((stack1 = ((stack1 = depth0.school),stack1 == null || stack1 === false ? stack1 : stack1.deanName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em></p>\r\n</div>\r\n\r\n<div class=\"gn-1\"><h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.degree),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3></div>\r\n<br>\r\n\r\n<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\"\r\n    data-filter-placeholder=\"Find your graduate...\" data-theme=\"c\" data-divider-theme=\"a\">\r\n\r\n    ";
  stack2 = helpers.each.call(depth0, depth0.groupedCandidates, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n</ul>\r\n\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li data-role=\"list-divider\">Architecture<span class=\"ui-li-count\">";
  if (stack1 = helpers.candidateCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.candidateCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\r\n\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.candidates, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li>\r\n        <a href=\"#\" data-rel=\"popup\" data-transition=\"slidedown\" data-candidate-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " ";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n    </li>\r\n    ";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.page) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["schools.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n<ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"c\" data-divider-theme=\"a\">\r\n\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.schools, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>\r\n\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li data-role=\"list-divider\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n\r\n        ";
  stack1 = helpers.each.call(depth0, depth0.departments, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li>\r\n            <a href=\"school-candidates.html\" data-prefetch=\"true\" data-transition=\"slide\" data-school-id=\"";
  if (stack1 = helpers.schoolId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.schoolId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-school-department-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n        </li>\r\n        ";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.page) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

return this["Handlebars"]["templates"];

});