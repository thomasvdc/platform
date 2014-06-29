(function(){/*****************************************************************************/
/* SecondRowChartLeft: Event Handlers and Helpers */
/*****************************************************************************/
Template.SecondRowChartLeft.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Template.SecondRowChartLeft.helpers({
    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
});

/*****************************************************************************/
/* SecondRowChartLeft: Lifecycle Hooks */
/*****************************************************************************/
Template.SecondRowChartLeft.created = function () {
};

Template.SecondRowChartLeft.rendered = function () {

    var svg = dimple.newSvg("#chartSecondRowChartLeft", 590, 400);

    data = [
        {"Month" : "October", "Unit Sales" : 100*Math.random() , "Channel" : "Direct marketing" },
        {"Month" : "October", "Unit Sales" : 100*Math.random() , "Channel" : "Franchising" },
        {"Month" : "October", "Unit Sales" : 100*Math.random() , "Channel" : "Ecommerce" },

        {"Month" : "November", "Unit Sales" : 100*Math.random() , "Channel" : "Direct marketing" },
        {"Month" : "November", "Unit Sales" : 100*Math.random() , "Channel" : "Franchising" },
        {"Month" : "November", "Unit Sales" : 100*Math.random() , "Channel" : "Ecommerce" },

        {"Month" : "December", "Unit Sales" : 100*Math.random() , "Channel" : "Direct marketing" },
        {"Month" : "December", "Unit Sales" : 100*Math.random() , "Channel" : "Franchising" },
        {"Month" : "December", "Unit Sales" : 100*Math.random() , "Channel" : "Ecommerce" },

        {"Month" : "December", "Unit Sales" : 100*Math.random() , "Channel" : "Direct marketing" },
        {"Month" : "December", "Unit Sales" : 100*Math.random() , "Channel" : "Franchising" },
        {"Month" : "December", "Unit Sales" : 100*Math.random() , "Channel" : "Ecommerce" },


    ];

    var myChart = new dimple.chart(svg, data);

    myChart.setBounds(60, 30, 510, 305)

    var x = myChart.addCategoryAxis("x", "Month");

    x.addOrderRule("Date");
    myChart.addMeasureAxis("y", "Unit Sales");
    var s = myChart.addSeries("Channel", dimple.plot.line);
    s.stacked = false;
    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();


};

Template.SecondRowChartLeft.destroyed = function () {
};

})();
