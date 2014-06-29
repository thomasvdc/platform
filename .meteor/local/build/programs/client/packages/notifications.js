//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var Notifications;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/notifications/template.notifications.js                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__define__("notifications", (function() {                                                                 // 2
  var self = this;                                                                                                 // 3
  var template = this;                                                                                             // 4
  return HTML.UL({                                                                                                 // 5
    "class": "notifications"                                                                                       // 6
  }, "\n       ", UI.Each(function() {                                                                             // 7
    return Spacebars.call(self.lookup("notifications"));                                                           // 8
  }, UI.block(function() {                                                                                         // 9
    var self = this;                                                                                               // 10
    return [ "\n           ", Spacebars.include(self.lookupTemplate("notification")), "\n       " ];               // 11
  })), "\n	");                                                                                                     // 12
}));                                                                                                               // 13
                                                                                                                   // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/notifications/template.notification.js                                                                 //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.__define__("notification", (function() {                                                                  // 2
  var self = this;                                                                                                 // 3
  var template = this;                                                                                             // 4
  return HTML.LI({                                                                                                 // 5
    "class": [ "notification ", function() {                                                                       // 6
      return Spacebars.mustache(self.lookup("notificationColor"), self.lookup("type"));                            // 7
    }, " ", UI.If(function() {                                                                                     // 8
      return Spacebars.call(self.lookup("userCloseable"));                                                         // 9
    }, UI.block(function() {                                                                                       // 10
      var self = this;                                                                                             // 11
      return "closeable";                                                                                          // 12
    })) ]                                                                                                          // 13
  }, "\n         ", HTML.DIV({                                                                                     // 14
    "class": "title"                                                                                               // 15
  }, function() {                                                                                                  // 16
    return Spacebars.mustache(self.lookup("title"));                                                               // 17
  }), "\n         ", HTML.DIV({                                                                                    // 18
    "class": "message"                                                                                             // 19
  }, function() {                                                                                                  // 20
    return Spacebars.mustache(self.lookup("message"));                                                             // 21
  }), "\n         ", UI.If(function() {                                                                            // 22
    return Spacebars.call(self.lookup("userCloseable"));                                                           // 23
  }, UI.block(function() {                                                                                         // 24
    var self = this;                                                                                               // 25
    return [ "\n                 ", HTML.DIV({                                                                     // 26
      "class": "closeButton"                                                                                       // 27
    }, HTML.CharRef({                                                                                              // 28
      html: "&times;",                                                                                             // 29
      str: "×"                                                                                                     // 30
    })), "\n         " ];                                                                                          // 31
  })), "\n     ");                                                                                                 // 32
}));                                                                                                               // 33
                                                                                                                   // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/notifications/notifications.js                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var constructor = (function() {                                                                                    // 1
    /***                                                                                                           // 2
     * Creates an instance of Notifications                                                                        // 3
     * @constructor                                                                                                // 4
     */                                                                                                            // 5
    function Notifications() {                                                                                     // 6
        this._notificationsCollection = new Meteor.Collection(null);                                               // 7
        this._notificationTimeout = undefined;                                                                     // 8
    }                                                                                                              // 9
                                                                                                                   // 10
    /***                                                                                                           // 11
     * Adds a notification                                                                                         // 12
     * @param {string} title of the notification                                                                   // 13
     * @param {string} message of the notification                                                                 // 14
     * @param {object} [options={}] Options object to use for notification                                         // 15
     */                                                                                                            // 16
    Notifications.prototype.addNotification = function (title, message, options) {                                 // 17
        options = options || {};                                                                                   // 18
        _.defaults(options, this.defaultOptions);                                                                  // 19
                                                                                                                   // 20
        var notification = {};                                                                                     // 21
        notification.title = title;                                                                                // 22
        notification.message = message;                                                                            // 23
        notification.type = options.type;                                                                          // 24
        notification.userCloseable = options.userCloseable;                                                        // 25
        notification.animationSpeed = options.animationSpeed;                                                      // 26
        notification.hideAnimationProperties = options.hideAnimationProperties;                                    // 27
        if (options.timeout) {                                                                                     // 28
            notification.expires = new Date().getTime() + options.timeout;                                         // 29
        }                                                                                                          // 30
                                                                                                                   // 31
        this._add(notification);                                                                                   // 32
    };                                                                                                             // 33
                                                                                                                   // 34
    /***                                                                                                           // 35
     * Wraps addNotification, sets type to error                                                                   // 36
     * @param {String} title of the notification                                                                   // 37
     * @param {String} message of the notification                                                                 // 38
     * @param {object} [options={}] Options object to use for notification                                         // 39
     * @returns {*}                                                                                                // 40
     */                                                                                                            // 41
    Notifications.prototype.error = function (title, message, options) {                                           // 42
        options = options || {};                                                                                   // 43
        options.type = this.TYPES.ERROR;                                                                           // 44
        return this.addNotification(title, message, options);                                                      // 45
    };                                                                                                             // 46
                                                                                                                   // 47
    /***                                                                                                           // 48
     * Wraps addNotification, sets type to warning                                                                 // 49
     * @param {String} title of the notification                                                                   // 50
     * @param {String} message of the notification                                                                 // 51
     * @param {object} [options={}] Options object to use for notification                                         // 52
     * @returns {*}                                                                                                // 53
     */                                                                                                            // 54
    Notifications.prototype.warn = function (title, message, options) {                                            // 55
        options = options || {};                                                                                   // 56
        options.type = this.TYPES.WARNING;                                                                         // 57
        return this.addNotification(title, message, options);                                                      // 58
    };                                                                                                             // 59
                                                                                                                   // 60
    /***                                                                                                           // 61
     * Wraps addNotification, sets type to info                                                                    // 62
     * @param {String} title of the notification                                                                   // 63
     * @param {String} message of the notification                                                                 // 64
     * @param {object} [options={}] Options object to use for notification                                         // 65
     * @returns {*}                                                                                                // 66
     */                                                                                                            // 67
    Notifications.prototype.info = function (title, message, options) {                                            // 68
        options = options || {};                                                                                   // 69
        options.type = this.TYPES.INFO;                                                                            // 70
        return this.addNotification(title, message, options);                                                      // 71
    };                                                                                                             // 72
                                                                                                                   // 73
    /***                                                                                                           // 74
     * Wraps addNotification, sets type to success                                                                 // 75
     * @param {String} title of the notification                                                                   // 76
     * @param {String} message of the notification                                                                 // 77
     * @param {object} [options={}] Options object to use for notification                                         // 78
     * @returns {*}                                                                                                // 79
     */                                                                                                            // 80
    Notifications.prototype.success = function (title, message, options) {                                         // 81
        options = options || {};                                                                                   // 82
        options.type = this.TYPES.SUCCESS;                                                                         // 83
        return this.addNotification(title, message, options);                                                      // 84
    };                                                                                                             // 85
                                                                                                                   // 86
    /***                                                                                                           // 87
     * Returns the NotificationsCollection Meteor.Collection                                                       // 88
     * @returns {object} NotificationsCollection                                                                   // 89
     * @private                                                                                                    // 90
     */                                                                                                            // 91
    Notifications.prototype._getNotificationsCollection = function () {                                            // 92
        return this._notificationsCollection;                                                                      // 93
    };                                                                                                             // 94
                                                                                                                   // 95
    /***                                                                                                           // 96
     * Does the actual add to the collection. And creates a Timeout if necessary.                                  // 97
     * @param {object} notification the object to be inserted into the collection                                  // 98
     * @private                                                                                                    // 99
     */                                                                                                            // 100
    Notifications.prototype._add = function (notification) {                                                       // 101
        var notificationsCollection = this._getNotificationsCollection();                                          // 102
        var firstExpiration = this._getFirstExpiredTimestamp();                                                    // 103
                                                                                                                   // 104
        notificationsCollection.insert(notification);                                                              // 105
                                                                                                                   // 106
        if (notification.expires) {                                                                                // 107
            if (this._notificationTimeout) {                                                                       // 108
                if (firstExpiration > notification.expires) {                                                      // 109
                    Meteor.clearTimeout(this._notificationTimeout);                                                // 110
                    this._notificationTimeout = undefined;                                                         // 111
                }                                                                                                  // 112
            }                                                                                                      // 113
                                                                                                                   // 114
            if (!this._notificationTimeout) {                                                                      // 115
                this._createTimeout();                                                                             // 116
            }                                                                                                      // 117
        }                                                                                                          // 118
    };                                                                                                             // 119
                                                                                                                   // 120
    /***                                                                                                           // 121
     * Returns the timestamp of the notification from the notificationsCollection that is first to expire          // 122
     * @returns {string} first to expire timestamp                                                                 // 123
     * @private                                                                                                    // 124
     */                                                                                                            // 125
    Notifications.prototype._getFirstExpiredTimestamp = function () {                                              // 126
        var notificationsCollection = this._getNotificationsCollection();                                          // 127
                                                                                                                   // 128
        var firstNotification = notificationsCollection.findOne({expires: {$gt: 0}}, {sort:[['expires', 'asc']]}); // 129
        var firstExpiredTimestamp = firstNotification ? firstNotification.expires : 0;                             // 130
                                                                                                                   // 131
        return firstExpiredTimestamp;                                                                              // 132
    };                                                                                                             // 133
                                                                                                                   // 134
    /***                                                                                                           // 135
     * creates a timeout for the first to expire notification.                                                     // 136
     * @private                                                                                                    // 137
     */                                                                                                            // 138
    Notifications.prototype._createTimeout = function () {                                                         // 139
        var self = this;                                                                                           // 140
        var firstExpiration = this._getFirstExpiredTimestamp();                                                    // 141
                                                                                                                   // 142
        if (firstExpiration) {                                                                                     // 143
            this._notificationTimeout = Meteor.setTimeout(function () {                                            // 144
                self.remove({expires: {$lte: firstExpiration}});                                                   // 145
                self._createTimeout();                                                                             // 146
            }, firstExpiration - new Date().getTime());                                                            // 147
        } else {                                                                                                   // 148
            this._notificationTimeout = undefined;                                                                 // 149
        }                                                                                                          // 150
    };                                                                                                             // 151
                                                                                                                   // 152
    /***                                                                                                           // 153
     * Gets the class containing the color for the notification                                                    // 154
     * @param {String} notificationType                                                                            // 155
     * @returns {string} classname to use for the notification                                                     // 156
     */                                                                                                            // 157
    Notifications.prototype.getNotificationClass = function (notificationType) {                                   // 158
        var notificationClass;                                                                                     // 159
                                                                                                                   // 160
        _.each(this.TYPES,  function (value, key) {                                                                // 161
            if(value === notificationType) {                                                                       // 162
                notificationClass = key.toLowerCase();                                                             // 163
            }                                                                                                      // 164
        });                                                                                                        // 165
                                                                                                                   // 166
        return notificationClass;                                                                                  // 167
    };                                                                                                             // 168
                                                                                                                   // 169
    /***                                                                                                           // 170
     * Removes the notifications matching the selector                                                             // 171
     * @param selector                                                                                             // 172
     */                                                                                                            // 173
    Notifications.prototype.remove = function (selector) {                                                         // 174
        this._getNotificationsCollection().remove(selector);                                                       // 175
                                                                                                                   // 176
        if (this._notificationTimeout) {                                                                           // 177
            Meteor.clearTimeout(this._notificationTimeout);                                                        // 178
            this._notificationTimeout = undefined;                                                                 // 179
            this._createTimeout();                                                                                 // 180
        }                                                                                                          // 181
    };                                                                                                             // 182
                                                                                                                   // 183
    /***                                                                                                           // 184
     * Stores constants for the different notification types                                                       // 185
     * @type {{ERROR: number, WARNING: number, INFO: number, SUCCESS: number}}                                     // 186
     */                                                                                                            // 187
    Notifications.prototype.TYPES = {                                                                              // 188
        'ERROR': 1,                                                                                                // 189
        'WARNING': 2,                                                                                              // 190
        'INFO': 3,                                                                                                 // 191
        'SUCCESS': 4                                                                                               // 192
    };                                                                                                             // 193
                                                                                                                   // 194
    /***                                                                                                           // 195
     * Object with the default options for the notifications                                                       // 196
     * @type {{type: number, userCloseable: boolean, timeout: number}}                                             // 197
     */                                                                                                            // 198
    Notifications.prototype.defaultOptions = {                                                                     // 199
        type: Notifications.prototype.TYPES.INFO,                                                                  // 200
        userCloseable: true,                                                                                       // 201
        timeout: 0,                                                                                                // 202
        animationSpeed: 400,                                                                                       // 203
        hideAnimationProperties: {                                                                                 // 204
            height: 0,                                                                                             // 205
            opacity: 0,                                                                                            // 206
            paddingTop: 0,                                                                                         // 207
            paddingBottom: 0,                                                                                      // 208
            marginTop: 0                                                                                           // 209
        }                                                                                                          // 210
    };                                                                                                             // 211
                                                                                                                   // 212
    return Notifications;                                                                                          // 213
})();                                                                                                              // 214
                                                                                                                   // 215
