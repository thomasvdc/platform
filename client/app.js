/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});

Meteor.startup(function(){
    var sales = _.map(_.range(0,50),function(){
        return Math.random()*(10000) + 1000;
    });

    Session.setDefault('sales', sales);

    var facebookLikes = _.map(_.range(0,50),function(){
        return Math.random()*(10000) + 100;
    });

    Session.setDefault('facebookLikes', facebookLikes);
});
