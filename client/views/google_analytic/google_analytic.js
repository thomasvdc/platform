/*****************************************************************************/
/* GoogleAnalytic: Event Handlers and Helpers */
/*****************************************************************************/
Template.GoogleAnalytic.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.GoogleAnalytic.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* GoogleAnalytic: Lifecycle Hooks */
/*****************************************************************************/
Template.GoogleAnalytic.created = function () {
  Accounts.ui.config({
    requestPermissions: {
      facebook: ['user_likes'],
      google: ['email', 'profile']
    }
  });
};

Template.GoogleAnalytic.rendered = function () {
};

Template.GoogleAnalytic.destroyed = function () {
};
