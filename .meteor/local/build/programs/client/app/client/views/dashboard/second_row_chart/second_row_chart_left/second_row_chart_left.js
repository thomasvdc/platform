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


    var svg = dimple.newSvg("#thirdChart", charDimensionsYann.cardDimension1.height, charDimensionsYann.cardDimension1.width);




    /////

    var trendIncrease  = 1.1;
    var offsetVal = 0.1;

    data = [
        {"Date" : "11/06", "Unit Sales" : 10, "Channel" : "Direct marketing" , order : 1 },
        {"Date" : "12/06", "Unit Sales" : 11 , "Channel" : "Direct marketing", order : 2 },
        {"Date" : "13/06", "Unit Sales" : 12 , "Channel" : "Direct marketing", order : 3 },
        {"Date" : "14/06", "Unit Sales" : 13, "Channel" : "Direct marketing", order : 4 },
//        {"Date" : "February", "Unit Sales" : 14 , "Channel" : "Direct marketing", order : 5 },
//        {"date" : "March", "Unit Sales" : 15, "Channel" : "Direct marketing" , order : 6},
//        {"date" : "April", "Unit Sales" : 16, "Channel" : "Direct marketing", order : 7 },

        {"Date" : "11/06", "Unit Sales" : trendIncrease*12 +offsetVal , "Channel" : "marketing" , order : 1 },
        {"Date" : "12/06", "Unit Sales" : trendIncrease*14 +offsetVal , "Channel" : "marketing", order : 2 },
        {"Date" : "13/06", "Unit Sales" : trendIncrease*16 +offsetVal , "Channel" : "marketing", order : 3 },
        {"Date" : "14/06", "Unit Sales" : trendIncrease*18 +offsetVal, "Channel" : "marketing", order : 4 },
//        {"Date" : "February", "Unit Sales" : trendIncrease*14 +offsetVal , "Channel" : "marketing", order : 5 },
//        {"date" : "March", "Unit Sales" : trendIncrease*15 +offsetVal, "Channel" : "marketing" , order : 6},
//        {"date" : "April", "Unit Sales" : trendIncrease*16 +offsetVal, "Channel" : "marketing", order : 7 },

    ];

    var myChart = new dimple.chart(svg, data);

    //myChart.setBounds(60, 30, 510, 305);

    var x = myChart.addCategoryAxis("x", "Date");

    x.addOrderRule("order");

    myChart.addMeasureAxis("y", "Unit Sales");
    var s = myChart.addSeries("Channel", dimple.plot.line);
    s.stacked = false;
    //myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();

    console.log(data);
    ////////

    data = data.concat(data2);


    var yannChart = new dimple.chart(svg, data);


    var x = yannChart.addCategoryAxis("x", "Month");

    x.addOrderRule("Date");
    yannChart.addMeasureAxis("y", "Unit Sales");
    var s = yannChart.addSeries("Channel", dimple.plot.line);
    s.stacked = false;
    //yannChart.addLegend(60, 10, 510, 20, "right");
    yannChart.draw();

    console.log(data);


};

Template.SecondRowChartLeft.destroyed = function () {
};

})();
