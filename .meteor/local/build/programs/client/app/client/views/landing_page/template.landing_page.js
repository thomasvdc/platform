(function(){
Template.__define__("LandingPage", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("Header")), HTML.Raw('\n\n    <div class="mainPage">\n        <div class="row">\n                <img id="womanHand" src="./phone_1.png" class="img-responsive">\n        </div>\n    </div>\n\n    <div class="text-center mainBanner">\n\n        <h2 class="mainBanner message">\n            Get smart charts, <br>\n            save time! <br><br>\n            <div class="btn-default btn btn-lg"> Enter now</div>\n        </h2>\n\n    </div>\n\n\n    '), Spacebars.include(self.lookupTemplate("Footer")) ];
}));

})();
