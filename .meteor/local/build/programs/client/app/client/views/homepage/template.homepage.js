(function(){
Template.__define__("Homepage", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "jumbotron col-lg-offset-1 col-lg-10"
  }, HTML.Raw('\n\n            <div class="row">\n                <div class="col-lg-8 col-lg-offset-2">\n                    <div class="container-fluid">\n                        <img class="img-responsive" src="logoshowcharts.png" alt="">\n                    </div>\n                </div>\n            </div>\n\n            <hr>\n\n            <h3>\n                Take the noice out of business analytics.\n            </h3>\n\n            <hr>\n\n            <div class="row">\n                <div class="col-lg-4 text-center col-lg-offset-4">\n\n                    <form class="form-inline" role="">\n\n                        <div class="form-group">\n                            <input type="email" class="form-control" id="email" placeholder="Enter email">\n                        </div>\n\n                        <button id="signup" class="btn btn-default">Sign up</button>\n                    </form>\n\n\n                </div>\n            </div>\n\n            '), HTML.DIV({
    style: "height: 30px",
    "class": "row"
  }, "\n                ", HTML.DIV({
    "class": "col-lg-6 col-lg-offset-3"
  }, "\n                    ", Spacebars.include(self.lookupTemplate("notifications")), "\n                "), "\n            "), "\n\n        "), HTML.Raw("\n        <br>\n    "));
}));

})();
