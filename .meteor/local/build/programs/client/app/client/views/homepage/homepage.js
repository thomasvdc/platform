(function(){/*****************************************************************************/
/* Homepage: Event Handlers and Helpers */
/*****************************************************************************/
Template.Homepage.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
    'click #signup' : function(e, tmpl){
        e.preventDefault();
        var email = $('#email').val();

        console.log(email);
        Signins.insert({email : email});

        Notifications.success("Thanks!");
        //Router.go('dashboard');
    }
});

Template.Homepage.helpers({


    'twitterFeed': function(){
        return (TwitterFeed.findOne()&&TwitterFeed.findOne().text);
    }

  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Homepage: Lifecycle Hooks */
/*****************************************************************************/
Template.Homepage.created = function () {
};

Template.Homepage.rendered = function () {
};

Template.Homepage.destroyed = function () {
};

})();
