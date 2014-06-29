(function(){
Template.__define__("Header", (function() {
  var self = this;
  var template = this;
  return HTML.Raw('<nav class="header navbar navbar-default" role="navigation">\n        <div class="container-fluid">\n            <!-- Brand and toggle get grouped for better mobile display -->\n            <div class="navbar-header">\n                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n                    <span class="sr-only">Toggle navigation</span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                    <span class="icon-bar"></span>\n                </button>\n                <a class="navbar-brand" href="/"><img src="./showcharts_logo.png" alt=""></a>\n            </div>\n        </div>\n\n        <ul class="nav navbar-nav navbar-right">\n            <li class=""><img src="fb.png" id="fbLogin" class="icon"></li>\n            <li class=""><img src="g+.png" id="gPlusLogin" class="icon"></li>\n            <li class=""><img src="tw.png" id="twLogin" class="icon"></li>\n        </ul>\n    </nav>');
}));

})();
