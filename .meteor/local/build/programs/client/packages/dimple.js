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

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/dimple/dimple.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Copyright: 2013 PMSI-AlignAlytics                                                                                   // 1
// License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                                  // 2
// Source: /src/objects/begin.js                                                                                       // 3
                                                                                                                       // 4
// Create the stub object                                                                                              // 5
var dimple = {                                                                                                         // 6
    version: "1.1.5",                                                                                                  // 7
    plot: {},                                                                                                          // 8
    aggregateMethod: {}                                                                                                // 9
};                                                                                                                     // 10
                                                                                                                       // 11
window.dimple = dimple;                                                                                                // 12
                                                                                                                       // 13
// Wrap all application code in a self-executing function                                                              // 14
(function () {                                                                                                         // 15
    "use strict";                                                                                                      // 16
                                                                                                                       // 17
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 18
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 19
    // Source: /src/objects/axis/begin.js                                                                              // 20
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis                                               // 21
    dimple.axis = function (chart, position, categoryFields, measure, timeField) {                                     // 22
                                                                                                                       // 23
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-chart                                // 24
        this.chart = chart;                                                                                            // 25
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-position                             // 26
        this.position = position;                                                                                      // 27
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-categoryFields                       // 28
        this.categoryFields = (timeField === null || timeField === undefined ? categoryFields : [].concat(timeField)); // 29
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-measure                              // 30
        this.measure = measure;                                                                                        // 31
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-timeField                            // 32
        this.timeField = timeField;                                                                                    // 33
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-floatingBarWidth                     // 34
        this.floatingBarWidth = 5;                                                                                     // 35
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-hidden                               // 36
        this.hidden = false;                                                                                           // 37
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-showPercent                          // 38
        this.showPercent = false;                                                                                      // 39
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-colors                               // 40
        this.colors = null;                                                                                            // 41
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-overrideMin                          // 42
        this.overrideMin = null;                                                                                       // 43
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-overrideMax                          // 44
        this.overrideMax = null;                                                                                       // 45
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-shapes                               // 46
        this.shapes = null;                                                                                            // 47
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-showGridlines                        // 48
        this.showGridlines = null;                                                                                     // 49
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-gridlineShapes                       // 50
        this.gridlineShapes = null;                                                                                    // 51
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-titleShape                           // 52
        this.titleShape = null;                                                                                        // 53
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-dateParseFormat                      // 54
        this.dateParseFormat = null;                                                                                   // 55
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-tickFormat                           // 56
        this.tickFormat = null;                                                                                        // 57
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-timePeriod                           // 58
        this.timePeriod = null;                                                                                        // 59
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-timeInterval                         // 60
        this.timeInterval = 1;                                                                                         // 61
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-useLog                               // 62
        this.useLog = false;                                                                                           // 63
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-logBase                              // 64
        this.logBase = 10;                                                                                             // 65
                                                                                                                       // 66
        // The scale determined by the update method                                                                   // 67
        this._scale = null;                                                                                            // 68
        // The minimum and maximum axis values                                                                         // 69
        this._min = 0;                                                                                                 // 70
        this._max = 0;                                                                                                 // 71
        // Chart origin before and after an update.  This helps                                                        // 72
        // with transitions                                                                                            // 73
        this._previousOrigin = null;                                                                                   // 74
        this._origin = null;                                                                                           // 75
        // The order definition array                                                                                  // 76
        this._orderRules = [];                                                                                         // 77
        // The group order definition array                                                                            // 78
        this._groupOrderRules = [];                                                                                    // 79
                                                                                                                       // 80
                                                                                                                       // 81
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 82
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 83
        // Source: /src/objects/axis/methods/_draw.js                                                                  // 84
        this._draw = null;                                                                                             // 85
                                                                                                                       // 86
                                                                                                                       // 87
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 88
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 89
        // Source: /src/objects/axis/methods/_getFormat.js                                                             // 90
        this._getFormat = function () {                                                                                // 91
            var returnFormat,                                                                                          // 92
                max,                                                                                                   // 93
                min,                                                                                                   // 94
                len,                                                                                                   // 95
                chunks,                                                                                                // 96
                suffix,                                                                                                // 97
                dp;                                                                                                    // 98
            if (this.tickFormat !== null && this.tickFormat !== undefined) {                                           // 99
                if (this._hasTimeField()) {                                                                            // 100
                    returnFormat = d3.time.format(this.tickFormat);                                                    // 101
                } else {                                                                                               // 102
                    returnFormat = d3.format(this.tickFormat);                                                         // 103
                }                                                                                                      // 104
            } else if (this.showPercent) {                                                                             // 105
                returnFormat = d3.format("%");                                                                         // 106
            } else if (this.useLog && this.measure !== null) {                                                         // 107
                // With linear axes the range is used to apply uniform                                                 // 108
                // formatting but with a log axis it is based on each number                                           // 109
                // independently                                                                                       // 110
                returnFormat = function (n) {                                                                          // 111
                    var l = Math.floor(Math.abs(n), 0).toString().length,                                              // 112
                        c = Math.min(Math.floor((l - 1) / 3), 4),                                                      // 113
                        s = "kmBT".substring(c - 1, c),                                                                // 114
                        d = (Math.round((n / Math.pow(1000, c)) * 10).toString().slice(-1) === "0" ? 0 : 1);           // 115
                    return (n === 0 ? 0 : d3.format(",." + d + "f")(n / Math.pow(1000, c)) + s);                       // 116
                };                                                                                                     // 117
            } else if (this.measure !== null) {                                                                        // 118
                max = Math.floor(Math.abs(this._max), 0).toString();                                                   // 119
                min = Math.floor(Math.abs(this._min), 0).toString();                                                   // 120
                len = Math.max(min.length, max.length);                                                                // 121
                if (len > 3) {                                                                                         // 122
                    chunks = Math.min(Math.floor((len - 1) / 3), 4);                                                   // 123
                    suffix = "kmBT".substring(chunks - 1, chunks);                                                     // 124
                    dp = (len - chunks * 3 <= 1 ? 1 : 0);                                                              // 125
                    returnFormat = function (n) {                                                                      // 126
                        return (n === 0 ? 0 : d3.format(",." + dp + "f")(n / Math.pow(1000, chunks)) + suffix);        // 127
                    };                                                                                                 // 128
                } else {                                                                                               // 129
                    dp = (len <= 1 ? 1 : 0);                                                                           // 130
                    returnFormat = d3.format(",." + dp + "f");                                                         // 131
                }                                                                                                      // 132
            } else {                                                                                                   // 133
                returnFormat = function (n) { return n; };                                                             // 134
            }                                                                                                          // 135
            return returnFormat;                                                                                       // 136
        };                                                                                                             // 137
                                                                                                                       // 138
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 139
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 140
        // Source: /src/objects/axis/methods/_getTimePeriod.js                                                         // 141
        this._getTimePeriod = function () {                                                                            // 142
            // A javascript date object                                                                                // 143
            var outPeriod = this.timePeriod,                                                                           // 144
                maxPeriods = 30,                                                                                       // 145
                diff = this._max - this._min;                                                                          // 146
            if (this._hasTimeField && (this.timePeriod === null || this.timePeriod === undefined)) {                   // 147
                // Calculate using millisecond values for speed.  Using the date range requires creating an array      // 148
                // which in the case of seconds kills the browser.  All constants are straight sums of milliseconds    // 149
                // except months taken as (86400000 * 365.25) / 12 = 2629800000                                        // 150
                if (diff / 1000 <= maxPeriods) {                                                                       // 151
                    outPeriod = d3.time.seconds;                                                                       // 152
                } else if (diff / 60000 <= maxPeriods) {                                                               // 153
                    outPeriod = d3.time.minutes;                                                                       // 154
                } else if (diff / 3600000 <= maxPeriods) {                                                             // 155
                    outPeriod = d3.time.hours;                                                                         // 156
                } else if (diff / 86400000 <= maxPeriods) {                                                            // 157
                    outPeriod = d3.time.days;                                                                          // 158
                } else if (diff / 604800000 <= maxPeriods) {                                                           // 159
                    outPeriod = d3.time.weeks;                                                                         // 160
                } else if (diff / 2629800000 <= maxPeriods) {                                                          // 161
                    outPeriod = d3.time.months;                                                                        // 162
                } else {                                                                                               // 163
                    outPeriod = d3.time.years;                                                                         // 164
                }                                                                                                      // 165
            }                                                                                                          // 166
            // Return the date                                                                                         // 167
            return outPeriod;                                                                                          // 168
        };                                                                                                             // 169
                                                                                                                       // 170
                                                                                                                       // 171
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 172
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 173
        // Source: /src/objects/axis/methods/_hasCategories.js                                                         // 174
        this._hasCategories = function () {                                                                            // 175
            return (this.categoryFields !== null && this.categoryFields !== undefined && this.categoryFields.length > 0);
        };                                                                                                             // 177
                                                                                                                       // 178
                                                                                                                       // 179
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 180
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 181
        // Source: /src/objects/axis/methods/_hasMeasure.js                                                            // 182
        this._hasMeasure = function () {                                                                               // 183
            return (this.measure !== null && this.measure !== undefined);                                              // 184
        };                                                                                                             // 185
                                                                                                                       // 186
                                                                                                                       // 187
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 188
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 189
        // Source: /src/objects/axis/methods/_hasTimeField.js                                                          // 190
        this._hasTimeField = function () {                                                                             // 191
            return (this.timeField !== null && this.timeField !== undefined);                                          // 192
        };                                                                                                             // 193
                                                                                                                       // 194
                                                                                                                       // 195
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 196
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 197
        // Source: /src/objects/axis/methods/_parseDate.js                                                             // 198
        this._parseDate = function (inDate) {                                                                          // 199
            // A javascript date object                                                                                // 200
            var outDate;                                                                                               // 201
            if (this.dateParseFormat === null || this.dateParseFormat === undefined) {                                 // 202
                // Moved this into the condition so that using epoch time requires no data format to be set.           // 203
                // For example 20131122 might be parsed as %Y%m%d not treated as epoch time.                           // 204
                if (!isNaN(inDate)) {                                                                                  // 205
                    // If inDate is a number, assume it's epoch time                                                   // 206
                    outDate = new Date(inDate);                                                                        // 207
                } else {                                                                                               // 208
                    // If nothing has been explicity defined you are in the hands of the browser gods                  // 209
                    // may they smile upon you...                                                                      // 210
                    outDate = Date.parse(inDate);                                                                      // 211
                }                                                                                                      // 212
            } else {                                                                                                   // 213
                outDate = d3.time.format(this.dateParseFormat).parse(inDate);                                          // 214
            }                                                                                                          // 215
            // Return the date                                                                                         // 216
            return outDate;                                                                                            // 217
        };                                                                                                             // 218
                                                                                                                       // 219
                                                                                                                       // 220
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 221
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 222
        // Source: /src/objects/axis/methods/_update.js                                                                // 223
        this._update = function (refactor) {                                                                           // 224
                                                                                                                       // 225
            var distinctCats = [],                                                                                     // 226
                ticks,                                                                                                 // 227
                step,                                                                                                  // 228
                remainder,                                                                                             // 229
                origin,                                                                                                // 230
                getOrderedCategories = function (self, axPos, oppPos) {                                                // 231
                    var category = self.categoryFields[0],                                                             // 232
                        chartData = self.chart._getAllData(),                                                          // 233
                        sortBy = category,                                                                             // 234
                        desc = false,                                                                                  // 235
                        isDate = true,                                                                                 // 236
                        currentValue = null,                                                                           // 237
                        i,                                                                                             // 238
                        definitions = [];                                                                              // 239
                    // Check whether this field is a date                                                              // 240
                    for (i = 0; i < chartData.length; i += 1) {                                                        // 241
                        currentValue = self._parseDate(chartData[i][category]);                                        // 242
                        if (currentValue !== null && currentValue !== undefined && isNaN(currentValue)) {              // 243
                            isDate = false;                                                                            // 244
                            break;                                                                                     // 245
                        }                                                                                              // 246
                    }                                                                                                  // 247
                    if (!isDate) {                                                                                     // 248
                        // Find the first series which connects this axis to another                                   // 249
                        self.chart.series.forEach(function (s) {                                                       // 250
                            if (s[axPos] === self && s[oppPos]._hasMeasure()) {                                        // 251
                                sortBy = s[oppPos].measure;                                                            // 252
                                desc = true;                                                                           // 253
                            }                                                                                          // 254
                        }, this);                                                                                      // 255
                    }                                                                                                  // 256
                    definitions = self._orderRules.concat({ ordering : sortBy, desc : desc });                         // 257
                    return dimple._getOrderedList(chartData, category, definitions);                                   // 258
                };                                                                                                     // 259
                                                                                                                       // 260
            // If the axis is a percentage type axis the bounds must be between -1 and 1.  Sometimes                   // 261
            // binary rounding means it can fall outside that bound so tidy up here                                    // 262
            this._min = (this.showPercent && this._min < -1 ? -1 : this._min);                                         // 263
            this._max = (this.showPercent && this._max > 1 ? 1 : this._max);                                           // 264
                                                                                                                       // 265
            // Override or round the min or max                                                                        // 266
            this._min = (this.overrideMin !== null ? this.overrideMin : this._min);                                    // 267
            this._max = (this.overrideMax !== null ? this.overrideMax : this._max);                                    // 268
                                                                                                                       // 269
            // If this is an x axis                                                                                    // 270
            if (this.position === "x") {                                                                               // 271
                if (this._hasTimeField()) {                                                                            // 272
                    this._scale = d3.time.scale()                                                                      // 273
                        .rangeRound([this.chart._xPixels(), this.chart._xPixels() + this.chart._widthPixels()])        // 274
                        .domain([this._min, this._max]);                                                               // 275
                } else if (this.useLog) {                                                                              // 276
                    this._scale = d3.scale.log()                                                                       // 277
                        .range([this.chart._xPixels(), this.chart._xPixels() + this.chart._widthPixels()])             // 278
                        .domain([                                                                                      // 279
                            (this._min === 0 ? Math.pow(this.logBase, -1) : this._min),                                // 280
                            (this._max === 0 ? -1 * Math.pow(this.logBase, -1) : this._max)                            // 281
                        ])                                                                                             // 282
                        .clamp(true)                                                                                   // 283
                        .base(this.logBase)                                                                            // 284
                        .nice();                                                                                       // 285
                } else if (this.measure === null || this.measure === undefined) {                                      // 286
                    distinctCats = getOrderedCategories(this, "x", "y");                                               // 287
                    this._scale = d3.scale.ordinal()                                                                   // 288
                        .rangePoints([this.chart._xPixels(), this.chart._xPixels() + this.chart._widthPixels()])       // 289
                        .domain(distinctCats.concat([""]));                                                            // 290
                } else {                                                                                               // 291
                    this._scale = d3.scale.linear()                                                                    // 292
                        .range([this.chart._xPixels(), this.chart._xPixels() + this.chart._widthPixels()])             // 293
                        .domain([this._min, this._max]).nice();                                                        // 294
                }                                                                                                      // 295
                // If it's visible, orient it at the top or bottom if it's first or second respectively                // 296
                if (!this.hidden) {                                                                                    // 297
                    switch (this.chart._axisIndex(this, "x")) {                                                        // 298
                    case 0:                                                                                            // 299
                        this._draw = d3.svg.axis()                                                                     // 300
                            .orient("bottom")                                                                          // 301
                            .scale(this._scale);                                                                       // 302
                        break;                                                                                         // 303
                    case 1:                                                                                            // 304
                        this._draw = d3.svg.axis()                                                                     // 305
                            .orient("top")                                                                             // 306
                            .scale(this._scale);                                                                       // 307
                        break;                                                                                         // 308
                    default:                                                                                           // 309
                        break;                                                                                         // 310
                    }                                                                                                  // 311
                }                                                                                                      // 312
            } else if (this.position === "y") {                                                                        // 313
                if (this._hasTimeField()) {                                                                            // 314
                    this._scale = d3.time.scale()                                                                      // 315
                        .rangeRound([this.chart._yPixels() + this.chart._heightPixels(), this.chart._yPixels()])       // 316
                        .domain([this._min, this._max]);                                                               // 317
                } else if (this.useLog) {                                                                              // 318
                    this._scale = d3.scale.log()                                                                       // 319
                        .range([this.chart._yPixels() + this.chart._heightPixels(), this.chart._yPixels()])            // 320
                        .domain([                                                                                      // 321
                            (this._min === 0 ? Math.pow(this.logBase, -1) : this._min),                                // 322
                            (this._max === 0 ? -1 * Math.pow(this.logBase, -1) : this._max)                            // 323
                        ])                                                                                             // 324
                        .clamp(true)                                                                                   // 325
                        .base(this.logBase)                                                                            // 326
                        .nice();                                                                                       // 327
                } else if (this.measure === null || this.measure === undefined) {                                      // 328
                    distinctCats = getOrderedCategories(this, "y", "x");                                               // 329
                    this._scale = d3.scale.ordinal()                                                                   // 330
                        .rangePoints([this.chart._yPixels() + this.chart._heightPixels(), this.chart._yPixels()])      // 331
                        .domain(distinctCats.concat([""]));                                                            // 332
                } else {                                                                                               // 333
                    this._scale = d3.scale.linear()                                                                    // 334
                        .range([this.chart._yPixels() + this.chart._heightPixels(), this.chart._yPixels()])            // 335
                        .domain([this._min, this._max])                                                                // 336
                        .nice();                                                                                       // 337
                }                                                                                                      // 338
                // if it's visible, orient it at the left or right if it's first or second respectively                // 339
                if (!this.hidden) {                                                                                    // 340
                    switch (this.chart._axisIndex(this, "y")) {                                                        // 341
                    case 0:                                                                                            // 342
                        this._draw = d3.svg.axis()                                                                     // 343
                            .orient("left")                                                                            // 344
                            .scale(this._scale);                                                                       // 345
                        break;                                                                                         // 346
                    case 1:                                                                                            // 347
                        this._draw = d3.svg.axis()                                                                     // 348
                            .orient("right")                                                                           // 349
                            .scale(this._scale);                                                                       // 350
                        break;                                                                                         // 351
                    default:                                                                                           // 352
                        break;                                                                                         // 353
                    }                                                                                                  // 354
                }                                                                                                      // 355
            } else if (this.position.length > 0 && this.position[0] === "z") {                                         // 356
                if (this.useLog) {                                                                                     // 357
                    this._scale = d3.scale.log()                                                                       // 358
                        .range([this.chart._heightPixels() / 300, this.chart._heightPixels() / 10])                    // 359
                        .domain([                                                                                      // 360
                            (this._min === 0 ? Math.pow(this.logBase, -1) : this._min),                                // 361
                            (this._max === 0 ? -1 * Math.pow(this.logBase, -1) : this._max)                            // 362
                        ])                                                                                             // 363
                        .clamp(true)                                                                                   // 364
                        .base(this.logBase);                                                                           // 365
                } else {                                                                                               // 366
                    this._scale = d3.scale.linear()                                                                    // 367
                        .range([this.chart._heightPixels() / 300, this.chart._heightPixels() / 10])                    // 368
                        .domain([this._min, this._max]);                                                               // 369
                }                                                                                                      // 370
            } else if (this.position.length > 0 && this.position[0] === "c") {                                         // 371
                this._scale = d3.scale.linear()                                                                        // 372
                    .range([0, (this.colors === null || this.colors.length === 1 ? 1 : this.colors.length - 1)])       // 373
                    .domain([this._min, this._max]);                                                                   // 374
            }                                                                                                          // 375
            // Check that the axis ends on a labelled tick                                                             // 376
            if ((refactor === null || refactor === undefined || refactor === false) && !this._hasTimeField() && this._scale !== null && this._scale.ticks !== null && this._scale.ticks !== undefined && this._scale.ticks(10).length > 0 && (this.position === "x" || this.position === "y")) {
                                                                                                                       // 378
                // Get the ticks determined based on a split of 10                                                     // 379
                ticks = this._scale.ticks(10);                                                                         // 380
                // Get the step between ticks                                                                          // 381
                step = ticks[1] - ticks[0];                                                                            // 382
                // Get the remainder                                                                                   // 383
                remainder = ((this._max - this._min) % step).toFixed(0);                                               // 384
                                                                                                                       // 385
                // If the remainder is not zero                                                                        // 386
                if (remainder !== 0) {                                                                                 // 387
                    // Set the bounds                                                                                  // 388
                    this._max = Math.ceil(this._max / step) * step;                                                    // 389
                    this._min = Math.floor(this._min / step) * step;                                                   // 390
                    // Recursively call the method to recalculate the scale.  This shouldn't enter this block again.   // 391
                    this._update(true);                                                                                // 392
                }                                                                                                      // 393
            }                                                                                                          // 394
                                                                                                                       // 395
            // Populate the origin.  Previously this incorrectly looked up 0 on the axis which only works              // 396
            // for measure axes leading to Issue #19.  This fix uses the first category value in cases where           // 397
            // one is required.                                                                                        // 398
            if (distinctCats !== null && distinctCats !== undefined && distinctCats.length > 0) {                      // 399
                origin = this._scale.copy()(distinctCats[0]);                                                          // 400
            } else {                                                                                                   // 401
                origin = this._scale.copy()(0);                                                                        // 402
            }                                                                                                          // 403
                                                                                                                       // 404
            if (this._origin !== origin) {                                                                             // 405
                this._previousOrigin = (this._origin === null ? origin : this._origin);                                // 406
                this._origin = origin;                                                                                 // 407
            }                                                                                                          // 408
                                                                                                                       // 409
            // Return axis for chaining                                                                                // 410
            return this;                                                                                               // 411
        };                                                                                                             // 412
                                                                                                                       // 413
                                                                                                                       // 414
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 415
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 416
        // Source: /src/objects/axis/methods/addGroupOrderRule.js                                                      // 417
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-addGroupOrderRule                    // 418
        this.addGroupOrderRule = function (ordering, desc) {                                                           // 419
            this._groupOrderRules.push({ ordering : ordering, desc : desc });                                          // 420
        };                                                                                                             // 421
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 422
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 423
        // Source: /src/objects/axis/methods/addOrderRule.js                                                           // 424
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.axis#wiki-addOrderRule                         // 425
        this.addOrderRule = function (ordering, desc) {                                                                // 426
            this._orderRules.push({ ordering : ordering, desc : desc });                                               // 427
        };                                                                                                             // 428
    };                                                                                                                 // 429
    // End dimple.axis                                                                                                 // 430
                                                                                                                       // 431
                                                                                                                       // 432
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 433
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 434
    // Source: /src/objects/chart/begin.js                                                                             // 435
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart                                              // 436
    dimple.chart = function (svg, data) {                                                                              // 437
                                                                                                                       // 438
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-svg                                 // 439
        this.svg = svg;                                                                                                // 440
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-x                                   // 441
        this.x = "10%";                                                                                                // 442
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-y                                   // 443
        this.y = "10%";                                                                                                // 444
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-width                               // 445
        this.width = "80%";                                                                                            // 446
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-height                              // 447
        this.height = "80%";                                                                                           // 448
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-data                                // 449
        this.data = data;                                                                                              // 450
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-noFormats                           // 451
        this.noFormats = false;                                                                                        // 452
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-axes                                // 453
        this.axes = [];                                                                                                // 454
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-series                              // 455
        this.series = [];                                                                                              // 456
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-legends                             // 457
        this.legends = [];                                                                                             // 458
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-storyboard                          // 459
        this.storyboard = null;                                                                                        // 460
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-titleShape                          // 461
        this.titleShape = null;                                                                                        // 462
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-shapes                              // 463
        this.shapes = null;                                                                                            // 464
                                                                                                                       // 465
        // The group within which to put all of this chart's objects                                                   // 466
        this._group = svg.append("g");                                                                                 // 467
        // The group within which to put tooltips.  This is not initialised here because                               // 468
        // the group would end up behind other chart contents in a multi chart output.  It will                        // 469
        // therefore be added and removed by the mouse enter/leave events                                              // 470
        this._tooltipGroup = null;                                                                                     // 471
        // Colors assigned to chart contents.  E.g. a series value.                                                    // 472
        this._assignedColors = {};                                                                                     // 473
        // The next colour index to use, this value is cycled around for all default colours                           // 474
        this._nextColor = 0;                                                                                           // 475
                                                                                                                       // 476
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 477
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 478
        // Source: /src/objects/chart/methods/_axisIndex.js                                                            // 479
        // Return the ordinal value of the passed axis.  If an orientation is passed, return the order for the         // 480
        // specific orientation, otherwise return the order from all axes.  Returns -1 if the passed axis isn't part of the collection
        this._axisIndex = function (axis, orientation) {                                                               // 482
                                                                                                                       // 483
            var i = 0,                                                                                                 // 484
                axisCount = 0,                                                                                         // 485
                index = -1;                                                                                            // 486
                                                                                                                       // 487
            for (i = 0; i < this.axes.length; i += 1) {                                                                // 488
                if (this.axes[i] === axis) {                                                                           // 489
                    index = axisCount;                                                                                 // 490
                    break;                                                                                             // 491
                }                                                                                                      // 492
                if (orientation === null || orientation === undefined || orientation[0] === this.axes[i].position[0]) {
                    axisCount += 1;                                                                                    // 494
                }                                                                                                      // 495
            }                                                                                                          // 496
                                                                                                                       // 497
            return index;                                                                                              // 498
                                                                                                                       // 499
        };                                                                                                             // 500
                                                                                                                       // 501
                                                                                                                       // 502
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 503
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 504
        // Source: /src/objects/chart/methods/_getAllData.js                                                           // 505
        // Mash together all of the datasets                                                                           // 506
        this._getAllData = function () {                                                                               // 507
            // The return array will include all data for chart as well as an series                                   // 508
            var returnData = [];                                                                                       // 509
            // If there is data at the chart level                                                                     // 510
            if (this.data !== null && this.data !== undefined && this.data.length > 0) {                               // 511
                returnData = returnData.concat(this.data);                                                             // 512
            }                                                                                                          // 513
            // If there are series defined                                                                             // 514
            if (this.series !== null && this.series !== undefined && this.series.length > 0) {                         // 515
                this.series.forEach(function (s) {                                                                     // 516
                    if (s.data !== null && s.data !== undefined && s.data.length > 0) {                                // 517
                        returnData = returnData.concat(s.data);                                                        // 518
                    }                                                                                                  // 519
                });                                                                                                    // 520
            }                                                                                                          // 521
            // Return the final dataset                                                                                // 522
            return returnData;                                                                                         // 523
        };                                                                                                             // 524
                                                                                                                       // 525
                                                                                                                       // 526
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 527
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 528
        // Source: /src/objects/chart/methods/_getSeriesData.js                                                        // 529
        // Create a dataset containing positioning information for every series                                        // 530
        this._getSeriesData = function () {                                                                            // 531
            // If there are series                                                                                     // 532
            if (this.series !== null && this.series !== undefined) {                                                   // 533
                // Iterate all the series                                                                              // 534
                this.series.forEach(function (series) {                                                                // 535
                    // The data for this series                                                                        // 536
                    var returnData = [],                                                                               // 537
                        // Handle multiple category values by iterating the fields in the row and concatonate the values
                        // This is repeated for each axis using a small anon function                                  // 539
                        getField = function (axis, row) {                                                              // 540
                            var returnField = [];                                                                      // 541
                            if (axis !== null) {                                                                       // 542
                                if (axis._hasTimeField()) {                                                            // 543
                                    returnField.push(axis._parseDate(row[axis.timeField]));                            // 544
                                } else if (axis._hasCategories()) {                                                    // 545
                                    axis.categoryFields.forEach(function (cat) {                                       // 546
                                        returnField.push(row[cat]);                                                    // 547
                                    }, this);                                                                          // 548
                                }                                                                                      // 549
                            }                                                                                          // 550
                            return returnField;                                                                        // 551
                        },                                                                                             // 552
                        // Catch a non-numeric value and re-calc as count                                              // 553
                        useCount = { x: false, y: false, z: false, c: false },                                         // 554
                        // If the elements are grouped a unique list of secondary category values will be required     // 555
                        secondaryElements = { x: [], y: [] },                                                          // 556
                        // Get the x and y totals for percentages.  This cannot be done in the loop above as we need the data aggregated before we get an abs total.
                        // otherwise it will wrongly account for negatives and positives rolled together.              // 558
                        totals = { x: [], y: [], z: [] },                                                              // 559
                        colorBounds = { min: null, max: null },                                                        // 560
                        tot,                                                                                           // 561
                        running = { x: [], y: [], z: [] },                                                             // 562
                        addedCats = [],                                                                                // 563
                        catTotals = {},                                                                                // 564
                        grandTotals = { x: 0, y: 0, z: 0 },                                                            // 565
                        key,                                                                                           // 566
                        storyCat = "",                                                                                 // 567
                        orderedStoryboardArray = [],                                                                   // 568
                        seriesCat = "",                                                                                // 569
                        orderedSeriesArray = [],                                                                       // 570
                        xCat = "",                                                                                     // 571
                        xSortArray = [],                                                                               // 572
                        yCat = "",                                                                                     // 573
                        ySortArray = [],                                                                               // 574
                        rules = [],                                                                                    // 575
                        sortedData = series.data || this.data,                                                         // 576
                        groupRules = [];                                                                               // 577
                                                                                                                       // 578
                    if (this.storyboard !== null && this.storyboard !== undefined && this.storyboard.categoryFields.length > 0) {
                        storyCat = this.storyboard.categoryFields[0];                                                  // 580
                        orderedStoryboardArray = dimple._getOrderedList(sortedData, storyCat, this.storyboard._orderRules);
                    }                                                                                                  // 582
                                                                                                                       // 583
                    // Deal with mekkos                                                                                // 584
                    if (series.x._hasCategories() && series.x._hasMeasure()) {                                         // 585
                        xCat = series.x.categoryFields[0];                                                             // 586
                        xSortArray = dimple._getOrderedList(sortedData, xCat, series.x._orderRules.concat([{ ordering : series.x.measure, desc : true }]));
                    }                                                                                                  // 588
                    if (series.y._hasCategories() && series.y._hasMeasure()) {                                         // 589
                        yCat = series.y.categoryFields[0];                                                             // 590
                        ySortArray = dimple._getOrderedList(sortedData, yCat, series.y._orderRules.concat([{ ordering : series.y.measure, desc : true }]));
                    }                                                                                                  // 592
                                                                                                                       // 593
                    if (series.categoryFields !== null && series.categoryFields !== undefined && series.categoryFields.length > 0) {
                        // Concat is used here to break the reference to the parent array, if we don't do this, in a storyboarded chart,
                        // the series rules to grow and grow until the system grinds to a halt trying to deal with them all.
                        rules = [].concat(series._orderRules);                                                         // 597
                        seriesCat = series.categoryFields[0];                                                          // 598
                        if (series.c !== null && series.c !== undefined && series.c._hasMeasure()) {                   // 599
                            rules.push({ ordering : series.c.measure, desc : true });                                  // 600
                        } else if (series.z !== null && series.z !== undefined && series.z._hasMeasure()) {            // 601
                            rules.push({ ordering : series.z.measure, desc : true });                                  // 602
                        } else if (series.x._hasMeasure()) {                                                           // 603
                            rules.push({ ordering : series.x.measure, desc : true });                                  // 604
                        } else if (series.y._hasMeasure()) {                                                           // 605
                            rules.push({ ordering : series.y.measure, desc : true });                                  // 606
                        }                                                                                              // 607
                        orderedSeriesArray = dimple._getOrderedList(sortedData, seriesCat, rules);                     // 608
                    }                                                                                                  // 609
                                                                                                                       // 610
                    sortedData.sort(function (a, b) {                                                                  // 611
                        var returnValue = 0;                                                                           // 612
                        if (storyCat !== "") {                                                                         // 613
                            returnValue = orderedStoryboardArray.indexOf(a[storyCat]) - orderedStoryboardArray.indexOf(b[storyCat]);
                        }                                                                                              // 615
                        if (xCat !== "" && returnValue === 0) {                                                        // 616
                            returnValue = xSortArray.indexOf(a[xCat]) - xSortArray.indexOf(b[xCat]);                   // 617
                        }                                                                                              // 618
                        if (yCat !== "" && returnValue === 0) {                                                        // 619
                            returnValue = ySortArray.indexOf(a[yCat]) - ySortArray.indexOf(b[yCat]);                   // 620
                        }                                                                                              // 621
                        if (seriesCat !== "" && returnValue === 0) {                                                   // 622
                            returnValue = orderedSeriesArray.indexOf(a[seriesCat]) - orderedSeriesArray.indexOf(b[seriesCat]);
                        }                                                                                              // 624
                        return returnValue;                                                                            // 625
                    });                                                                                                // 626
                                                                                                                       // 627
                    // Iterate every row in the data to calculate the return values                                    // 628
                    sortedData.forEach(function (d) {                                                                  // 629
                        // Reset the index                                                                             // 630
                        var foundIndex = -1,                                                                           // 631
                            xField = getField(series.x, d),                                                            // 632
                            yField = getField(series.y, d),                                                            // 633
                            zField = getField(series.z, d),                                                            // 634
                            // Get the aggregate field using the other fields if necessary                             // 635
                            aggField = [],                                                                             // 636
                            key,                                                                                       // 637
                            k,                                                                                         // 638
                            newRow,                                                                                    // 639
                            updateData;                                                                                // 640
                        if (series.categoryFields === null || series.categoryFields === undefined || series.categoryFields.length === 0) {
                            aggField = ["All"];                                                                        // 642
                        } else if (series.categoryFields.length === 1 && d[series.categoryFields[0]] === undefined) {  // 643
                            aggField = [series.categoryFields[0]];                                                     // 644
                        } else {                                                                                       // 645
                            series.categoryFields.forEach(function (cat) {                                             // 646
                                aggField.push(d[cat]);                                                                 // 647
                            }, this);                                                                                  // 648
                        }                                                                                              // 649
                        // Add a key                                                                                   // 650
                        key = aggField.join("/") + "_" + xField.join("/") + "_" + yField.join("/") + "_" + zField.join("/");
                        // See if this field has already been added.                                                   // 652
                        for (k = 0; k < returnData.length; k += 1) {                                                   // 653
                            if (returnData[k].key === key) {                                                           // 654
                                foundIndex = k;                                                                        // 655
                                break;                                                                                 // 656
                            }                                                                                          // 657
                        }                                                                                              // 658
                        // If the field was not added, do so here                                                      // 659
                        if (foundIndex === -1) {                                                                       // 660
                            newRow = {                                                                                 // 661
                                key: key,                                                                              // 662
                                aggField: aggField,                                                                    // 663
                                xField: xField,                                                                        // 664
                                xValue: null,                                                                          // 665
                                xCount: 0,                                                                             // 666
                                yField: yField,                                                                        // 667
                                yValue: null,                                                                          // 668
                                yCount: 0,                                                                             // 669
                                zField: zField,                                                                        // 670
                                zValue: null,                                                                          // 671
                                zCount: 0,                                                                             // 672
                                cValue: 0,                                                                             // 673
                                cCount: 0,                                                                             // 674
                                x: 0,                                                                                  // 675
                                y: 0,                                                                                  // 676
                                xOffset: 0,                                                                            // 677
                                yOffset: 0,                                                                            // 678
                                width: 0,                                                                              // 679
                                height: 0,                                                                             // 680
                                cx: 0,                                                                                 // 681
                                cy: 0,                                                                                 // 682
                                xBound: 0,                                                                             // 683
                                yBound: 0,                                                                             // 684
                                xValueList: [],                                                                        // 685
                                yValueList: [],                                                                        // 686
                                zValueList: [],                                                                        // 687
                                cValueList: [],                                                                        // 688
                                fill: {},                                                                              // 689
                                stroke: {}                                                                             // 690
                            };                                                                                         // 691
                            returnData.push(newRow);                                                                   // 692
                            foundIndex = returnData.length - 1;                                                        // 693
                        }                                                                                              // 694
                                                                                                                       // 695
                        // Update the return data for the passed axis                                                  // 696
                        updateData = function (axis, storyboard) {                                                     // 697
                            var passStoryCheck = true,                                                                 // 698
                                lhs = { value: 0, count: 1 },                                                          // 699
                                rhs = { value: 0, count: 1 },                                                          // 700
                                selectStoryValue,                                                                      // 701
                                compare = "",                                                                          // 702
                                retRow;                                                                                // 703
                            if (storyboard !== null) {                                                                 // 704
                                selectStoryValue = storyboard.getFrameValue();                                         // 705
                                storyboard.categoryFields.forEach(function (cat, m) {                                  // 706
                                    if (m > 0) {                                                                       // 707
                                        compare += "/";                                                                // 708
                                    }                                                                                  // 709
                                    compare += d[cat];                                                                 // 710
                                    passStoryCheck = (compare === selectStoryValue);                                   // 711
                                }, this);                                                                              // 712
                            }                                                                                          // 713
                            if (axis !== null && axis !== undefined) {                                                 // 714
                                if (passStoryCheck) {                                                                  // 715
                                    retRow = returnData[foundIndex];                                                   // 716
                                    if (axis._hasMeasure()) {                                                          // 717
                                        // Treat undefined values as zero                                              // 718
                                        if (d[axis.measure] === undefined) {                                           // 719
                                            d[axis.measure] = 0;                                                       // 720
                                        }                                                                              // 721
                                        // Keep a distinct list of values to calculate a distinct count in the case of a non-numeric value being found
                                        if (retRow[axis.position + "ValueList"].indexOf(d[axis.measure]) === -1) {     // 723
                                            retRow[axis.position + "ValueList"].push(d[axis.measure]);                 // 724
                                        }                                                                              // 725
                                        // The code above is outside this check for non-numeric values because we might encounter one far down the list, and
                                        // want to have a record of all values so far.                                 // 727
                                        if (isNaN(parseFloat(d[axis.measure]))) {                                      // 728
                                            useCount[axis.position] = true;                                            // 729
                                        }                                                                              // 730
                                        // Set the value using the aggregate function method                           // 731
                                        lhs.value = retRow[axis.position + "Value"];                                   // 732
                                        lhs.count = retRow[axis.position + "Count"];                                   // 733
                                        rhs.value = d[axis.measure];                                                   // 734
                                        retRow[axis.position + "Value"] = series.aggregate(lhs, rhs);                  // 735
                                        retRow[axis.position + "Count"] += 1;                                          // 736
                                    }                                                                                  // 737
                                }                                                                                      // 738
                            }                                                                                          // 739
                        };                                                                                             // 740
                        // Update all the axes                                                                         // 741
                        updateData(series.x, this.storyboard);                                                         // 742
                        updateData(series.y, this.storyboard);                                                         // 743
                        updateData(series.z, this.storyboard);                                                         // 744
                        updateData(series.c, this.storyboard);                                                         // 745
                    }, this);                                                                                          // 746
                    // Get secondary elements if necessary                                                             // 747
                    if (series.x !== null && series.x !== undefined && series.x._hasCategories() && series.x.categoryFields.length > 1 && secondaryElements.x !== undefined) {
                        groupRules = [];                                                                               // 749
                        if (series.y._hasMeasure()) {                                                                  // 750
                            groupRules.push({ ordering : series.y.measure, desc : true });                             // 751
                        }                                                                                              // 752
                        secondaryElements.x = dimple._getOrderedList(sortedData, series.x.categoryFields[1], series.x._groupOrderRules.concat(groupRules));
                    }                                                                                                  // 754
                    if (series.y !== null && series.y !== undefined && series.y._hasCategories() && series.y.categoryFields.length > 1 && secondaryElements.y !== undefined) {
                        groupRules = [];                                                                               // 756
                        if (series.x._hasMeasure()) {                                                                  // 757
                            groupRules.push({ ordering : series.x.measure, desc : true });                             // 758
                        }                                                                                              // 759
                        secondaryElements.y = dimple._getOrderedList(sortedData, series.y.categoryFields[1], series.y._groupOrderRules.concat(groupRules));
                        secondaryElements.y.reverse();                                                                 // 761
                    }                                                                                                  // 762
                    returnData.forEach(function (ret) {                                                                // 763
                        if (series.x !== null) {                                                                       // 764
                            if (useCount.x === true) { ret.xValue = ret.xValueList.length; }                           // 765
                            tot = (totals.x[ret.xField.join("/")] === null || totals.x[ret.xField.join("/")] === undefined ? 0 : totals.x[ret.xField.join("/")]) + (series.y._hasMeasure() ? Math.abs(ret.yValue) : 0);
                            totals.x[ret.xField.join("/")] = tot;                                                      // 767
                        }                                                                                              // 768
                        if (series.y !== null) {                                                                       // 769
                            if (useCount.y === true) { ret.yValue = ret.yValueList.length; }                           // 770
                            tot = (totals.y[ret.yField.join("/")] === null || totals.y[ret.yField.join("/")] === undefined ? 0 : totals.y[ret.yField.join("/")]) + (series.x._hasMeasure() ? Math.abs(ret.xValue) : 0);
                            totals.y[ret.yField.join("/")] = tot;                                                      // 772
                        }                                                                                              // 773
                        if (series.z !== null) {                                                                       // 774
                            if (useCount.z === true) { ret.zValue = ret.zValueList.length; }                           // 775
                            tot = (totals.z[ret.zField.join("/")] === null || totals.z[ret.zField.join("/")] === undefined ? 0 : totals.z[ret.zField.join("/")]) + (series.z._hasMeasure() ? Math.abs(ret.zValue) : 0);
                            totals.z[ret.zField.join("/")] = tot;                                                      // 777
                        }                                                                                              // 778
                        if (series.c !== null) {                                                                       // 779
                            if (colorBounds.min === null || ret.cValue < colorBounds.min) { colorBounds.min = ret.cValue; }
                            if (colorBounds.max === null || ret.cValue > colorBounds.max) { colorBounds.max = ret.cValue; }
                        }                                                                                              // 782
                    }, this);                                                                                          // 783
                    // Before calculating the positions we need to sort elements                                       // 784
                                                                                                                       // 785
                    // Set all the dimension properties of the data                                                    // 786
                    for (key in totals.x) { if (totals.x.hasOwnProperty(key)) { grandTotals.x += totals.x[key]; } }    // 787
                    for (key in totals.y) { if (totals.y.hasOwnProperty(key)) { grandTotals.y += totals.y[key]; } }    // 788
                    for (key in totals.z) { if (totals.z.hasOwnProperty(key)) { grandTotals.z += totals.z[key]; } }    // 789
                                                                                                                       // 790
                    returnData.forEach(function (ret) {                                                                // 791
                        var baseColor,                                                                                 // 792
                            targetColor,                                                                               // 793
                            scale,                                                                                     // 794
                            colorVal,                                                                                  // 795
                            floatingPortion,                                                                           // 796
                            getAxisData = function (axis, opp, size) {                                                 // 797
                                var totalField,                                                                        // 798
                                    value,                                                                             // 799
                                    selectValue,                                                                       // 800
                                    pos,                                                                               // 801
                                    cumValue;                                                                          // 802
                                if (axis !== null && axis !== undefined) {                                             // 803
                                    pos = axis.position;                                                               // 804
                                    if (!axis._hasCategories()) {                                                      // 805
                                        value = (axis.showPercent ? ret[pos + "Value"] / totals[opp][ret[opp + "Field"].join("/")] : ret[pos + "Value"]);
                                        totalField = ret[opp + "Field"].join("/") + (ret[pos + "Value"] >= 0);         // 807
                                        cumValue = running[pos][totalField] = ((running[pos][totalField] === null || running[pos][totalField] === undefined || pos === "z") ? 0 : running[pos][totalField]) + value;
                                        selectValue = ret[pos + "Bound"] = ret["c" + pos] = (((pos === "x" || pos === "y") && series.stacked) ? cumValue : value);
                                        ret[size] = value;                                                             // 810
                                        ret[pos] = selectValue - (((pos === "x" && value >= 0) || (pos === "y" && value <= 0)) ? value : 0);
                                    } else {                                                                           // 812
                                        if (axis._hasMeasure()) {                                                      // 813
                                            totalField = ret[axis.position + "Field"].join("/");                       // 814
                                            value = (axis.showPercent ? totals[axis.position][totalField] / grandTotals[axis.position] : totals[axis.position][totalField]);
                                            if (addedCats.indexOf(totalField) === -1) {                                // 816
                                                catTotals[totalField] = value + (addedCats.length > 0 ? catTotals[addedCats[addedCats.length - 1]] : 0);
                                                addedCats.push(totalField);                                            // 818
                                            }                                                                          // 819
                                            selectValue = ret[pos + "Bound"] = ret["c" + pos] = (((pos === "x" || pos === "y") && series.stacked) ? catTotals[totalField] : value);
                                            ret[size] = value;                                                         // 821
                                            ret[pos] = selectValue - (((pos === "x" && value >= 0) || (pos === "y" && value <= 0)) ? value : 0);
                                        } else {                                                                       // 823
                                            ret[pos] = ret["c" + pos] = ret[pos + "Field"][0];                         // 824
                                            ret[size] = 1;                                                             // 825
                                            if (secondaryElements[pos] !== undefined && secondaryElements[pos] !== null && secondaryElements[pos].length >= 2) {
                                                ret[pos + "Offset"] = secondaryElements[pos].indexOf(ret[pos + "Field"][1]);
                                                ret[size] = 1 / secondaryElements[pos].length;                         // 828
                                            }                                                                          // 829
                                        }                                                                              // 830
                                    }                                                                                  // 831
                                }                                                                                      // 832
                            };                                                                                         // 833
                        getAxisData(series.x, "y", "width");                                                           // 834
                        getAxisData(series.y, "x", "height");                                                          // 835
                        getAxisData(series.z, "z", "r");                                                               // 836
                                                                                                                       // 837
                        // If there is a color axis                                                                    // 838
                        if (series.c !== null && colorBounds.min !== null && colorBounds.max !== null) {               // 839
                            // Handle matching min and max                                                             // 840
                            if (colorBounds.min === colorBounds.max) {                                                 // 841
                                colorBounds.min -= 0.5;                                                                // 842
                                colorBounds.max += 0.5;                                                                // 843
                            }                                                                                          // 844
                            // Limit the bounds of the color value to be within the range.  Users may override the axis bounds and this
                            // allows a 2 color scale rather than blending if the min and max are set to 0 and 0.01 for example negative values
                            // and zero value would be 1 color and positive another.                                   // 847
                            colorBounds.min = (series.c.overrideMin !== null && series.c.overrideMin !== undefined ? series.c.overrideMin : colorBounds.min);
                            colorBounds.max = (series.c.overrideMax !== null && series.c.overrideMax !== undefined ? series.c.overrideMax : colorBounds.max);
                            ret.cValue = (ret.cValue > colorBounds.max ? colorBounds.max : (ret.cValue < colorBounds.min ? colorBounds.min : ret.cValue));
                            // Calculate the factors for the calculations                                              // 851
                            scale = d3.scale.linear().range([0, (series.c.colors === null || series.c.colors.length === 1 ? 1 : series.c.colors.length - 1)]).domain([colorBounds.min, colorBounds.max]);
                            colorVal = scale(ret.cValue);                                                              // 853
                            floatingPortion = colorVal - Math.floor(colorVal);                                         // 854
                            if (ret.cValue === colorBounds.max) {                                                      // 855
                                floatingPortion = 1;                                                                   // 856
                            }                                                                                          // 857
                            // If there is a single color defined                                                      // 858
                            if (series.c.colors !== null && series.c.colors !== undefined && series.c.colors.length === 1) {
                                baseColor = d3.rgb(series.c.colors[0]);                                                // 860
                                targetColor = d3.rgb(this.getColor(ret.aggField.slice(-1)[0]).fill);                   // 861
                            } else if (series.c.colors !== null && series.c.colors !== undefined && series.c.colors.length > 1) {
                                baseColor = d3.rgb(series.c.colors[Math.floor(colorVal)]);                             // 863
                                targetColor = d3.rgb(series.c.colors[Math.ceil(colorVal)]);                            // 864
                            } else {                                                                                   // 865
                                baseColor = d3.rgb("white");                                                           // 866
                                targetColor = d3.rgb(this.getColor(ret.aggField.slice(-1)[0]).fill);                   // 867
                            }                                                                                          // 868
                            // Calculate the correct grade of color                                                    // 869
                            baseColor.r = Math.floor(baseColor.r + (targetColor.r - baseColor.r) * floatingPortion);   // 870
                            baseColor.g = Math.floor(baseColor.g + (targetColor.g - baseColor.g) * floatingPortion);   // 871
                            baseColor.b = Math.floor(baseColor.b + (targetColor.b - baseColor.b) * floatingPortion);   // 872
                            // Set the colors on the row                                                               // 873
                            ret.fill = baseColor.toString();                                                           // 874
                            ret.stroke = baseColor.darker(0.5).toString();                                             // 875
                        }                                                                                              // 876
                                                                                                                       // 877
                    }, this);                                                                                          // 878
                                                                                                                       // 879
                    // populate the data in the series                                                                 // 880
                    series._positionData = returnData;                                                                 // 881
                                                                                                                       // 882
                }, this);                                                                                              // 883
            }                                                                                                          // 884
        };                                                                                                             // 885
                                                                                                                       // 886
                                                                                                                       // 887
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 888
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 889
        // Source: /src/objects/chart/methods/_heightPixels.js                                                         // 890
        // Access the pixel value of the height of the plot area                                                       // 891
        this._heightPixels = function () {                                                                             // 892
            return dimple._parseYPosition(this.height, this.svg.node());                                               // 893
        };                                                                                                             // 894
                                                                                                                       // 895
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 896
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 897
        // Source: /src/objects/chart/methods/_registerEventHandlers.js                                                // 898
        // Register events, handle standard d3 shape events                                                            // 899
        this._registerEventHandlers = function (series) {                                                              // 900
            if (series._eventHandlers !== null && series._eventHandlers.length > 0) {                                  // 901
                series._eventHandlers.forEach(function (thisHandler) {                                                 // 902
                    var shapes = null;                                                                                 // 903
                    if (thisHandler.handler !== null && typeof (thisHandler.handler) === "function") {                 // 904
                        // Some classes work from markers rather than the shapes (line and area for example)           // 905
                        // in these cases the events should be applied to the markers instead.  Issue #15              // 906
                        if (series._markers !== null && series._markers !== undefined) {                               // 907
                            shapes = series._markers;                                                                  // 908
                        } else {                                                                                       // 909
                            shapes = series.shapes;                                                                    // 910
                        }                                                                                              // 911
                        shapes.on(thisHandler.event, function (d) {                                                    // 912
                            var e = new dimple.eventArgs();                                                            // 913
                            if (series.chart.storyboard !== null) {                                                    // 914
                                e.frameValue = series.chart.storyboard.getFrameValue();                                // 915
                            }                                                                                          // 916
                            e.seriesValue = d.aggField;                                                                // 917
                            e.xValue = d.x;                                                                            // 918
                            e.yValue = d.y;                                                                            // 919
                            e.zValue = d.z;                                                                            // 920
                            e.colorValue = d.cValue;                                                                   // 921
                            e.seriesShapes = series.shapes;                                                            // 922
                            e.selectedShape = d3.select(this);                                                         // 923
                            thisHandler.handler(e);                                                                    // 924
                        });                                                                                            // 925
                    }                                                                                                  // 926
                }, this);                                                                                              // 927
            }                                                                                                          // 928
        };                                                                                                             // 929
                                                                                                                       // 930
                                                                                                                       // 931
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 932
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 933
        // Source: /src/objects/chart/methods/_widthPixels.js                                                          // 934
        // Access the pixel value of the width of the plot area                                                        // 935
        this._widthPixels = function () {                                                                              // 936
            return dimple._parseXPosition(this.width, this.svg.node());                                                // 937
        };                                                                                                             // 938
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 939
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 940
        // Source: /src/objects/chart/methods/_xPixels.js                                                              // 941
        // Access the pixel position of the x co-ordinate of the plot area                                             // 942
        this._xPixels = function () {                                                                                  // 943
            return dimple._parseXPosition(this.x, this.svg.node());                                                    // 944
        };                                                                                                             // 945
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 946
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 947
        // Source: /src/objects/chart/methods/_yPixels.js                                                              // 948
        // Access the pixel position of the y co-ordinate of the plot area                                             // 949
        this._yPixels = function () {                                                                                  // 950
            return dimple._parseYPosition(this.y, this.svg.node());                                                    // 951
        };                                                                                                             // 952
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 953
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 954
        // Source: /src/objects/chart/methods/addAxis.js                                                               // 955
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addAxis                             // 956
        this.addAxis = function (position, categoryFields, measure, timeField) {                                       // 957
            // Convert the passed category fields to an array in case a single string is sent                          // 958
            if (categoryFields !== null && categoryFields !== undefined) {                                             // 959
                categoryFields = [].concat(categoryFields);                                                            // 960
            }                                                                                                          // 961
            // Create the axis object based on the passed parameters                                                   // 962
            var axis = new dimple.axis(                                                                                // 963
                this,                                                                                                  // 964
                position,                                                                                              // 965
                categoryFields,                                                                                        // 966
                measure,                                                                                               // 967
                timeField                                                                                              // 968
            );                                                                                                         // 969
            // Add the axis to the array for the chart                                                                 // 970
            this.axes.push(axis);                                                                                      // 971
            // return the axis                                                                                         // 972
            return axis;                                                                                               // 973
        };                                                                                                             // 974
                                                                                                                       // 975
                                                                                                                       // 976
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 977
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 978
        // Source: /src/objects/chart/methods/addCategoryAxis.js                                                       // 979
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addCategoryAxis                     // 980
        this.addCategoryAxis = function (position, categoryFields) {                                                   // 981
            return this.addAxis(position, categoryFields, null);                                                       // 982
        };                                                                                                             // 983
                                                                                                                       // 984
                                                                                                                       // 985
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 986
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 987
        // Source: /src/objects/chart/methods/addColorAxis.js                                                          // 988
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addColorAxis                        // 989
        this.addColorAxis = function (measure, colors) {                                                               // 990
            var colorAxis = this.addAxis("c", null, measure);                                                          // 991
            colorAxis.colors = (colors === null || colors === undefined ? null : [].concat(colors));                   // 992
            return colorAxis;                                                                                          // 993
        };                                                                                                             // 994
                                                                                                                       // 995
                                                                                                                       // 996
        // Source: /src/objects/chart/methods/addLegend.js                                                             // 997
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addLegend                           // 998
        this.addLegend = function (x, y, width, height, horizontalAlign, series) {                                     // 999
            // Use all series by default                                                                               // 1000
            series = (series === null || series === undefined ? this.series : [].concat(series));                      // 1001
            horizontalAlign = (horizontalAlign === null || horizontalAlign === undefined ? "left" : horizontalAlign);  // 1002
            // Create the legend                                                                                       // 1003
            var legend = new dimple.legend(this, x, y, width, height, horizontalAlign, series);                        // 1004
            // Add the legend to the array                                                                             // 1005
            this.legends.push(legend);                                                                                 // 1006
            // Return the legend object                                                                                // 1007
            return legend;                                                                                             // 1008
        };                                                                                                             // 1009
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1010
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1011
        // Source: /src/objects/chart/methods/addLogAxis.js                                                            // 1012
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addLogAxis                          // 1013
        this.addLogAxis = function (position, logField, logBase) {                                                     // 1014
            var axis = this.addAxis(position, null, logField, null);                                                   // 1015
            if (logBase !== null && logBase !== undefined) {                                                           // 1016
                axis.logBase = logBase;                                                                                // 1017
            }                                                                                                          // 1018
            axis.useLog = true;                                                                                        // 1019
            return axis;                                                                                               // 1020
        };                                                                                                             // 1021
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1022
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1023
        // Source: /src/objects/chart/methods/addMeasureAxis.js                                                        // 1024
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addMeasureAxis                      // 1025
        this.addMeasureAxis = function (position, measure) {                                                           // 1026
            return this.addAxis(position, null, measure);                                                              // 1027
        };                                                                                                             // 1028
                                                                                                                       // 1029
                                                                                                                       // 1030
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1031
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1032
        // Source: /src/objects/chart/methods/addPctAxis.js                                                            // 1033
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addPctAxis                          // 1034
        this.addPctAxis = function (position, measure, categories) {                                                   // 1035
            var pctAxis = null;                                                                                        // 1036
            if (categories !== null && categories !== undefined) {                                                     // 1037
                pctAxis = this.addAxis(position, categories, measure);                                                 // 1038
            } else {                                                                                                   // 1039
                pctAxis = this.addMeasureAxis(position, measure);                                                      // 1040
            }                                                                                                          // 1041
            pctAxis.showPercent = true;                                                                                // 1042
            return pctAxis;                                                                                            // 1043
        };                                                                                                             // 1044
                                                                                                                       // 1045
                                                                                                                       // 1046
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1047
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1048
        // Source: /src/objects/chart/methods/addSeries.js                                                             // 1049
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addSeries                           // 1050
        this.addSeries = function (categoryFields, plotFunction, axes) {                                               // 1051
            // Deal with no axes passed                                                                                // 1052
            if (axes === null || axes === undefined) { axes = this.axes; }                                             // 1053
            // Deal with no plot function                                                                              // 1054
            if (plotFunction === null || plotFunction === undefined) { plotFunction = dimple.plot.bubble; }            // 1055
            // Axis objects to be picked from the array                                                                // 1056
            var xAxis = null,                                                                                          // 1057
                yAxis = null,                                                                                          // 1058
                zAxis = null,                                                                                          // 1059
                colorAxis = null,                                                                                      // 1060
                series;                                                                                                // 1061
            // Iterate the array and pull out the relevant axes                                                        // 1062
            axes.forEach(function (axis) {                                                                             // 1063
                if (axis !== null && plotFunction.supportedAxes.indexOf(axis.position) > -1) {                         // 1064
                    if (xAxis === null && axis.position[0] === "x") {                                                  // 1065
                        xAxis = axis;                                                                                  // 1066
                    } else if (yAxis === null && axis.position[0] === "y") {                                           // 1067
                        yAxis = axis;                                                                                  // 1068
                    } else if (zAxis === null && axis.position[0] === "z") {                                           // 1069
                        zAxis = axis;                                                                                  // 1070
                    } else if (colorAxis === null && axis.position[0] === "c") {                                       // 1071
                        colorAxis = axis;                                                                              // 1072
                    }                                                                                                  // 1073
                }                                                                                                      // 1074
            }, this);                                                                                                  // 1075
            // Put single values into single value arrays                                                              // 1076
            if (categoryFields !== null && categoryFields !== undefined) {                                             // 1077
                categoryFields = [].concat(categoryFields);                                                            // 1078
            }                                                                                                          // 1079
            // Create a series object                                                                                  // 1080
            series = new dimple.series(                                                                                // 1081
                this,                                                                                                  // 1082
                categoryFields,                                                                                        // 1083
                xAxis,                                                                                                 // 1084
                yAxis,                                                                                                 // 1085
                zAxis,                                                                                                 // 1086
                colorAxis,                                                                                             // 1087
                plotFunction,                                                                                          // 1088
                dimple.aggregateMethod.sum,                                                                            // 1089
                plotFunction.stacked                                                                                   // 1090
            );                                                                                                         // 1091
            // Add the series to the chart's array                                                                     // 1092
            this.series.push(series);                                                                                  // 1093
            // Return the series                                                                                       // 1094
            return series;                                                                                             // 1095
        };                                                                                                             // 1096
                                                                                                                       // 1097
                                                                                                                       // 1098
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1099
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1100
        // Source: /src/objects/chart/methods/addTimeAxis.js                                                           // 1101
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-addTimeAxis                         // 1102
        this.addTimeAxis = function (position, timeField, inputFormat, outputFormat) {                                 // 1103
            var axis = this.addAxis(position, null, null, timeField);                                                  // 1104
            axis.tickFormat = outputFormat;                                                                            // 1105
            axis.dateParseFormat = inputFormat;                                                                        // 1106
            return axis;                                                                                               // 1107
        };                                                                                                             // 1108
                                                                                                                       // 1109
                                                                                                                       // 1110
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1111
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1112
        // Source: /src/objects/chart/methods/assignColor.js                                                           // 1113
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-assignColor                         // 1114
        this.assignColor = function (tag, fill, stroke, opacity) {                                                     // 1115
            this._assignedColors[tag] = new dimple.color(fill, stroke, opacity);                                       // 1116
            return this._assignedColors[tag];                                                                          // 1117
        };                                                                                                             // 1118
                                                                                                                       // 1119
                                                                                                                       // 1120
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1121
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1122
        // Source: /src/objects/chart/methods/defaultColors.js                                                         // 1123
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-defaultColors                       // 1124
        this.defaultColors = [                                                                                         // 1125
            new dimple.color("#80B1D3"), // Blue                                                                       // 1126
            new dimple.color("#FB8072"), // Red                                                                        // 1127
            new dimple.color("#FDB462"), // Orange                                                                     // 1128
            new dimple.color("#B3DE69"), // Green                                                                      // 1129
            new dimple.color("#FFED6F"), // Yellow                                                                     // 1130
            new dimple.color("#BC80BD"), // Purple                                                                     // 1131
            new dimple.color("#8DD3C7"), // Turquoise                                                                  // 1132
            new dimple.color("#CCEBC5"), // Pale Blue                                                                  // 1133
            new dimple.color("#FFFFB3"), // Pale Yellow                                                                // 1134
            new dimple.color("#BEBADA"), // Lavender                                                                   // 1135
            new dimple.color("#FCCDE5"), // Pink                                                                       // 1136
            new dimple.color("#D9D9D9")  // Grey                                                                       // 1137
        ];                                                                                                             // 1138
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1139
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1140
        // Source: /src/objects/chart/methods/draw.js                                                                  // 1141
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-draw                                // 1142
        this.draw = function (duration, noDataChange) {                                                                // 1143
            // Deal with optional parameter                                                                            // 1144
            duration = (duration === null || duration === undefined ? 0 : duration);                                   // 1145
            // Catch the first x and y                                                                                 // 1146
            var firstX = null,                                                                                         // 1147
                firstY = null,                                                                                         // 1148
                distinctCats,                                                                                          // 1149
                xGridSet = false,                                                                                      // 1150
                yGridSet = false,                                                                                      // 1151
                chartX = this._xPixels(),                                                                              // 1152
                chartY = this._yPixels(),                                                                              // 1153
                chartWidth = this._widthPixels(),                                                                      // 1154
                chartHeight = this._heightPixels();                                                                    // 1155
                                                                                                                       // 1156
            // Many of the draw methods use positioning data in each series.  Therefore we should                      // 1157
            // decorate the series with it now                                                                         // 1158
            if (noDataChange === undefined || noDataChange === null || noDataChange === false) {                       // 1159
                this._getSeriesData();                                                                                 // 1160
            }                                                                                                          // 1161
                                                                                                                       // 1162
            // Iterate the axes and calculate bounds, this is done within the chart because an                         // 1163
            // axis' bounds are determined by other axes and the way that series tie them together                     // 1164
            this.axes.forEach(function (axis) {                                                                        // 1165
                axis._min = 0;                                                                                         // 1166
                axis._max = 0;                                                                                         // 1167
                // Check that the axis has a measure                                                                   // 1168
                if (axis._hasMeasure()) {                                                                              // 1169
                    // Is this axis linked to a series                                                                 // 1170
                    var linked = false;                                                                                // 1171
                    // Find any linked series                                                                          // 1172
                    this.series.forEach(function (series) {                                                            // 1173
                        // if this axis is linked                                                                      // 1174
                        if (series[axis.position] === axis) {                                                          // 1175
                            // Get the bounds                                                                          // 1176
                            var bounds = series._axisBounds(axis.position);                                            // 1177
                            if (axis._min > bounds.min) { axis._min = bounds.min; }                                    // 1178
                            if (axis._max < bounds.max) { axis._max = bounds.max; }                                    // 1179
                            linked = true;                                                                             // 1180
                        }                                                                                              // 1181
                    }, this);                                                                                          // 1182
                    // If the axis is not linked, use the data bounds, this is unlikely to be used                     // 1183
                    // in a real context, but when developing it is nice to see axes before any series have            // 1184
                    // been added.                                                                                     // 1185
                    if (!linked) {                                                                                     // 1186
                        this._getAllData().forEach(function (d) {                                                      // 1187
                            if (axis._min > d[axis.measure]) { axis._min = d[axis.measure]; }                          // 1188
                            if (axis._max < d[axis.measure]) { axis._max = d[axis.measure]; }                          // 1189
                        }, this);                                                                                      // 1190
                    }                                                                                                  // 1191
                } else if (axis._hasTimeField()) {                                                                     // 1192
                    // Parse the dates and assign the min and max                                                      // 1193
                    axis._min = null;                                                                                  // 1194
                    axis._max = null;                                                                                  // 1195
                    this._getAllData().forEach(function (d) {                                                          // 1196
                        var dt = axis._parseDate(d[axis.timeField]);                                                   // 1197
                        if (axis._min === null || dt < axis._min) {                                                    // 1198
                            axis._min = dt;                                                                            // 1199
                        }                                                                                              // 1200
                        if (axis._max === null || dt > axis._max) {                                                    // 1201
                            axis._max = dt;                                                                            // 1202
                        }                                                                                              // 1203
                    }, this);                                                                                          // 1204
                } else if (axis._hasCategories()) {                                                                    // 1205
                    // A category axis is just set to show the number of categories                                    // 1206
                    axis._min = 0;                                                                                     // 1207
                    distinctCats = [];                                                                                 // 1208
                    this._getAllData().forEach(function (d) {                                                          // 1209
                        if (distinctCats.indexOf(d[axis.categoryFields[0]]) === -1) {                                  // 1210
                            distinctCats.push(d[axis.categoryFields[0]]);                                              // 1211
                        }                                                                                              // 1212
                    }, this);                                                                                          // 1213
                    axis._max = distinctCats.length;                                                                   // 1214
                }                                                                                                      // 1215
                                                                                                                       // 1216
                                                                                                                       // 1217
                // Update the axis now we have all information set                                                     // 1218
                axis._update();                                                                                        // 1219
                                                                                                                       // 1220
                // Record the index of the first x and first y axes                                                    // 1221
                if (firstX === null && axis.position === "x") {                                                        // 1222
                    firstX = axis;                                                                                     // 1223
                } else if (firstY === null && axis.position === "y") {                                                 // 1224
                    firstY = axis;                                                                                     // 1225
                }                                                                                                      // 1226
            }, this);                                                                                                  // 1227
            // Iterate the axes again                                                                                  // 1228
            this.axes.forEach(function (axis) {                                                                        // 1229
                // Don't animate axes on first draw                                                                    // 1230
                var firstDraw = false,                                                                                 // 1231
                    transform = null,                                                                                  // 1232
                    gridSize = 0,                                                                                      // 1233
                    gridTransform = null,                                                                              // 1234
                    handleTrans,                                                                                       // 1235
                    rotated = false,                                                                                   // 1236
                    widest = 0,                                                                                        // 1237
                    box = { l: null, t: null, r: null, b: null },                                                      // 1238
                    titleX = 0,                                                                                        // 1239
                    titleY = 0,                                                                                        // 1240
                    rotate = "",                                                                                       // 1241
                    chart = this;                                                                                      // 1242
                if (axis.gridlineShapes === null) {                                                                    // 1243
                    if (axis.showGridlines || (axis.showGridlines === null && !axis._hasCategories() && ((!xGridSet && axis.position === "x") || (!yGridSet && axis.position === "y")))) {
                        // Add a group for the gridlines to allow css formatting                                       // 1245
                        axis.gridlineShapes = this._group.append("g").attr("class", "gridlines");                      // 1246
                        if (axis.position === "x") {                                                                   // 1247
                            xGridSet = true;                                                                           // 1248
                        } else {                                                                                       // 1249
                            yGridSet = true;                                                                           // 1250
                        }                                                                                              // 1251
                    }                                                                                                  // 1252
                } else {                                                                                               // 1253
                    if (axis.position === "x") {                                                                       // 1254
                        xGridSet = true;                                                                               // 1255
                    } else {                                                                                           // 1256
                        yGridSet = true;                                                                               // 1257
                    }                                                                                                  // 1258
                }                                                                                                      // 1259
                if (axis.shapes === null) {                                                                            // 1260
                    // Add a group for the axes to allow css formatting                                                // 1261
                    axis.shapes = this._group.append("g").attr("class", "axis");                                       // 1262
                    firstDraw = true;                                                                                  // 1263
                }                                                                                                      // 1264
                // If this is the first x and there is a y axis cross them at zero                                     // 1265
                if (axis === firstX && firstY !== null) {                                                              // 1266
                    transform = "translate(0, " + (firstY.categoryFields === null || firstY.categoryFields.length === 0 ? firstY._scale(0) : chartY + chartHeight) + ")";
                    gridTransform = "translate(0, " + (axis === firstX ? chartY + chartHeight : chartY) + ")";         // 1268
                    gridSize = -chartHeight;                                                                           // 1269
                } else if (axis === firstY && firstX !== null) {                                                       // 1270
                    transform = "translate(" + (firstX.categoryFields === null || firstX.categoryFields.length === 0 ? firstX._scale(0) : chartX) + ", 0)";
                    gridTransform = "translate(" + (axis === firstY ? chartX : chartX + chartWidth) + ", 0)";          // 1272
                    gridSize = -chartWidth;                                                                            // 1273
                } else if (axis.position === "x") {                                                                    // 1274
                    gridTransform = transform = "translate(0, " + (axis === firstX ? chartY + chartHeight : chartY) + ")";
                    gridSize = -chartHeight;                                                                           // 1276
                } else if (axis.position === "y") {                                                                    // 1277
                    gridTransform = transform = "translate(" + (axis === firstY ? chartX : chartX + chartWidth) + ", 0)";
                    gridSize = -chartWidth;                                                                            // 1279
                }                                                                                                      // 1280
                // Draw the axis                                                                                       // 1281
                // This code might seem unneccesary but even applying a duration of 0 to a transition will cause the code to execute after the 
                // code below and precedence is important here.                                                        // 1283
                handleTrans = function (ob) {                                                                          // 1284
                    var returnObj;                                                                                     // 1285
                    if (transform === null || duration === 0 || firstDraw) {                                           // 1286
                        returnObj = ob;                                                                                // 1287
                    } else {                                                                                           // 1288
                        returnObj = ob.transition().duration(duration);                                                // 1289
                    }                                                                                                  // 1290
                    return returnObj;                                                                                  // 1291
                };                                                                                                     // 1292
                if (transform !== null && axis._draw !== null) {                                                       // 1293
                                                                                                                       // 1294
                    // Add a tick format                                                                               // 1295
                    if (axis._hasTimeField()) {                                                                        // 1296
                        handleTrans(axis.shapes).call(axis._draw.ticks(axis._getTimePeriod(), axis.timeInterval).tickFormat(axis._getFormat())).attr("transform", transform);
                    } else if (axis.useLog) {                                                                          // 1298
                        handleTrans(axis.shapes).call(axis._draw.ticks(4, axis._getFormat())).attr("transform", transform);
                    } else {                                                                                           // 1300
                        handleTrans(axis.shapes).call(axis._draw.tickFormat(axis._getFormat())).attr("transform", transform);
                    }                                                                                                  // 1302
                    if (axis.gridlineShapes !== null) {                                                                // 1303
                        handleTrans(axis.gridlineShapes).call(axis._draw.tickSize(gridSize, 0, 0).tickFormat("")).attr("transform", gridTransform);
                    }                                                                                                  // 1305
                    // Move labels around                                                                              // 1306
                    if (axis.measure === null || axis.measure === undefined) {                                         // 1307
                        if (axis.position === "x") {                                                                   // 1308
                            handleTrans(axis.shapes.selectAll("text")).attr("x", (chartWidth / axis._max) / 2);        // 1309
                        } else if (axis.position === "y") {                                                            // 1310
                            handleTrans(axis.shapes.selectAll("text")).attr("y", -1 * (chartHeight / axis._max) / 2);  // 1311
                        }                                                                                              // 1312
                    }                                                                                                  // 1313
                    if (axis.categoryFields !== null && axis.categoryFields !== undefined && axis.categoryFields.length > 0) {
                        // Off set the labels to counter the transform.  This will put the labels along the outside of the chart so they
                        // don't interfere with the chart contents                                                     // 1316
                        if (axis === firstX && (firstY.categoryFields === null || firstY.categoryFields.length === 0)) {
                            handleTrans(axis.shapes.selectAll("text")).attr("y", chartY + chartHeight - firstY._scale(0) + 9);
                        }                                                                                              // 1319
                        if (axis === firstY && (firstX.categoryFields === null || firstX.categoryFields.length === 0)) {
                            handleTrans(axis.shapes.selectAll("text")).attr("x", -1 * (firstX._scale(0) - chartX) - 9);
                        }                                                                                              // 1322
                    }                                                                                                  // 1323
                }                                                                                                      // 1324
                // Set some initial css values                                                                         // 1325
                if (!this.noFormats) {                                                                                 // 1326
                    handleTrans(axis.shapes.selectAll("text"))                                                         // 1327
                        .style("font-family", "sans-serif")                                                            // 1328
                        .style("font-size", (chartHeight / 35 > 10 ? chartHeight / 35 : 10) + "px");                   // 1329
                    handleTrans(axis.shapes.selectAll("path, line"))                                                   // 1330
                        .style("fill", "none")                                                                         // 1331
                        .style("stroke", "black")                                                                      // 1332
                        .style("shape-rendering", "crispEdges");                                                       // 1333
                    if (axis.gridlineShapes !== null) {                                                                // 1334
                        handleTrans(axis.gridlineShapes.selectAll("line"))                                             // 1335
                            .style("fill", "none")                                                                     // 1336
                            .style("stroke", "lightgray")                                                              // 1337
                            .style("opacity", 0.8);                                                                    // 1338
                    }                                                                                                  // 1339
                }                                                                                                      // 1340
                // Rotate labels, this can only be done once the formats are set                                       // 1341
                if (axis.measure === null || axis.measure === undefined) {                                             // 1342
                    if (axis === firstX) {                                                                             // 1343
                        // If the gaps are narrower than the widest label display all labels horizontally              // 1344
                        widest = 0;                                                                                    // 1345
                        axis.shapes.selectAll("text").each(function () {                                               // 1346
                            var w = this.getComputedTextLength();                                                      // 1347
                            widest = (w > widest ? w : widest);                                                        // 1348
                        });                                                                                            // 1349
                        if (widest > chartWidth / axis.shapes.selectAll("text")[0].length) {                           // 1350
                            rotated = true;                                                                            // 1351
                            axis.shapes.selectAll("text")                                                              // 1352
                                .style("text-anchor", "start")                                                         // 1353
                                .each(function () {                                                                    // 1354
                                    var rec = this.getBBox();                                                          // 1355
                                    d3.select(this)                                                                    // 1356
                                        .attr("transform", "rotate(90," + rec.x + "," + (rec.y + (rec.height / 2)) + ") translate(-5, 0)");
                                });                                                                                    // 1358
                        } else {                                                                                       // 1359
                            // For redraw operations we need to clear the transform                                    // 1360
                            rotated = false;                                                                           // 1361
                            axis.shapes.selectAll("text")                                                              // 1362
                                .style("text-anchor", "middle")                                                        // 1363
                                .attr("transform", "");                                                                // 1364
                        }                                                                                              // 1365
                    } else if (axis.position === "x") {                                                                // 1366
                        // If the gaps are narrower than the widest label display all labels horizontally              // 1367
                        widest = 0;                                                                                    // 1368
                        axis.shapes.selectAll("text")                                                                  // 1369
                            .each(function () {                                                                        // 1370
                                var w = this.getComputedTextLength();                                                  // 1371
                                widest = (w > widest ? w : widest);                                                    // 1372
                            });                                                                                        // 1373
                        if (widest > chartWidth / axis.shapes.selectAll("text")[0].length) {                           // 1374
                            rotated = true;                                                                            // 1375
                            axis.shapes.selectAll("text")                                                              // 1376
                                .style("text-anchor", "end")                                                           // 1377
                                .each(function () {                                                                    // 1378
                                    var rec = this.getBBox();                                                          // 1379
                                    d3.select(this)                                                                    // 1380
                                        .attr("transform", "rotate(90," + (rec.x + rec.width) + "," + (rec.y + (rec.height / 2)) + ") translate(5, 0)");
                                });                                                                                    // 1382
                        } else {                                                                                       // 1383
                            // For redraw operations we need to clear the transform                                    // 1384
                            rotated = false;                                                                           // 1385
                            axis.shapes.selectAll("text")                                                              // 1386
                                .style("text-anchor", "middle")                                                        // 1387
                                .attr("transform", "");                                                                // 1388
                        }                                                                                              // 1389
                    }                                                                                                  // 1390
                }                                                                                                      // 1391
                if (axis.titleShape !== null && axis.titleShape !== undefined) {                                       // 1392
                    axis.titleShape.remove();                                                                          // 1393
                }                                                                                                      // 1394
                // Get the bounds of the axis objects                                                                  // 1395
                axis.shapes.selectAll("text")                                                                          // 1396
                    .each(function () {                                                                                // 1397
                        var rec = this.getBBox();                                                                      // 1398
                        if (box.l === null ||  -9 - rec.width < box.l) {                                               // 1399
                            box.l = -9 - rec.width;                                                                    // 1400
                        }                                                                                              // 1401
                        if (box.r === null || rec.x + rec.width > box.r) {                                             // 1402
                            box.r = rec.x + rec.width;                                                                 // 1403
                        }                                                                                              // 1404
                        if (rotated) {                                                                                 // 1405
                            if (box.t === null || rec.y + rec.height - rec.width < box.t) {                            // 1406
                                box.t = rec.y + rec.height - rec.width;                                                // 1407
                            }                                                                                          // 1408
                            if (box.b === null || rec.height + rec.width > box.b) {                                    // 1409
                                box.b = rec.height + rec.width;                                                        // 1410
                            }                                                                                          // 1411
                        } else {                                                                                       // 1412
                            if (box.t === null || rec.y < box.t) {                                                     // 1413
                                box.t = rec.y;                                                                         // 1414
                            }                                                                                          // 1415
                            if (box.b === null || 9 + rec.height > box.b) {                                            // 1416
                                box.b = 9 + rec.height;                                                                // 1417
                            }                                                                                          // 1418
                        }                                                                                              // 1419
                    });                                                                                                // 1420
                                                                                                                       // 1421
                if (axis.position === "x") {                                                                           // 1422
                    if (axis === firstX) {                                                                             // 1423
                        titleY = chartY + chartHeight + box.b + 5;                                                     // 1424
                    } else {                                                                                           // 1425
                        titleY = chartY + box.t - 10;                                                                  // 1426
                    }                                                                                                  // 1427
                    titleX = chartX + (chartWidth / 2);                                                                // 1428
                } else if (axis.position === "y") {                                                                    // 1429
                    if (axis === firstY) {                                                                             // 1430
                        titleX = chartX + box.l - 10;                                                                  // 1431
                    } else {                                                                                           // 1432
                        titleX = chartX + chartWidth + box.r + 20;                                                     // 1433
                    }                                                                                                  // 1434
                    titleY = chartY + (chartHeight / 2);                                                               // 1435
                    rotate = "rotate(270, " + titleX + ", " + titleY + ")";                                            // 1436
                }                                                                                                      // 1437
                                                                                                                       // 1438
                // Add a title for the axis                                                                            // 1439
                if (!axis.hidden && (axis.position === "x" || axis.position === "y")) {                                // 1440
                    axis.titleShape = this._group.append("text").attr("class", "axis title");                          // 1441
                    axis.titleShape                                                                                    // 1442
                        .attr("x", titleX)                                                                             // 1443
                        .attr("y", titleY)                                                                             // 1444
                        .attr("text-anchor", "middle")                                                                 // 1445
                        .attr("transform", rotate)                                                                     // 1446
                        .text((axis.categoryFields === null || axis.categoryFields === undefined || axis.categoryFields.length === 0 ? axis.measure : axis.categoryFields.join("/")))
                        .each(function () {                                                                            // 1448
                            if (!chart.noFormats) {                                                                    // 1449
                                d3.select(this)                                                                        // 1450
                                    .style("font-family", "sans-serif")                                                // 1451
                                    .style("font-size", (chartHeight / 35 > 10 ? chartHeight / 35 : 10) + "px");       // 1452
                            }                                                                                          // 1453
                        });                                                                                            // 1454
                                                                                                                       // 1455
                    // Offset Y position to baseline. This previously used dominant-baseline but this caused           // 1456
                    // browser inconsistency                                                                           // 1457
                    if (axis === firstX) {                                                                             // 1458
                        axis.titleShape.each(function () {                                                             // 1459
                            d3.select(this).attr("y", titleY + this.getBBox().height / 1.65);                          // 1460
                        });                                                                                            // 1461
                    } else if (axis === firstY) {                                                                      // 1462
                        axis.titleShape.each(function () {                                                             // 1463
                            d3.select(this).attr("x", titleX + this.getBBox().height / 1.65);                          // 1464
                        });                                                                                            // 1465
                    }                                                                                                  // 1466
                }                                                                                                      // 1467
               // }                                                                                                    // 1468
            }, this);                                                                                                  // 1469
                                                                                                                       // 1470
            // Iterate the series                                                                                      // 1471
            this.series.forEach(function (series) {                                                                    // 1472
                series.plot.draw(this, series, duration);                                                              // 1473
                this._registerEventHandlers(series);                                                                   // 1474
            }, this);                                                                                                  // 1475
                                                                                                                       // 1476
            // Iterate the legends                                                                                     // 1477
            this.legends.forEach(function (legend) {                                                                   // 1478
                legend._draw(duration);                                                                                // 1479
            }, this);                                                                                                  // 1480
                                                                                                                       // 1481
            // If the chart has a storyboard                                                                           // 1482
            if (this.storyboard !== null && this.storyboard !== undefined) {                                           // 1483
                this.storyboard._drawText();                                                                           // 1484
                if (this.storyboard.autoplay) {                                                                        // 1485
                    this.storyboard.startAnimation();                                                                  // 1486
                }                                                                                                      // 1487
            }                                                                                                          // 1488
                                                                                                                       // 1489
            // Return the chart for chaining                                                                           // 1490
            return this;                                                                                               // 1491
                                                                                                                       // 1492
        };                                                                                                             // 1493
                                                                                                                       // 1494
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1495
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1496
        // Source: /src/objects/chart/methods/getColor.js                                                              // 1497
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-getColor                            // 1498
        this.getColor = function (tag) {                                                                               // 1499
            // If no color is assigned, do so here                                                                     // 1500
            if (this._assignedColors[tag] === null || this._assignedColors[tag] === undefined) {                       // 1501
                this._assignedColors[tag] = this.defaultColors[this._nextColor];                                       // 1502
                this._nextColor = (this._nextColor + 1) % this.defaultColors.length;                                   // 1503
            }                                                                                                          // 1504
            // Return the color                                                                                        // 1505
            return this._assignedColors[tag];                                                                          // 1506
        };                                                                                                             // 1507
                                                                                                                       // 1508
                                                                                                                       // 1509
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1510
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1511
        // Source: /src/objects/chart/methods/setBounds.js                                                             // 1512
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-setBounds                           // 1513
        this.setBounds = function (x, y, width, height) {                                                              // 1514
            // Store the passed parameters                                                                             // 1515
            this.x = x;                                                                                                // 1516
            this.y = y;                                                                                                // 1517
            this.width = width;                                                                                        // 1518
            this.height = height;                                                                                      // 1519
            // Access the pixel value of the x coordinate                                                              // 1520
            this._xPixels = function () {                                                                              // 1521
                return dimple._parseXPosition(this.x, this.svg.node());                                                // 1522
            };                                                                                                         // 1523
            // Access the pixel value of the y coordinate                                                              // 1524
            this._yPixels = function () {                                                                              // 1525
                return dimple._parseYPosition(this.y, this.svg.node());                                                // 1526
            };                                                                                                         // 1527
            // Access the pixel value of the width coordinate                                                          // 1528
            this._widthPixels = function () {                                                                          // 1529
                return dimple._parseXPosition(this.width, this.svg.node());                                            // 1530
            };                                                                                                         // 1531
            // Access the pixel value of the width coordinate                                                          // 1532
            this._heightPixels = function () {                                                                         // 1533
                return dimple._parseYPosition(this.height, this.svg.node());                                           // 1534
            };                                                                                                         // 1535
            // Refresh the axes to redraw them against the new bounds                                                  // 1536
            this.draw(0, true);                                                                                        // 1537
            // return the chart object for method chaining                                                             // 1538
            return this;                                                                                               // 1539
        };                                                                                                             // 1540
                                                                                                                       // 1541
                                                                                                                       // 1542
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1543
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1544
        // Source: /src/objects/chart/methods/setMargins.js                                                            // 1545
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-setMargins                          // 1546
        this.setMargins = function (left, top, right, bottom) {                                                        // 1547
            // Set the bounds here, functions below will be used for access                                            // 1548
            this.x = left;                                                                                             // 1549
            this.y = top;                                                                                              // 1550
            this.width = 0;                                                                                            // 1551
            this.height = 0;                                                                                           // 1552
            // Access the pixel value of the x coordinate                                                              // 1553
            this._xPixels = function () {                                                                              // 1554
                return dimple._parseXPosition(this.x, this.svg.node());                                                // 1555
            };                                                                                                         // 1556
            // Access the pixel value of the y coordinate                                                              // 1557
            this._yPixels = function () {                                                                              // 1558
                return dimple._parseYPosition(this.y, this.svg.node());                                                // 1559
            };                                                                                                         // 1560
            // Access the pixel value of the width coordinate                                                          // 1561
            this._widthPixels = function () {                                                                          // 1562
                return dimple._parentWidth(this.svg.node()) - this._xPixels() - dimple._parseXPosition(right, this.svg.node());
            };                                                                                                         // 1564
            // Access the pixel value of the width coordinate                                                          // 1565
            this._heightPixels = function () {                                                                         // 1566
                return dimple._parentHeight(this.svg.node()) - this._yPixels() - dimple._parseYPosition(bottom, this.svg.node());
            };                                                                                                         // 1568
            // Refresh the axes to redraw them against the new bounds                                                  // 1569
            this.draw(0, true);                                                                                        // 1570
            // return the chart object for method chaining                                                             // 1571
            return this;                                                                                               // 1572
        };                                                                                                             // 1573
                                                                                                                       // 1574
                                                                                                                       // 1575
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1576
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1577
        // Source: /src/objects/chart/methods/setStoryboard.js                                                         // 1578
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.chart#wiki-setStoryboard                       // 1579
        this.setStoryboard = function (categoryFields, tickHandler) {                                                  // 1580
            // Create and assign the storyboard                                                                        // 1581
            this.storyboard = new dimple.storyboard(this, categoryFields);                                             // 1582
            // Set the event handler                                                                                   // 1583
            if (tickHandler !== null && tickHandler !== undefined) {                                                   // 1584
                this.storyboard.onTick = tickHandler;                                                                  // 1585
            }                                                                                                          // 1586
            // Return the storyboard                                                                                   // 1587
            return this.storyboard;                                                                                    // 1588
        };                                                                                                             // 1589
                                                                                                                       // 1590
    };                                                                                                                 // 1591
    // End dimple.chart                                                                                                // 1592
                                                                                                                       // 1593
                                                                                                                       // 1594
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 1595
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 1596
    // Source: /src/objects/color/begin.js                                                                             // 1597
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.color                                              // 1598
    dimple.color = function (fill, stroke, opacity) {                                                                  // 1599
                                                                                                                       // 1600
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.color#wiki-fill                                // 1601
        this.fill = fill;                                                                                              // 1602
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.color#wiki-stroke                              // 1603
        this.stroke = (stroke === null || stroke === undefined ? d3.rgb(fill).darker(0.5).toString() : stroke);        // 1604
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.color#wiki-opacity                             // 1605
        this.opacity = (opacity === null || opacity === undefined ? 0.8 : opacity);                                    // 1606
                                                                                                                       // 1607
    };                                                                                                                 // 1608
    // End dimple.color                                                                                                // 1609
                                                                                                                       // 1610
                                                                                                                       // 1611
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 1612
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 1613
    // Source: /src/objects/eventArgs/begin.js                                                                         // 1614
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs                                          // 1615
    dimple.eventArgs = function () {                                                                                   // 1616
                                                                                                                       // 1617
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-seriesValue                     // 1618
        this.seriesValue = null;                                                                                       // 1619
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-xValue                          // 1620
        this.xValue = null;                                                                                            // 1621
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-yValue                          // 1622
        this.yValue = null;                                                                                            // 1623
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-zValue                          // 1624
        this.zValue = null;                                                                                            // 1625
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-colorValue                      // 1626
        this.colorValue = null;                                                                                        // 1627
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-frameValue                      // 1628
        this.frameValue = null;                                                                                        // 1629
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-seriesShapes                    // 1630
        this.seriesShapes = null;                                                                                      // 1631
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.eventArgs#wiki-selectedShape                   // 1632
        this.selectedShape = null;                                                                                     // 1633
                                                                                                                       // 1634
    };                                                                                                                 // 1635
    // End dimple.eventArgs                                                                                            // 1636
                                                                                                                       // 1637
                                                                                                                       // 1638
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 1639
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 1640
    // Source: /src/objects/legend/begin.js                                                                            // 1641
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend                                             // 1642
    dimple.legend = function (chart, x, y, width, height, horizontalAlign, series) {                                   // 1643
                                                                                                                       // 1644
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-chart                              // 1645
        this.chart = chart;                                                                                            // 1646
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-series                             // 1647
        this.series = series;                                                                                          // 1648
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-x                                  // 1649
        this.x = x;                                                                                                    // 1650
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-y                                  // 1651
        this.y = y;                                                                                                    // 1652
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-width                              // 1653
        this.width = width;                                                                                            // 1654
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-height                             // 1655
        this.height = height;                                                                                          // 1656
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-horizontalAlign                    // 1657
        this.horizontalAlign = horizontalAlign;                                                                        // 1658
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.legend#wiki-shapes                             // 1659
        this.shapes = null;                                                                                            // 1660
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1661
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1662
        // Source: /src/objects/legend/methods/_draw.js                                                                // 1663
        // Render the legend                                                                                           // 1664
        this._draw = function (duration) {                                                                             // 1665
                                                                                                                       // 1666
            // Create an array of distinct color elements from the series                                              // 1667
            var legendArray = this._getEntries(),                                                                      // 1668
                maxWidth = 0,                                                                                          // 1669
                maxHeight = 0,                                                                                         // 1670
                runningX = 0,                                                                                          // 1671
                runningY = 0,                                                                                          // 1672
                keyWidth = 15,                                                                                         // 1673
                keyHeight = 9,                                                                                         // 1674
                self = this,                                                                                           // 1675
                theseShapes;                                                                                           // 1676
                                                                                                                       // 1677
            // If there is already a legend, fade to transparent and remove                                            // 1678
            if (this.shapes !== null && this.shapes !== undefined) {                                                   // 1679
                this.shapes                                                                                            // 1680
                    .transition()                                                                                      // 1681
                    .duration(duration * 0.2)                                                                          // 1682
                    .attr("opacity", 0)                                                                                // 1683
                    .remove();                                                                                         // 1684
            }                                                                                                          // 1685
                                                                                                                       // 1686
            // Create an empty hidden group for every legend entry                                                     // 1687
            // the selector here must not pick up any legend entries being removed by the                              // 1688
            // transition above                                                                                        // 1689
            theseShapes = this.chart._group                                                                            // 1690
                .selectAll(".dontSelectAny")                                                                           // 1691
                .data(legendArray)                                                                                     // 1692
                .enter()                                                                                               // 1693
                .append("g")                                                                                           // 1694
                    .attr("class", "legend")                                                                           // 1695
                    .attr("opacity", 0);                                                                               // 1696
                                                                                                                       // 1697
            // Add text into the group                                                                                 // 1698
            theseShapes.append("text")                                                                                 // 1699
                .attr("id", function (d) { return "legend_" + d.key; })                                                // 1700
                .attr("class", "legendText")                                                                           // 1701
                .text(function(d) {                                                                                    // 1702
                    return d.key;                                                                                      // 1703
                })                                                                                                     // 1704
                .call(function () {                                                                                    // 1705
                    if (!self.chart.noFormats) {                                                                       // 1706
                        this.style("font-family", "sans-serif")                                                        // 1707
                            .style("font-size", (self.chart._heightPixels() / 35 > 10 ? self.chart._heightPixels() / 35 : 10) + "px")
                            .style("shape-rendering", "crispEdges");                                                   // 1709
                    }                                                                                                  // 1710
                })                                                                                                     // 1711
                .each(function () {                                                                                    // 1712
                    var b = this.getBBox();                                                                            // 1713
                    if (b.width > maxWidth) {                                                                          // 1714
                        maxWidth = b.width;                                                                            // 1715
                    }                                                                                                  // 1716
                    if (b.height > maxHeight) {                                                                        // 1717
                        maxHeight = b.height;                                                                          // 1718
                    }                                                                                                  // 1719
                });                                                                                                    // 1720
                                                                                                                       // 1721
            // Add a rectangle into the group                                                                          // 1722
            theseShapes.append("rect")                                                                                 // 1723
                .attr("class", "legendKey")                                                                            // 1724
                .attr("height", keyHeight)                                                                             // 1725
                .attr("width",  keyWidth);                                                                             // 1726
                                                                                                                       // 1727
            // Expand the bounds of the largest shape slightly.  This will be the size allocated to                    // 1728
            // all elements                                                                                            // 1729
            maxHeight = (maxHeight < keyHeight ? keyHeight : maxHeight) + 2;                                           // 1730
            maxWidth += keyWidth + 20;                                                                                 // 1731
                                                                                                                       // 1732
            // Iterate the shapes and position them based on the alignment and size of the legend                      // 1733
            theseShapes                                                                                                // 1734
                .each(function (d) {                                                                                   // 1735
                    if (runningX + maxWidth > self._widthPixels()) {                                                   // 1736
                        runningX = 0;                                                                                  // 1737
                        runningY += maxHeight;                                                                         // 1738
                    }                                                                                                  // 1739
                    if (runningY > self._heightPixels()) {                                                             // 1740
                        d3.select(this).remove();                                                                      // 1741
                    } else {                                                                                           // 1742
                        d3.select(this).select("text")                                                                 // 1743
                            .attr("x", (self.horizontalAlign === "left" ? self._xPixels() + keyWidth + 5 + runningX : self._xPixels() + (self._widthPixels() - runningX - maxWidth) + keyWidth + 5))
                            .attr("y", function () {                                                                   // 1745
                                // This was previously done with dominant-baseline but this is used                    // 1746
                                // instead due to browser inconsistancy.                                               // 1747
                                return self._yPixels() + runningY + this.getBBox().height / 1.65;                      // 1748
                            })                                                                                         // 1749
                            .attr("width", self._widthPixels())                                                        // 1750
                            .attr("height", self._heightPixels());                                                     // 1751
                        d3.select(this).select("rect")                                                                 // 1752
                            .attr("class", "legend legendKey")                                                         // 1753
                            .attr("x", (self.horizontalAlign === "left" ? self._xPixels() + runningX : self._xPixels() + (self._widthPixels() - runningX - maxWidth)))
                            .attr("y", self._yPixels() + runningY)                                                     // 1755
                            .attr("height", keyHeight)                                                                 // 1756
                            .attr("width",  keyWidth)                                                                  // 1757
                            .style("fill", function () { return dimple._helpers.fill(d, self.chart, d.series); })      // 1758
                            .style("stroke", function () { return dimple._helpers.stroke(d, self.chart, d.series); })  // 1759
                            .style("opacity", function () { return dimple._helpers.opacity(d, self.chart, d.series); })
                            .style("shape-rendering", "crispEdges");                                                   // 1761
                        runningX += maxWidth;                                                                          // 1762
                    }                                                                                                  // 1763
                });                                                                                                    // 1764
                                                                                                                       // 1765
            // Fade in the shapes if this is transitioning                                                             // 1766
            theseShapes                                                                                                // 1767
                .transition()                                                                                          // 1768
                .delay(duration * 0.2)                                                                                 // 1769
                .duration(duration * 0.8)                                                                              // 1770
                .attr("opacity", 1);                                                                                   // 1771
                                                                                                                       // 1772
            // Assign them to the public property for modification by the user.                                        // 1773
            this.shapes = theseShapes;                                                                                 // 1774
        };                                                                                                             // 1775
                                                                                                                       // 1776
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1777
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1778
        // Source: /src/objects/legend/methods/_getEntries.js                                                          // 1779
        // Get an array of elements to be displayed in the legend                                                      // 1780
        this._getEntries = function () {                                                                               // 1781
            // Create an array of distinct series values                                                               // 1782
            var entries = [];                                                                                          // 1783
            // If there are some series                                                                                // 1784
            if (this.series !== null && this.series !== undefined) {                                                   // 1785
                // Iterate all the associated series                                                                   // 1786
                this.series.forEach(function (series) {                                                                // 1787
                    // Get the series data                                                                             // 1788
                    var data = series._positionData;                                                                   // 1789
                    // Iterate the aggregated data                                                                     // 1790
                    data.forEach(function (row) {                                                                      // 1791
                        // Check whether this element is new                                                           // 1792
                        var index = -1,                                                                                // 1793
                            j;                                                                                         // 1794
                        for (j = 0; j < entries.length; j += 1) {                                                      // 1795
                            if (entries[j].key === row.aggField.slice(-1)[0]) {                                        // 1796
                                index = j;                                                                             // 1797
                                break;                                                                                 // 1798
                            }                                                                                          // 1799
                        }                                                                                              // 1800
                        if (index === -1) {                                                                            // 1801
                            // If it's a new element create a new row in the return array                              // 1802
                            entries.push({ key: row.aggField.slice(-1)[0], fill: row.fill, stroke: row.stroke, series: series, aggField: row.aggField });
                            index = entries.length - 1;                                                                // 1804
                        }                                                                                              // 1805
                    });                                                                                                // 1806
                }, this);                                                                                              // 1807
            }                                                                                                          // 1808
            return entries;                                                                                            // 1809
        };                                                                                                             // 1810
                                                                                                                       // 1811
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1812
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1813
        // Source: /src/objects/legend/methods/_heightPixels.js                                                        // 1814
        // Access the pixel value of the height of the legend area                                                     // 1815
        this._heightPixels = function () {                                                                             // 1816
            return dimple._parseYPosition(this.height, this.chart.svg.node());                                         // 1817
        };                                                                                                             // 1818
                                                                                                                       // 1819
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1820
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1821
        // Source: /src/objects/legend/methods/_widthPixels.js                                                         // 1822
        // Access the pixel value of the width of the legend area                                                      // 1823
        this._widthPixels = function () {                                                                              // 1824
            return dimple._parseXPosition(this.width, this.chart.svg.node());                                          // 1825
        };                                                                                                             // 1826
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1827
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1828
        // Source: /src/objects/legend/methods/_xPixels.js                                                             // 1829
        // Access the pixel position of the x co-ordinate of the legend area                                           // 1830
        this._xPixels = function () {                                                                                  // 1831
            return dimple._parseXPosition(this.x, this.chart.svg.node());                                              // 1832
        };                                                                                                             // 1833
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1834
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1835
        // Source: /src/objects/legend/methods/_yPixels.js                                                             // 1836
        // Access the pixel position of the y co-ordinate of the legend area                                           // 1837
        this._yPixels = function () {                                                                                  // 1838
            return dimple._parseYPosition(this.y, this.chart.svg.node());                                              // 1839
        };                                                                                                             // 1840
    };                                                                                                                 // 1841
    // End dimple.legend                                                                                               // 1842
                                                                                                                       // 1843
                                                                                                                       // 1844
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 1845
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 1846
    // Source: /src/objects/series/begin.js                                                                            // 1847
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series                                             // 1848
    dimple.series = function (chart, categoryFields, xAxis, yAxis, zAxis, colorAxis, plotFunction, aggregateFunction, stacked) {
                                                                                                                       // 1850
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-chart                              // 1851
        this.chart = chart;                                                                                            // 1852
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-x                                  // 1853
        this.x = xAxis;                                                                                                // 1854
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-y                                  // 1855
        this.y = yAxis;                                                                                                // 1856
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-z                                  // 1857
        this.z = zAxis;                                                                                                // 1858
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-c                                  // 1859
        this.c = colorAxis;                                                                                            // 1860
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-plot                               // 1861
        this.plot = plotFunction;                                                                                      // 1862
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-categoryFields                     // 1863
        this.categoryFields = categoryFields;                                                                          // 1864
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-aggregateFunction                  // 1865
        this.aggregate = aggregateFunction;                                                                            // 1866
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-stacked                            // 1867
        this.stacked = stacked;                                                                                        // 1868
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-barGap                             // 1869
        this.barGap = 0.2;                                                                                             // 1870
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-clusterBarGap                      // 1871
        this.clusterBarGap = 0.1;                                                                                      // 1872
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-lineWeight                         // 1873
        this.lineWeight = 2;                                                                                           // 1874
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-lineMarkers                        // 1875
        this.lineMarkers = false;                                                                                      // 1876
                                                                                                                       // 1877
        // Any event handlers joined to this series                                                                    // 1878
        this._eventHandlers = [];                                                                                      // 1879
        // The series positioning information                                                                          // 1880
        this._positionData = [];                                                                                       // 1881
        // The order definition array                                                                                  // 1882
        this._orderRules = [];                                                                                         // 1883
                                                                                                                       // 1884
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 1885
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 1886
        // Source: /src/objects/series/methods/_axisBounds.js                                                          // 1887
        this._axisBounds = function (position) {                                                                       // 1888
            var bounds = { min: 0, max: 0 },                                                                           // 1889
                // The primary axis for this comparison                                                                // 1890
                primaryAxis = null,                                                                                    // 1891
                // The secondary axis for this comparison                                                              // 1892
                secondaryAxis = null,                                                                                  // 1893
                // The running totals of the categories                                                                // 1894
                categoryTotals = [],                                                                                   // 1895
                // The maximum index of category totals                                                                // 1896
                catCount = 0,                                                                                          // 1897
                measureName,                                                                                           // 1898
                fieldName,                                                                                             // 1899
                distinctCats,                                                                                          // 1900
                aggData = this._positionData;                                                                          // 1901
                                                                                                                       // 1902
            // If the primary axis is x the secondary is y and vice versa, a z axis has no secondary                   // 1903
            if (position === "x") {                                                                                    // 1904
                primaryAxis = this.x;                                                                                  // 1905
                secondaryAxis = this.y;                                                                                // 1906
            } else if (position === "y") {                                                                             // 1907
                primaryAxis = this.y;                                                                                  // 1908
                secondaryAxis = this.x;                                                                                // 1909
            } else if (position === "z") {                                                                             // 1910
                primaryAxis = this.z;                                                                                  // 1911
            } else if (position === "c") {                                                                             // 1912
                primaryAxis = this.c;                                                                                  // 1913
            }                                                                                                          // 1914
                                                                                                                       // 1915
            // If the corresponding axis is category axis                                                              // 1916
            if (primaryAxis.showPercent) {                                                                             // 1917
                // Iterate the data                                                                                    // 1918
                aggData.forEach(function (d) {                                                                         // 1919
                    if (d[primaryAxis.position + "Bound"] < bounds.min) {                                              // 1920
                        bounds.min = d[primaryAxis.position + "Bound"];                                                // 1921
                    }                                                                                                  // 1922
                    if (d[primaryAxis.position + "Bound"] > bounds.max) {                                              // 1923
                        bounds.max = d[primaryAxis.position + "Bound"];                                                // 1924
                    }                                                                                                  // 1925
                }, this);                                                                                              // 1926
            } else if (secondaryAxis === null || secondaryAxis.categoryFields === null || secondaryAxis.categoryFields.length === 0) {
                aggData.forEach(function (d) {                                                                         // 1928
                    // If the primary axis is stacked                                                                  // 1929
                    if (this.stacked && (primaryAxis.position === "x" || primaryAxis.position === "y")) {              // 1930
                        // We just need to push the bounds.  A stacked axis will always include 0 so I just need to push the min and max out from there
                        if (d[primaryAxis.position + "Value"] < 0) {                                                   // 1932
                            bounds.min = bounds.min + d[primaryAxis.position + "Value"];                               // 1933
                        } else {                                                                                       // 1934
                            bounds.max = bounds.max + d[primaryAxis.position + "Value"];                               // 1935
                        }                                                                                              // 1936
                    } else {                                                                                           // 1937
                        // If it isn't stacked we need to catch the minimum and maximum values                         // 1938
                        if (d[primaryAxis.position + "Value"] < bounds.min) {                                          // 1939
                            bounds.min = d[primaryAxis.position + "Value"];                                            // 1940
                        }                                                                                              // 1941
                        if (d[primaryAxis.position + "Value"] > bounds.max) {                                          // 1942
                            bounds.max = d[primaryAxis.position + "Value"];                                            // 1943
                        }                                                                                              // 1944
                    }                                                                                                  // 1945
                }, this);                                                                                              // 1946
            } else {                                                                                                   // 1947
                // If this category value (or combination if multiple fields defined) is not already in the array of categories, add it.
                measureName = primaryAxis.position + "Value";                                                          // 1949
                fieldName = secondaryAxis.position + "Field";                                                          // 1950
                // Get a list of distinct categories on the secondary axis                                             // 1951
                distinctCats = [];                                                                                     // 1952
                aggData.forEach(function (d) {                                                                         // 1953
                    // Create a field for this row in the aggregated data                                              // 1954
                    var field = d[fieldName].join("/"),                                                                // 1955
                        index = distinctCats.indexOf(field);                                                           // 1956
                    if (index === -1) {                                                                                // 1957
                        distinctCats.push(field);                                                                      // 1958
                        index = distinctCats.length - 1;                                                               // 1959
                    }                                                                                                  // 1960
                    // Get the index of the field                                                                      // 1961
                    if (categoryTotals[index] === undefined) {                                                         // 1962
                        categoryTotals[index] = { min: 0, max: 0 };                                                    // 1963
                        if (index >= catCount) {                                                                       // 1964
                            catCount = index + 1;                                                                      // 1965
                        }                                                                                              // 1966
                    }                                                                                                  // 1967
                    // The secondary axis is a category axis, we need to account                                       // 1968
                    // for distribution across categories                                                              // 1969
                    if (this.stacked) {                                                                                // 1970
                        if (d[measureName] < 0) {                                                                      // 1971
                            categoryTotals[index].min = categoryTotals[index].min + d[measureName];                    // 1972
                        } else {                                                                                       // 1973
                            categoryTotals[index].max = categoryTotals[index].max + d[measureName];                    // 1974
                        }                                                                                              // 1975
                    } else {                                                                                           // 1976
                        // If it isn't stacked we need to catch the minimum and maximum values                         // 1977
                        if (d[measureName] < categoryTotals[index].min) {                                              // 1978
                            categoryTotals[index].min = d[measureName];                                                // 1979
                        }                                                                                              // 1980
                        if (d[measureName] > categoryTotals[index].max) {                                              // 1981
                            categoryTotals[index].max = d[measureName];                                                // 1982
                        }                                                                                              // 1983
                    }                                                                                                  // 1984
                }, this);                                                                                              // 1985
                categoryTotals.forEach(function (catTot) {                                                             // 1986
                    if (catTot !== undefined) {                                                                        // 1987
                        if (catTot.min < bounds.min) {                                                                 // 1988
                            bounds.min = catTot.min;                                                                   // 1989
                        }                                                                                              // 1990
                        if (catTot.max > bounds.max) {                                                                 // 1991
                            bounds.max = catTot.max;                                                                   // 1992
                        }                                                                                              // 1993
                    }                                                                                                  // 1994
                }, this);                                                                                              // 1995
            }                                                                                                          // 1996
            return bounds;                                                                                             // 1997
        };                                                                                                             // 1998
                                                                                                                       // 1999
                                                                                                                       // 2000
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2001
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2002
        // Source: /src/objects/series/methods/_dropLineOrigin.js                                                      // 2003
        this._dropLineOrigin = function() {                                                                            // 2004
                                                                                                                       // 2005
            // Get the origin co-ordinates for axis drop lines                                                         // 2006
            var xIndex = 0,                                                                                            // 2007
                yIndex = 0,                                                                                            // 2008
                // This contains the drop line destinations                                                            // 2009
                coord = {                                                                                              // 2010
                    // The x co-ordinate for a y-axis drop line                                                        // 2011
                    x: null,                                                                                           // 2012
                    // The y co-ordinate for an x-axis drop line                                                       // 2013
                    y: null                                                                                            // 2014
                },                                                                                                     // 2015
                // The origin of the first axes                                                                        // 2016
                firstOrig = {                                                                                          // 2017
                    x: null,                                                                                           // 2018
                    y: null                                                                                            // 2019
                };                                                                                                     // 2020
            // Get the first x and y first of all                                                                      // 2021
            this.chart.axes.forEach(function (axis) {                                                                  // 2022
                if (axis.position === "x" && firstOrig.x === null) {                                                   // 2023
                    if (axis._hasTimeField()) {                                                                        // 2024
                        firstOrig.x = this.chart._xPixels();                                                           // 2025
                    } else {                                                                                           // 2026
                        firstOrig.x = axis._origin;                                                                    // 2027
                    }                                                                                                  // 2028
                } else if (axis.position === "y" && firstOrig.y === null) {                                            // 2029
                    if (axis._hasTimeField()) {                                                                        // 2030
                        firstOrig.y = this.chart._yPixels() + this.chart._heightPixels();                              // 2031
                    } else {                                                                                           // 2032
                        firstOrig.y = axis._origin;                                                                    // 2033
                    }                                                                                                  // 2034
                }                                                                                                      // 2035
            }, this);                                                                                                  // 2036
            // Get the axis position based on the axis index                                                           // 2037
            this.chart.axes.forEach(function (axis) {                                                                  // 2038
                if (axis.position === "x" && !this.x.hidden) {                                                         // 2039
                    if (axis === this.x) {                                                                             // 2040
                        // Set the y co-ordinate for the x axis                                                        // 2041
                        if (xIndex === 0) {                                                                            // 2042
                            coord.y = firstOrig.y;                                                                     // 2043
                        } else if (xIndex === 1) {                                                                     // 2044
                            coord.y = this.chart._yPixels();                                                           // 2045
                        }                                                                                              // 2046
                    }                                                                                                  // 2047
                    xIndex += 1;                                                                                       // 2048
                } else if (axis.position === "y" && !this.y.hidden) {                                                  // 2049
                    if (axis === this.y) {                                                                             // 2050
                        // Set the x co-ordinate for the y axis                                                        // 2051
                        if (yIndex === 0) {                                                                            // 2052
                            coord.x = firstOrig.x;                                                                     // 2053
                        } else if (yIndex === 1) {                                                                     // 2054
                            coord.x = this.chart._xPixels() + this.chart._widthPixels();                               // 2055
                        }                                                                                              // 2056
                    }                                                                                                  // 2057
                    yIndex += 1;                                                                                       // 2058
                }                                                                                                      // 2059
            }, this);                                                                                                  // 2060
                                                                                                                       // 2061
            // Return the co-ordinate                                                                                  // 2062
            return coord;                                                                                              // 2063
        };                                                                                                             // 2064
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2065
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2066
        // Source: /src/objects/series/methods/addEventHandler.js                                                      // 2067
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-addEventHandler                    // 2068
        this.addEventHandler = function (event, handler) {                                                             // 2069
            this._eventHandlers.push({ event: event, handler: handler });                                              // 2070
        };                                                                                                             // 2071
                                                                                                                       // 2072
                                                                                                                       // 2073
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2074
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2075
        // Source: /src/objects/series/methods/addOrderRule.js                                                         // 2076
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.series#wiki-addOrderRule                       // 2077
        this.addOrderRule = function (ordering, desc) {                                                                // 2078
            this._orderRules.push({ ordering : ordering, desc : desc });                                               // 2079
        };                                                                                                             // 2080
    };                                                                                                                 // 2081
    // End dimple.series                                                                                               // 2082
                                                                                                                       // 2083
                                                                                                                       // 2084
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2085
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2086
    // Source: /src/objects/storyboard/begin.js                                                                        // 2087
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard                                         // 2088
    dimple.storyboard = function (chart, categoryFields) {                                                             // 2089
                                                                                                                       // 2090
        // Handle an individual string as an array                                                                     // 2091
        if (categoryFields !== null && categoryFields !== undefined) {                                                 // 2092
            categoryFields = [].concat(categoryFields);                                                                // 2093
        }                                                                                                              // 2094
                                                                                                                       // 2095
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-chart                          // 2096
        this.chart = chart;                                                                                            // 2097
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-categoryFields                 // 2098
        this.categoryFields = categoryFields;                                                                          // 2099
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-autoplay                       // 2100
        this.autoplay = true;                                                                                          // 2101
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-frameDuration                  // 2102
        this.frameDuration = 3000;                                                                                     // 2103
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-storyLabel                     // 2104
        this.storyLabel = null;                                                                                        // 2105
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-onTick                         // 2106
        this.onTick = null;                                                                                            // 2107
                                                                                                                       // 2108
        // The current frame index                                                                                     // 2109
        this._frame = 0;                                                                                               // 2110
        // The animation interval                                                                                      // 2111
        this._animationTimer = null;                                                                                   // 2112
        // The category values                                                                                         // 2113
        this._categories = [];                                                                                         // 2114
        // The category values when the last cache happened                                                            // 2115
        this._cachedCategoryFields = [];                                                                               // 2116
        // The rules for ordering the storyboard                                                                       // 2117
        this._orderRules = [];                                                                                         // 2118
                                                                                                                       // 2119
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2120
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2121
        // Source: /src/objects/storyboard/methods/drawText.js                                                         // 2122
        this._drawText = function (duration) {                                                                         // 2123
            if (this.storyLabel === null || this.storyLabel === undefined) {                                           // 2124
                var chart = this.chart,                                                                                // 2125
                    xCount = 0;                                                                                        // 2126
                // Check for a secondary x axis                                                                        // 2127
                this.chart.axes.forEach(function (a) {                                                                 // 2128
                    if (a.position === "x") {                                                                          // 2129
                        xCount += 1;                                                                                   // 2130
                    }                                                                                                  // 2131
                }, this);                                                                                              // 2132
                this.storyLabel = this.chart._group.append("text")                                                     // 2133
                    .attr("x", this.chart._xPixels() + this.chart._widthPixels() * 0.01)                               // 2134
                    .attr("y", this.chart._yPixels() + (this.chart._heightPixels() / 35 > 10 ? this.chart._heightPixels() / 35 : 10) * (xCount > 1 ? 1.25 : -1))
                    .call(function () {                                                                                // 2136
                        if (!chart.noFormats) {                                                                        // 2137
                            this.style("font-family", "sans-serif")                                                    // 2138
                                .style("font-size", (chart._heightPixels() / 35 > 10 ? chart._heightPixels() / 35 : 10) + "px");
                        }                                                                                              // 2140
                    });                                                                                                // 2141
            }                                                                                                          // 2142
            this.storyLabel                                                                                            // 2143
                .transition().duration(duration * 0.2)                                                                 // 2144
                .attr("opacity", 0);                                                                                   // 2145
            this.storyLabel                                                                                            // 2146
                .transition().delay(duration * 0.2)                                                                    // 2147
                .text(this.categoryFields.join("\\") + ": " + this.getFrameValue())                                    // 2148
                .transition().duration(duration * 0.8)                                                                 // 2149
                .attr("opacity", 1);                                                                                   // 2150
        };                                                                                                             // 2151
                                                                                                                       // 2152
                                                                                                                       // 2153
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2154
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2155
        // Source: /src/objects/storyboard/methods/_getCategories.js                                                   // 2156
        this._getCategories = function() {                                                                             // 2157
            if (this._categoryFields !== this._cachedCategoryFields) {                                                 // 2158
                // Clear the array                                                                                     // 2159
                this._categories = [];                                                                                 // 2160
                // Iterate every row in the data                                                                       // 2161
                this.chart._getAllData().forEach(function (d) {                                                        // 2162
                    // Initialise the index of the categories array matching the current row                           // 2163
                    var index = -1,                                                                                    // 2164
                        field = "";                                                                                    // 2165
                    // If this is a category axis handle multiple category values by iterating the fields in the row and concatonate the values
                    if (this.categoryFields !== null) {                                                                // 2167
                        this.categoryFields.forEach(function (cat, i) {                                                // 2168
                            if (i > 0) {                                                                               // 2169
                                field += "/";                                                                          // 2170
                            }                                                                                          // 2171
                            field += d[cat];                                                                           // 2172
                        }, this);                                                                                      // 2173
                        index = this._categories.indexOf(field);                                                       // 2174
                        if (index === -1) {                                                                            // 2175
                            this._categories.push(field);                                                              // 2176
                            index = this._categories.length - 1;                                                       // 2177
                        }                                                                                              // 2178
                    }                                                                                                  // 2179
                }, this);                                                                                              // 2180
                // Mark this as cached                                                                                 // 2181
                this._cachedCategoryFields = this._categoryFields;                                                     // 2182
            }                                                                                                          // 2183
            // Return the array                                                                                        // 2184
            return this._categories;                                                                                   // 2185
        };                                                                                                             // 2186
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2187
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2188
        // Source: /src/objects/storyboard/methods/_goToFrameIndex.js                                                  // 2189
        this._goToFrameIndex = function (index) {                                                                      // 2190
            this._frame = index % this._getCategories().length;                                                        // 2191
            // Draw it with half duration, we want the effect of a 50% animation 50% pause.                            // 2192
            this.chart.draw(this.frameDuration / 2);                                                                   // 2193
        };                                                                                                             // 2194
                                                                                                                       // 2195
                                                                                                                       // 2196
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2197
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2198
        // Source: /src/objects/storyboard/methods/addOrderRule.js                                                     // 2199
        // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple.storyboard#wiki-addOrderRule                   // 2200
        this.addOrderRule = function (ordering, desc) {                                                                // 2201
            this._orderRules.push({ ordering : ordering, desc : desc });                                               // 2202
        };                                                                                                             // 2203
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2204
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2205
        // Source: /src/objects/storyboard/methods/getFrameValue.js                                                    // 2206
        this.getFrameValue = function () {                                                                             // 2207
            var returnValue = null;                                                                                    // 2208
            if (this._frame >= 0 && this._getCategories().length > this._frame) {                                      // 2209
                returnValue = this._getCategories()[this._frame];                                                      // 2210
            }                                                                                                          // 2211
            return returnValue;                                                                                        // 2212
        };                                                                                                             // 2213
                                                                                                                       // 2214
                                                                                                                       // 2215
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2216
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2217
        // Source: /src/objects/storyboard/methods/goToFrame.js                                                        // 2218
        this.goToFrame = function (frameText) {                                                                        // 2219
            if (this._getCategories().length > 0) {                                                                    // 2220
                var index = this._getCategories().indexOf(frameText);                                                  // 2221
                this._goToFrameIndex(index);                                                                           // 2222
            }                                                                                                          // 2223
        };                                                                                                             // 2224
                                                                                                                       // 2225
                                                                                                                       // 2226
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2227
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2228
        // Source: /src/objects/storyboard/methods/pauseAnimation.js                                                   // 2229
        this.pauseAnimation = function () {                                                                            // 2230
            if (this._animationTimer !== null) {                                                                       // 2231
                window.clearInterval(this._animationTimer);                                                            // 2232
                this._animationTimer = null;                                                                           // 2233
            }                                                                                                          // 2234
        };                                                                                                             // 2235
                                                                                                                       // 2236
                                                                                                                       // 2237
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2238
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2239
        // Source: /src/objects/storyboard/methods/startAnimation.js                                                   // 2240
        this.startAnimation = function () {                                                                            // 2241
            if (this._animationTimer === null) {                                                                       // 2242
                if (this.onTick !== null) { this.onTick(this.getFrameValue()); }                                       // 2243
                this._animationTimer = window.setInterval((function (storyboard) {                                     // 2244
                    return function () {                                                                               // 2245
                        storyboard._goToFrameIndex(storyboard._frame + 1);                                             // 2246
                        if (storyboard.onTick !== null) {                                                              // 2247
                            storyboard.onTick(storyboard.getFrameValue());                                             // 2248
                        }                                                                                              // 2249
                        storyboard._drawText(storyboard.frameDuration / 2);                                            // 2250
                    };                                                                                                 // 2251
                }(this)), this.frameDuration);                                                                         // 2252
            }                                                                                                          // 2253
        };                                                                                                             // 2254
                                                                                                                       // 2255
                                                                                                                       // 2256
        // Copyright: 2013 PMSI-AlignAlytics                                                                           // 2257
        // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                          // 2258
        // Source: /src/objects/storyboard/methods/stopAnimation.js                                                    // 2259
        this.stopAnimation = function () {                                                                             // 2260
            if (this._animationTimer !== null) {                                                                       // 2261
                window.clearInterval(this._animationTimer);                                                            // 2262
                this._animationTimer = null;                                                                           // 2263
                this._frame = 0;                                                                                       // 2264
            }                                                                                                          // 2265
        };                                                                                                             // 2266
                                                                                                                       // 2267
                                                                                                                       // 2268
    };                                                                                                                 // 2269
    // End dimple.storyboard                                                                                           // 2270
                                                                                                                       // 2271
                                                                                                                       // 2272
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2273
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2274
    // Source: /src/objects/aggregateMethod/avg.js                                                                     // 2275
    dimple.aggregateMethod.avg = function (lhs, rhs) {                                                                 // 2276
        lhs.value = (lhs.value === null || lhs.value === undefined ? 0 : parseFloat(lhs.value));                       // 2277
        lhs.count = (lhs.count === null || lhs.count === undefined ? 1 : parseFloat(lhs.count));                       // 2278
        rhs.value = (rhs.value === null || rhs.value === undefined ? 0 : parseFloat(rhs.value));                       // 2279
        rhs.count = (rhs.count === null || rhs.count === undefined ? 1 : parseFloat(rhs.count));                       // 2280
        return ((lhs.value * lhs.count) + (rhs.value * rhs.count)) / (lhs.count + rhs.count);                          // 2281
    };                                                                                                                 // 2282
                                                                                                                       // 2283
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2284
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2285
    // Source: /src/objects/aggregateMethod/count.js                                                                   // 2286
    dimple.aggregateMethod.count = function (lhs, rhs) {                                                               // 2287
        lhs.count = (lhs.count === null || lhs.count === undefined ? 0 : parseFloat(lhs.count));                       // 2288
        rhs.count = (rhs.count === null || rhs.count === undefined ? 0 : parseFloat(rhs.count));                       // 2289
        return lhs.count + rhs.count;                                                                                  // 2290
    };                                                                                                                 // 2291
                                                                                                                       // 2292
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2293
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2294
    // Source: /src/objects/aggregateMethod/max.js                                                                     // 2295
    dimple.aggregateMethod.max = function (lhs, rhs) {                                                                 // 2296
        lhs.value = (lhs.value === null || lhs.value === undefined ? 0 : parseFloat(lhs.value));                       // 2297
        rhs.value = (rhs.value === null || rhs.value === undefined ? 0 : parseFloat(rhs.value));                       // 2298
        return lhs.value > rhs.value ? lhs.value : rhs.value;                                                          // 2299
    };                                                                                                                 // 2300
                                                                                                                       // 2301
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2302
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2303
    // Source: /src/objects/aggregateMethod/min.js                                                                     // 2304
    dimple.aggregateMethod.min = function (lhs, rhs) {                                                                 // 2305
        return (lhs.value === null ? parseFloat(rhs.value) : (parseFloat(lhs.value) < parseFloat(rhs.value) ? parseFloat(lhs.value) : parseFloat(rhs.value)));
    };                                                                                                                 // 2307
                                                                                                                       // 2308
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2309
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2310
    // Source: /src/objects/aggregateMethod/sum.js                                                                     // 2311
    dimple.aggregateMethod.sum = function (lhs, rhs) {                                                                 // 2312
        lhs.value = (lhs.value === null || lhs.value === undefined ? 0 : parseFloat(lhs.value));                       // 2313
        rhs.value = (rhs.value === null || rhs.value === undefined ? 0 : parseFloat(rhs.value));                       // 2314
        return lhs.value + rhs.value;                                                                                  // 2315
    };                                                                                                                 // 2316
                                                                                                                       // 2317
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2318
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2319
    // Source: /src/objects/plot/area.js                                                                               // 2320
    dimple.plot.area = {                                                                                               // 2321
        stacked: true,                                                                                                 // 2322
                                                                                                                       // 2323
        supportedAxes: ["x", "y", "c"],                                                                                // 2324
                                                                                                                       // 2325
        draw: function (chart, series, duration) {                                                                     // 2326
            // Get self pointer for inner functions                                                                    // 2327
            var self = this,                                                                                           // 2328
                data = series._positionData,                                                                           // 2329
                uniqueValues = [],                                                                                     // 2330
                firstAgg = 1,                                                                                          // 2331
                graded = false,                                                                                        // 2332
                line,                                                                                                  // 2333
                catPoints = {},                                                                                        // 2334
                markers,                                                                                               // 2335
                markerBacks;                                                                                           // 2336
                                                                                                                       // 2337
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 2338
                chart._tooltipGroup.remove();                                                                          // 2339
            }                                                                                                          // 2340
                                                                                                                       // 2341
            // If there is a category axis we should draw a line for each aggField.  Otherwise                         // 2342
            // the first aggField defines the points and the others define the line                                    // 2343
            if (series.x._hasCategories() || series.y._hasCategories()) {                                              // 2344
                firstAgg = 0;                                                                                          // 2345
            }                                                                                                          // 2346
            data.forEach(function (d) {                                                                                // 2347
                var filter = [],                                                                                       // 2348
                    match = false,                                                                                     // 2349
                    k;                                                                                                 // 2350
                for (k = firstAgg; k < d.aggField.length; k += 1) {                                                    // 2351
                    filter.push(d.aggField[k]);                                                                        // 2352
                }                                                                                                      // 2353
                uniqueValues.forEach(function (e) {                                                                    // 2354
                    match = match || (e === filter.join("/"));                                                         // 2355
                }, this);                                                                                              // 2356
                if (!match) {                                                                                          // 2357
                    uniqueValues.push(filter.join("/"));                                                               // 2358
                }                                                                                                      // 2359
            }, this);                                                                                                  // 2360
                                                                                                                       // 2361
            if (series.c !== null && series.c !== undefined && ((series.x._hasCategories() && series.y._hasMeasure()) || (series.y._hasCategories() && series.x._hasMeasure()))) {
                graded = true;                                                                                         // 2363
                uniqueValues.forEach(function (seriesValue) {                                                          // 2364
                    dimple._addGradient(seriesValue, "fill-area-gradient-" + seriesValue.join("_").replace(" ", ""), (series.x._hasCategories() ? series.x : series.y), data, chart, duration, "fill");
                    dimple._addGradient(seriesValue, "stroke-area-gradient-" + seriesValue.join("_").replace(" ", ""), (series.x._hasCategories() ? series.x : series.y), data, chart, duration, "stroke");
                }, this);                                                                                              // 2367
            }                                                                                                          // 2368
                                                                                                                       // 2369
            line = d3.svg.line()                                                                                       // 2370
                    .x(function (d) { return dimple._helpers.cx(d, chart, series); })                                  // 2371
                    .y(function (d) { return dimple._helpers.cy(d, chart, series); });                                 // 2372
                                                                                                                       // 2373
            if (series.shapes === null || series.shapes === undefined) {                                               // 2374
                series.shapes = chart._group.selectAll(".area")                                                        // 2375
                    .data(uniqueValues)                                                                                // 2376
                    .enter()                                                                                           // 2377
                        .append("svg:path")                                                                            // 2378
                        .attr("opacity", function(d) { return chart.getColor(d).opacity; });                           // 2379
            }                                                                                                          // 2380
                                                                                                                       // 2381
            series.shapes                                                                                              // 2382
                .data(uniqueValues)                                                                                    // 2383
                .transition()                                                                                          // 2384
                .duration(duration)                                                                                    // 2385
                .attr("class", function (d) { return "series area " + d.split(" ").join("_"); })                       // 2386
                .attr("d", function (d) {                                                                              // 2387
                    var seriesData,                                                                                    // 2388
                        baseline = [],                                                                                 // 2389
                        max = 0,                                                                                       // 2390
                        row,                                                                                           // 2391
                        newObj,                                                                                        // 2392
                        j,                                                                                             // 2393
                        k,                                                                                             // 2394
                        m,                                                                                             // 2395
                        q,                                                                                             // 2396
                        r;                                                                                             // 2397
                    seriesData = dimple.filterData(data, "aggField", d);                                               // 2398
                    seriesData.sort(function (a, b) {                                                                  // 2399
                        var sortValue = 0;                                                                             // 2400
                        if (series.x._hasCategories()) {                                                               // 2401
                            sortValue = (dimple._helpers.cx(a, chart, series) < dimple._helpers.cx(b, chart, series) ? -1 : 1);
                        } else if (series.y._hasCategories()) {                                                        // 2403
                            sortValue = (dimple._helpers.cy(a, chart, series) < dimple._helpers.cy(b, chart, series) ? -1 : 1);
                        }                                                                                              // 2405
                        return sortValue;                                                                              // 2406
                    });                                                                                                // 2407
                    for (j = seriesData.length - 1; j >= 0; j -= 1) {                                                  // 2408
                        row = seriesData[j];                                                                           // 2409
                        newObj = { cx: 0, cy: 0, height: 0, width: 0, xOffset: 0, yOffset: 0 };                        // 2410
                        if (series.x._hasCategories()) {                                                               // 2411
                            // Fix the x properties                                                                    // 2412
                            newObj.cx = row.cx;                                                                        // 2413
                            newObj.width = row.width;                                                                  // 2414
                            newObj.xOffset = row.xOffset;                                                              // 2415
                            // Find the largest value for the xField less than this value                              // 2416
                            if (catPoints[row.xField] === undefined) {                                                 // 2417
                                catPoints[row.xField] = [];                                                            // 2418
                            } else {                                                                                   // 2419
                                max = 0;                                                                               // 2420
                                for (k = 0; k <= catPoints[row.xField].length; k += 1) {                               // 2421
                                    q = catPoints[row.xField][k];                                                      // 2422
                                    if ((row.cy >= 0 && q >= 0) || (row.cy <= 0 && q <= 0)) {                          // 2423
                                        if (Math.abs(q) <= Math.abs(row.cy) && Math.abs(q) > Math.abs(max)) {          // 2424
                                            max = q;                                                                   // 2425
                                        }                                                                              // 2426
                                    }                                                                                  // 2427
                                }                                                                                      // 2428
                                newObj.cy = max;                                                                       // 2429
                            }                                                                                          // 2430
                            baseline.push(newObj);                                                                     // 2431
                            catPoints[row.xField].push(row.cy);                                                        // 2432
                        } else if (series.y._hasCategories()) {                                                        // 2433
                            // Fix the y properties                                                                    // 2434
                            newObj.cy = row.cy;                                                                        // 2435
                            newObj.height = row.height;                                                                // 2436
                            newObj.yOffset = row.yOffset;                                                              // 2437
                            // Find the largest value for the xField less than this value                              // 2438
                            if (catPoints[row.yField] === undefined) {                                                 // 2439
                                catPoints[row.yField] = [];                                                            // 2440
                            } else {                                                                                   // 2441
                                max = 0;                                                                               // 2442
                                for (m = 0; m <= catPoints[row.yField].length; m += 1) {                               // 2443
                                    r = catPoints[row.yField][m];                                                      // 2444
                                    if ((row.cx >= 0 && r >= 0) || (row.cx <= 0 && r <= 0)) {                          // 2445
                                        if (Math.abs(r) <= Math.abs(row.cx) && Math.abs(r) > Math.abs(max)) {          // 2446
                                            max = r;                                                                   // 2447
                                        }                                                                              // 2448
                                    }                                                                                  // 2449
                                }                                                                                      // 2450
                                newObj.cx = max;                                                                       // 2451
                            }                                                                                          // 2452
                            baseline.push(newObj);                                                                     // 2453
                            catPoints[row.yField].push(row.cx);                                                        // 2454
                        }                                                                                              // 2455
                    }                                                                                                  // 2456
                    //return line(startPoint.concat(seriesData).concat(endPoint));                                     // 2457
                    return line(seriesData.concat(baseline).concat(seriesData[0]));                                    // 2458
                })                                                                                                     // 2459
                .call(function () {                                                                                    // 2460
                    if (!chart.noFormats) {                                                                            // 2461
                        this.attr("fill", function (d) { return (graded ? "url(#fill-area-gradient-" + d.join("_").replace(" ", "") + ")" : chart.getColor(d).fill); })
                            .attr("stroke", function (d) { return (graded ? "url(#stroke-area-gradient-" + d.join("_").replace(" ", "") + ")" : chart.getColor(d).stroke); })
                            .attr("stroke-width", series.lineWeight);                                                  // 2464
                    }                                                                                                  // 2465
                });                                                                                                    // 2466
                                                                                                                       // 2467
            if (series.lineMarkers) {                                                                                  // 2468
                if (series._markerBacks === null || series._markerBacks === undefined) {                               // 2469
                    markerBacks = chart._group.selectAll(".markerBacks").data(data);                                   // 2470
                } else {                                                                                               // 2471
                    markerBacks = series._markerBacks.data(data, function (d) { return d.key; });                      // 2472
                }                                                                                                      // 2473
                // Add                                                                                                 // 2474
                markerBacks                                                                                            // 2475
                    .enter()                                                                                           // 2476
                    .append("circle")                                                                                  // 2477
                    .attr("id", function (d) { return d.key; })                                                        // 2478
                    .attr("class", "markerBacks")                                                                      // 2479
                    .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                         // 2480
                    .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                         // 2481
                    .attr("r", 0)                                                                                      // 2482
                    .attr("fill", "white")                                                                             // 2483
                    .attr("stroke", "none");                                                                           // 2484
                                                                                                                       // 2485
                // Update                                                                                              // 2486
                markerBacks                                                                                            // 2487
                    .transition().duration(duration)                                                                   // 2488
                    .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                         // 2489
                    .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                         // 2490
                    .attr("r", 2 + series.lineWeight);                                                                 // 2491
                // Remove                                                                                              // 2492
                markerBacks                                                                                            // 2493
                    .exit()                                                                                            // 2494
                    .transition().duration(duration)                                                                   // 2495
                    .attr("r", 0)                                                                                      // 2496
                    .each("end", function () {                                                                         // 2497
                        d3.select(this).remove();                                                                      // 2498
                    });                                                                                                // 2499
                series._markerBacks = markerBacks;                                                                     // 2500
            }                                                                                                          // 2501
                                                                                                                       // 2502
            // Deal with markers in the same way as main series to fix #28                                             // 2503
            if (series._markers === null || series._markers === undefined) {                                           // 2504
                markers = chart._group.selectAll(".markers").data(data);                                               // 2505
            } else {                                                                                                   // 2506
                markers = series._markers.data(data, function (d) { return d.key; });                                  // 2507
            }                                                                                                          // 2508
                                                                                                                       // 2509
                                                                                                                       // 2510
            // Add the actual marker. We need to do this even if we aren't displaying them because they                // 2511
            // catch hover events                                                                                      // 2512
            markers                                                                                                    // 2513
                .enter()                                                                                               // 2514
                .append("circle")                                                                                      // 2515
                .attr("id", function (d) { return d.key; })                                                            // 2516
                .attr("class", "markers")                                                                              // 2517
                .on("mouseover", function (e) {                                                                        // 2518
                    self.enterEventHandler(e, this, chart, series);                                                    // 2519
                })                                                                                                     // 2520
                .on("mouseleave", function (e) {                                                                       // 2521
                    self.leaveEventHandler(e, this, chart, series);                                                    // 2522
                })                                                                                                     // 2523
                .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                             // 2524
                .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                             // 2525
                .attr("r", 0)                                                                                          // 2526
                .attr("opacity", function (d) { return (series.lineMarkers ? chart.getColor(d).opacity : 0); })        // 2527
                .call(function () {                                                                                    // 2528
                    if (!chart.noFormats) {                                                                            // 2529
                        this.attr("fill", "white")                                                                     // 2530
                            .style("stroke-width", series.lineWeight)                                                  // 2531
                            .attr("stroke", function (d) {                                                             // 2532
                                return (graded ? dimple._helpers.fill(d, chart, series) : chart.getColor(d.aggField[d.aggField.length - 1]).stroke);
                            });                                                                                        // 2534
                    }                                                                                                  // 2535
                });                                                                                                    // 2536
                                                                                                                       // 2537
            markers                                                                                                    // 2538
                .transition().duration(duration)                                                                       // 2539
                .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                             // 2540
                .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                             // 2541
                .attr("r", 2 + series.lineWeight)                                                                      // 2542
                .call(function () {                                                                                    // 2543
                    if (!chart.noFormats) {                                                                            // 2544
                        this.attr("fill", "white")                                                                     // 2545
                            .style("stroke-width", series.lineWeight)                                                  // 2546
                            .attr("stroke", function (d) {                                                             // 2547
                                return (graded ? dimple._helpers.fill(d, chart, series) : chart.getColor(d.aggField[d.aggField.length - 1]).stroke);
                            });                                                                                        // 2549
                    }                                                                                                  // 2550
                });                                                                                                    // 2551
                                                                                                                       // 2552
            markers                                                                                                    // 2553
                .exit()                                                                                                // 2554
                .transition().duration(duration)                                                                       // 2555
                .attr("r", 0)                                                                                          // 2556
                .each("end", function () {                                                                             // 2557
                    d3.select(this).remove();                                                                          // 2558
                });                                                                                                    // 2559
                                                                                                                       // 2560
            // Save the shapes to the series array                                                                     // 2561
            series._markers = markers;                                                                                 // 2562
        },                                                                                                             // 2563
                                                                                                                       // 2564
        // Handle the mouse enter event                                                                                // 2565
        enterEventHandler: function (e, shape, chart, series) {                                                        // 2566
                                                                                                                       // 2567
            // The margin between the text and the box                                                                 // 2568
            var textMargin = 5,                                                                                        // 2569
                // The margin between the ring and the popup                                                           // 2570
                popupMargin = 10,                                                                                      // 2571
                // The popup animation duration in ms                                                                  // 2572
                animDuration = 750,                                                                                    // 2573
                // Collect some facts about the highlighted bubble                                                     // 2574
                selectedShape = d3.select(shape),                                                                      // 2575
                cx = parseFloat(selectedShape.attr("cx")),                                                             // 2576
                cy = parseFloat(selectedShape.attr("cy")),                                                             // 2577
                r = parseFloat(selectedShape.attr("r")),                                                               // 2578
                opacity = dimple._helpers.opacity(e, chart, series),                                                   // 2579
                fill = dimple._helpers.fill(e, chart, series),                                                         // 2580
                dropDest = series._dropLineOrigin(),                                                                   // 2581
                // Fade the popup stroke mixing the shape fill with 60% white                                          // 2582
                popupStrokeColor = d3.rgb(                                                                             // 2583
                    d3.rgb(fill).r + 0.6 * (255 - d3.rgb(fill).r),                                                     // 2584
                    d3.rgb(fill).g + 0.6 * (255 - d3.rgb(fill).g),                                                     // 2585
                    d3.rgb(fill).b + 0.6 * (255 - d3.rgb(fill).b)                                                      // 2586
                ),                                                                                                     // 2587
                // Fade the popup fill mixing the shape fill with 80% white                                            // 2588
                popupFillColor = d3.rgb(                                                                               // 2589
                    d3.rgb(fill).r + 0.8 * (255 - d3.rgb(fill).r),                                                     // 2590
                    d3.rgb(fill).g + 0.8 * (255 - d3.rgb(fill).g),                                                     // 2591
                    d3.rgb(fill).b + 0.8 * (255 - d3.rgb(fill).b)                                                      // 2592
                ),                                                                                                     // 2593
                t,                                                                                                     // 2594
                y = 0,                                                                                                 // 2595
                w = 0,                                                                                                 // 2596
                h = 0,                                                                                                 // 2597
                box,                                                                                                   // 2598
                overlap,                                                                                               // 2599
                rows = [];                                                                                             // 2600
                                                                                                                       // 2601
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 2602
                chart._tooltipGroup.remove();                                                                          // 2603
            }                                                                                                          // 2604
            chart._tooltipGroup = chart.svg.append("g");                                                               // 2605
                                                                                                                       // 2606
            // On hover make the line marker visible immediately                                                       // 2607
            selectedShape.style("opacity", 1);                                                                         // 2608
            // Add a ring around the data point                                                                        // 2609
            chart._tooltipGroup.append("circle")                                                                       // 2610
                .attr("cx", cx)                                                                                        // 2611
                .attr("cy", cy)                                                                                        // 2612
                .attr("r", r)                                                                                          // 2613
                .attr("opacity", 0)                                                                                    // 2614
                .style("fill", "none")                                                                                 // 2615
                .style("stroke", fill)                                                                                 // 2616
                .style("stroke-width", 1)                                                                              // 2617
                .transition()                                                                                          // 2618
                .duration(animDuration / 2)                                                                            // 2619
                .ease("linear")                                                                                        // 2620
                    .attr("opacity", 1)                                                                                // 2621
                    .attr("r", r + 4)                                                                                  // 2622
                    .style("stroke-width", 2);                                                                         // 2623
                                                                                                                       // 2624
            // Add a drop line to the x axis                                                                           // 2625
            if (dropDest.y !== null) {                                                                                 // 2626
                chart._tooltipGroup.append("line")                                                                     // 2627
                    .attr("x1", cx)                                                                                    // 2628
                    .attr("y1", (cy < dropDest.y ? cy + r + 4 : cy - r - 4))                                           // 2629
                    .attr("x2", cx)                                                                                    // 2630
                    .attr("y2", (cy < dropDest.y ? cy + r + 4 : cy - r - 4))                                           // 2631
                    .style("fill", "none")                                                                             // 2632
                    .style("stroke", fill)                                                                             // 2633
                    .style("stroke-width", 2)                                                                          // 2634
                    .style("stroke-dasharray", ("3, 3"))                                                               // 2635
                    .style("opacity", opacity)                                                                         // 2636
                    .transition()                                                                                      // 2637
                        .delay(animDuration / 2)                                                                       // 2638
                        .duration(animDuration / 2)                                                                    // 2639
                        .ease("linear")                                                                                // 2640
                        // Added 1px offset to cater for svg issue where a transparent                                 // 2641
                        // group overlapping a line can sometimes hide it in some browsers                             // 2642
                        // Issue #10                                                                                   // 2643
                        .attr("y2", (cy < dropDest.y ? dropDest.y - 1 : dropDest.y + 1));                              // 2644
            }                                                                                                          // 2645
                                                                                                                       // 2646
            // Add a drop line to the y axis                                                                           // 2647
            if (dropDest.x !== null) {                                                                                 // 2648
                chart._tooltipGroup.append("line")                                                                     // 2649
                    .attr("x1", (cx < dropDest.x ? cx + r + 4 : cx - r - 4))                                           // 2650
                    .attr("y1", cy)                                                                                    // 2651
                    .attr("x2", (cx < dropDest.x ? cx + r + 4 : cx - r - 4))                                           // 2652
                    .attr("y2", cy)                                                                                    // 2653
                    .style("fill", "none")                                                                             // 2654
                    .style("stroke", fill)                                                                             // 2655
                    .style("stroke-width", 2)                                                                          // 2656
                    .style("stroke-dasharray", ("3, 3"))                                                               // 2657
                    .style("opacity", opacity)                                                                         // 2658
                    .transition()                                                                                      // 2659
                        .delay(animDuration / 2)                                                                       // 2660
                        .duration(animDuration / 2)                                                                    // 2661
                        .ease("linear")                                                                                // 2662
                        // Added 1px offset to cater for svg issue where a transparent                                 // 2663
                        // group overlapping a line can sometimes hide it in some browsers                             // 2664
                        // Issue #10                                                                                   // 2665
                        .attr("x2", (cx < dropDest.x ? dropDest.x - 1 : dropDest.x + 1));                              // 2666
            }                                                                                                          // 2667
                                                                                                                       // 2668
            // Add a group for text                                                                                    // 2669
            t = chart._tooltipGroup.append("g");                                                                       // 2670
            // Create a box for the popup in the text group                                                            // 2671
            box = t.append("rect")                                                                                     // 2672
                .attr("class", "tooltip");                                                                             // 2673
                                                                                                                       // 2674
            // Add the series categories                                                                               // 2675
            if (series.categoryFields !== null && series.categoryFields !== undefined && series.categoryFields.length > 0) {
                series.categoryFields.forEach(function (c, i) {                                                        // 2677
                    // If the category name and value match don't display the category name                            // 2678
                    rows.push(c + (e.aggField[i] !== c ? ": " + e.aggField[i] : ""));                                  // 2679
                }, this);                                                                                              // 2680
            }                                                                                                          // 2681
                                                                                                                       // 2682
            if (series.x._hasTimeField()) {                                                                            // 2683
                rows.push(series.x.timeField + ": " + series.x._getFormat()(e.xField[0]));                             // 2684
            } else if (series.x._hasCategories()) {                                                                    // 2685
                // Add the x axis categories                                                                           // 2686
                series.x.categoryFields.forEach(function (c, i) {                                                      // 2687
                    // If the category name and value match don't display the category name                            // 2688
                    rows.push(c + (e.xField[i] !== c ? ": " + e.xField[i] : ""));                                      // 2689
                }, this);                                                                                              // 2690
            } else {                                                                                                   // 2691
                // Add the axis measure value                                                                          // 2692
                rows.push(series.x.measure + ": " + series.x._getFormat()(e.width));                                   // 2693
            }                                                                                                          // 2694
                                                                                                                       // 2695
            if (series.y._hasTimeField()) {                                                                            // 2696
                rows.push(series.y.timeField + ": " + series.y._getFormat()(e.yField[0]));                             // 2697
            } else if (series.y._hasCategories()) {                                                                    // 2698
                // Add the y axis categories                                                                           // 2699
                series.y.categoryFields.forEach(function (c, i) {                                                      // 2700
                    rows.push(c + (e.yField[i] !== c ? ": " + e.yField[i] : ""));                                      // 2701
                }, this);                                                                                              // 2702
            } else {                                                                                                   // 2703
                // Add the axis measure value                                                                          // 2704
                rows.push(series.y.measure + ": " + series.y._getFormat()(e.height));                                  // 2705
            }                                                                                                          // 2706
                                                                                                                       // 2707
            if (series.z !== null && series.z !== undefined) {                                                         // 2708
                // Add the axis measure value                                                                          // 2709
                rows.push(series.z.measure + ": " + series.z._getFormat()(e.zValue));                                  // 2710
            }                                                                                                          // 2711
                                                                                                                       // 2712
            if (series.c !== null && series.c !== undefined) {                                                         // 2713
                // Add the axis measure value                                                                          // 2714
                rows.push(series.c.measure + ": " + series.c._getFormat()(e.cValue));                                  // 2715
            }                                                                                                          // 2716
                                                                                                                       // 2717
            // Get distinct text rows to deal with cases where 2 axes have the same dimensionality                     // 2718
            rows = rows.filter(function(elem, pos) {                                                                   // 2719
                return rows.indexOf(elem) === pos;                                                                     // 2720
            });                                                                                                        // 2721
                                                                                                                       // 2722
            // Create a text object for every row in the popup                                                         // 2723
            t.selectAll(".textHoverShapes").data(rows).enter()                                                         // 2724
                .append("text")                                                                                        // 2725
                    .attr("class", "tooltip")                                                                          // 2726
                    .text(function (d) { return d; })                                                                  // 2727
                    .style("font-family", "sans-serif")                                                                // 2728
                    .style("font-size", "10px");                                                                       // 2729
                                                                                                                       // 2730
            // Get the max height and width of the text items                                                          // 2731
            t.each(function () {                                                                                       // 2732
                w = (this.getBBox().width > w ? this.getBBox().width : w);                                             // 2733
                h = (this.getBBox().width > h ? this.getBBox().height : h);                                            // 2734
            });                                                                                                        // 2735
                                                                                                                       // 2736
            // Position the text relatve to the bubble, the absolute positioning                                       // 2737
            // will be done by translating the group                                                                   // 2738
            t.selectAll("text")                                                                                        // 2739
                .attr("x", 0)                                                                                          // 2740
                .attr("y", function () {                                                                               // 2741
                    // Increment the y position                                                                        // 2742
                    y += this.getBBox().height;                                                                        // 2743
                    // Position the text at the centre point                                                           // 2744
                    return y - (this.getBBox().height / 2);                                                            // 2745
                });                                                                                                    // 2746
                                                                                                                       // 2747
            // Draw the box with a margin around the text                                                              // 2748
            box.attr("x", -textMargin)                                                                                 // 2749
                .attr("y", -textMargin)                                                                                // 2750
                .attr("height", Math.floor(y + textMargin) - 0.5)                                                      // 2751
                .attr("width", w + 2 * textMargin)                                                                     // 2752
                .attr("rx", 5)                                                                                         // 2753
                .attr("ry", 5)                                                                                         // 2754
                .style("fill", popupFillColor)                                                                         // 2755
                .style("stroke", popupStrokeColor)                                                                     // 2756
                .style("stroke-width", 2)                                                                              // 2757
                .style("opacity", 0.95);                                                                               // 2758
                                                                                                                       // 2759
            // Shift the ring margin left or right depending on whether it will overlap the edge                       // 2760
            overlap = cx + r + textMargin + popupMargin + w > parseFloat(chart.svg.node().getBBox().width);            // 2761
                                                                                                                       // 2762
            // Translate the shapes to the x position of the bubble (the x position of the shapes is handled)          // 2763
            t.attr("transform", "translate(" +                                                                         // 2764
                   (overlap ? cx - (r + textMargin + popupMargin + w) : cx + r + textMargin + popupMargin) + " , " +   // 2765
                   (cy - ((y - (h - textMargin)) / 2)) +                                                               // 2766
                ")");                                                                                                  // 2767
        },                                                                                                             // 2768
                                                                                                                       // 2769
        // Handle the mouse leave event                                                                                // 2770
        leaveEventHandler: function (e, shape, chart, series) {                                                        // 2771
            // Return the opacity of the marker                                                                        // 2772
            d3.select(shape).style("opacity", (series.lineMarkers ? dimple._helpers.opacity(e, chart, series) : 0));   // 2773
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 2774
                chart._tooltipGroup.remove();                                                                          // 2775
            }                                                                                                          // 2776
        }                                                                                                              // 2777
    };                                                                                                                 // 2778
                                                                                                                       // 2779
                                                                                                                       // 2780
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 2781
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 2782
    // Source: /src/objects/plot/bar.js                                                                                // 2783
    dimple.plot.bar = {                                                                                                // 2784
                                                                                                                       // 2785
        // By default the bar series is stacked if there are series categories                                         // 2786
        stacked: true,                                                                                                 // 2787
                                                                                                                       // 2788
        // The axes which will affect the bar chart - not z                                                            // 2789
        supportedAxes: ["x", "y", "c"],                                                                                // 2790
                                                                                                                       // 2791
        // Draw the chart                                                                                              // 2792
        draw: function (chart, series, duration) {                                                                     // 2793
                                                                                                                       // 2794
            // Get self pointer for inner functions                                                                    // 2795
            var self = this,                                                                                           // 2796
                // Get the series data                                                                                 // 2797
                chartData = series._positionData,                                                                      // 2798
                // If the series is uninitialised create placeholders, otherwise use the existing shapes               // 2799
                theseShapes = null,                                                                                    // 2800
                className = "series" + chart.series.indexOf(series);                                                   // 2801
                                                                                                                       // 2802
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 2803
                chart._tooltipGroup.remove();                                                                          // 2804
            }                                                                                                          // 2805
                                                                                                                       // 2806
            if (series.shapes === null || series.shapes === undefined) {                                               // 2807
                theseShapes = chart._group.selectAll("." + className).data(chartData);                                 // 2808
            } else {                                                                                                   // 2809
                theseShapes = series.shapes.data(chartData, function (d) { return d.key; });                           // 2810
            }                                                                                                          // 2811
                                                                                                                       // 2812
            // Add                                                                                                     // 2813
            theseShapes                                                                                                // 2814
                .enter()                                                                                               // 2815
                .append("rect")                                                                                        // 2816
                .attr("id", function (d) { return d.key; })                                                            // 2817
                .attr("class", function (d) {                                                                          // 2818
                    return className + " bar " +                                                                       // 2819
                        d.aggField.join(" ").split(" ").join("_") + " " +                                              // 2820
                        d.xField.join(" ").split(" ").join("_") + " " +                                                // 2821
                        d.yField.join(" ").split(" ").join("_");                                                       // 2822
                })                                                                                                     // 2823
                .attr("x", function (d) { return dimple._helpers.x(d, chart, series); })                               // 2824
                .attr("y", function (d) { return dimple._helpers.y(d, chart, series) + dimple._helpers.height(d, chart, series); })
                .attr("width", function (d) {return (d.xField !== null && d.xField.length > 0 ? dimple._helpers.width(d, chart, series) : 0); })
                .attr("height", function (d) {return (d.yField !== null && d.yField.length > 0 ? dimple._helpers.height(d, chart, series) : 0); })
                .attr("opacity", function (d) { return dimple._helpers.opacity(d, chart, series); })                   // 2828
                .on("mouseover", function (e) {                                                                        // 2829
                    self.enterEventHandler(e, this, chart, series);                                                    // 2830
                })                                                                                                     // 2831
                .on("mouseleave", function () {                                                                        // 2832
                    self.leaveEventHandler(chart);                                                                     // 2833
                })                                                                                                     // 2834
                .call(function () {                                                                                    // 2835
                    if (!chart.noFormats) {                                                                            // 2836
                        this.attr("fill", function (d) { return dimple._helpers.fill(d, chart, series); })             // 2837
                            .attr("stroke", function (d) { return dimple._helpers.stroke(d, chart, series); });        // 2838
                    }                                                                                                  // 2839
                });                                                                                                    // 2840
                                                                                                                       // 2841
            // Update                                                                                                  // 2842
            theseShapes                                                                                                // 2843
                .transition().duration(duration)                                                                       // 2844
                .attr("x", function (d) { return dimple._helpers.x(d, chart, series); })                               // 2845
                .attr("y", function (d) { return dimple._helpers.y(d, chart, series); })                               // 2846
                .attr("width", function (d) { return dimple._helpers.width(d, chart, series); })                       // 2847
                .attr("height", function (d) { return dimple._helpers.height(d, chart, series); })                     // 2848
                .call(function () {                                                                                    // 2849
                    if (!chart.noFormats) {                                                                            // 2850
                        this.attr("fill", function (d) { return dimple._helpers.fill(d, chart, series); })             // 2851
                            .attr("stroke", function (d) { return dimple._helpers.stroke(d, chart, series); });        // 2852
                    }                                                                                                  // 2853
                });                                                                                                    // 2854
                                                                                                                       // 2855
            // Remove                                                                                                  // 2856
            theseShapes                                                                                                // 2857
                .exit()                                                                                                // 2858
                .transition().duration(duration)                                                                       // 2859
                .attr("x", function (d) { return dimple._helpers.x(d, chart, series); })                               // 2860
                .attr("y", function (d) { return dimple._helpers.y(d, chart, series); })                               // 2861
                .attr("width", function (d) { return dimple._helpers.width(d, chart, series); })                       // 2862
                .attr("height", function (d) { return dimple._helpers.height(d, chart, series); })                     // 2863
                .each("end", function () {                                                                             // 2864
                    d3.select(this).remove();                                                                          // 2865
                });                                                                                                    // 2866
                                                                                                                       // 2867
            // Save the shapes to the series array                                                                     // 2868
            series.shapes = theseShapes;                                                                               // 2869
        },                                                                                                             // 2870
                                                                                                                       // 2871
        // Handle the mouse enter event                                                                                // 2872
        enterEventHandler: function (e, shape, chart, series) {                                                        // 2873
                                                                                                                       // 2874
            // The margin between the text and the box                                                                 // 2875
            var textMargin = 5,                                                                                        // 2876
                // The margin between the ring and the popup                                                           // 2877
                popupMargin = 10,                                                                                      // 2878
                // The popup animation duration in ms                                                                  // 2879
                animDuration = 750,                                                                                    // 2880
                // Collect some facts about the highlighted bubble                                                     // 2881
                selectedShape = d3.select(shape),                                                                      // 2882
                x = parseFloat(selectedShape.attr("x")),                                                               // 2883
                y = parseFloat(selectedShape.attr("y")),                                                               // 2884
                width = parseFloat(selectedShape.attr("width")),                                                       // 2885
                height = parseFloat(selectedShape.attr("height")),                                                     // 2886
                opacity = selectedShape.attr("opacity"),                                                               // 2887
                fill = selectedShape.attr("fill"),                                                                     // 2888
                dropDest = series._dropLineOrigin(),                                                                   // 2889
                // Fade the popup stroke mixing the shape fill with 60% white                                          // 2890
                popupStrokeColor = d3.rgb(                                                                             // 2891
                    d3.rgb(fill).r + 0.6 * (255 - d3.rgb(fill).r),                                                     // 2892
                    d3.rgb(fill).g + 0.6 * (255 - d3.rgb(fill).g),                                                     // 2893
                    d3.rgb(fill).b + 0.6 * (255 - d3.rgb(fill).b)                                                      // 2894
                ),                                                                                                     // 2895
                // Fade the popup fill mixing the shape fill with 80% white                                            // 2896
                popupFillColor = d3.rgb(                                                                               // 2897
                    d3.rgb(fill).r + 0.8 * (255 - d3.rgb(fill).r),                                                     // 2898
                    d3.rgb(fill).g + 0.8 * (255 - d3.rgb(fill).g),                                                     // 2899
                    d3.rgb(fill).b + 0.8 * (255 - d3.rgb(fill).b)                                                      // 2900
                ),                                                                                                     // 2901
                t,                                                                                                     // 2902
                box,                                                                                                   // 2903
                rows = [],                                                                                             // 2904
                // The running y value for the text elements                                                           // 2905
                yRunning = 0,                                                                                          // 2906
                // The maximum bounds of the text elements                                                             // 2907
                w = 0,                                                                                                 // 2908
                h = 0,                                                                                                 // 2909
                // Values to shift the popup                                                                           // 2910
                translateX,                                                                                            // 2911
                translateY;                                                                                            // 2912
                                                                                                                       // 2913
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 2914
                chart._tooltipGroup.remove();                                                                          // 2915
            }                                                                                                          // 2916
            chart._tooltipGroup = chart.svg.append("g");                                                               // 2917
                                                                                                                       // 2918
            // Add a drop line to the x axis                                                                           // 2919
            if (!series.x._hasCategories() && dropDest.y !== null) {                                                   // 2920
                chart._tooltipGroup.append("line")                                                                     // 2921
                    .attr("x1", (x < series.x._origin ? x + 1 : x + width - 1))                                        // 2922
                    .attr("y1", (y < dropDest.y ? y + height : y))                                                     // 2923
                    .attr("x2", (x < series.x._origin ? x + 1 : x + width - 1))                                        // 2924
                    .attr("y2", (y < dropDest.y ? y + height : y))                                                     // 2925
                    .style("fill", "none")                                                                             // 2926
                    .style("stroke", fill)                                                                             // 2927
                    .style("stroke-width", 2)                                                                          // 2928
                    .style("stroke-dasharray", ("3, 3"))                                                               // 2929
                    .style("opacity", opacity)                                                                         // 2930
                    .transition()                                                                                      // 2931
                        .delay(animDuration / 2)                                                                       // 2932
                        .duration(animDuration / 2)                                                                    // 2933
                        .ease("linear")                                                                                // 2934
                        // Added 1px offset to cater for svg issue where a transparent                                 // 2935
                        // group overlapping a line can sometimes hide it in some browsers                             // 2936
                        // Issue #10                                                                                   // 2937
                        .attr("y2", (y < dropDest.y ? dropDest.y - 1 : dropDest.y + 1));                               // 2938
            }                                                                                                          // 2939
                                                                                                                       // 2940
            // Add a drop line to the y axis                                                                           // 2941
            if (!series.y._hasCategories() && dropDest.x !== null) {                                                   // 2942
                chart._tooltipGroup.append("line")                                                                     // 2943
                    .attr("x1", (x < dropDest.x ? x + width : x))                                                      // 2944
                    .attr("y1", (y < series.y._origin ? y + 1 : y + height - 1))                                       // 2945
                    .attr("x2", (x < dropDest.x ? x + width : x))                                                      // 2946
                    .attr("y2", (y < series.y._origin ? y + 1 : y + height - 1))                                       // 2947
                    .style("fill", "none")                                                                             // 2948
                    .style("stroke", fill)                                                                             // 2949
                    .style("stroke-width", 2)                                                                          // 2950
                    .style("stroke-dasharray", ("3, 3"))                                                               // 2951
                    .style("opacity", opacity)                                                                         // 2952
                    .transition()                                                                                      // 2953
                        .delay(animDuration / 2)                                                                       // 2954
                        .duration(animDuration / 2)                                                                    // 2955
                        .ease("linear")                                                                                // 2956
                        // Added 1px offset to cater for svg issue where a transparent                                 // 2957
                        // group overlapping a line can sometimes hide it in some browsers                             // 2958
                        // Issue #10                                                                                   // 2959
                        .attr("x2", (x < dropDest.x ? dropDest.x - 1 : dropDest.x + 1));                               // 2960
            }                                                                                                          // 2961
                                                                                                                       // 2962
            // Add a group for text                                                                                    // 2963
            t = chart._tooltipGroup.append("g");                                                                       // 2964
            // Create a box for the popup in the text group                                                            // 2965
            box = t.append("rect")                                                                                     // 2966
                .attr("class", "tooltip");                                                                             // 2967
                                                                                                                       // 2968
            // Add the series categories                                                                               // 2969
            if (series.categoryFields !== null && series.categoryFields !== undefined && series.categoryFields.length > 0) {
                series.categoryFields.forEach(function (c, i) {                                                        // 2971
                    // If the category name and value match don't display the category name                            // 2972
                    rows.push(c + (e.aggField[i] !== c ? ": " + e.aggField[i] : ""));                                  // 2973
                }, this);                                                                                              // 2974
            }                                                                                                          // 2975
                                                                                                                       // 2976
            if (series.x._hasTimeField()) {                                                                            // 2977
                rows.push(series.x.timeField + ": " + series.x._getFormat()(e.xField[0]));                             // 2978
            } else if (series.x._hasCategories()) {                                                                    // 2979
                // Add the x axis categories                                                                           // 2980
                series.x.categoryFields.forEach(function (c, i) {                                                      // 2981
                    // If the category name and value match don't display the category name                            // 2982
                    rows.push(c + (e.xField[i] !== c ? ": " + e.xField[i] : ""));                                      // 2983
                }, this);                                                                                              // 2984
            } else {                                                                                                   // 2985
                // Add the axis measure value                                                                          // 2986
                rows.push(series.x.measure + ": " + series.x._getFormat()(e.width));                                   // 2987
            }                                                                                                          // 2988
                                                                                                                       // 2989
            if (series.y._hasTimeField()) {                                                                            // 2990
                rows.push(series.y.timeField + ": " + series.y._getFormat()(e.yField[0]));                             // 2991
            } else if (series.y._hasCategories()) {                                                                    // 2992
                // Add the y axis categories                                                                           // 2993
                series.y.categoryFields.forEach(function (c, i) {                                                      // 2994
                    rows.push(c + (e.yField[i] !== c ? ": " + e.yField[i] : ""));                                      // 2995
                }, this);                                                                                              // 2996
            } else {                                                                                                   // 2997
                // Add the axis measure value                                                                          // 2998
                rows.push(series.y.measure + ": " + series.y._getFormat()(e.height));                                  // 2999
            }                                                                                                          // 3000
                                                                                                                       // 3001
            if (series.c !== null && series.c !== undefined) {                                                         // 3002
                // Add the axis measure value                                                                          // 3003
                rows.push(series.c.measure + ": " + series.c._getFormat()(series.c.showPercent ? e.cPct : e.cValue));  // 3004
            }                                                                                                          // 3005
                                                                                                                       // 3006
            // Get distinct text rows to deal with cases where 2 axes have the same dimensionality                     // 3007
            rows = rows.filter(function(elem, pos) {                                                                   // 3008
                return rows.indexOf(elem) === pos;                                                                     // 3009
            });                                                                                                        // 3010
                                                                                                                       // 3011
            // Create a text object for every row in the popup                                                         // 3012
            t.selectAll(".textHoverShapes").data(rows).enter()                                                         // 3013
                .append("text")                                                                                        // 3014
                    .attr("class", "tooltip")                                                                          // 3015
                    .text(function (d) { return d; })                                                                  // 3016
                    .style("font-family", "sans-serif")                                                                // 3017
                    .style("font-size", "10px");                                                                       // 3018
                                                                                                                       // 3019
            // Get the max height and width of the text items                                                          // 3020
            t.each(function () {                                                                                       // 3021
                w = (this.getBBox().width > w ? this.getBBox().width : w);                                             // 3022
                h = (this.getBBox().width > h ? this.getBBox().height : h);                                            // 3023
            });                                                                                                        // 3024
                                                                                                                       // 3025
            // Position the text relatve to the bubble, the absolute positioning                                       // 3026
            // will be done by translating the group                                                                   // 3027
            t.selectAll("text")                                                                                        // 3028
                .attr("x", 0)                                                                                          // 3029
                .attr("y", function () {                                                                               // 3030
                    // Increment the y position                                                                        // 3031
                    yRunning += this.getBBox().height;                                                                 // 3032
                    // Position the text at the centre point                                                           // 3033
                    return yRunning - (this.getBBox().height / 2);                                                     // 3034
                });                                                                                                    // 3035
                                                                                                                       // 3036
            // Draw the box with a margin around the text                                                              // 3037
            box.attr("x", -textMargin)                                                                                 // 3038
                .attr("y", -textMargin)                                                                                // 3039
                .attr("height", Math.floor(yRunning + textMargin) - 0.5)                                               // 3040
                .attr("width", w + 2 * textMargin)                                                                     // 3041
                .attr("rx", 5)                                                                                         // 3042
                .attr("ry", 5)                                                                                         // 3043
                .style("fill", popupFillColor)                                                                         // 3044
                .style("stroke", popupStrokeColor)                                                                     // 3045
                .style("stroke-width", 2)                                                                              // 3046
                .style("opacity", 0.95);                                                                               // 3047
                                                                                                                       // 3048
            // Shift the popup around to avoid overlapping the svg edge                                                // 3049
            if (x + width + textMargin + popupMargin + w < parseFloat(chart.svg.node().getBBox().width)) {             // 3050
                // Draw centre right                                                                                   // 3051
                translateX = (x + width + textMargin + popupMargin);                                                   // 3052
                translateY = (y + (height / 2) - ((yRunning - (h - textMargin)) / 2));                                 // 3053
                t.attr("transform", "translate(" + translateX + " , " + translateY + ")");                             // 3054
            } else if (x - (textMargin + popupMargin + w) > 0) {                                                       // 3055
                // Draw centre left                                                                                    // 3056
                translateX = (x - (textMargin + popupMargin + w));                                                     // 3057
                translateY = (y + (height / 2) - ((yRunning - (h - textMargin)) / 2));                                 // 3058
                t.attr("transform", "translate(" + translateX + " , " + translateY + ")");                             // 3059
            } else if (y + height + yRunning + popupMargin + textMargin < parseFloat(chart.svg.node().getBBox().height)) {
                // Draw centre below                                                                                   // 3061
                translateX = (x + (width / 2) - (2 * textMargin + w) / 2);                                             // 3062
                translateY = (y + height + 2 * textMargin);                                                            // 3063
                t.attr("transform", "translate(" +                                                                     // 3064
                    (translateX > 0 ? translateX : popupMargin) + " , " +                                              // 3065
                    translateY +                                                                                       // 3066
                    ")");                                                                                              // 3067
            } else {                                                                                                   // 3068
                // Draw centre above                                                                                   // 3069
                translateX = (x + (width / 2) - (2 * textMargin + w) / 2);                                             // 3070
                translateY = (y - yRunning - (h - textMargin));                                                        // 3071
                t.attr("transform", "translate(" +                                                                     // 3072
                    (translateX > 0 ? translateX : popupMargin) + " , " +                                              // 3073
                    translateY +                                                                                       // 3074
                    ")");                                                                                              // 3075
            }                                                                                                          // 3076
        },                                                                                                             // 3077
                                                                                                                       // 3078
        // Handle the mouse leave event                                                                                // 3079
        leaveEventHandler: function (chart) {                                                                          // 3080
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 3081
                chart._tooltipGroup.remove();                                                                          // 3082
            }                                                                                                          // 3083
        }                                                                                                              // 3084
    };                                                                                                                 // 3085
                                                                                                                       // 3086
                                                                                                                       // 3087
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 3088
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 3089
    // Source: /src/objects/plot/bubble.js                                                                             // 3090
    dimple.plot.bubble = {                                                                                             // 3091
                                                                                                                       // 3092
        // By default the bubble values are not stacked                                                                // 3093
        stacked: false,                                                                                                // 3094
                                                                                                                       // 3095
        // The axis positions affecting the bubble series                                                              // 3096
        supportedAxes: ["x", "y", "z", "c"],                                                                           // 3097
                                                                                                                       // 3098
        // Draw the axis                                                                                               // 3099
        draw: function (chart, series, duration) {                                                                     // 3100
                                                                                                                       // 3101
            // Get self pointer for inner functions                                                                    // 3102
            var self = this,                                                                                           // 3103
                // Get the series data                                                                                 // 3104
                chartData = series._positionData,                                                                      // 3105
                // If the series is uninitialised create placeholders, otherwise use the existing shapes               // 3106
                theseShapes = null,                                                                                    // 3107
                className = "series" + chart.series.indexOf(series);                                                   // 3108
                                                                                                                       // 3109
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 3110
                chart._tooltipGroup.remove();                                                                          // 3111
            }                                                                                                          // 3112
                                                                                                                       // 3113
            if (series.shapes === null || series.shapes === undefined) {                                               // 3114
                theseShapes = chart._group.selectAll("." + className).data(chartData);                                 // 3115
            } else {                                                                                                   // 3116
                theseShapes = series.shapes.data(chartData, function (d) { return d.key; });                           // 3117
            }                                                                                                          // 3118
                                                                                                                       // 3119
            // Add                                                                                                     // 3120
            theseShapes                                                                                                // 3121
                .enter()                                                                                               // 3122
                .append("circle")                                                                                      // 3123
                .attr("id", function (d) { return d.key; })                                                            // 3124
                .attr("class", function (d) {                                                                          // 3125
                    return className + " bubble " +                                                                    // 3126
                        d.aggField.join(" ").split(" ").join("_") + " " +                                              // 3127
                        d.xField.join(" ").split(" ").join("_") + " " +                                                // 3128
                        d.yField.join(" ").split(" ").join("_") + " " +                                                // 3129
                        d.zField.join(" ").split(" ").join("_");                                                       // 3130
                })                                                                                                     // 3131
                .attr("cx", function (d) {                                                                             // 3132
                    return (series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._origin);      // 3133
                })                                                                                                     // 3134
                .attr("cy", function (d) {                                                                             // 3135
                    return (series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._origin);      // 3136
                })                                                                                                     // 3137
                .attr("r", 0)                                                                                          // 3138
                .attr("opacity", function (d) { return dimple._helpers.opacity(d, chart, series); })                   // 3139
                .on("mouseover", function (e) {                                                                        // 3140
                    self.enterEventHandler(e, this, chart, series);                                                    // 3141
                })                                                                                                     // 3142
                .on("mouseleave", function () {                                                                        // 3143
                    self.leaveEventHandler(chart);                                                                     // 3144
                })                                                                                                     // 3145
                .call(function () {                                                                                    // 3146
                    if (!chart.noFormats) {                                                                            // 3147
                        this.attr("fill", function (d) { return dimple._helpers.fill(d, chart, series); })             // 3148
                            .attr("stroke", function (d) { return dimple._helpers.stroke(d, chart, series); });        // 3149
                    }                                                                                                  // 3150
                });                                                                                                    // 3151
                                                                                                                       // 3152
            // Update                                                                                                  // 3153
            theseShapes                                                                                                // 3154
                .transition().duration(duration)                                                                       // 3155
                .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                             // 3156
                .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                             // 3157
                .attr("r", function (d) { return dimple._helpers.r(d, chart, series); })                               // 3158
                .call(function () {                                                                                    // 3159
                    if (!chart.noFormats) {                                                                            // 3160
                        this.attr("fill", function (d) { return dimple._helpers.fill(d, chart, series); })             // 3161
                            .attr("stroke", function (d) { return dimple._helpers.stroke(d, chart, series); });        // 3162
                    }                                                                                                  // 3163
                });                                                                                                    // 3164
                                                                                                                       // 3165
            // Remove                                                                                                  // 3166
            theseShapes                                                                                                // 3167
                .exit()                                                                                                // 3168
                .transition().duration(duration)                                                                       // 3169
                .attr("r", 0)                                                                                          // 3170
                .attr("cx", function (d) {                                                                             // 3171
                    return (series.x._hasCategories() ? dimple._helpers.cx(d, chart, series) : series.x._origin);      // 3172
                })                                                                                                     // 3173
                .attr("cy", function (d) {                                                                             // 3174
                    return (series.y._hasCategories() ? dimple._helpers.cy(d, chart, series) : series.y._origin);      // 3175
                })                                                                                                     // 3176
                .each("end", function () {                                                                             // 3177
                    d3.select(this).remove();                                                                          // 3178
                });                                                                                                    // 3179
                                                                                                                       // 3180
            // Save the shapes to the series array                                                                     // 3181
            series.shapes = theseShapes;                                                                               // 3182
        },                                                                                                             // 3183
                                                                                                                       // 3184
        // Handle the mouse enter event                                                                                // 3185
        enterEventHandler: function (e, shape, chart, series) {                                                        // 3186
                                                                                                                       // 3187
            // The margin between the text and the box                                                                 // 3188
            var textMargin = 5,                                                                                        // 3189
                // The margin between the ring and the popup                                                           // 3190
                popupMargin = 10,                                                                                      // 3191
                // The popup animation duration in ms                                                                  // 3192
                animDuration = 750,                                                                                    // 3193
                // Collect some facts about the highlighted bubble                                                     // 3194
                selectedShape = d3.select(shape),                                                                      // 3195
                cx = parseFloat(selectedShape.attr("cx")),                                                             // 3196
                cy = parseFloat(selectedShape.attr("cy")),                                                             // 3197
                r = parseFloat(selectedShape.attr("r")),                                                               // 3198
                opacity = selectedShape.attr("opacity"),                                                               // 3199
                fill = selectedShape.attr("fill"),                                                                     // 3200
                dropDest = series._dropLineOrigin(),                                                                   // 3201
                // Fade the popup stroke mixing the shape fill with 60% white                                          // 3202
                popupStrokeColor = d3.rgb(                                                                             // 3203
                    d3.rgb(fill).r + 0.6 * (255 - d3.rgb(fill).r),                                                     // 3204
                    d3.rgb(fill).g + 0.6 * (255 - d3.rgb(fill).g),                                                     // 3205
                    d3.rgb(fill).b + 0.6 * (255 - d3.rgb(fill).b)                                                      // 3206
                ),                                                                                                     // 3207
                // Fade the popup fill mixing the shape fill with 80% white                                            // 3208
                popupFillColor = d3.rgb(                                                                               // 3209
                    d3.rgb(fill).r + 0.8 * (255 - d3.rgb(fill).r),                                                     // 3210
                    d3.rgb(fill).g + 0.8 * (255 - d3.rgb(fill).g),                                                     // 3211
                    d3.rgb(fill).b + 0.8 * (255 - d3.rgb(fill).b)                                                      // 3212
                ),                                                                                                     // 3213
                t,                                                                                                     // 3214
                box,                                                                                                   // 3215
                rows = [],                                                                                             // 3216
                // The running y value for the text elements                                                           // 3217
                y = 0,                                                                                                 // 3218
                // The maximum bounds of the text elements                                                             // 3219
                w = 0,                                                                                                 // 3220
                h = 0,                                                                                                 // 3221
                overlap;                                                                                               // 3222
                                                                                                                       // 3223
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 3224
                chart._tooltipGroup.remove();                                                                          // 3225
            }                                                                                                          // 3226
            chart._tooltipGroup = chart.svg.append("g");                                                               // 3227
                                                                                                                       // 3228
            // Add a ring around the data point                                                                        // 3229
            chart._tooltipGroup.append("circle")                                                                       // 3230
                .attr("cx", cx)                                                                                        // 3231
                .attr("cy", cy)                                                                                        // 3232
                .attr("r", r)                                                                                          // 3233
                .attr("opacity", 0)                                                                                    // 3234
                .style("fill", "none")                                                                                 // 3235
                .style("stroke", fill)                                                                                 // 3236
                .style("stroke-width", 1)                                                                              // 3237
                .transition()                                                                                          // 3238
                    .duration(animDuration / 2)                                                                        // 3239
                    .ease("linear")                                                                                    // 3240
                        .attr("opacity", 1)                                                                            // 3241
                        .attr("r", r + 4)                                                                              // 3242
                        .style("stroke-width", 2);                                                                     // 3243
                                                                                                                       // 3244
            // Add a drop line to the x axis                                                                           // 3245
            if (dropDest.y !== null) {                                                                                 // 3246
                chart._tooltipGroup.append("line")                                                                     // 3247
                    .attr("x1", cx)                                                                                    // 3248
                    .attr("y1", (cy < dropDest.y ? cy + r + 4 : cy - r - 4))                                           // 3249
                    .attr("x2", cx)                                                                                    // 3250
                    .attr("y2", (cy < dropDest.y ? cy + r + 4 : cy - r - 4))                                           // 3251
                    .style("fill", "none")                                                                             // 3252
                    .style("stroke", fill)                                                                             // 3253
                    .style("stroke-width", 2)                                                                          // 3254
                    .style("stroke-dasharray", ("3, 3"))                                                               // 3255
                    .style("opacity", opacity)                                                                         // 3256
                    .transition()                                                                                      // 3257
                        .delay(animDuration / 2)                                                                       // 3258
                        .duration(animDuration / 2)                                                                    // 3259
                        .ease("linear")                                                                                // 3260
                            // Added 1px offset to cater for svg issue where a transparent                             // 3261
                            // group overlapping a line can sometimes hide it in some browsers                         // 3262
                            // Issue #10                                                                               // 3263
                            .attr("y2", (cy < dropDest.y ? dropDest.y - 1 : dropDest.y + 1));                          // 3264
            }                                                                                                          // 3265
                                                                                                                       // 3266
            // Add a drop line to the y axis                                                                           // 3267
            if (dropDest.x !== null) {                                                                                 // 3268
                chart._tooltipGroup.append("line")                                                                     // 3269
                    .attr("x1", (cx < dropDest.x ? cx + r + 4 : cx - r - 4))                                           // 3270
                    .attr("y1", cy)                                                                                    // 3271
                    .attr("x2", (cx < dropDest.x ? cx + r + 4 : cx - r - 4))                                           // 3272
                    .attr("y2", cy)                                                                                    // 3273
                    .style("fill", "none")                                                                             // 3274
                    .style("stroke", fill)                                                                             // 3275
                    .style("stroke-width", 2)                                                                          // 3276
                    .style("stroke-dasharray", ("3, 3"))                                                               // 3277
                    .style("opacity", opacity)                                                                         // 3278
                    .transition()                                                                                      // 3279
                        .delay(animDuration / 2)                                                                       // 3280
                        .duration(animDuration / 2)                                                                    // 3281
                        .ease("linear")                                                                                // 3282
                            // Added 1px offset to cater for svg issue where a transparent                             // 3283
                            // group overlapping a line can sometimes hide it in some browsers                         // 3284
                            // Issue #10                                                                               // 3285
                            .attr("x2", (cx < dropDest.x ? dropDest.x - 1 : dropDest.x + 1));                          // 3286
            }                                                                                                          // 3287
                                                                                                                       // 3288
            // Add a group for text                                                                                    // 3289
            t = chart._tooltipGroup.append("g");                                                                       // 3290
            // Create a box for the popup in the text group                                                            // 3291
            box = t.append("rect")                                                                                     // 3292
                .attr("class", "tooltip");                                                                             // 3293
                                                                                                                       // 3294
            // Add the series categories                                                                               // 3295
            if (series.categoryFields !== null && series.categoryFields !== undefined && series.categoryFields.length > 0) {
                series.categoryFields.forEach(function (c, i) {                                                        // 3297
                    // If the category name and value match don't display the category name                            // 3298
                    rows.push(c + (e.aggField[i] !== c ? ": " + e.aggField[i] : ""));                                  // 3299
                }, this);                                                                                              // 3300
            }                                                                                                          // 3301
                                                                                                                       // 3302
            if (series.x._hasTimeField()) {                                                                            // 3303
                rows.push(series.x.timeField + ": " + series.x._getFormat()(e.xField[0]));                             // 3304
            } else if (series.x._hasCategories()) {                                                                    // 3305
                // Add the x axis categories                                                                           // 3306
                series.x.categoryFields.forEach(function (c, i) {                                                      // 3307
                    // If the category name and value match don't display the category name                            // 3308
                    rows.push(c + (e.xField[i] !== c ? ": " + e.xField[i] : ""));                                      // 3309
                }, this);                                                                                              // 3310
            } else {                                                                                                   // 3311
                // Add the axis measure value                                                                          // 3312
                rows.push(series.x.measure + ": " + series.x._getFormat()(e.cx));                                      // 3313
            }                                                                                                          // 3314
                                                                                                                       // 3315
            if (series.y._hasTimeField()) {                                                                            // 3316
                rows.push(series.y.timeField + ": " + series.y._getFormat()(e.yField[0]));                             // 3317
            } else if (series.y._hasCategories()) {                                                                    // 3318
                // Add the y axis categories                                                                           // 3319
                series.y.categoryFields.forEach(function (c, i) {                                                      // 3320
                    rows.push(c + (e.yField[i] !== c ? ": " + e.yField[i] : ""));                                      // 3321
                }, this);                                                                                              // 3322
            } else {                                                                                                   // 3323
                // Add the axis measure value                                                                          // 3324
                rows.push(series.y.measure + ": " + series.y._getFormat()(e.cy));                                      // 3325
            }                                                                                                          // 3326
                                                                                                                       // 3327
            if (series.z !== null && series.z !== undefined) {                                                         // 3328
                // Add the axis measure value                                                                          // 3329
                rows.push(series.z.measure + ": " + series.z._getFormat()(e.zValue));                                  // 3330
            }                                                                                                          // 3331
                                                                                                                       // 3332
            if (series.c !== null && series.c !== undefined) {                                                         // 3333
                // Add the axis measure value                                                                          // 3334
                rows.push(series.c.measure + ": " + series.c._getFormat()(e.cValue));                                  // 3335
            }                                                                                                          // 3336
                                                                                                                       // 3337
            // Get distinct text rows to deal with cases where 2 axes have the same dimensionality                     // 3338
            rows = rows.filter(function(elem, pos) {                                                                   // 3339
                return rows.indexOf(elem) === pos;                                                                     // 3340
            });                                                                                                        // 3341
                                                                                                                       // 3342
            // Create a text object for every row in the popup                                                         // 3343
            t.selectAll(".textHoverShapes").data(rows).enter()                                                         // 3344
                .append("text")                                                                                        // 3345
                    .attr("class", "tooltip")                                                                          // 3346
                    .text(function (d) { return d; })                                                                  // 3347
                    .style("font-family", "sans-serif")                                                                // 3348
                    .style("font-size", "10px");                                                                       // 3349
                                                                                                                       // 3350
            // Get the max height and width of the text items                                                          // 3351
            t.each(function () {                                                                                       // 3352
                w = (this.getBBox().width > w ? this.getBBox().width : w);                                             // 3353
                h = (this.getBBox().width > h ? this.getBBox().height : h);                                            // 3354
            });                                                                                                        // 3355
                                                                                                                       // 3356
            // Position the text relatve to the bubble, the absolute positioning                                       // 3357
            // will be done by translating the group                                                                   // 3358
            t.selectAll("text")                                                                                        // 3359
                .attr("x", 0)                                                                                          // 3360
                .attr("y", function () {                                                                               // 3361
                    // Increment the y position                                                                        // 3362
                    y += this.getBBox().height;                                                                        // 3363
                    // Position the text at the centre point                                                           // 3364
                    return y - (this.getBBox().height / 2);                                                            // 3365
                });                                                                                                    // 3366
                                                                                                                       // 3367
            // Draw the box with a margin around the text                                                              // 3368
            box.attr("x", -textMargin)                                                                                 // 3369
                .attr("y", -textMargin)                                                                                // 3370
                .attr("height", Math.floor(y + textMargin) - 0.5)                                                      // 3371
                .attr("width", w + 2 * textMargin)                                                                     // 3372
                .attr("rx", 5)                                                                                         // 3373
                .attr("ry", 5)                                                                                         // 3374
                .style("fill", popupFillColor)                                                                         // 3375
                .style("stroke", popupStrokeColor)                                                                     // 3376
                .style("stroke-width", 2)                                                                              // 3377
                .style("opacity", 0.95);                                                                               // 3378
                                                                                                                       // 3379
            // Shift the ring margin left or right depending on whether it will overlap the edge                       // 3380
            overlap = cx + r + textMargin + popupMargin + w > parseFloat(chart.svg.node().getBBox().width);            // 3381
                                                                                                                       // 3382
            // Translate the shapes to the x position of the bubble (the x position of the shapes is handled)          // 3383
            t.attr("transform", "translate(" +                                                                         // 3384
                   (overlap ? cx - (r + textMargin + popupMargin + w) : cx + r + textMargin + popupMargin) + " , " +   // 3385
                   (cy - ((y - (h - textMargin)) / 2)) +                                                               // 3386
                ")");                                                                                                  // 3387
        },                                                                                                             // 3388
                                                                                                                       // 3389
        // Handle the mouse leave event                                                                                // 3390
        leaveEventHandler: function (chart) {                                                                          // 3391
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 3392
                chart._tooltipGroup.remove();                                                                          // 3393
            }                                                                                                          // 3394
        }                                                                                                              // 3395
    };                                                                                                                 // 3396
                                                                                                                       // 3397
                                                                                                                       // 3398
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 3399
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 3400
    // Source: /src/objects/plot/line.js                                                                               // 3401
    dimple.plot.line = {                                                                                               // 3402
        stacked: false,                                                                                                // 3403
        supportedAxes: ["x", "y", "c"],                                                                                // 3404
        draw: function (chart, series, duration) {                                                                     // 3405
                                                                                                                       // 3406
            // Get self pointer for inner functions                                                                    // 3407
            var self = this,                                                                                           // 3408
                data = series._positionData,                                                                           // 3409
                fillIns = [],                                                                                          // 3410
                uniqueValues = [],                                                                                     // 3411
                // If there is a category axis we should draw a line for each aggField.  Otherwise                     // 3412
                // the first aggField defines the points and the others define the line                                // 3413
                firstAgg = 1,                                                                                          // 3414
                graded = false,                                                                                        // 3415
                line,                                                                                                  // 3416
                markers,                                                                                               // 3417
                markerBacks;                                                                                           // 3418
                                                                                                                       // 3419
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 3420
                chart._tooltipGroup.remove();                                                                          // 3421
            }                                                                                                          // 3422
                                                                                                                       // 3423
            if (series.x._hasCategories() || series.y._hasCategories()) {                                              // 3424
                firstAgg = 0;                                                                                          // 3425
            }                                                                                                          // 3426
                                                                                                                       // 3427
            data.forEach(function (d) {                                                                                // 3428
                var filter = [],                                                                                       // 3429
                    match = false,                                                                                     // 3430
                    k;                                                                                                 // 3431
                                                                                                                       // 3432
                for (k = firstAgg; k < d.aggField.length; k += 1) {                                                    // 3433
                    filter.push(d.aggField[k]);                                                                        // 3434
                }                                                                                                      // 3435
                                                                                                                       // 3436
                uniqueValues.forEach(function (d) {                                                                    // 3437
                    match = match || (d.join("/") === filter.join("/"));                                               // 3438
                }, this);                                                                                              // 3439
                                                                                                                       // 3440
                if (!match) {                                                                                          // 3441
                    uniqueValues.push(filter);                                                                         // 3442
                }                                                                                                      // 3443
                                                                                                                       // 3444
            }, this);                                                                                                  // 3445
                                                                                                                       // 3446
            if (series.c !== null && series.c !== undefined && ((series.x._hasCategories() && series.y._hasMeasure()) || (series.y._hasCategories() && series.x._hasMeasure()))) {
                graded = true;                                                                                         // 3448
                uniqueValues.forEach(function (seriesValue) {                                                          // 3449
                    dimple._addGradient(seriesValue, "fill-line-gradient-" + seriesValue.join("_").replace(" ", ""), (series.x._hasCategories() ? series.x : series.y), data, chart, duration, "fill");
                }, this);                                                                                              // 3451
            }                                                                                                          // 3452
                                                                                                                       // 3453
            line = d3.svg.line()                                                                                       // 3454
                .x(function (d) { return dimple._helpers.cx(d, chart, series); })                                      // 3455
                .y(function (d) { return dimple._helpers.cy(d, chart, series); });                                     // 3456
                                                                                                                       // 3457
            if (series.shapes === null || series.shapes === undefined) {                                               // 3458
                series.shapes = chart._group.selectAll(".line")                                                        // 3459
                    .data(uniqueValues)                                                                                // 3460
                    .enter()                                                                                           // 3461
                        .append("svg:path")                                                                            // 3462
                            .attr("opacity", function(d) { return chart.getColor(d).opacity; });                       // 3463
            }                                                                                                          // 3464
            series.shapes                                                                                              // 3465
                .data(uniqueValues)                                                                                    // 3466
                .transition().duration(duration)                                                                       // 3467
                .attr("class", function (d) { return "series line " + d.join("_").split(" ").join("_"); })             // 3468
                .attr("d", function (d) {                                                                              // 3469
                    var seriesData = [];                                                                               // 3470
                    data.forEach(function (r) {                                                                        // 3471
                        var add = true,                                                                                // 3472
                            k;                                                                                         // 3473
                        for (k = firstAgg; k < r.aggField.length; k += 1) {                                            // 3474
                            add = add && (d[k - firstAgg] === r.aggField[k]);                                          // 3475
                        }                                                                                              // 3476
                        if (add) {                                                                                     // 3477
                            seriesData.push(r);                                                                        // 3478
                        }                                                                                              // 3479
                    }, this);                                                                                          // 3480
                    seriesData.sort(function (a, b) {                                                                  // 3481
                        var sortValue = 0;                                                                             // 3482
                        if (series.x._hasCategories()) {                                                               // 3483
                            sortValue = (dimple._helpers.cx(a, chart, series) < dimple._helpers.cx(b, chart, series) ? -1 : 1);
                        } else if (series.y._hasCategories()) {                                                        // 3485
                            sortValue = (dimple._helpers.cy(a, chart, series) < dimple._helpers.cy(b, chart, series) ? -1 : 1);
                        }                                                                                              // 3487
                        return sortValue;                                                                              // 3488
                    });                                                                                                // 3489
                    if (seriesData.length === 1) {                                                                     // 3490
                        fillIns.push({                                                                                 // 3491
                            cx: dimple._helpers.cx(seriesData[0], chart, series),                                      // 3492
                            cy: dimple._helpers.cy(seriesData[0], chart, series),                                      // 3493
                            opacity: chart.getColor(d[d.length - 1]).opacity,                                          // 3494
                            color: chart.getColor(d[d.length - 1]).stroke                                              // 3495
                        });                                                                                            // 3496
                        d3.select(this).remove();                                                                      // 3497
                    }                                                                                                  // 3498
                    return line(seriesData);                                                                           // 3499
                })                                                                                                     // 3500
                .call(function () {                                                                                    // 3501
                    if (!chart.noFormats) {                                                                            // 3502
                        this.attr("fill", "none")                                                                      // 3503
                            .attr("stroke", function (d) { return (graded ? "url(#fill-line-gradient-" + d.join("_").replace(" ", "") + ")" : chart.getColor(d[d.length - 1]).stroke);    })
                            .attr("stroke-width", series.lineWeight);                                                  // 3505
                    }                                                                                                  // 3506
                });                                                                                                    // 3507
                                                                                                                       // 3508
            if (series.lineMarkers) {                                                                                  // 3509
                if (series._markerBacks === null || series._markerBacks === undefined) {                               // 3510
                    markerBacks = chart._group.selectAll(".markerBacks").data(data);                                   // 3511
                } else {                                                                                               // 3512
                    markerBacks = series._markerBacks.data(data, function (d) { return d.key; });                      // 3513
                }                                                                                                      // 3514
                // Add                                                                                                 // 3515
                markerBacks                                                                                            // 3516
                    .enter()                                                                                           // 3517
                    .append("circle")                                                                                  // 3518
                    .attr("id", function (d) { return d.key; })                                                        // 3519
                    .attr("class", "markerBacks")                                                                      // 3520
                    .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                         // 3521
                    .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                         // 3522
                    .attr("r", 0)                                                                                      // 3523
                    .attr("fill", "white")                                                                             // 3524
                    .attr("stroke", "none");                                                                           // 3525
                                                                                                                       // 3526
                // Update                                                                                              // 3527
                markerBacks                                                                                            // 3528
                    .transition().duration(duration)                                                                   // 3529
                    .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                         // 3530
                    .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                         // 3531
                    .attr("r", 2 + series.lineWeight);                                                                 // 3532
                // Remove                                                                                              // 3533
                markerBacks                                                                                            // 3534
                    .exit()                                                                                            // 3535
                    .transition().duration(duration)                                                                   // 3536
                    .attr("r", 0)                                                                                      // 3537
                    .each("end", function () {                                                                         // 3538
                        d3.select(this).remove();                                                                      // 3539
                    });                                                                                                // 3540
                series._markerBacks = markerBacks;                                                                     // 3541
            }                                                                                                          // 3542
                                                                                                                       // 3543
            // Deal with markers in the same way as main series to fix #28                                             // 3544
            if (series._markers === null || series._markers === undefined) {                                           // 3545
                markers = chart._group.selectAll(".markers").data(data);                                               // 3546
            } else {                                                                                                   // 3547
                markers = series._markers.data(data, function (d) { return d.key; });                                  // 3548
            }                                                                                                          // 3549
                                                                                                                       // 3550
                                                                                                                       // 3551
            // Add the actual marker. We need to do this even if we aren't displaying them because they                // 3552
            // catch hover events                                                                                      // 3553
            markers                                                                                                    // 3554
                .enter()                                                                                               // 3555
                .append("circle")                                                                                      // 3556
                .attr("id", function (d) { return d.key; })                                                            // 3557
                .attr("class", "markers")                                                                              // 3558
                .on("mouseover", function (e) {                                                                        // 3559
                    self.enterEventHandler(e, this, chart, series);                                                    // 3560
                })                                                                                                     // 3561
                .on("mouseleave", function (e) {                                                                       // 3562
                    self.leaveEventHandler(e, this, chart, series);                                                    // 3563
                })                                                                                                     // 3564
                .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                             // 3565
                .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                             // 3566
                .attr("r", 0)                                                                                          // 3567
                .attr("opacity", function (d) { return (series.lineMarkers ? chart.getColor(d).opacity : 0); })        // 3568
                .call(function () {                                                                                    // 3569
                    if (!chart.noFormats) {                                                                            // 3570
                        this.attr("fill", "white")                                                                     // 3571
                            .style("stroke-width", series.lineWeight)                                                  // 3572
                            .attr("stroke", function (d) {                                                             // 3573
                                return (graded ? dimple._helpers.fill(d, chart, series) : chart.getColor(d.aggField[d.aggField.length - 1]).stroke);
                            });                                                                                        // 3575
                    }                                                                                                  // 3576
                });                                                                                                    // 3577
                                                                                                                       // 3578
            markers                                                                                                    // 3579
                .transition().duration(duration)                                                                       // 3580
                .attr("cx", function (d) { return dimple._helpers.cx(d, chart, series); })                             // 3581
                .attr("cy", function (d) { return dimple._helpers.cy(d, chart, series); })                             // 3582
                .attr("r", 2 + series.lineWeight)                                                                      // 3583
                .call(function () {                                                                                    // 3584
                    if (!chart.noFormats) {                                                                            // 3585
                        this.attr("fill", "white")                                                                     // 3586
                            .style("stroke-width", series.lineWeight)                                                  // 3587
                            .attr("stroke", function (d) {                                                             // 3588
                                return (graded ? dimple._helpers.fill(d, chart, series) : chart.getColor(d.aggField[d.aggField.length - 1]).stroke);
                            });                                                                                        // 3590
                    }                                                                                                  // 3591
                });                                                                                                    // 3592
                                                                                                                       // 3593
            markers                                                                                                    // 3594
                .exit()                                                                                                // 3595
                .transition().duration(duration)                                                                       // 3596
                .attr("r", 0)                                                                                          // 3597
                .each("end", function () {                                                                             // 3598
                    d3.select(this).remove();                                                                          // 3599
                });                                                                                                    // 3600
                                                                                                                       // 3601
            // Save the shapes to the series array                                                                     // 3602
            series._markers = markers;                                                                                 // 3603
                                                                                                                       // 3604
            // Deal with single point lines if there are no markers                                                    // 3605
            if (!series.lineMarkers) {                                                                                 // 3606
                chart._group.selectAll(".fill")                                                                        // 3607
                    .data(fillIns)                                                                                     // 3608
                    .enter()                                                                                           // 3609
                    .append("circle")                                                                                  // 3610
                    .attr("cx", function (d) { return d.cx; })                                                         // 3611
                    .attr("cy", function (d) { return d.cy; })                                                         // 3612
                    .attr("r", series.lineWeight)                                                                      // 3613
                    .attr("opacity", function (d) { return d.opacity; })                                               // 3614
                    .call(function () {                                                                                // 3615
                        if (!chart.noFormats) {                                                                        // 3616
                            this.attr("fill", function (d) { return d.color; })                                        // 3617
                                .attr("stroke", "none");                                                               // 3618
                        }                                                                                              // 3619
                    });                                                                                                // 3620
            }                                                                                                          // 3621
        },                                                                                                             // 3622
                                                                                                                       // 3623
        // Handle the mouse enter event                                                                                // 3624
        enterEventHandler: function (e, shape, chart, series) {                                                        // 3625
                                                                                                                       // 3626
            // The margin between the text and the box                                                                 // 3627
            var textMargin = 5,                                                                                        // 3628
                // The margin between the ring and the popup                                                           // 3629
                popupMargin = 10,                                                                                      // 3630
                // The popup animation duration in ms                                                                  // 3631
                animDuration = 750,                                                                                    // 3632
                // Collect some facts about the highlighted bubble                                                     // 3633
                selectedShape = d3.select(shape),                                                                      // 3634
                cx = parseFloat(selectedShape.attr("cx")),                                                             // 3635
                cy = parseFloat(selectedShape.attr("cy")),                                                             // 3636
                r = parseFloat(selectedShape.attr("r")),                                                               // 3637
                opacity = dimple._helpers.opacity(e, chart, series),                                                   // 3638
                fill = selectedShape.attr("stroke"),                                                                   // 3639
                dropDest = series._dropLineOrigin(),                                                                   // 3640
                // Fade the popup stroke mixing the shape fill with 60% white                                          // 3641
                popupStrokeColor = d3.rgb(                                                                             // 3642
                    d3.rgb(fill).r + 0.6 * (255 - d3.rgb(fill).r),                                                     // 3643
                    d3.rgb(fill).g + 0.6 * (255 - d3.rgb(fill).g),                                                     // 3644
                    d3.rgb(fill).b + 0.6 * (255 - d3.rgb(fill).b)                                                      // 3645
                ),                                                                                                     // 3646
                // Fade the popup fill mixing the shape fill with 80% white                                            // 3647
                popupFillColor = d3.rgb(                                                                               // 3648
                    d3.rgb(fill).r + 0.8 * (255 - d3.rgb(fill).r),                                                     // 3649
                    d3.rgb(fill).g + 0.8 * (255 - d3.rgb(fill).g),                                                     // 3650
                    d3.rgb(fill).b + 0.8 * (255 - d3.rgb(fill).b)                                                      // 3651
                ),                                                                                                     // 3652
                // The running y value for the text elements                                                           // 3653
                y = 0,                                                                                                 // 3654
                // The maximum bounds of the text elements                                                             // 3655
                w = 0,                                                                                                 // 3656
                h = 0,                                                                                                 // 3657
                t,                                                                                                     // 3658
                box,                                                                                                   // 3659
                rows = [],                                                                                             // 3660
                overlap;                                                                                               // 3661
                                                                                                                       // 3662
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 3663
                chart._tooltipGroup.remove();                                                                          // 3664
            }                                                                                                          // 3665
            chart._tooltipGroup = chart.svg.append("g");                                                               // 3666
                                                                                                                       // 3667
            // On hover make the line marker visible immediately                                                       // 3668
            selectedShape.style("opacity", 1);                                                                         // 3669
                                                                                                                       // 3670
            // Add a ring around the data point                                                                        // 3671
            chart._tooltipGroup.append("circle")                                                                       // 3672
                .attr("cx", cx)                                                                                        // 3673
                .attr("cy", cy)                                                                                        // 3674
                .attr("r", r)                                                                                          // 3675
                .attr("opacity", 0)                                                                                    // 3676
                .style("fill", "none")                                                                                 // 3677
                .style("stroke", fill)                                                                                 // 3678
                .style("stroke-width", 1)                                                                              // 3679
                .transition()                                                                                          // 3680
                    .duration(animDuration / 2)                                                                        // 3681
                    .ease("linear")                                                                                    // 3682
                        .attr("opacity", 1)                                                                            // 3683
                        .attr("r", r + series.lineWeight + 2)                                                          // 3684
                        .style("stroke-width", 2);                                                                     // 3685
                                                                                                                       // 3686
            // Add a drop line to the x axis                                                                           // 3687
            if (dropDest.y !== null) {                                                                                 // 3688
                chart._tooltipGroup.append("line")                                                                     // 3689
                    .attr("x1", cx)                                                                                    // 3690
                    .attr("y1", (cy < dropDest.y ? cy + r + series.lineWeight + 2 : cy - r - series.lineWeight - 2))   // 3691
                    .attr("x2", cx)                                                                                    // 3692
                    .attr("y2", (cy < dropDest.y ? cy + r + series.lineWeight + 2 : cy - r - series.lineWeight - 2))   // 3693
                    .style("fill", "none")                                                                             // 3694
                    .style("stroke", fill)                                                                             // 3695
                    .style("stroke-width", 2)                                                                          // 3696
                    .style("stroke-dasharray", ("3, 3"))                                                               // 3697
                    .style("opacity", opacity)                                                                         // 3698
                    .transition()                                                                                      // 3699
                        .delay(animDuration / 2)                                                                       // 3700
                        .duration(animDuration / 2)                                                                    // 3701
                        .ease("linear")                                                                                // 3702
                            // Added 1px offset to cater for svg issue where a transparent                             // 3703
                            // group overlapping a line can sometimes hide it in some browsers                         // 3704
                            // Issue #10                                                                               // 3705
                            .attr("y2", (cy < dropDest.y ? dropDest.y - 1 : dropDest.y + 1));                          // 3706
            }                                                                                                          // 3707
                                                                                                                       // 3708
            // Add a drop line to the y axis                                                                           // 3709
            if (dropDest.x !== null) {                                                                                 // 3710
                chart._tooltipGroup.append("line")                                                                     // 3711
                    .attr("x1", (cx < dropDest.x ? cx + r + series.lineWeight + 2 : cx - r - series.lineWeight - 2))   // 3712
                    .attr("y1", cy)                                                                                    // 3713
                    .attr("x2", (cx < dropDest.x ? cx + r + series.lineWeight + 2 : cx - r - series.lineWeight - 2))   // 3714
                    .attr("y2", cy)                                                                                    // 3715
                    .style("fill", "none")                                                                             // 3716
                    .style("stroke", fill)                                                                             // 3717
                    .style("stroke-width", 2)                                                                          // 3718
                    .style("stroke-dasharray", ("3, 3"))                                                               // 3719
                    .style("opacity", opacity)                                                                         // 3720
                    .transition()                                                                                      // 3721
                        .delay(animDuration / 2)                                                                       // 3722
                        .duration(animDuration / 2)                                                                    // 3723
                        .ease("linear")                                                                                // 3724
                            // Added 1px offset to cater for svg issue where a transparent                             // 3725
                            // group overlapping a line can sometimes hide it in some browsers                         // 3726
                            // Issue #10                                                                               // 3727
                            .attr("x2", (cx < dropDest.x ? dropDest.x - 1 : dropDest.x + 1));                          // 3728
            }                                                                                                          // 3729
                                                                                                                       // 3730
            // Add a group for text                                                                                    // 3731
            t = chart._tooltipGroup.append("g");                                                                       // 3732
            // Create a box for the popup in the text group                                                            // 3733
            box = t.append("rect")                                                                                     // 3734
                .attr("class", "tooltip");                                                                             // 3735
                                                                                                                       // 3736
            // Add the series categories                                                                               // 3737
            if (series.categoryFields !== null && series.categoryFields !== undefined && series.categoryFields.length > 0) {
                series.categoryFields.forEach(function (c, i) {                                                        // 3739
                    // If the category name and value match don't display the category name                            // 3740
                    rows.push(c + (e.aggField[i] !== c ? ": " + e.aggField[i] : ""));                                  // 3741
                }, this);                                                                                              // 3742
            }                                                                                                          // 3743
                                                                                                                       // 3744
            if (series.x._hasTimeField()) {                                                                            // 3745
                rows.push(series.x.timeField + ": " + series.x._getFormat()(e.xField[0]));                             // 3746
            } else if (series.x._hasCategories()) {                                                                    // 3747
                // Add the x axis categories                                                                           // 3748
                series.x.categoryFields.forEach(function (c, i) {                                                      // 3749
                    // If the category name and value match don't display the category name                            // 3750
                    rows.push(c + (e.xField[i] !== c ? ": " + e.xField[i] : ""));                                      // 3751
                }, this);                                                                                              // 3752
            } else if (series.x.useLog) {                                                                              // 3753
                // Add the y axis log                                                                                  // 3754
                rows.push(series.x.measure + ": " + e.cx);                                                             // 3755
            } else {                                                                                                   // 3756
                // Add the axis measure value                                                                          // 3757
                rows.push(series.x.measure + ": " + series.x._getFormat()(e.cx));                                      // 3758
            }                                                                                                          // 3759
                                                                                                                       // 3760
            if (series.y._hasTimeField()) {                                                                            // 3761
                rows.push(series.y.timeField + ": " + series.y._getFormat()(e.yField[0]));                             // 3762
            } else if (series.y._hasCategories()) {                                                                    // 3763
                // Add the y axis categories                                                                           // 3764
                series.y.categoryFields.forEach(function (c, i) {                                                      // 3765
                    rows.push(c + (e.yField[i] !== c ? ": " + e.yField[i] : ""));                                      // 3766
                }, this);                                                                                              // 3767
            } else if (series.y.useLog) {                                                                              // 3768
                // Add the y axis log                                                                                  // 3769
                rows.push(series.y.measure + ": " + e.cy);                                                             // 3770
            } else {                                                                                                   // 3771
                // Add the axis measure value                                                                          // 3772
                rows.push(series.y.measure + ": " + series.y._getFormat()(e.cy));                                      // 3773
            }                                                                                                          // 3774
                                                                                                                       // 3775
            if (series.z !== null && series.z !== undefined) {                                                         // 3776
                // Add the axis measure value                                                                          // 3777
                rows.push(series.z.measure + ": " + series.z._getFormat()(e.zValue));                                  // 3778
            }                                                                                                          // 3779
                                                                                                                       // 3780
            if (series.c !== null && series.c !== undefined) {                                                         // 3781
                // Add the axis measure value                                                                          // 3782
                rows.push(series.c.measure + ": " + series.c._getFormat()(e.cValue));                                  // 3783
            }                                                                                                          // 3784
                                                                                                                       // 3785
            // Get distinct text rows to deal with cases where 2 axes have the same dimensionality                     // 3786
            rows = rows.filter(function(elem, pos) {                                                                   // 3787
                return rows.indexOf(elem) === pos;                                                                     // 3788
            });                                                                                                        // 3789
                                                                                                                       // 3790
            // Create a text object for every row in the popup                                                         // 3791
            t.selectAll(".textHoverShapes").data(rows).enter()                                                         // 3792
                .append("text")                                                                                        // 3793
                    .attr("class", "tooltip")                                                                          // 3794
                    .text(function (d) { return d; })                                                                  // 3795
                    .style("font-family", "sans-serif")                                                                // 3796
                    .style("font-size", "10px");                                                                       // 3797
                                                                                                                       // 3798
            // Get the max height and width of the text items                                                          // 3799
            t.each(function () {                                                                                       // 3800
                w = (this.getBBox().width > w ? this.getBBox().width : w);                                             // 3801
                h = (this.getBBox().width > h ? this.getBBox().height : h);                                            // 3802
            });                                                                                                        // 3803
                                                                                                                       // 3804
            // Position the text relatve to the bubble, the absolute positioning                                       // 3805
            // will be done by translating the group                                                                   // 3806
            t.selectAll("text")                                                                                        // 3807
                .attr("x", 0)                                                                                          // 3808
                .attr("y", function () {                                                                               // 3809
                    // Increment the y position                                                                        // 3810
                    y += this.getBBox().height;                                                                        // 3811
                    // Position the text at the centre point                                                           // 3812
                    return y - (this.getBBox().height / 2);                                                            // 3813
                });                                                                                                    // 3814
                                                                                                                       // 3815
            // Draw the box with a margin around the text                                                              // 3816
            box.attr("x", -textMargin)                                                                                 // 3817
                .attr("y", -textMargin)                                                                                // 3818
                .attr("height", Math.floor(y + textMargin) - 0.5)                                                      // 3819
                .attr("width", w + 2 * textMargin)                                                                     // 3820
                .attr("rx", 5)                                                                                         // 3821
                .attr("ry", 5)                                                                                         // 3822
                .style("fill", popupFillColor)                                                                         // 3823
                .style("stroke", popupStrokeColor)                                                                     // 3824
                .style("stroke-width", 2)                                                                              // 3825
                .style("opacity", 0.95);                                                                               // 3826
                                                                                                                       // 3827
            // Shift the ring margin left or right depending on whether it will overlap the edge                       // 3828
            overlap = cx + r + textMargin + popupMargin + w > parseFloat(chart.svg.node().getBBox().width);            // 3829
                                                                                                                       // 3830
            // Translate the shapes to the x position of the bubble (the x position of the shapes is handled)          // 3831
            t.attr("transform", "translate(" +                                                                         // 3832
                   (overlap ? cx - (r + textMargin + popupMargin + w) : cx + r + textMargin + popupMargin) + " , " +   // 3833
                   (cy - ((y - (h - textMargin)) / 2)) +                                                               // 3834
                ")");                                                                                                  // 3835
        },                                                                                                             // 3836
                                                                                                                       // 3837
        // Handle the mouse leave event                                                                                // 3838
        leaveEventHandler: function (e, shape, chart, series) {                                                        // 3839
            // Return the opacity of the marker                                                                        // 3840
            d3.select(shape).style("opacity", (series.lineMarkers ? dimple._helpers.opacity(e, chart, series) : 0));   // 3841
            if (chart._tooltipGroup !== null && chart._tooltipGroup !== undefined) {                                   // 3842
                chart._tooltipGroup.remove();                                                                          // 3843
            }                                                                                                          // 3844
        }                                                                                                              // 3845
    };                                                                                                                 // 3846
                                                                                                                       // 3847
                                                                                                                       // 3848
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 3849
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 3850
    // Source: /src/methods/_addGradient.js                                                                            // 3851
    dimple._addGradient = function (seriesValue, id, categoryAxis, data, chart, duration, colorProperty) {             // 3852
                                                                                                                       // 3853
        var grad = chart._group.select("#" + id),                                                                      // 3854
            cats = [],                                                                                                 // 3855
            field = categoryAxis.position + "Field",                                                                   // 3856
            transition = true,                                                                                         // 3857
            colors = [];                                                                                               // 3858
                                                                                                                       // 3859
        data.forEach(function (d) {                                                                                    // 3860
            if (cats.indexOf(d[field]) === -1) {                                                                       // 3861
                cats.push(d[field]);                                                                                   // 3862
            }                                                                                                          // 3863
        }, this);                                                                                                      // 3864
                                                                                                                       // 3865
        cats = cats.sort(function (a, b) { return categoryAxis._scale(a) - categoryAxis._scale(b); });                 // 3866
                                                                                                                       // 3867
        if (grad.node() === null) {                                                                                    // 3868
            transition = false;                                                                                        // 3869
            grad = chart._group.append("linearGradient")                                                               // 3870
                .attr("id", id)                                                                                        // 3871
                .attr("gradientUnits", "userSpaceOnUse")                                                               // 3872
                .attr("x1", (categoryAxis.position === "x" ? categoryAxis._scale(cats[0]) + ((chart._widthPixels() / cats.length) / 2) : 0))
                .attr("y1", (categoryAxis.position === "y" ? categoryAxis._scale(cats[0]) - ((chart._heightPixels() / cats.length) / 2) : 0))
                .attr("x2", (categoryAxis.position === "x" ? categoryAxis._scale(cats[cats.length - 1]) + ((chart._widthPixels() / cats.length) / 2) : 0))
                .attr("y2", (categoryAxis.position === "y" ? categoryAxis._scale(cats[cats.length - 1]) - ((chart._heightPixels() / cats.length) / 2) : 0));
        }                                                                                                              // 3877
                                                                                                                       // 3878
        cats.forEach(function (cat, j) {                                                                               // 3879
                                                                                                                       // 3880
            var row = {},                                                                                              // 3881
                k = 0;                                                                                                 // 3882
                                                                                                                       // 3883
            for (k = 0; k < data.length; k = k + 1) {                                                                  // 3884
                if (data[k].aggField.join("_") === seriesValue.join("_") && data[k][field].join("_") === cat.join("_")) {
                    row = data[k];                                                                                     // 3886
                    break;                                                                                             // 3887
                }                                                                                                      // 3888
            }                                                                                                          // 3889
                                                                                                                       // 3890
            colors.push({ offset: Math.round((j / (cats.length - 1)) * 100) + "%", color: row[colorProperty] });       // 3891
        }, this);                                                                                                      // 3892
                                                                                                                       // 3893
        if (transition) {                                                                                              // 3894
            grad.selectAll("stop")                                                                                     // 3895
                .data(colors)                                                                                          // 3896
                .transition().duration(duration)                                                                       // 3897
                .attr("offset", function(d) { return d.offset; })                                                      // 3898
                .attr("stop-color", function(d) { return d.color; });                                                  // 3899
        } else {                                                                                                       // 3900
            grad.selectAll("stop")                                                                                     // 3901
                .data(colors)                                                                                          // 3902
                .enter()                                                                                               // 3903
                .append("stop")                                                                                        // 3904
                .attr("offset", function(d) { return d.offset; })                                                      // 3905
                .attr("stop-color", function(d) { return d.color; });                                                  // 3906
        }                                                                                                              // 3907
    };                                                                                                                 // 3908
                                                                                                                       // 3909
                                                                                                                       // 3910
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 3911
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 3912
    // Source: /src/objects/chart/methods/_getOrderedList.js                                                           // 3913
    dimple._getOrderedList = function (data, mainField, levelDefinitions) {                                            // 3914
        var rollupData = [],                                                                                           // 3915
            sortStack = [],                                                                                            // 3916
            finalArray = [],                                                                                           // 3917
            fields = [mainField],                                                                                      // 3918
            defs = [];                                                                                                 // 3919
        // Force the level definitions into an array                                                                   // 3920
        if (levelDefinitions !== null && levelDefinitions !== undefined) {                                             // 3921
            defs = defs.concat(levelDefinitions);                                                                      // 3922
        }                                                                                                              // 3923
        // Add the base case                                                                                           // 3924
        defs = defs.concat({ ordering: mainField, desc: false });                                                      // 3925
        // Exclude fields if this does not contain a function                                                          // 3926
        defs.forEach(function (def) {                                                                                  // 3927
            var field;                                                                                                 // 3928
            if (typeof def.ordering === "function") {                                                                  // 3929
                for (field in data[0]) {                                                                               // 3930
                    if (data[0].hasOwnProperty(field) && fields.indexOf(field) === -1) {                               // 3931
                        fields.push(field);                                                                            // 3932
                    }                                                                                                  // 3933
                }                                                                                                      // 3934
            } else if (!(def.ordering instanceof Array)) {                                                             // 3935
                fields.push(def.ordering);                                                                             // 3936
            }                                                                                                          // 3937
        }, this);                                                                                                      // 3938
        rollupData = dimple._rollUp(data, mainField, fields);                                                          // 3939
        // If we go below the leaf stop recursing                                                                      // 3940
        if (defs.length >= 1) {                                                                                        // 3941
            // Build a stack of compare methods                                                                        // 3942
            // Iterate each level definition                                                                           // 3943
            defs.forEach(function (def) {                                                                              // 3944
                // Draw ascending by default                                                                           // 3945
                var desc = (def.desc === null || def.desc === undefined ? false : def.desc),                           // 3946
                    ordering = def.ordering,                                                                           // 3947
                    orderArray = [],                                                                                   // 3948
                    field = (typeof ordering === "string" ? ordering : null),                                          // 3949
                    sum = function (array) {                                                                           // 3950
                        var total = 0,                                                                                 // 3951
                            i;                                                                                         // 3952
                        for (i = 0; i < array.length; i += 1) {                                                        // 3953
                            if (isNaN(array[i])) {                                                                     // 3954
                                total = 0;                                                                             // 3955
                                break;                                                                                 // 3956
                            } else {                                                                                   // 3957
                                total += parseFloat(array[i]);                                                         // 3958
                            }                                                                                          // 3959
                        }                                                                                              // 3960
                        return total;                                                                                  // 3961
                    },                                                                                                 // 3962
                    compare = function (a, b) {                                                                        // 3963
                        var result = 0,                                                                                // 3964
                            sumA = sum(a),                                                                             // 3965
                            sumB = sum(b);                                                                             // 3966
                        if (!isNaN(sumA) && sumA !== 0 && !isNaN(sumB) && sumB !== 0) {                                // 3967
                            result = parseFloat(sumA) - parseFloat(sumB);                                              // 3968
                        } else if (!isNaN(Date.parse(a[0])) && !isNaN(Date.parse(b[0]))) {                             // 3969
                            result = Date.parse(a[0]) - Date.parse(b[0]);                                              // 3970
                        } else if (a[0] < b[0]) {                                                                      // 3971
                            result = -1;                                                                               // 3972
                        } else if (a[0] > b[0]) {                                                                      // 3973
                            result = 1;                                                                                // 3974
                        }                                                                                              // 3975
                        return result;                                                                                 // 3976
                    };                                                                                                 // 3977
                // Handle the ordering based on the type set                                                           // 3978
                if (typeof ordering === "function") {                                                                  // 3979
                    // Apply the sort predicate directly                                                               // 3980
                    sortStack.push(function (a, b) {                                                                   // 3981
                        return (desc ? -1 : 1) * ordering(a, b);                                                       // 3982
                    });                                                                                                // 3983
                } else if (ordering instanceof Array) {                                                                // 3984
                    // The order list may be an array of arrays                                                        // 3985
                    // combine the values with pipe delimiters.                                                        // 3986
                    // The delimiter is irrelevant as long as it is consistent                                         // 3987
                    // with the sort predicate below                                                                   // 3988
                    ordering.forEach(function (d) {                                                                    // 3989
                        orderArray.push(([].concat(d)).join("|"));                                                     // 3990
                    }, this);                                                                                          // 3991
                    // Sort according to the axis position                                                             // 3992
                    sortStack.push(function (a, b) {                                                                   // 3993
                        var aStr = "".concat(a[mainField]),                                                            // 3994
                            bStr = "".concat(b[mainField]),                                                            // 3995
                            aIx,                                                                                       // 3996
                            bIx;                                                                                       // 3997
                        // If the value is not found it should go to the end (if descending it                         // 3998
                        // should go to the start so that it ends up at the back when reversed)                        // 3999
                        aIx = orderArray.indexOf(aStr);                                                                // 4000
                        bIx = orderArray.indexOf(bStr);                                                                // 4001
                        aIx = (aIx < 0 ? (desc ? -1 : orderArray.length) : aIx);                                       // 4002
                        bIx = (bIx < 0 ? (desc ? -1 : orderArray.length) : bIx);                                       // 4003
                        return (desc ? -1 : 1) * (aIx - bIx);                                                          // 4004
                    });                                                                                                // 4005
                } else {                                                                                               // 4006
                    // Sort the data                                                                                   // 4007
                    sortStack.push(function (a, b) {                                                                   // 4008
                        // The result value                                                                            // 4009
                        var result = 0;                                                                                // 4010
                        // Find the field                                                                              // 4011
                        if (a[field] !== undefined && b[field] !== undefined) {                                        // 4012
                            // Compare just the first mapped value                                                     // 4013
                            result = compare([].concat(a[field]), [].concat(b[field]));                                // 4014
                        }                                                                                              // 4015
                        return (desc ? -1 : 1) * result;                                                               // 4016
                    });                                                                                                // 4017
                }                                                                                                      // 4018
            });                                                                                                        // 4019
            rollupData.sort(function (a, b) {                                                                          // 4020
                var compareIx = 0,                                                                                     // 4021
                    result = 0;                                                                                        // 4022
                while (compareIx < sortStack.length && result === 0) {                                                 // 4023
                    result = sortStack[compareIx](a, b);                                                               // 4024
                    compareIx += 1;                                                                                    // 4025
                }                                                                                                      // 4026
                return result;                                                                                         // 4027
            });                                                                                                        // 4028
            // Return a simple array if only one field is being returned.                                              // 4029
            // for multiple fields remove extra fields but leave objects                                               // 4030
            rollupData.forEach(function (d) {                                                                          // 4031
                finalArray.push(d[mainField]);                                                                         // 4032
            }, this);                                                                                                  // 4033
        }                                                                                                              // 4034
        // Return the ordered list                                                                                     // 4035
        return finalArray;                                                                                             // 4036
    };                                                                                                                 // 4037
                                                                                                                       // 4038
                                                                                                                       // 4039
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4040
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4041
    // Source: /src/methods/_helpers.js                                                                                // 4042
    dimple._helpers = {                                                                                                // 4043
                                                                                                                       // 4044
        // Calculate the centre x position                                                                             // 4045
        cx: function (d, chart, series) {                                                                              // 4046
            var returnCx = 0;                                                                                          // 4047
            if (series.x.measure !== null && series.x.measure !== undefined) {                                         // 4048
                returnCx = series.x._scale(d.cx);                                                                      // 4049
            } else if (series.x._hasCategories() && series.x.categoryFields.length >= 2) {                             // 4050
                returnCx = series.x._scale(d.cx) + dimple._helpers.xGap(chart, series) + ((d.xOffset + 0.5) * (((chart._widthPixels() / series.x._max) - 2 * dimple._helpers.xGap(chart, series)) * d.width));
            } else {                                                                                                   // 4052
                returnCx = series.x._scale(d.cx) + ((chart._widthPixels() / series.x._max) / 2);                       // 4053
            }                                                                                                          // 4054
            return returnCx;                                                                                           // 4055
        },                                                                                                             // 4056
                                                                                                                       // 4057
        // Calculate the centre y position                                                                             // 4058
        cy: function (d, chart, series) {                                                                              // 4059
            var returnCy = 0;                                                                                          // 4060
            if (series.y.measure !== null && series.y.measure !== undefined) {                                         // 4061
                returnCy = series.y._scale(d.cy);                                                                      // 4062
            } else if (series.y.categoryFields !== null && series.y.categoryFields !== undefined && series.y.categoryFields.length >= 2) {
                returnCy = (series.y._scale(d.cy) - (chart._heightPixels() / series.y._max)) +  dimple._helpers.yGap(chart, series) + ((d.yOffset + 0.5) * (((chart._heightPixels() / series.y._max) - 2 * dimple._helpers.yGap(chart, series)) * d.height));
            } else {                                                                                                   // 4065
                returnCy = series.y._scale(d.cy) - ((chart._heightPixels() / series.y._max) / 2);                      // 4066
            }                                                                                                          // 4067
            return returnCy;                                                                                           // 4068
        },                                                                                                             // 4069
                                                                                                                       // 4070
        // Calculate the radius                                                                                        // 4071
        r: function (d, chart, series) {                                                                               // 4072
            var returnR = 0;                                                                                           // 4073
            if (series.z === null || series.z === undefined) {                                                         // 4074
                returnR = 5;                                                                                           // 4075
            } else if (series.z._hasMeasure()) {                                                                       // 4076
                returnR = series.z._scale(d.r);                                                                        // 4077
            } else {                                                                                                   // 4078
                returnR = series.z._scale(chart._heightPixels() / 100);                                                // 4079
            }                                                                                                          // 4080
            return returnR;                                                                                            // 4081
        },                                                                                                             // 4082
                                                                                                                       // 4083
        // Calculate the x gap for bar type charts                                                                     // 4084
        xGap: function (chart, series) {                                                                               // 4085
            var returnXGap = 0;                                                                                        // 4086
            if ((series.x.measure === null || series.x.measure === undefined) && series.barGap > 0) {                  // 4087
                returnXGap = ((chart._widthPixels() / series.x._max) * (series.barGap > 0.99 ? 0.99 : series.barGap)) / 2;
            }                                                                                                          // 4089
            return returnXGap;                                                                                         // 4090
        },                                                                                                             // 4091
                                                                                                                       // 4092
        // Calculate the x gap for clusters within bar type charts                                                     // 4093
        xClusterGap: function (d, chart, series) {                                                                     // 4094
            var returnXClusterGap = 0;                                                                                 // 4095
            if (series.x.categoryFields !== null && series.x.categoryFields !== undefined && series.x.categoryFields.length >= 2 && series.clusterBarGap > 0 && !series.x._hasMeasure()) {
                returnXClusterGap = (d.width * ((chart._widthPixels() / series.x._max) - (dimple._helpers.xGap(chart, series) * 2)) * (series.clusterBarGap > 0.99 ? 0.99 : series.clusterBarGap)) / 2;
            }                                                                                                          // 4098
            return returnXClusterGap;                                                                                  // 4099
        },                                                                                                             // 4100
                                                                                                                       // 4101
        // Calculate the y gap for bar type charts                                                                     // 4102
        yGap: function (chart, series) {                                                                               // 4103
            var returnYGap = 0;                                                                                        // 4104
            if ((series.y.measure === null || series.y.measure === undefined) && series.barGap > 0) {                  // 4105
                returnYGap = ((chart._heightPixels() / series.y._max) * (series.barGap > 0.99 ? 0.99 : series.barGap)) / 2;
            }                                                                                                          // 4107
            return returnYGap;                                                                                         // 4108
        },                                                                                                             // 4109
                                                                                                                       // 4110
        // Calculate the y gap for clusters within bar type charts                                                     // 4111
        yClusterGap: function (d, chart, series) {                                                                     // 4112
            var returnYClusterGap = 0;                                                                                 // 4113
            if (series.y.categoryFields !== null && series.y.categoryFields !== undefined && series.y.categoryFields.length >= 2 && series.clusterBarGap > 0 && !series.y._hasMeasure()) {
                returnYClusterGap = (d.height * ((chart._heightPixels() / series.y._max) - (dimple._helpers.yGap(chart, series) * 2)) * (series.clusterBarGap > 0.99 ? 0.99 : series.clusterBarGap)) / 2;
            }                                                                                                          // 4116
            return returnYClusterGap;                                                                                  // 4117
        },                                                                                                             // 4118
                                                                                                                       // 4119
        // Calculate the top left x position for bar type charts                                                       // 4120
        x: function (d, chart, series) {                                                                               // 4121
            var returnX = 0;                                                                                           // 4122
            if (series.x._hasTimeField()) {                                                                            // 4123
                returnX = series.x._scale(d.x) - (dimple._helpers.width(d, chart, series) / 2);                        // 4124
            } else if (series.x.measure !== null && series.x.measure !== undefined) {                                  // 4125
                returnX = series.x._scale(d.x);                                                                        // 4126
            } else {                                                                                                   // 4127
                returnX = series.x._scale(d.x) + dimple._helpers.xGap(chart, series) + (d.xOffset * (dimple._helpers.width(d, chart, series) + 2 * dimple._helpers.xClusterGap(d, chart, series))) + dimple._helpers.xClusterGap(d, chart, series);
            }                                                                                                          // 4129
            return returnX;                                                                                            // 4130
        },                                                                                                             // 4131
                                                                                                                       // 4132
        // Calculate the top left y position for bar type charts                                                       // 4133
        y: function (d, chart, series) {                                                                               // 4134
            var returnY = 0;                                                                                           // 4135
            if (series.y._hasTimeField()) {                                                                            // 4136
                returnY = series.y._scale(d.y) - (dimple._helpers.height(d, chart, series) / 2);                       // 4137
            } else if (series.y.measure !== null && series.y.measure !== undefined) {                                  // 4138
                returnY = series.y._scale(d.y);                                                                        // 4139
            } else {                                                                                                   // 4140
                returnY = (series.y._scale(d.y) - (chart._heightPixels() / series.y._max)) + dimple._helpers.yGap(chart, series) + (d.yOffset * (dimple._helpers.height(d, chart, series) + 2 * dimple._helpers.yClusterGap(d, chart, series))) + dimple._helpers.yClusterGap(d, chart, series);
            }                                                                                                          // 4142
            return returnY;                                                                                            // 4143
        },                                                                                                             // 4144
                                                                                                                       // 4145
        // Calculate the width for bar type charts                                                                     // 4146
        width: function (d, chart, series) {                                                                           // 4147
            var returnWidth = 0;                                                                                       // 4148
            if (series.x.measure !== null && series.x.measure !== undefined) {                                         // 4149
                returnWidth = Math.abs(series.x._scale((d.x < 0 ? d.x - d.width : d.x + d.width)) - series.x._scale(d.x));
            } else if (series.x._hasTimeField()) {                                                                     // 4151
                returnWidth = series.x.floatingBarWidth;                                                               // 4152
            } else {                                                                                                   // 4153
                returnWidth = d.width * ((chart._widthPixels() / series.x._max) - (dimple._helpers.xGap(chart, series) * 2)) - (dimple._helpers.xClusterGap(d, chart, series) * 2);
            }                                                                                                          // 4155
            return returnWidth;                                                                                        // 4156
        },                                                                                                             // 4157
                                                                                                                       // 4158
        // Calculate the height for bar type charts                                                                    // 4159
        height: function (d, chart, series) {                                                                          // 4160
            var returnHeight = 0;                                                                                      // 4161
            if (series.y._hasTimeField()) {                                                                            // 4162
                returnHeight = series.y.floatingBarWidth;                                                              // 4163
            } else if (series.y.measure !== null && series.y.measure !== undefined) {                                  // 4164
                returnHeight = Math.abs(series.y._scale(d.y) - series.y._scale((d.y <= 0 ? d.y + d.height : d.y - d.height)));
            } else {                                                                                                   // 4166
                returnHeight = d.height * ((chart._heightPixels() / series.y._max) - (dimple._helpers.yGap(chart, series) * 2)) - (dimple._helpers.yClusterGap(d, chart, series) * 2);
            }                                                                                                          // 4168
            return returnHeight;                                                                                       // 4169
        },                                                                                                             // 4170
                                                                                                                       // 4171
        // Calculate the opacity for series                                                                            // 4172
        opacity: function (d, chart, series) {                                                                         // 4173
            var returnOpacity = 0;                                                                                     // 4174
            if (series.c !== null && series.c !== undefined) {                                                         // 4175
                returnOpacity = d.opacity;                                                                             // 4176
            } else {                                                                                                   // 4177
                returnOpacity = chart.getColor(d.aggField.slice(-1)[0]).opacity;                                       // 4178
            }                                                                                                          // 4179
            return returnOpacity;                                                                                      // 4180
        },                                                                                                             // 4181
                                                                                                                       // 4182
        // Calculate the fill coloring for series                                                                      // 4183
        fill: function (d, chart, series) {                                                                            // 4184
            var returnFill = 0;                                                                                        // 4185
            if (series.c !== null && series.c !== undefined) {                                                         // 4186
                returnFill = d.fill;                                                                                   // 4187
            } else {                                                                                                   // 4188
                returnFill = chart.getColor(d.aggField.slice(-1)[0]).fill;                                             // 4189
            }                                                                                                          // 4190
            return returnFill;                                                                                         // 4191
        },                                                                                                             // 4192
                                                                                                                       // 4193
        // Calculate the stroke coloring for series                                                                    // 4194
        stroke: function (d, chart, series) {                                                                          // 4195
            var stroke = 0;                                                                                            // 4196
            if (series.c !== null && series.c !== undefined) {                                                         // 4197
                stroke = d.stroke;                                                                                     // 4198
            } else {                                                                                                   // 4199
                stroke = chart.getColor(d.aggField.slice(-1)[0]).stroke;                                               // 4200
            }                                                                                                          // 4201
            return stroke;                                                                                             // 4202
        }                                                                                                              // 4203
                                                                                                                       // 4204
    };                                                                                                                 // 4205
                                                                                                                       // 4206
                                                                                                                       // 4207
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4208
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4209
    // Source: /src/methods/_parentHeight.js                                                                           // 4210
    dimple._parentHeight = function (parent) {                                                                         // 4211
        // This one seems to work in Chrome - good old Chrome!                                                         // 4212
        var returnValue = parent.offsetHeight;                                                                         // 4213
        // This does it for IE                                                                                         // 4214
        if (returnValue <= 0 || returnValue === null || returnValue === undefined) {                                   // 4215
            returnValue = parent.clientHeight;                                                                         // 4216
        }                                                                                                              // 4217
        // FireFox is the hard one this time.  See this bug report:                                                    // 4218
        // https://bugzilla.mozilla.org/show_bug.cgi?id=649285//                                                       // 4219
        // It's dealt with by trying to recurse up the dom until we find something                                     // 4220
        // we can get a size for.  Usually the parent of the SVG.  It's a bit costly                                   // 4221
        // but I don't know of any other way.                                                                          // 4222
        if (returnValue <= 0 || returnValue === null || returnValue === undefined) {                                   // 4223
            if (parent.parentNode === null || parent.parentNode === undefined) {                                       // 4224
                // Give up - Recursion Exit Point                                                                      // 4225
                returnValue = 0;                                                                                       // 4226
            } else {                                                                                                   // 4227
                // Get the size from the parent recursively                                                            // 4228
                returnValue = dimple._parseYPosition(d3.select(parent).attr("height"), parent.parentNode);             // 4229
            }                                                                                                          // 4230
        }                                                                                                              // 4231
        return returnValue;                                                                                            // 4232
    };                                                                                                                 // 4233
                                                                                                                       // 4234
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4235
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4236
    // Source: /src/methods/_parentWidth.js                                                                            // 4237
    dimple._parentWidth = function (parent) {                                                                          // 4238
        // This one seems to work in Chrome - good old Chrome!                                                         // 4239
        var returnValue = parent.offsetWidth;                                                                          // 4240
        // This does it for IE                                                                                         // 4241
        if (returnValue <= 0 || returnValue === null || returnValue === undefined) {                                   // 4242
            returnValue = parent.clientWidth;                                                                          // 4243
        }                                                                                                              // 4244
        // FireFox is the hard one this time.  See this bug report:                                                    // 4245
        // https://bugzilla.mozilla.org/show_bug.cgi?id=649285//                                                       // 4246
        // It's dealt with by trying to recurse up the dom until we find something                                     // 4247
        // we can get a size for.  Usually the parent of the SVG.  It's a bit costly                                   // 4248
        // but I don't know of any other way.                                                                          // 4249
        if (returnValue <= 0 || returnValue === null || returnValue === undefined) {                                   // 4250
            if (parent.parentNode === null || parent.parentNode === undefined) {                                       // 4251
                // Give up - Recursion Exit Point                                                                      // 4252
                returnValue = 0;                                                                                       // 4253
            } else {                                                                                                   // 4254
                // Get the size from the parent recursively                                                            // 4255
                returnValue = dimple._parseXPosition(d3.select(parent).attr("width"), parent.parentNode);              // 4256
            }                                                                                                          // 4257
        }                                                                                                              // 4258
        return returnValue;                                                                                            // 4259
    };                                                                                                                 // 4260
                                                                                                                       // 4261
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4262
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4263
    // Source: /src/methods/_parseXPosition.js                                                                         // 4264
    dimple._parseXPosition = function (value, parent) {                                                                // 4265
        var returnValue = 0,                                                                                           // 4266
            values = value.toString().split(",");                                                                      // 4267
        values.forEach(function (v) {                                                                                  // 4268
            if (v !== undefined && v !== null) {                                                                       // 4269
                if (!isNaN(v)) {                                                                                       // 4270
                    returnValue += parseFloat(v);                                                                      // 4271
                } else if (v.slice(-1) === "%") {                                                                      // 4272
                    returnValue += dimple._parentWidth(parent) * (parseFloat(v.slice(0, v.length - 1)) / 100);         // 4273
                } else if (v.slice(-2) === "px") {                                                                     // 4274
                    returnValue += parseFloat(v.slice(0, v.length - 2));                                               // 4275
                } else {                                                                                               // 4276
                    returnValue = value;                                                                               // 4277
                }                                                                                                      // 4278
            }                                                                                                          // 4279
        }, this);                                                                                                      // 4280
        return returnValue;                                                                                            // 4281
    };                                                                                                                 // 4282
                                                                                                                       // 4283
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4284
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4285
    // Source: /src/methods/_parseYPosition.js                                                                         // 4286
    dimple._parseYPosition = function (value, parent) {                                                                // 4287
        var returnValue = 0,                                                                                           // 4288
            values = value.toString().split(",");                                                                      // 4289
        values.forEach(function (v) {                                                                                  // 4290
            if (v !== undefined && v !== null) {                                                                       // 4291
                if (!isNaN(v)) {                                                                                       // 4292
                    returnValue += parseFloat(v);                                                                      // 4293
                } else if (v.slice(-1) === "%") {                                                                      // 4294
                    returnValue += dimple._parentHeight(parent) * (parseFloat(v.slice(0, v.length - 1)) / 100);        // 4295
                } else if (v.slice(-2) === "px") {                                                                     // 4296
                    returnValue += parseFloat(v.slice(0, v.length - 2));                                               // 4297
                } else {                                                                                               // 4298
                    returnValue = value;                                                                               // 4299
                }                                                                                                      // 4300
            }                                                                                                          // 4301
        }, this);                                                                                                      // 4302
        return returnValue;                                                                                            // 4303
    };                                                                                                                 // 4304
                                                                                                                       // 4305
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4306
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4307
    // Source: /src/methods/_rollUp.js                                                                                 // 4308
    dimple._rollUp = function (data, fields, includeFields) {                                                          // 4309
                                                                                                                       // 4310
        var returnList = [];                                                                                           // 4311
        // Put single values into single value arrays                                                                  // 4312
        if (fields !== null && fields !== undefined) {                                                                 // 4313
            fields = [].concat(fields);                                                                                // 4314
        } else {                                                                                                       // 4315
            fields = [];                                                                                               // 4316
        }                                                                                                              // 4317
        // Iterate every row in the data                                                                               // 4318
        data.forEach(function (d) {                                                                                    // 4319
            // The index of the corresponding row in the return list                                                   // 4320
            var index = -1,                                                                                            // 4321
                newRow = {},                                                                                           // 4322
                match = true;                                                                                          // 4323
            // Find the corresponding value in the return list                                                         // 4324
            returnList.forEach(function (r, j) {                                                                       // 4325
                if (index === -1) {                                                                                    // 4326
                    // Indicates a match                                                                               // 4327
                    match = true;                                                                                      // 4328
                    // Iterate the passed fields and compare                                                           // 4329
                    fields.forEach(function (f) {                                                                      // 4330
                        match = match && d[f] === r[f];                                                                // 4331
                    }, this);                                                                                          // 4332
                    // If this is a match get the index                                                                // 4333
                    if (match) {                                                                                       // 4334
                        index = j;                                                                                     // 4335
                    }                                                                                                  // 4336
                }                                                                                                      // 4337
            }, this);                                                                                                  // 4338
            // Pick up the matched row, or add a new one                                                               // 4339
            if (index !== -1) {                                                                                        // 4340
                newRow = returnList[index];                                                                            // 4341
            } else {                                                                                                   // 4342
                // Iterate the passed fields and add to the new row                                                    // 4343
                fields.forEach(function (f) {                                                                          // 4344
                    newRow[f] = d[f];                                                                                  // 4345
                }, this);                                                                                              // 4346
                returnList.push(newRow);                                                                               // 4347
                index = returnList.length - 1;                                                                         // 4348
            }                                                                                                          // 4349
            // Iterate all the fields in the data                                                                      // 4350
            includeFields.forEach(function (field) {                                                                   // 4351
                if (fields.indexOf(field) === -1) {                                                                    // 4352
                    if (newRow[field] === undefined) {                                                                 // 4353
                        newRow[field] = [];                                                                            // 4354
                    }                                                                                                  // 4355
                    newRow[field] = newRow[field].concat(d[field]);                                                    // 4356
                }                                                                                                      // 4357
            }, this);                                                                                                  // 4358
            // Update the return list                                                                                  // 4359
            returnList[index] = newRow;                                                                                // 4360
        }, this);                                                                                                      // 4361
        // Return the flattened list                                                                                   // 4362
        return returnList;                                                                                             // 4363
    };                                                                                                                 // 4364
                                                                                                                       // 4365
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4366
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4367
    // Source: /src/methods/filterData.js                                                                              // 4368
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple#wiki-filterData                                    // 4369
    dimple.filterData = function (data, field, filterValues) {                                                         // 4370
        var returnData = data;                                                                                         // 4371
        if (field !== null && filterValues !== null) {                                                                 // 4372
            // Build an array from a single filter value or use the array                                              // 4373
            if (filterValues !== null && filterValues !== undefined) { filterValues = [].concat(filterValues); }       // 4374
            // The data to return                                                                                      // 4375
            returnData = [];                                                                                           // 4376
            // Iterate all the data                                                                                    // 4377
            data.forEach(function (d) {                                                                                // 4378
                // If an invalid field is passed, just pass the data                                                   // 4379
                if (d[field] === null) {                                                                               // 4380
                    returnData.push(d);                                                                                // 4381
                } else {                                                                                               // 4382
                    if (filterValues.indexOf([].concat(d[field]).join("/")) > -1) {                                    // 4383
                        returnData.push(d);                                                                            // 4384
                    }                                                                                                  // 4385
                }                                                                                                      // 4386
            }, this);                                                                                                  // 4387
        }                                                                                                              // 4388
        // Return the filtered data                                                                                    // 4389
        return returnData;                                                                                             // 4390
    };                                                                                                                 // 4391
                                                                                                                       // 4392
                                                                                                                       // 4393
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4394
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4395
    // Source: /src/methods/getUniqueValues.js                                                                         // 4396
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple#wiki-getUniqueValues                               // 4397
    dimple.getUniqueValues = function (data, fields) {                                                                 // 4398
        var returnlist = [];                                                                                           // 4399
        // Put single values into single value arrays                                                                  // 4400
        if (fields !== null && fields !== undefined) {                                                                 // 4401
            fields = [].concat(fields);                                                                                // 4402
            // Iterate every row in the data                                                                           // 4403
            data.forEach(function (d) {                                                                                // 4404
                // Handle multiple category values by iterating the fields in the row and concatonate the values       // 4405
                var field = "";                                                                                        // 4406
                fields.forEach(function (f, i) {                                                                       // 4407
                    if (i > 0) {                                                                                       // 4408
                        field += "/";                                                                                  // 4409
                    }                                                                                                  // 4410
                    field += d[f];                                                                                     // 4411
                }, this);                                                                                              // 4412
                // If the field was not found, add it to the end of the categories array                               // 4413
                if (returnlist.indexOf(field) === -1) {                                                                // 4414
                    returnlist.push(field);                                                                            // 4415
                }                                                                                                      // 4416
            }, this);                                                                                                  // 4417
        }                                                                                                              // 4418
        return returnlist;                                                                                             // 4419
    };                                                                                                                 // 4420
                                                                                                                       // 4421
    // Copyright: 2013 PMSI-AlignAlytics                                                                               // 4422
    // License: "https://github.com/PMSI-AlignAlytics/dimple/blob/master/MIT-LICENSE.txt"                              // 4423
    // Source: /src/methods/newSvg.js                                                                                  // 4424
    // Help: http://github.com/PMSI-AlignAlytics/dimple/wiki/dimple#wiki-newSvg                                        // 4425
    dimple.newSvg = function (parentSelector, width, height) {                                                         // 4426
        var selectedShape = null;                                                                                      // 4427
        if (parentSelector === null || parentSelector === undefined) {                                                 // 4428
            parentSelector = "body";                                                                                   // 4429
        }                                                                                                              // 4430
        selectedShape = d3.select(parentSelector);                                                                     // 4431
        if (selectedShape.empty()) {                                                                                   // 4432
            throw "The '" + parentSelector + "' selector did not match any elements.  Please prefix with '#' to select by id or '.' to select by class";
        }                                                                                                              // 4434
        return selectedShape.append("svg").attr("width", width).attr("height", height);                                // 4435
    };                                                                                                                 // 4436
                                                                                                                       // 4437
                                                                                                                       // 4438
}());                                                                                                                  // 4439
// End dimple                                                                                                          // 4440
                                                                                                                       // 4441
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.dimple = {};

})();

//# sourceMappingURL=cb6312ffeaedb72225ca3407dd35b7805444e80c.map
