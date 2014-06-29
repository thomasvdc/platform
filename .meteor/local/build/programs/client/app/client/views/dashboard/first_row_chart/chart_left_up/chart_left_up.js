(function(){/*****************************************************************************/
/* ChartLeftUp: Event Handlers and Helpers */
/*****************************************************************************/
Template.ChartLeftUp.events({
  /*
   * Example: 
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.ChartLeftUp.helpers({
  /*
   * Example: 
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ChartLeftUp: Lifecycle Hooks */
/*****************************************************************************/
Template.ChartLeftUp.created = function () {
};



Template.ChartLeftUp.rendered = function () {

    var svg = dimple.newSvg("#graphLeftUp", charDimensionsYann.cardDimension1.height, charDimensionsYann.cardDimension1.width);

    var data = [
        { "Date":"1", "Likes":200 },
        { "Date":"2", "Likes":220 },
        { "Date":"3", "Likes":195 },
        { "Date":"4", "Likes":210 },
        { "Date":"5", "Likes":150 }
    ];

    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Date");
    chart.addMeasureAxis("y", "Likes");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();

};

Template.ChartLeftUp.destroyed = function () {
};

})();
