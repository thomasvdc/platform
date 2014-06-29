(function(){HomepageController = RouteController.extend({
  waitOn: function () {
  	console.log('waitOn called');
  },

  data: function () {
  	console.log('data called');
  },

  action: function () {
    this.render();
  }
});

})();
