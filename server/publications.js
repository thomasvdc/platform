/**
 * Created by yannbuydens on 28/06/14.
 */

Meteor.publish('twitterFeed' , function(){
        console.log('twitterFeed publication was called');
        return TwitterFeed.find({},{limit:1});
});