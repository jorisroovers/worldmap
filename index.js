var s = Snap("#worldmap");
var g = s.group();
var tux = Snap.load("worldHigh.svg", function (loadedFragment) {
    g.append(loadedFragment);
//    var svgWidth = s.getBBox().width;
//    var svgHeight = s.getBBox().height;
//    console.log(svgWidth, svgHeight);
//    var widthRatio = 800 / svgWidth;
//    var heightRatio = 700 / svgHeight;
//    console.log(widthRatio, heightRatio);
//    g.transform("s" + [widthRatio, widthRatio] + "t0,0" );
    var france = g.select("#FR");
    france.addClass("visited");
});