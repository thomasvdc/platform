(function(){
Template.__define__("Privacy", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("Header")), HTML.Raw('\n\n    <div class="row">\n        <div class="jumbotron col-lg-12 text-center">\n            <h1>Privacy is important. we value your privacy.</h1>\n        </div>\n    </div>\n\n\n    '), Spacebars.include(self.lookupTemplate("Footer")) ];
}));

})();
