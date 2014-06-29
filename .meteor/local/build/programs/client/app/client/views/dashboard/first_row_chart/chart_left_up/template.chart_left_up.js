(function(){
Template.__define__("ChartLeftUp", (function() {
  var self = this;
  var template = this;
  return [ HTML.H1(" ", function() {
    return Spacebars.mustache(Spacebars.dot(self.lookup("."), "date"));
  }, " "), "\n\n    ", HTML.H2(" ", function() {
    return Spacebars.mustache(self.lookup("title"));
  }, " "), HTML.Raw('\n\n    <div class="chartBox centerChart" id="graphLeftUp"></div>\n\n\n\n\n    '), HTML.DIV({
    "class": "lead"
  }, "\n\n        ", HTML.H2({
    "class": ""
  }, "\n            ", function() {
    return Spacebars.mustache(self.lookup("smallDataSnippet"));
  }, "\n        "), "\n\n        ", function() {
    return Spacebars.mustache(self.lookup("smallText"));
  }, "\n    ") ];
}));

})();
