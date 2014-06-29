(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Facebook, keys;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/facebook-sdk/main.js                                     //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Facebook = Npm.require('facebook-node-sdk');                         // 1
if (keys = Meteor.settings['facebook-node-sdk']) {                   // 2
    // overwrite Facebook with ready to use object                   // 3
    Facebook = new Facebook({                                        // 4
        appID: keys.app_id,                                          // 5
        secret: keys.app_secret                                      // 6
    });                                                              // 7
} else {                                                             // 8
    // DIY                                                           // 9
}                                                                    // 10
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['facebook-sdk'] = {
  Facebook: Facebook
};

})();
