/*****************************************************************************/
/* ChartRightUp: Event Handlers and Helpers */
/*****************************************************************************/
Template.ChartRightUp.events({
    /*
     * Example:
     *  'click .selector': function (e, tmpl) {
     *
     *  }
     */
});

Template.ChartRightUp.helpers({
    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
});


/*****************************************************************************/
/* ChartRightUp: Lifecycle Hooks */
/*****************************************************************************/
Template.ChartRightUp.created = function () {
};


Template.ChartRightUp.rendered = function () {

//    var data = DATA.chart_right_up;
//
//
//    var fields = data.cols;



    var svg = dimple.newSvg("#graphRightUp", charDimensionsYann.cardDimension1.height, charDimensionsYann.cardDimension1.width);


    data = [
        {"Date" : "11/06", "Visits" : 10 , "Channel" : "Direct marketing" , order : 1 },
        {"Date" : "12/06", "Visits" : 13 , "Channel" : "Direct marketing", order : 2 },
        {"Date" : "13/06", "Visits" : 14 , "Channel" : "Direct marketing", order : 3 },
        {"Date" : "14/06", "Visits" : 18, "Channel" : "Direct marketing", order : 4 },
        {"Date" : "15/06", "Visits" : 13 , "Channel" : "Direct marketing", order : 5 },
        {"date" : "16/06", "Visits" : 21, "Channel" : "Direct marketing" , order : 6},
        {"date" : "17/06", "Visits" : 30, "Channel" : "Direct marketing", order : 7 }
//        {"Month" : "December", "Visits" : 100*Math.random() , "Channel" : "Franchising" },
//        {"Month" : "December", "Visits" : 100*Math.random() , "Channel" : "Ecommerce" },
    ];

    var myChart = new dimple.chart(svg, data);

    //myChart.setBounds(60, 30, 510, 305);

    var x = myChart.addCategoryAxis("x", "Date");

    x.addOrderRule("order");

    myChart.addMeasureAxis("y", "Visits");
    var s = myChart.addSeries("Channel", dimple.plot.line);
    s.stacked = false;
    //myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    console.log(data);


};

Template.ChartRightUp.destroyed = function () {
};
