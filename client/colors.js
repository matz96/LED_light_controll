var myColors = new Colors({ // all options have a default value...
    color: 'rgba(204, 82, 37, 0.8)', // initial color (#RGB, RGB, #RRGGBB, RRGGBB, rgb(r, g, b), ...)
    XYZMatrix: ..., // Observer = 2° (CIE 1931), Illuminant = D65  --- see source for dedtails
    XYZReference: ..., // back reference to XYZMatrix --- see source for dedtails
    grey: {r: 0.298954, g: 0.586434, b: 0.114612}, // CIE-XYZ 1931
    luminance: {r: 0.2126, g: 0.7152, b: 0.0722}, // W3C 2.0
    valueRanges: {rgb: {r: [0, 255], g: [0, 255], b: [0, 255]}, hsv:...}, // skip ranges if no conversion required
    customBG: '#808080' // the solid bgColor behind the chosen bgColor (saved color)
    convertCallback: function(colors, type){}, // callback function after color convertion for further calculations...
    toString: function('rgb' || 'hsl' || 'hex' || '' -> 'rgb', forceAlpha) {},
    allMixDetails: false // if set to true, Colors deliveres some more mixed layer informations for all color layers
});