Notifications = new constructor();                                                                                 // 216
                                                                                                                   // 217
Template.notifications.notifications = function() {                                                                // 218
    return Notifications._getNotificationsCollection().find();                                                     // 219
};                                                                                                                 // 220
                                                                                                                   // 221
Template.notifications.rendered = function () {                                                                    // 222
    this.firstNode._uihooks = {                                                                                    // 223
        insertElement: function (node, next) {                                                                     // 224
            var data = UI.getElementData(node);                                                                    // 225
                                                                                                                   // 226
            $(node)                                                                                                // 227
                .addClass('hidden')                                                                                // 228
                .insertBefore(next)                                                                                // 229
                .fadeIn({duration: data.animationSpeed})                                                           // 230
                .promise()                                                                                         // 231
                .done(function () {                                                                                // 232
                    $(this).removeClass('hidden');                                                                 // 233
                });                                                                                                // 234
        },                                                                                                         // 235
        removeElement: function (node) {                                                                           // 236
            var data = UI.getElementData(node);                                                                    // 237
                                                                                                                   // 238
            $(node).animate(data.hideAnimationProperties, {duration: data.animationSpeed, complete: function () {  // 239
                $(node).remove();                                                                                  // 240
            }});                                                                                                   // 241
        }                                                                                                          // 242
    };                                                                                                             // 243
};                                                                                                                 // 244
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/notifications/notification.js                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
'use strict';                                                                                                      // 1
                                                                                                                   // 2
Template.notification.notificationColor = function(notificationType) {                                             // 3
    return Notifications.getNotificationClass(notificationType);                                                   // 4
};                                                                                                                 // 5
                                                                                                                   // 6
Template.notification.events = {                                                                                   // 7
    'click': function () {                                                                                         // 8
        if (this.userCloseable) {                                                                                  // 9
            Notifications.remove(this._id);                                                                        // 10
        }                                                                                                          // 11
    }                                                                                                              // 12
};                                                                                                                 // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.notifications = {
  Notifications: Notifications
};

})();

//# sourceMappingURL=1a93c50e028ffe3e9eaa3443bfe032bf42089f80.map
