(function(){/*****************************************************************************/
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

var pieChartBuilder = function (data) {

    var width = 800,
        height = 400,
        radius = Math.min(width, height) / 2;

    var color = d3.scale.ordinal()
        //.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#5bc0de", "#f0ad4e", "#d9534f"]);
        .range(["#f0ad4e", "#5bc0de", "#5cb85c", "#d9534f"]);

    var arc = d3.svg.arc()
        .outerRadius(radius - 10)
        .innerRadius(0);

    var pie = d3.layout.pie()
        .sort(null)
        .value(function (d) {
            return d.population;
        });

    var svg = d3.select("#graphRightUp").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + 1.3*(width / 4) + "," + 2*(height / 4) + ")");


    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    g.append("path")
        .attr("d", arc)
        .style("fill", function (d) {
            return color(d.data.population);
        });

    g.append("text")
        .attr("transform", function (d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("dy", ".35em")
        .style("text-anchor", "middle")
        .text(function (d) {
            return d.data.age;
        });


};


Template.ChartRightUp.rendered = function () {

//    var data = DATA.chart_right_up;
//
//
//    var fields = data.cols;

    fields = ['age', 'population'];

    var data = [

        ['<5', 2704659],
        ['5-13', 4499890],
        ['14-17', 2159981],
        ['18-24', 3853788],
        ['25-44', 14106543],
        ['45-64', 8819342],
        ['≥65', 612463]
    ];

    data = _.map(data, function (row) {

        var res = {};

        res[fields[0]] = row[0];
        res[fields[1]] = row[1];

        return res;
    });


    pieChartBuilder(data);

    console.log(data);


};

Template.ChartRightUp.destroyed = function () {
};

})();
