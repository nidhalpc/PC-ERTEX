(function(exports) {

/*
 * tile.stamen.js v1.3.0
 */

/* 
Geomap Background Creator 
Local Base Codes
*/

var SUBDOMAINS = "a. b. c. d.".split(" "),
    MAKE_PROVIDER = function(layer, type, minZoom, maxZoom) {
        return {
            "url":          ["//stamen-tiles-{S}a.ssl.fastly.net/", layer, "/{Z}/{X}/{Y}.", type].join(""),
            "type":         type,
            "subdomains":   SUBDOMAINS.slice(),
            "minZoom":      minZoom,
            "maxZoom":      maxZoom,
            "attribution":  [
                'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ',
                'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
                'Data by <a href="http://openstreetmap.org/">OpenStreetMap</a>, ',
                'under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
            ].join("")
        };
    },
    PROVIDERS =  {
        "toner":        MAKE_PROVIDER("toner", "png", 0, 20),
        "terrain":      MAKE_PROVIDER("terrain", "png", 0, 18),
        "terrain-classic": MAKE_PROVIDER("terrain-classic", "png", 0, 18),
        "watercolor":   MAKE_PROVIDER("watercolor", "jpg", 1, 18),
        "trees-cabs-crime": {
            "url": "http://{S}.tiles.mapbox.com/v3/stamen.trees-cabs-crime/{Z}/{X}/{Y}.png",
            "type": "png",
            "subdomains": "a b c d".split(" "),
            "minZoom": 11,
            "maxZoom": 18,
            "extent": [
                {"lat": 37.853, "lon": -122.577},
                {"lat": 37.684, "lon": -122.313}
            ],
            "attribution": [
                 <a href="http://stamen.com/">Stamen</a>.',
                'Data courtesy of <a href="http://fuf.net/">FuF</a>,',
                '<a href="http://www.yellowcabsf.com/">Yellow Cab</a>',
                '&amp; <a href="http://sf-police.org/">SFPD</a>.'
            ].join(" ")
        }
    };

PROVIDERS["terrain-classic"].url = "//stamen-tiles-{S}a.ssl.fastly.net/terrain/{Z}/{X}/{Y}.png";

// set up toner and terrain flavors
setupFlavors("toner", ["hybrid", "labels", "lines", "background", "lite"]);
setupFlavors("terrain", ["background", "labels", "lines"]);

// toner 2010
deprecate("toner", ["2010"]);

// toner 2011 flavors
deprecate("toner", ["2011", "2011-lines", "2011-labels", "2011-lite"]);

var odbl = [
    "toner",
    "toner-hybrid",
    "toner-labels",
    "toner-lines",
    "toner-background",
    "toner-lite",
    "terrain",
    "terrain-background",
    "terrain-lines",
    "terrain-labels",
    "terrain-classic"
];

for (var i = 0; i < odbl.length; i++) {
    var key = odbl[i];

    PROVIDERS[key].retina = true;
    PROVIDERS[key].attribution = [
        'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, ',
        'under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. ',
        'Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, ',
        'under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    ].join("");
}

/*
 * Export stamen.tile to the provided namespace.
 */
exports.stamen = exports.stamen || {};
exports.stamen.tile = exports.stamen.tile || {};
exports.stamen.tile.providers = PROVIDERS;
exports.stamen.tile.getProvider = getProvider;

function deprecate(base, flavors) {
    var provider = getProvider(base);
