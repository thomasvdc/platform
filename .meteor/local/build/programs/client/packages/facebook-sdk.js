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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var Spacebars = Package.spacebars.Spacebars;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var Template = Package.templating.Template;
var Meteor = Package.meteor.Meteor;
var DDP = Package.livedata.DDP;
var WebApp = Package.webapp.WebApp;
var HTML = Package.htmljs.HTML;

(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/facebook-sdk/sdk.js                                      //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function(d, s, id){                                                 // 1
 var js, fjs = d.getElementsByTagName(s)[0];                         // 2
 if (d.getElementById(id)) {return;}                                 // 3
 js = d.createElement(s); js.id = id;                                // 4
 js.src = "//connect.facebook.net/en_US/all/debug.js";               // 5
 fjs.parentNode.insertBefore(js, fjs);                               // 6
}(document, 'script', 'facebook-jssdk'));                            // 7
                                                                     // 8
///////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/facebook-sdk/template.templates.js                       //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
                                                                     // 1
Template.__define__("facebookLike", (function() {                    // 2
  var self = this;                                                   // 3
  var template = this;                                               // 4
  return HTML.DIV({                                                  // 5
    "class": "fb-like",                                              // 6
    "data-send": "true",                                             // 7
    "data-width": function() {                                       // 8
      return Spacebars.mustache(self.lookup("width"));               // 9
    },                                                               // 10
    "data-show-faces": function() {                                  // 11
      return Spacebars.mustache(self.lookup("faces"));               // 12
    },                                                               // 13
    "data-action": function() {                                      // 14
      return Spacebars.mustache(self.lookup("action"));              // 15
    },                                                               // 16
    "data-colorscheme": function() {                                 // 17
      return Spacebars.mustache(self.lookup("colorscheme"));         // 18
    },                                                               // 19
    "data-href": function() {                                        // 20
      return Spacebars.mustache(self.lookup("href"));                // 21
    },                                                               // 22
    "data-kid-directed-site": function() {                           // 23
      return Spacebars.mustache(self.lookup("kid"));                 // 24
    },                                                               // 25
    "data-layout": function() {                                      // 26
      return Spacebars.mustache(self.lookup("layout"));              // 27
    },                                                               // 28
    "data-ref": function() {                                         // 29
      return Spacebars.mustache(self.lookup("ref"));                 // 30
    },                                                               // 31
    "data-share": function() {                                       // 32
      return Spacebars.mustache(self.lookup("share"));               // 33
    }                                                                // 34
  });                                                                // 35
}));                                                                 // 36
                                                                     // 37
Template.__define__("facebookShare", (function() {                   // 38
  var self = this;                                                   // 39
  var template = this;                                               // 40
  return HTML.DIV({                                                  // 41
    "class": "fb-share-button",                                      // 42
    "data-href": function() {                                        // 43
      return Spacebars.mustache(self.lookup("href"));                // 44
    },                                                               // 45
    "data-type": function() {                                        // 46
      return Spacebars.mustache(self.lookup("type"));                // 47
    },                                                               // 48
    "data-width": function() {                                       // 49
      return Spacebars.mustache(self.lookup("width"));               // 50
    }                                                                // 51
  });                                                                // 52
}));                                                                 // 53
                                                                     // 54
Template.__define__("facebookPost", (function() {                    // 55
  var self = this;                                                   // 56
  var template = this;                                               // 57
  return HTML.DIV({                                                  // 58
    "class": "fb-post",                                              // 59
    "data-href": function() {                                        // 60
      return Spacebars.mustache(self.lookup("href"));                // 61
    },                                                               // 62
    "data-width": function() {                                       // 63
      return Spacebars.mustache(self.lookup("width"));               // 64
    }                                                                // 65
  });                                                                // 66
}));                                                                 // 67
                                                                     // 68
Template.__define__("facebookComments", (function() {                // 69
  var self = this;                                                   // 70
  var template = this;                                               // 71
  return HTML.DIV({                                                  // 72
    "class": "fb-comments",                                          // 73
    "data-href": function() {                                        // 74
      return Spacebars.mustache(self.lookup("href"));                // 75
    },                                                               // 76
    "data-numposts": function() {                                    // 77
      return Spacebars.mustache(self.lookup("num_posts"));           // 78
    },                                                               // 79
    "data-colorscheme": function() {                                 // 80
      return Spacebars.mustache(self.lookup("colorscheme"));         // 81
    },                                                               // 82
    "data-width": function() {                                       // 83
      return Spacebars.mustache(self.lookup("width"));               // 84
    },                                                               // 85
    "data-order-by": function() {                                    // 86
      return Spacebars.mustache(self.lookup("order_by"));            // 87
    },                                                               // 88
    "data-mobile": function() {                                      // 89
      return Spacebars.mustache(self.lookup("mobile"));              // 90
    }                                                                // 91
  });                                                                // 92
}));                                                                 // 93
                                                                     // 94
