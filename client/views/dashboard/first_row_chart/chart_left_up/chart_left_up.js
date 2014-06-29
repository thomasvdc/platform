/*****************************************************************************/
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

    var svg = dimple.newSvg("#graphLeftUp", 590, 400);

    var data = [
        { "Date":"Last week", "Likes":200 },
        { "Date":"Today", "Likes":3000 }
    ];

    var chart = new dimple.chart(svg, data);
    chart.addCategoryAxis("x", "Date");
    chart.addMeasureAxis("y", "Likes");
    chart.addSeries(null, dimple.plot.bar);
    chart.draw();

};

Template.ChartLeftUp.destroyed = function () {
};
