/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});




Router.onBeforeAction('loading');


Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('homepage', {path: '/homepage',
      waitOn: function(){
          return Meteor.subscribe("twitterFeed");
      }
  });
  this.route('data', {path: '/data'});
  this.route('dashboard', {path: '/dashboard',

      data: function(){

  }});
  this.route('login', {path: '/login'});
  this.route('pricing', {path: '/pricing'});
  this.route('landing.page', {path: '/'});
    this.route('privacy', {path: '/privacy'});
});
