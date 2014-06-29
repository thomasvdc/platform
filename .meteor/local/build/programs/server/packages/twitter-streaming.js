(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Twitter;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/twitter-streaming/meteor-twitter.js                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Twitter = Npm.require('twitter-streaming');                          // 1
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['twitter-streaming'] = {
  Twitter: Twitter
};

})();
