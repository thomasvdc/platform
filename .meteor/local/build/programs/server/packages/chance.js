(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

/* Package-scope variables */
var Chance;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/chance/chance.js                                         //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Chance = Npm.require('chance');                                      // 1
                                                                     // 2
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.chance = {
  Chance: Chance
};

})();
