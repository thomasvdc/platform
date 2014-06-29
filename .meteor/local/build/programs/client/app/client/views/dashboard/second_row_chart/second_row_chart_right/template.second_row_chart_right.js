(function(){
Template.__define__("SecondRowChartRight", (function() {
  var self = this;
  var template = this;
  return [ HTML.H1(" ", function() {
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "date"));
  }, " "), HTML.Raw("\n\n    <hr>\n    "), HTML.H1(function() {
    return Spacebars.mustache(self.lookup("title"));
  }), HTML.Raw('\n\n    <br>\n\n    <div class="" id=""></div>\n\n    '), HTML.H4({
    "class": ""
  }, "\n        ", function() {
    return Spacebars.mustache(self.lookup("smallDataSnippet"));
  }, "\n    "), HTML.Raw("\n\n    <hr>\n    "), HTML.DIV({
    "class": "lead"
  }, "\n        ", function() {
    return Spacebars.mustache(self.lookup("smallText"));
  }, "\n    ") ];
}));

})();
