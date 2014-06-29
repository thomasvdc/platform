Signins = new Meteor.Collection('signins');

Signins.allow({
    'insert' : function(){
        return true;
    }
});

/*
 * Add query methods like this:
 *  Signins.findPublic = function () {
 *    return Signins.find({is_public: true});
 *  }
 */
