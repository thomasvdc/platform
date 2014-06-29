(function(){
Template.__define__("Dashboard", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("Header")), "\n\n    ", UI.If(function() {
    return Spacebars.call(self.lookup("loading"));
  }, UI.block(function() {
    var self = this;
    return [ "\n\n        ", Spacebars.include(self.lookupTemplate("spinner")), "\n\n    " ];
  }), UI.block(function() {
    var self = this;
    return [ "\n\n\n    ", HTML.DIV({
      "class": "row"
    }, "\n\n    "), "\n\n\n    ", HTML.DIV({
      "class": "chartsDavy"
    }, "\n        ", HTML.DIV({
      "class": " panel animated fadeInLeft firstCard text-center infoCard"
    }, "\n            ", Spacebars.TemplateWith(function() {
      return Spacebars.dataMustache(self.lookup("pickNthElem"), self.lookup("cardDatas"), 0);
    }, UI.block(function() {
      var self = this;
      return Spacebars.include(self.lookupTemplate("ChartLeftUp"));
    })), "\n        "), "\n\n\n        ", HTML.DIV({
      "class": " panel animated fadeInLeft text-center infoCard"
    }, "\n            ", Spacebars.TemplateWith(function() {
      return Spacebars.dataMustache(self.lookup("pickNthElem"), self.lookup("cardDatas"), 1);
    }, UI.block(function() {
      var self = this;
      return Spacebars.include(self.lookupTemplate("ChartRightUp"));
    })), "\n        "), "\n\n        ", HTML.DIV({
      "class": " panel animated fadeInLeft firstCard text-center infoCard "
    }, "\n            ", Spacebars.TemplateWith(function() {
      return Spacebars.dataMustache(self.lookup("pickNthElem"), self.lookup("cardDatas"), 2);
    }, UI.block(function() {
      var self = this;
      return Spacebars.include(self.lookupTemplate("SecondRowChartLeft"));
    })), "\n        "), "\n    "), "\n\n    ", HTML.DIV({
      "class": "row"
    }, "\n        ", HTML.DIV({
      "class": "col-lg-10 col-lg-offset-1"
    }, "\n\n            ", HTML.DIV({
      "class": "row"
    }, "\n\n\n\n                ", HTML.Comment('<div class="col-lg-4 col-lg-offset-2 panel text-center infoCard">'), "\n                ", HTML.Comment("{{>SecondRowChartRight pickNthElem cardDatas 3}}"), "\n                ", HTML.Comment("</div>"), "\n            "), "\n        "), "\n    "), "\n\n    " ];
  })), "\n\n    ", Spacebars.include(self.lookupTemplate("Footer")) ];
}));

})();