Template.__define__("facebookSend", (function() {                    // 95
  var self = this;                                                   // 96
  var template = this;                                               // 97
  return HTML.DIV({                                                  // 98
    "class": "fb-send",                                              // 99
    "data-href": function() {                                        // 100
      return Spacebars.mustache(self.lookup("href"));                // 101
    },                                                               // 102
    "data-colorscheme": function() {                                 // 103
      return Spacebars.mustache(self.lookup("colorscheme"));         // 104
    },                                                               // 105
    "data-kid-directed-site": function() {                           // 106
      return Spacebars.mustache(self.lookup("kid_directed_site"));   // 107
    },                                                               // 108
    "data-ref": function() {                                         // 109
      return Spacebars.mustache(self.lookup("ref"));                 // 110
    }                                                                // 111
  });                                                                // 112
}));                                                                 // 113
                                                                     // 114
Template.__define__("facebookFollow", (function() {                  // 115
  var self = this;                                                   // 116
  var template = this;                                               // 117
  return HTML.DIV({                                                  // 118
    "class": "fb-follow",                                            // 119
    "data-href": function() {                                        // 120
      return Spacebars.mustache(self.lookup("href"));                // 121
    },                                                               // 122
    "data-colorscheme": function() {                                 // 123
      return Spacebars.mustache(self.lookup("colorscheme"));         // 124
    },                                                               // 125
    "data-layout": function() {                                      // 126
      return Spacebars.mustache(self.lookup("layout"));              // 127
    },                                                               // 128
    "data-show-faces": function() {                                  // 129
      return Spacebars.mustache(self.lookup("faces"));               // 130
    }                                                                // 131
  });                                                                // 132
}));                                                                 // 133
                                                                     // 134
Template.__define__("facebookActivity", (function() {                // 135
  var self = this;                                                   // 136
  var template = this;                                               // 137
  return HTML.DIV({                                                  // 138
    "class": "fb-activity",                                          // 139
    "data-site": function() {                                        // 140
      return Spacebars.mustache(self.lookup("site"));                // 141
    },                                                               // 142
    "data-action": function() {                                      // 143
      return Spacebars.mustache(self.lookup("action"));              // 144
    },                                                               // 145
    "data-colorscheme": function() {                                 // 146
      return Spacebars.mustache(self.lookup("colorscheme"));         // 147
    },                                                               // 148
    "data-header": function() {                                      // 149
      return Spacebars.mustache(self.lookup("header"));              // 150
    },                                                               // 151
    "data-filter": function() {                                      // 152
      return Spacebars.mustache(self.lookup("filter"));              // 153
    },                                                               // 154
    "data-linktarget": function() {                                  // 155
      return Spacebars.mustache(self.lookup("linktarget"));          // 156
    },                                                               // 157
    "data-recommendations": function() {                             // 158
      return Spacebars.mustache(self.lookup("recommendations"));     // 159
    },                                                               // 160
    "data-ref": function() {                                         // 161
      return Spacebars.mustache(self.lookup("ref"));                 // 162
    },                                                               // 163
    "data-width": function() {                                       // 164
      return Spacebars.mustache(self.lookup("width"));               // 165
    }                                                                // 166
  });                                                                // 167
}));                                                                 // 168
                                                                     // 169
Template.__define__("facebookRecommendations", (function() {         // 170
  var self = this;                                                   // 171
  var template = this;                                               // 172
  return HTML.DIV({                                                  // 173
    "class": "fb-recommendations",                                   // 174
    "data-site": function() {                                        // 175
      return Spacebars.mustache(self.lookup("site"));                // 176
    },                                                               // 177
    "data-action": function() {                                      // 178
      return Spacebars.mustache(self.lookup("action"));              // 179
    },                                                               // 180
    "data-colorscheme": function() {                                 // 181
      return Spacebars.mustache(self.lookup("colorscheme"));         // 182
    },                                                               // 183
    "data-header": function() {                                      // 184
      return Spacebars.mustache(self.lookup("header"));              // 185
    },                                                               // 186
    "data-add-id": function() {                                      // 187
      return Spacebars.mustache(self.lookup("add_id"));              // 188
    },                                                               // 189
    "data-height": function() {                                      // 190
      return Spacebars.mustache(self.lookup("height"));              // 191
    },                                                               // 192
    "data-linktarget": function() {                                  // 193
      return Spacebars.mustache(self.lookup("linktarget"));          // 194
    },                                                               // 195
    "data-ref": function() {                                         // 196
      return Spacebars.mustache(self.lookup("ref"));                 // 197
    },                                                               // 198
    "data-width": function() {                                       // 199
      return Spacebars.mustache(self.lookup("width"));               // 200
    }                                                                // 201
  });                                                                // 202
}));                                                                 // 203
                                                                     // 204
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['facebook-sdk'] = {};

})();

//# sourceMappingURL=53e49c56776118b7dc0d296785e722bc1c8f335b.map
