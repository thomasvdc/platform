(function(){
Template.__define__("Dashboard", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("Header")), HTML.Raw('\n\n    <div class="row">\n\n    </div>\n\n\n    '), HTML.DIV({
    "class": "chartsDavy"
  }, "\n        ", HTML.DIV({
    "class": " panel  firstCard text-center infoCard"
  }, "\n            ", Spacebars.TemplateWith(function() {
    return Spacebars.dataMustache(self.lookup("pickNthElem"), self.lookup("cardDatas"), 0);
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("ChartLeftUp"));
  })), "\n        "), "\n\n\n        ", HTML.DIV({
    "class": " panel text-center infoCard"
  }, "\n            ", Spacebars.TemplateWith(function() {
    return Spacebars.dataMustache(self.lookup("pickNthElem"), self.lookup("cardDatas"), 1);
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("ChartRightUp"));
  })), "\n        "), "\n        ", HTML.DIV({
    "class": " panel  firstCard text-center infoCard "
  }, "\n            ", Spacebars.TemplateWith(function() {
    return Spacebars.dataMustache(self.lookup("pickNthElem"), self.lookup("cardDatas"), 2);
  }, UI.block(function() {
    var self = this;
    return Spacebars.include(self.lookupTemplate("SecondRowChartLeft"));
  })), "\n        "), "\n    "), HTML.Raw('\n\n    <div class="row">\n        <div class="col-lg-10 col-lg-offset-1">\n\n            <div class="row">\n\n\n\n                <!--<div class="col-lg-4 col-lg-offset-2 panel text-center infoCard">-->\n                    <!--{{>SecondRowChartRight pickNthElem cardDatas 3}}-->\n                <!--</div>-->\n            </div>\n        </div>\n    </div>') ];
}));

})();
