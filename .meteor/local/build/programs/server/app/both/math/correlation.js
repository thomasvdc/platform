(function(){/**
 * Created by yannbuydens on 28/06/14.
 */
App.mathUtils.getPearsonsCorrelation = function (x, y) {
    var shortestArrayLength = 0;
    if (x.length == y.length) {
        shortestArrayLength = x.length;
    }
    else if (x.length > y.length) {
        shortestArrayLength = y.length;
        console.error('x has more items in it, the last ' + (x.length - shortestArrayLength) + ' item(s) will be ignored');
    }
    else {
        shortestArrayLength = x.length;
        console.error('y has more items in it, the last ' + (y.length - shortestArrayLength) + ' item(s) will be ignored');
    }

    var xy = [];
    var x2 = [];
    var y2 = [];

    for (var i = 0; i < shortestArrayLength; i++) {
        xy.push(x[i] * y[i]);
        x2.push(x[i] * x[i]);
        y2.push(y[i] * y[i]);
    }

    var sum_x = 0;
    var sum_y = 0;
    var sum_xy = 0;
    var sum_x2 = 0;
    var sum_y2 = 0;

    for (var i = 0; i < shortestArrayLength; i++) {
        sum_x += x[i];
        sum_y += y[i];
        sum_xy += xy[i];
        sum_x2 += x2[i];
        sum_y2 += y2[i];
    }

    var step1 = (shortestArrayLength * sum_xy) - (sum_x * sum_y);
    var step2 = (shortestArrayLength * sum_x2) - (sum_x * sum_x);
    var step3 = (shortestArrayLength * sum_y2) - (sum_y * sum_y);
    var step4 = Math.sqrt(step2 * step3);
    var answer = step1 / step4;

    return answer;
};

App.mathUtils.average = function (arr) {
    return _.reduce(arr, function (memo, num) {
        return memo + num
    }, 0) / arr.length;
};

App.mathUtils.median = function (values) {

    values.sort(function (a, b) {
        return a - b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];
    else
        return (values[half - 1] + values[half]) / 2.0;
};

App.mathUtils.variance = function (numArr, numOfDec) {
    if (!isArray(numArr)) {
        return false;
    }
    var avg = getAverageFromNumArr(numArr, numOfDec),
        i = numArr.length,
        v = 0;

    while (i--) {
        v += Math.pow((numArr[ i ] - avg), 2);
    }
    v /= numArr.length;
    return getNumWithSetDec(v, numOfDec);
};

App.mathUtils.standDev = function( numArr, numOfDec ){
    if( !isArray(numArr) ){ return false; }
    var stdDev = Math.sqrt( getVariance( numArr, numOfDec ) );
    return getNumWithSetDec( stdDev, numOfDec );
};


})();
