(function(){
Template.__define__("Login", (function() {
  var self = this;
  var template = this;
  return [ Spacebars.include(self.lookupTemplate("Header")), HTML.Raw('\n	<br>\n  	<div class="container animated fadeInLeft">\n  		<button type="button" class="facebook btn btn-primary btn-block btn-lg">\n  			Integrate your Facebook\n  		</button>\n  		<button type="button" class="google btn btn-primary btn-block btn-lg">\n  			Integrate your Google Analytics\n  		</button>\n  		<button type="button" class="twitter btn btn-primary btn-block btn-lg">\n  			Integrate your Twitter\n  		</button>\n  	</div>\n\n    '), Spacebars.include(self.lookupTemplate("Footer")) ];
}));

})();
