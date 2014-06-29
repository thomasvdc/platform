(function(){
Template.__define__("LandingPage", (function() {
  var self = this;
  var template = this;
  return HTML.DIV({
    "class": "animated fadeInLeft "
  }, "\n        ", Spacebars.include(self.lookupTemplate("Header")), HTML.Raw('\n\n    <div class=" mainPage">\n        <div class="row">\n                <img id="womanHand" src="./phone_1.png" class="img-responsive">\n        </div>\n    </div>\n\n    '), HTML.DIV({
    "class": "text-center mainBanner"
  }, "\n\n        ", HTML.H2({
    "class": "mainBanner message"
  }, HTML.Raw("\n            Get smart charts, <br>\n            save time! <br><br>\n            "), HTML.A({
    "class": "btn-default btn btn-lg animated shake",
    href: function() {
      return Spacebars.mustache(self.lookup("pathFor"), "login");
    }
  }, " Enter now"), "\n        "), "\n\n    "), "\n\n\n\n\n    ", Spacebars.include(self.lookupTemplate("Footer")), "\n    ");
}));

})();
