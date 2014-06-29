(function(){
Template.__define__("GoogleAnalytic", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "container"
  }, "\n  	", Spacebars.include(self.lookupTemplate("loginButtons")), "\n  ");
}));

})();
