(function(){/*****************************************************************************/
/* Login: Event Handlers and Helpers */
/*****************************************************************************/
Template.Login.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
   'click .facebook': function () {
      var options = {
        // scope: 'email,user_likes,read_insights'
        requestPermissions: ['email', 'user_likes']
      }
      Meteor.loginWithFacebook(options, function(response){
        debugger;        
        if (!response) {
            FB.init({
              appId  : '1502120416670141',
              status : true,
              xfbml  : true
            });
            window.location = '/dashboard';
        }else {
          console.log('loggin did not work out');          
        }

      });



      //Meteor.Router.to('/dashboard');
   },

   'click .google': function () {

      //Meteor.Router.to('/dashboard');
   },

   'click .twitter': function () {
      //Meteor.Router.to('/dashboard');
   }
});

Template.Login.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};

})();
