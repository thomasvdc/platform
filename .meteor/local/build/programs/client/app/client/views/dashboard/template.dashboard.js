(function(){
Template.__define__("Dashboard", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("Header")), "\n    ", HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "text-center col-lg-offset-1 col-lg-10"
  }, HTML.Raw("\n            <h1>Key metric</h1>\n            "), HTML.H4("Your sales and your facebook likes are correlating by ", function() {
    return Spacebars.mustache(self.lookup("correlation"));
  }, " "), "\n        "), "\n    "), "\n\n\n    ", HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "col-lg-5 well col-lg-offset-1"
  }, "\n\n            ", Spacebars.include(self.lookupTemplate("ChartLeftUp")), "\n\n        "), "\n\n        ", HTML.DIV({
    "class": "col-lg-5 "
  }, "\n\n            ", Spacebars.include(self.lookupTemplate("ChartRightUp")), "\n\n        "), "\n\n    "), "\n\n    ", HTML.DIV({
    "class": "row"
  }, "\n        ", HTML.DIV({
    "class": "well col-lg-offset-1 col-lg-5"
  }, "\n            ", Spacebars.include(self.lookupTemplate("SecondRowChartLeft")), "\n        "), "\n        ", HTML.DIV({
    "class": "col-lg-5 well"
  }, "\n\n            ", Spacebars.include(self.lookupTemplate("SecondRowChartRight")), "\n        "), "\n    ") ];
}));

})();
