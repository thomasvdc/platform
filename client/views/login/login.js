/*****************************************************************************/
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

        if (!response) {

            Router.go('dashboard')

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
