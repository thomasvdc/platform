(function(){/**
 * Created by yannbuydens on 28/06/14.
 */



App.mathUtils.extractFeed = function (arrDocs) {


};

var getNumericValueKeys = function (document) {

    return _.map(document, function (num, key) {
        if (( 'number' == typeof num)) {
            return key;
        }
        ;

    });


}


Meteor.startup(function () {



    var numericTwitterProperties = [
        'retweet_count',
        'favorite_count'
    ];

    var numericTwitterUserProps = [
        'followers_count',
        'friends_count',
        'listed_count',
        'favourites_count',
        'statuses_count',
    ];

    var property1 = 'user.friends_count';
    var property2 = "retweet_count";

    var query1 = {};
    query1.user = {};
    query1.user.friends_count = {$gt: 0};

    var query2 = {};
    query2[property1] = {$gt: 0};

    var data1 = TwitterFeed.find(query1,{limit :100}).fetch();
    var data2 = TwitterFeed.find(query2, {limit :100}).fetch();

    console.log('data1--->', _.map(data1,function(data){
        return data[property1];
    }));
    console.log('data2--->', data2.length);

    var correlation = App.mathUtils.getPearsonsCorrelation(_.pluck(data1,property1),_.pluck(data2,property2));

    console.log('correlation is ',correlation);








    //console.log(App.mathUtils.extractFeed());

//
//    var twit = new Twitter({
//        consumer_key: '1LN3blxdERafcK95UtNuwu7ye',
//        consumer_secret: 'nmzo9VGp16gxaDizZdK3vdMA6D8SKoiFTxRuNRv8hWcMFw2YTZ',
//        access_token_key: "2481588684-tMzTpqFHfkKMwDIKdOpuV4DhUYUo748rpPfF33T",
//        access_token_secret: 'VmMe43fM63B5DuFlkDqAP0CnqFG8vXo1Iy4CUvnie5G6n'
//    });
//
////    twit.search('#swbru', function (data) {
////        console.log(_.keys(data));
////        console.log(data.statuses.length);
////        console.log(data.search_metadata);
////    });

//    Fiber = Npm.require('fibers')

//    twit.stream('statuses/sample', function (stream) {
//
//        stream.on('data', function (data) {
//            //console.log(_.keys(data));
//            //console.log("data", data.created_at, "source", data.source);
//
//            data.timestamp = (new Date()).getTime();
//
//
//            new Fiber(function(){
//
//                TwitterFeed.insert(data);
//
//            }).run();
//
//
//
//        });
//    });


});


})();
