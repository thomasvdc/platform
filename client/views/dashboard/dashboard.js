/*****************************************************************************/
/* Dashboard: Event Handlers and Helpers */
/*****************************************************************************/
Template.Dashboard.events({
});

Meteor.setInterval(function(){

    var sales = _.map(_.range(0,50),function(){
        return Math.random()*(10000) + 1000;
    });

   Session.set('sales', sales);

    var facebookLikes = _.map(_.range(0,50),function(){
        return Math.random()*(10000) + 100;
    });

    Session.set('facebookLikes', facebookLikes);

},1000);

Template.Dashboard.helpers({
    "correlation" : function(){

        var sales = Session.get('sales');
        var facebookLikes = Session.get('facebookLikes');

        return numeral(App.mathUtils.getPearsonsCorrelation(sales, facebookLikes)).format('0.00');

    }
});

/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.created = function () {
  FB.api(
    "/10204078054932357/insights/ga:users",
    {
        "object": {
            "period": "month"
        }
    },
    function (response) {
      debugger;
      if (response && !response.error) {
        /* handle the result */
      }
    }
  );
};

Template.Dashboard.rendered = function () {
};

Template.Dashboard.destroyed = function () {
};

// gapi.analytics.auth.authorize({
//       container: 'auth-button',
//       clientid: '511635888183-eh4cp2kavoedbs84ptrvg2htn47um7ih.apps.googleusercontent.com'
//     });

//     var viewSelector = new gapi.analytics.ViewSelector({
//       container: 'view-selector'
//     });

//     var timeline = new gapi.analytics.googleCharts.DataChart({
//       reportType: 'ga',
//       query: {
//         'dimensions': 'ga:date',
//         'metrics': 'ga:sessions',
//         'start-date': '30daysAgo',
//         'end-date': 'yesterday'
//       }
//     });

//     gapi.analytics.auth.on('success', function(response) {
//       viewSelector.execute();
//     });

//     viewSelector.on('change', function(ids) {
//       var newIds = {
//         query: {
//           ids: ids
//         }
//       }
//       timeline.set(newIds).execute();
//     });