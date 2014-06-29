(function(){/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});


Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('homepage', {path: '/home_page',
      waitOn: function(){
          return Meteor.subscribe("twitterFeed");
      }
  });
  this.route('data', {path: '/data'});
  this.route('dashboard', {path: '/dashboard'});
  this.route('login', {path: '/login'});
  this.route('pricing', {path: '/pricing'});
  this.route('landing.page', {path: '/'});
});

})();
