(function(){/*****************************************************************************/
/* Dashboard: Event Handlers and Helpers */
/*****************************************************************************/

charDimensionsYann = {"cardDimension1": {
    height: "300px",
    width: "280px"
}
};

Template.Dashboard.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Session.setDefault("showLoading", true);

Meteor.setInterval(function () {

    var sales = _.map(_.range(0, 50), function () {
        return Math.random() * (10000) + 1000;
    });

    Session.set('sales', sales);

    var facebookLikes = _.map(_.range(0, 50), function () {
        return Math.random() * (10000) + 100;
    });

    Session.set('facebookLikes', facebookLikes);

}, 1000);

Template.Dashboard.helpers({

    "loading" : function(){
        return Session.get("showLoading");
    },

    "correlation": function () {

        var sales = Session.get('sales');
        var facebookLikes = Session.get('facebookLikes');

        return numeral(App.mathUtils.getPearsonsCorrelation(sales, facebookLikes)).format('0.00');

    },

    "pickNthElem": function (array, nth) {
        return array[nth];
    },

    "cardDatas": function () {
        return [
            {date: "Today",
                title: "Facebook post engagement",
                smallDataSnippet: " 30% reactions to facebook post",
                graphId: "graphLeftUp",
                smallText: "Apparently you last facebook post has an unexpected response rate compared to what's normal."}
            ,
            {date: "Yesterday",
                title: "Visitor trend",
                smallDataSnippet: " 15% visitors in the last 2 days",
                graphId: "graphRightUp",
                smallText: "Great stuff! In the last 2 days you borke out of the 30-day trend of visitors! Keep up the good work!"
            },
            {
                date: "30/06/2014",
                title: "Sales vs sector",
                graphId: "graphRightUp",
                smallDataSnippet: "Increasing gap in the trend",
                smallText: "In the trend over the last quarter you are increasing the sales gap with your competitors."
            },
            {
                date: "01/07/2014",
                title: "Facebook engagement vs click-through-rate",
                graphId: "graphRightUp",
                smallDataSnippet: "Engagement broke",
                smallText: "There seems to be a problem! your last FB post reactions were in line with previous engagement but click-through visitors are not as expected"
            }
        ]
    }

    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
});

/*****************************************************************************/
/* Dashboard: Lifecycle Hooks */
/*****************************************************************************/
Template.Dashboard.created = function () {

    Meteor.setTimeout(function(){

        Session.set('showLoading',false);
    },2000);
};

Template.Dashboard.rendered = function () {



};

Template.Dashboard.destroyed = function () {
};

})();
