
/*jslint browser: true, node: true */
/*global */

"use strict";

/*** Imports ***/
var papaya = papaya || {};
papaya.viewer = papaya.viewer || {};
var bvalList = '0 700 700 700 700 700 700 700 700 0 700 700 700 700 700 700 700 700 0 700 700 700 700 700 700 700 700 0 2000 2000 2000 2000 2000 2000 2000 2000 0 2000 2000 2000 2000 2000 2000 2000 2000 0 2000 2000 2000 2000 2000 2000 2000 2000 0 2000 2000 2000 2000 2000 2000 2000 2000 0 2000 2000 2000 2000 2000 2000 2000 2000 0 2000 2000 2000 2000 2000 2000 2000 2000'.split(' ')
var bVecXList = '0.000000 0.132723 -0.918278 -0.965426 0.608607 0.639150 0.789542 0.135008 0.344276 0.000000 0.682349 0.141671 0.699577 -0.591356 0.935168 0.644819 -0.727042 -0.156172 0.000000 -0.196180 0.293367 0.467415 0.242627 -0.321942 0.229728 -0.391999 0.887686 0.000000 -0.900302 0.726183 0.913389 0.188308 -0.103414 0.333389 0.692523 -0.684916 0.000000 0.611951 -0.372141 0.286024 -0.545125 0.974370 0.681627 0.833467 -0.170331 0.000000 -0.251530 0.096344 -0.269231 -0.464602 0.972997 0.975729 0.433122 0.290163 0.000000 -0.287807 0.671102 0.374314 0.756250 -0.832060 -0.580721 0.394574 0.574960 0.000000 0.052557 0.048811 0.834781 0.552354 0.393069 0.302647 -0.580868 0.831553 0.000000 -0.812671 0.098654 -0.596348 0.015015 -0.506653 0.891416 -0.200646 0.000000'.split(' ')
var bVecYList = '0.000000 -0.739879 0.379929 -0.153303 0.784469 -0.437609 -0.209334 0.362540 -0.093474 0.000000 -0.706470 -0.550473 0.167742 0.690452 -0.136207 0.248547 -0.600675 -0.940576 0.000000 -0.149388 -0.952754 0.628758 -0.862959 -0.668161 0.943726 0.321717 0.387799 0.000000 -0.079145 -0.538020 -0.376477 -0.565148 -0.354087 0.942753 -0.712545 -0.058848 0.000000 -0.029447 -0.046290 -0.840328 0.295394 0.203717 0.566802 -0.189789 -0.668514 0.000000 -0.886634 -0.851841 0.605852 -0.382792 -0.174193 -0.001727 -0.708525 -0.216666 0.000000 0.952924 0.730095 0.629541 0.398574 0.513260 -0.782528 -0.885895 0.334517 0.000000 0.793071 0.963948 0.191764 -0.392401 0.841244 0.187492 0.782419 0.525224 0.000000 0.275965 0.487438 0.588589 -0.988624 -0.657956 0.406151 0.295024 0.000000'.split(' ')
var bVecZList = '0.000000 0.659517 -0.111440 -0.210835 -0.119187 -0.632444 0.576891 -0.922138 -0.934204 0.000000 -0.187884 -0.822745 -0.694590 -0.416621 -0.326968 0.722795 -0.332565 0.301540 0.000000 -0.969121 0.078708 -0.621439 -0.443209 -0.670756 0.237921 -0.861879 -0.248245 0.000000 -0.428010 -0.428010 -0.154874 -0.803211 -0.929477 -0.008279 -0.112654 -0.726242 0.000000 -0.790347 -0.927021 0.460476 -0.784589 0.095406 -0.462731 -0.518954 -0.723931 0.000000 -0.388089 -0.514864 -0.748638 -0.798508 0.151437 -0.218977 -0.557133 -0.932127 0.000000 -0.095406 -0.128781 -0.680858 0.518869 -0.210333 -0.224529 -0.243930 -0.746673 0.000000 -0.606858 -0.261575 -0.516109 -0.735477 -0.371221 -0.934479 -0.224529 0.180717 0.000000 -0.513234 -0.867567 -0.545832 -0.149657 -0.557133 -0.201047 -0.934185 -1.000000'.split(' ')
var max = 0
var bVecXList2 = bVecXList.map((v) => 3 * v/1 )
var bVecYList2 = bVecYList.map((v) => 3 * v/1 )

var bVecZList2 = bVecZList.map((v) => 3 * v/1 )

var vectlist = []
for(var i = 0; i <= 80; i++) {
    vectlist.push([bVecXList[i], bVecYList[i], bVecZList[i], bvalList[i]])
}
var colorMap = {
    0: 'red',
    700: 'blue',
    2000: 'grey',
}







// ============================== 绘制底部球形部分
function g(e) {
    return document.getElementById(e);
}
/* 一个插值算法 */
function Cubic(t, b, c, d) {
    return c * (t /= d) * t * t + b;
}







// =================================

/*** Constructor ***/
papaya.viewer.Display = papaya.viewer.Display || function (container, width) {
    this.container = container;
    this.viewer = container.viewer;
    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = papaya.viewer.Display.SIZE;
    this.context = this.canvas.getContext("2d");
    this.canvas.style.padding = 0;
    this.canvas.style.margin = 0;
    this.canvas.style.border = "none";
    this.canvas.style.cursor = "default";
    this.tempCoord = new papaya.core.Coordinate(0, 0, 0);
    this.drawingError = false;
    this.progress = 0;
    this.progressStartTime = 0;
    this.progressTimeout = null;
    this.drawingProgress = false;
    this.errorMessage = "";

    this.drawUninitializedDisplay();
};


/*** Static Pseudo-constants ***/

papaya.viewer.Display.SIZE = 50;

papaya.viewer.Display.MINI_LABELS_THRESH = 700;

papaya.viewer.Display.PADDING = 8;

papaya.viewer.Display.FONT_COLOR_WHITE = "white";
papaya.viewer.Display.FONT_COLOR_ORANGE = "rgb(182, 59, 0)";

papaya.viewer.Display.FONT_SIZE_COORDINATE_LABEL = 12;
papaya.viewer.Display.FONT_COLOR_COORDINATE_LABEL = papaya.viewer.Display.FONT_COLOR_WHITE;
papaya.viewer.Display.FONT_TYPE_COORDINATE_LABEL = "sans-serif";

papaya.viewer.Display.FONT_SIZE_COORDINATE_VALUE = 18;
papaya.viewer.Display.FONT_COLOR_COORDINATE_VALUE = papaya.viewer.Display.FONT_COLOR_ORANGE;
papaya.viewer.Display.FONT_TYPE_COORDINATE_VALUE = "sans-serif";
papaya.viewer.Display.PRECISION_COORDINATE_VALUE = 5;
papaya.viewer.Display.PRECISION_COORDINATE_MAX = 12;

papaya.viewer.Display.FONT_SIZE_IMAGE_VALUE = 20;
papaya.viewer.Display.FONT_COLOR_IMAGE_VALUE = papaya.viewer.Display.FONT_COLOR_WHITE;
papaya.viewer.Display.FONT_TYPE_IMAGE_VALUE = "sans-serif";
papaya.viewer.Display.PRECISION_IMAGE_VALUE = 9;
papaya.viewer.Display.PRECISION_IMAGE_MAX = 14;

papaya.viewer.Display.FONT_SIZE_ATLAS_MINI = 14;
papaya.viewer.Display.FONT_SIZE_ATLAS = 20;
papaya.viewer.Display.FONT_TYPE_ATLAS = "sans-serif";

papaya.viewer.Display.FONT_SIZE_MESSAGE_VALUE = 20;
papaya.viewer.Display.FONT_TYPE_MESSAGE_VALUE = "sans-serif";
papaya.viewer.Display.FONT_COLOR_MESSAGE = "rgb(200, 75, 25)";

papaya.viewer.Display.PROGRESS_LABEL_SUFFIX = ["...", "", ".", ".."];
papaya.viewer.Display.PROGRESS_LABEL_DEFAULT = "Loading";


/*** Prototype Methods ***/

papaya.viewer.Display.prototype.drawUninitializedDisplay = function () {
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
};



papaya.viewer.Display.prototype.canDraw = function () {
    return !(this.drawingError || this.drawingProgress);
};



papaya.viewer.Display.prototype.drawEmptyDisplay = function () {
    if (this.canDraw()) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } else if (this.drawError) {
        this.drawError(this.errorMessage);
    }
};


// draw bottom display area modified
papaya.viewer.Display.prototype.drawDisplay = function (xLoc, yLoc, zLoc) {
    // if(window.isBlock){
    //     return
    // }
    
    var locY, val, viewerOrigin, height, atlasNumLabels, atlasLabelWidth, atlasLabel, ctr, metricsAtlas, sizeRatio,
        viewerVoxelDims, labelColorThresh, halfWidth, coordinateItemWidth, smallViewer, precision;
        // calculate the intensity named window.currentTimeSeries by location x 、 y 、 z modified 
        this.viewer.gotoCoordinateToDrawChart({
            x: xLoc,
            y: yLoc,
            z: zLoc,
        });
        // draw chart by window.currentTimeSeries modified
        setTimeout(function() {
            var option = {
                xAxis: {
                    type: 'category',
                    data: Array(81).fill(1).map(function(v, i) {return i}),
                    axisLabel: {
                        interval: 1,
                        formatter: (volume) => {
                            console.log(volume, '====>')
                            // render bottom volume modified
                            if(volume == '78'){
                                return 'volume'
                            }else{
                                return ''
                            }
                        }
                    },
                },
                
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: window.currentTimeSeries,
                    type: 'line',
                    showAllSymbol: true,
                }],
                grid:{
                    x:45,
                    y:45,
                    x2:5,
                    y2:20,
                    borderWidth:1
                }
            };
            window.myChart.setOption(option);
        })
    if (this.canDraw()) {
        // initialize
        sizeRatio = this.viewer.canvas.width / 600.0;
        halfWidth = this.viewer.canvas.width / 2.0;
        coordinateItemWidth = halfWidth / 5.0;
        height = this.canvas.height;
        smallViewer = (halfWidth < 300);

        if (this.container.preferences.atlasLocks !== "Mouse") {
            xLoc = this.viewer.currentCoord.x;
            yLoc = this.viewer.currentCoord.y;
            zLoc = this.viewer.currentCoord.z;
        }

        // canvas background
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#000000";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);


        // coordinate labels
        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_COORDINATE_LABEL;
        this.context.font = papaya.viewer.Display.FONT_SIZE_COORDINATE_LABEL + "px " +
            papaya.viewer.Display.FONT_TYPE_COORDINATE_LABEL;

        locY = papaya.viewer.Display.FONT_SIZE_COORDINATE_LABEL + papaya.viewer.Display.PADDING * 0.75;
        let labelLocY = locY
        this.context.fillRect(0, 0, 100, 100)
        this.context.fillText("x", 1.5 * papaya.viewer.Display.PADDING, locY);
        this.context.fillText("y", 1.5 * papaya.viewer.Display.PADDING + coordinateItemWidth, locY);
        this.context.fillText("z", 1.5 * papaya.viewer.Display.PADDING + (2 * coordinateItemWidth), locY);
        // draw bval label modified
        if(this.viewer.volume.numTimepoints > 1){
            // this.context.fillText("bval", 1.5 * papaya.viewer.Display.PADDING + (4.8 * coordinateItemWidth), labelLocY);
        }
        // draw bval vector label modified
        if(this.viewer.volume.numTimepoints > 1 || true){
            // this.context.fillText("bvec", 1.5 * papaya.viewer.Display.PADDING + (6.8 * coordinateItemWidth), labelLocY);
        }


        // coordinate values
        locY += papaya.viewer.Display.FONT_SIZE_COORDINATE_VALUE + papaya.viewer.Display.PADDING / 2;

        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_COORDINATE_VALUE;
        this.context.font = (papaya.viewer.Display.FONT_SIZE_COORDINATE_VALUE - (smallViewer ? 2 : 0)) + "px " +
            papaya.viewer.Display.FONT_TYPE_COORDINATE_VALUE;

        if (this.viewer.worldSpace) {
            viewerOrigin = this.viewer.screenVolumes[0].volume.header.origin;  // base image origin
            viewerVoxelDims = this.viewer.screenVolumes[0].volume.header.voxelDimensions;
            precision = Math.min(papaya.viewer.Display.PRECISION_COORDINATE_MAX,
                (Math.round(papaya.viewer.Display.PRECISION_COORDINATE_VALUE * sizeRatio)));
            var locationObj = {
                x: parseFloat(((xLoc - viewerOrigin.x) * viewerVoxelDims.xSize).toString().substr(0,
                    precision)),
                y: parseFloat(((viewerOrigin.y - yLoc) * viewerVoxelDims.ySize).toString().substr(0,
                    precision)),
                z: parseFloat(((viewerOrigin.z - zLoc) * viewerVoxelDims.zSize).toString().substr(0,
                    precision)),
            }
            // this.context.fillText(locationObj.x, 1.5 * papaya.viewer.Display.PADDING, locY);
            // this.context.fillText(locationObj.y, 1.5 * papaya.viewer.Display.PADDING + coordinateItemWidth, locY);
            // this.context.fillText(locationObj.z, 1.5 * papaya.viewer.Display.PADDING + (2 * coordinateItemWidth), locY);
            $('.x-val').html(locationObj.x)
            $('.y-val').html(locationObj.y)
            $('.z-val').html(locationObj.z)
        } else {
            // this.context.fillText(Math.round(xLoc).toString(), 1.5 * papaya.viewer.Display.PADDING, locY);
            // this.context.fillText(Math.round(yLoc).toString(), 1.5 * papaya.viewer.Display.PADDING +
            //     coordinateItemWidth, locY);
            // this.context.fillText(Math.round(zLoc).toString(), 1.5 * papaya.viewer.Display.PADDING +
            //     (2 * coordinateItemWidth), locY);
            $('.x-val').html(Math.round(xLoc).toString())
            $('.y-val').html(Math.round(yLoc).toString())
            $('.z-val').html(Math.round(zLoc).toString())
        }
        //draw bval value modified
        if(this.viewer.volume.numTimepoints > 1){
            var currentTimepoint = this.viewer.currentScreenVolume.currentTimepoint
            // this.context.fillText(bvalList[currentTimepoint], 1.5 * papaya.viewer.Display.PADDING + (4.8 * coordinateItemWidth), locY);
            $('.bval-val').html(bvalList[currentTimepoint])
        }
        //draw vector value modified
        if(this.viewer.volume.numTimepoints > 1){
            // save the canvas state
            this.context.save()
            this.context.font = papaya.viewer.Display.FONT_SIZE_COORDINATE_LABEL - 4 + "px " +
            papaya.viewer.Display.FONT_TYPE_COORDINATE_LABEL;
            var currentTimepoint = this.viewer.currentScreenVolume.currentTimepoint
            // this.context.fillText(bVecXList[currentTimepoint], 1.5 * papaya.viewer.Display.PADDING + (6.8 * coordinateItemWidth), locY - 14);
            // this.context.fillText(bVecYList[currentTimepoint], 1.5 * papaya.viewer.Display.PADDING + (6.8 * coordinateItemWidth), locY - 6);
            // this.context.fillText(bVecZList[currentTimepoint], 1.5 * papaya.viewer.Display.PADDING + (6.8 * coordinateItemWidth), locY + 2);
            // restore the canvas state
            this.context.restore()
            // preview()
            // ===========>






            // ================>

            // ${bVecXList[currentTimepoint]}、${bVecYList[currentTimepoint]}、${bVecZList[currentTimepoint]}
            $('.bvec-val').html(`<span>${bVecXList[currentTimepoint]}</span><span>${bVecYList[currentTimepoint]}</span><span>${bVecZList[currentTimepoint]}</span>`)
        }


        // image value
        if (!this.viewer.currentScreenVolume.rgb && !this.viewer.currentScreenVolume.dti) {
            val = this.viewer.getCurrentValueAt(xLoc, yLoc, zLoc);
            this.canvas.currentval = val.toString();  // for unit testing

            locY = (height / 2.0) + (papaya.viewer.Display.FONT_SIZE_IMAGE_VALUE / 2.0) -
                (papaya.viewer.Display.PADDING / 2.0);
            this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_IMAGE_VALUE;
            this.context.font = (papaya.viewer.Display.FONT_SIZE_IMAGE_VALUE - (smallViewer ? 2 : 0)) + "px " +
                papaya.viewer.Display.FONT_TYPE_IMAGE_VALUE;
            precision = Math.min(papaya.viewer.Display.PRECISION_IMAGE_MAX,
                Math.round(papaya.viewer.Display.PRECISION_IMAGE_VALUE * sizeRatio));
            // this.context.fillText(parseFloat(val.toString().substr(0, precision)), (2 * papaya.viewer.Display.PADDING) +
            //     (3 * coordinateItemWidth), locY);
            $('.voxel-val').html(parseFloat(val.toString().substr(0, precision)))
            // bvec chart options modified
            var option = {
                top: 100,
                left: 400,
                tooltip: {
                },
                visualMap: {
                    dimension: 3,
                    pieces: [
                        {value: 0, label: 'bval: 0', color: 'lightcoral'},  // bval is 0 modified 
                        {value: 700, label: 'bval: 700', color: 'lightblue'},  // bval is 700 modified 
                        {value: 2000, label: 'bval: 2000', color: 'bisque'},  // bval is 2000 modified 
                    ],
                    textStyle: {
                        color: '#333'
                    },
                    left: 100,
                    top: 300,
                }, 
                xAxis3D: {
                    type: 'value',
                    // bottom: 1000,
                    offset: 500,
                },
                yAxis3D: {
                    type: 'value'
                },
                zAxis3D: {
                    type: 'value'
                },
                grid3D: {
                    bottom: 300,
                    axisLine: {
                        lineStyle: {
                            color: '#999'
                        }
                    },

                    axisPointer: {
                        lineStyle: {
                            color: '#ffbd67'
                        }
                    },
                    viewControl: {
                        // disable zoom 
                        zoomSensitivity: false,
                        // autoRotate: true
                        // projection: 'orthographic'
                    }
                },
                legend: {
                    top: 100,
                    left: 400
                },
                series: [{
                    type: 'scatter3D',
                    data: [vectlist[currentTimepoint]],
                }]
            }
            // use option to reRender time series chart modified
            window.myChart2.setOption(option);
        }

        // atlas labels
        if (this.viewer.atlas && (!this.viewer.atlas.volume || this.viewer.atlas.volume.isLoaded)) {
            if (papaya.Container.atlasWorldSpace) {
                this.viewer.getWorldCoordinateAtIndex(xLoc, yLoc, zLoc, this.tempCoord);
                atlasLabel = this.viewer.atlas.getLabelAtCoordinate(this.tempCoord.x, this.tempCoord.y, this.tempCoord.z, xLoc, yLoc, zLoc);
            } else {
                atlasLabel = this.viewer.atlas.getLabelAtCoordinate(xLoc, yLoc, zLoc, xLoc, yLoc, zLoc);
            }

            atlasNumLabels = atlasLabel.length;
            labelColorThresh = Math.ceil(this.viewer.atlas.maxLabels / 2);

            if ((halfWidth < 300) && (atlasNumLabels >= 2)) {
                atlasLabelWidth = halfWidth * 0.75;

                for (ctr = atlasNumLabels - 1; ctr >= 0; ctr -= 1) {
                    if (ctr === (atlasNumLabels - 2)) {
                        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_ORANGE;
                        this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS_MINI + "px " +
                            papaya.viewer.Display.FONT_TYPE_ATLAS;
                    } else {
                        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_WHITE;
                        this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS_MINI + "px " +
                            papaya.viewer.Display.FONT_TYPE_ATLAS;
                    }

                    metricsAtlas = this.context.measureText(atlasLabel[ctr]);
                    if (metricsAtlas.width > (atlasLabelWidth - 2 * papaya.viewer.Display.PADDING)) {
                        atlasLabel[ctr] = (atlasLabel[ctr].substr(0, Math.round(atlasLabel[ctr].length / 3)) + " ... " +
                        atlasLabel[ctr].substr(atlasLabel[ctr].length - 3, 3));
                    }

                    if (ctr === (atlasNumLabels - 2)) {
                        // this.context.fillText(atlasLabel[ctr], halfWidth + (halfWidth * 0.25),
                        //     papaya.viewer.Display.PADDING * 1.5  + (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                        //     $('.location1-val').html(atlasLabel[ctr])
                    } else if (ctr === (atlasNumLabels - 1)) {
                        // this.context.fillText(atlasLabel[ctr], halfWidth + (halfWidth * 0.25),
                        //     papaya.viewer.Display.PADDING + (height / 2.0) +
                        //     (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                    }
                }
            } else if ((halfWidth < 600) && (atlasNumLabels > 2)) {
                atlasLabelWidth = halfWidth / 2;

                for (ctr = atlasNumLabels - 1; ctr >= 0; ctr -= 1) {
                    if (ctr < labelColorThresh) {
                        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_ORANGE;
                        this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS_MINI + "px " +
                            papaya.viewer.Display.FONT_TYPE_ATLAS;
                    } else {
                        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_WHITE;
                        this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS_MINI + "px " +
                            papaya.viewer.Display.FONT_TYPE_ATLAS;
                    }

                    metricsAtlas = this.context.measureText(atlasLabel[ctr]);
                    if (metricsAtlas.width > (atlasLabelWidth - papaya.viewer.Display.PADDING * 6)) {
                        atlasLabel[ctr] = (atlasLabel[ctr].substr(0, Math.round(atlasLabel[ctr].length / 3)) +
                            " ... " + atlasLabel[ctr].substr(atlasLabel[ctr].length - 3, 3));
                    }

                    if (ctr === 0) {
                        // this.context.fillText(atlasLabel[ctr], halfWidth + papaya.viewer.Display.PADDING * 5,
                        //     papaya.viewer.Display.PADDING * 1.5  + (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                    } else if (ctr === 1) {
                        // this.context.fillText(atlasLabel[ctr], halfWidth + papaya.viewer.Display.PADDING * 5,
                        //     papaya.viewer.Display.PADDING + (height / 2.0) +
                        //     (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                    } else if (ctr === 2) {
                        // this.context.fillText(atlasLabel[ctr], halfWidth * 1.5 + papaya.viewer.Display.PADDING * 5,
                        //     papaya.viewer.Display.PADDING * 1.5  + (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                    } else if (ctr === 3) {
                        // this.context.fillText(atlasLabel[ctr], halfWidth * 1.5 + papaya.viewer.Display.PADDING * 5,
                        //     papaya.viewer.Display.PADDING + (height / 2.0) +
                        //     (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                    }
                }
            } else if ((halfWidth < 800) && (atlasNumLabels > 3)) {
                atlasLabelWidth = halfWidth / 3;

                for (ctr = 0; ctr < 4; ctr += 1) {
                    if (ctr < 2) {
                        if (ctr < labelColorThresh) {
                            this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_ORANGE;
                            this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS_MINI + "px " +
                                papaya.viewer.Display.FONT_TYPE_ATLAS;
                        } else {
                            this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_WHITE;
                            this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS_MINI + "px " +
                                papaya.viewer.Display.FONT_TYPE_ATLAS;
                        }

                        metricsAtlas = this.context.measureText(atlasLabel[ctr]);
                        if (metricsAtlas.width > (atlasLabelWidth - papaya.viewer.Display.PADDING * 6)) {
                            atlasLabel[ctr] = (atlasLabel[ctr].substr(0, Math.round(atlasLabel[ctr].length / 3)) +
                                " ... " + atlasLabel[ctr].substr(atlasLabel[ctr].length - 3, 3));
                        }

                        if (ctr === 0) {
                            // this.context.fillText(atlasLabel[ctr], halfWidth + papaya.viewer.Display.PADDING * 5,
                            //     papaya.viewer.Display.PADDING * 1.5  +
                            //     (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                        } else if (ctr === 1) {
                            // this.context.fillText(atlasLabel[ctr], halfWidth + papaya.viewer.Display.PADDING * 5,
                            //     papaya.viewer.Display.PADDING + (height / 2.0) +
                            //     (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                        } else if (ctr === 2) {
                            // this.context.fillText(atlasLabel[ctr], halfWidth * 1.5 + papaya.viewer.Display.PADDING * 5,
                            //     papaya.viewer.Display.PADDING * 1.5  +
                            //     (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                        } else if (ctr === 3) {
                            // this.context.fillText(atlasLabel[ctr], halfWidth * 1.5 + papaya.viewer.Display.PADDING * 5,
                            //     papaya.viewer.Display.PADDING + (height / 2.0) +
                            //     (papaya.viewer.Display.FONT_SIZE_ATLAS_MINI / 2.0));
                        }
                    } else {
                        locY = (height / 2.0) + (papaya.viewer.Display.FONT_SIZE_ATLAS / 2.0) -
                            (papaya.viewer.Display.PADDING / 2.0);

                        if (ctr < labelColorThresh) {
                            this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_ORANGE;
                            this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS + "px " +
                                papaya.viewer.Display.FONT_TYPE_ATLAS;
                        } else {
                            this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_WHITE;
                            this.context.font = papaya.viewer.Display.FONT_SIZE_ATLAS + "px " +
                                papaya.viewer.Display.FONT_TYPE_ATLAS;
                        }

                        metricsAtlas = this.context.measureText(atlasLabel[ctr]);
                        if (metricsAtlas.width > (atlasLabelWidth - (2 * papaya.viewer.Display.PADDING))) {
                            atlasLabel[ctr] = (atlasLabel[ctr].substr(0, Math.round(atlasLabel[ctr].length / 3)) +
                                " ... " + atlasLabel[ctr].substr(atlasLabel[ctr].length - 3, 3));
                        }

                        if (ctr === 2) {
                            // this.context.fillText(atlasLabel[ctr], halfWidth + papaya.viewer.Display.PADDING +
                            //     atlasLabelWidth, locY);
                        } else if (ctr === 3) {
                            // this.context.fillText(atlasLabel[ctr], halfWidth + papaya.viewer.Display.PADDING +
                            //     (2 * atlasLabelWidth), locY);
                        }
                    }
                }
            } else {
                atlasLabelWidth = halfWidth / atlasNumLabels;
                locY = (height / 2.0) + (papaya.viewer.Display.FONT_SIZE_ATLAS / 2.0) -
                    (papaya.viewer.Display.PADDING / 2.0);

                for (ctr = 0; ctr < atlasNumLabels; ctr += 1) {
                    if (ctr < labelColorThresh) {
                        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_ORANGE;
                        this.context.font = (papaya.viewer.Display.FONT_SIZE_ATLAS - (smallViewer ? 4 : 0)) + "px " +
                            papaya.viewer.Display.FONT_TYPE_ATLAS;
                    } else {
                        this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_WHITE;
                        this.context.font = (papaya.viewer.Display.FONT_SIZE_ATLAS - (smallViewer ? 4 : 0)) + "px " +
                            papaya.viewer.Display.FONT_TYPE_ATLAS;
                    }

                    metricsAtlas = this.context.measureText(atlasLabel[ctr]);
                    if (metricsAtlas.width > (atlasLabelWidth - (2 * papaya.viewer.Display.PADDING)) -
                            (halfWidth * 0.05 * Math.max(0, 3 - atlasNumLabels))) {
                        atlasLabel[ctr] = (atlasLabel[ctr].substr(0, Math.round(atlasLabel[ctr].length / 3)) + " ... " +
                            atlasLabel[ctr].substr(atlasLabel[ctr].length - 3, 3));
                    }

                    // this.context.fillText(atlasLabel[ctr], halfWidth + papaya.viewer.Display.PADDING +
                    //     (halfWidth * 0.05 * Math.max(0, 3 - atlasNumLabels)) + (ctr * atlasLabelWidth), locY);
                }
            }
            // atlasLabel.join(' ')
            $('.location1-val').html(atlasLabel.map((v) => {
                return `<span>${v}</span>`
            }))
        }
    } else if (this.drawError) {
        this.drawError(this.errorMessage);
    }
};

// draw bottom display area modified
papaya.viewer.Display.prototype.drawDisplayToDrawChart = function (xLoc, yLoc, zLoc) {
    this.viewer.getCurrentValueAtToDrawChart(xLoc, yLoc, zLoc);
};



papaya.viewer.Display.prototype.drawError = function (message) {
    var valueLoc, display;

    this.errorMessage = message;
    this.drawingError = true;
    display = this;
    window.setTimeout(papaya.utilities.ObjectUtils.bind(display, function () {display.drawingError = false; }), 3000);

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#000000";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "red";
    this.context.font = papaya.viewer.Display.FONT_SIZE_MESSAGE_VALUE + "px " +
        papaya.viewer.Display.FONT_TYPE_MESSAGE_VALUE;

    valueLoc = papaya.viewer.Display.FONT_SIZE_COORDINATE_LABEL + papaya.viewer.Display.PADDING + 1.5 *
        papaya.viewer.Display.PADDING;

    this.context.fillText(message, papaya.viewer.Display.PADDING, valueLoc);
};



papaya.viewer.Display.prototype.drawProgress = function (progress, label) {
    var prog, display, now, progressIndex, yLoc, progressLabel;
    prog = Math.round(progress * 1000);

    if (prog > this.progress) {
        this.progress = prog;

        if (label !== undefined) {
            progressLabel = label;
        } else {
            progressLabel = papaya.viewer.Display.PROGRESS_LABEL_DEFAULT;
        }

        if (this.progressStartTime === 0) {
            this.progressStartTime = new Date().getTime();
            now = this.progressStartTime;
        } else {
            now = new Date().getTime();
        }

        progressIndex = parseInt((now - this.progressStartTime) / 500, 10) % 4;

        if (this.progress >= 990) {
            if (this.progressTimeout) {
                window.clearTimeout(this.progressTimeout);
                this.progressTimeout = null;
            }

            this.drawingProgress = false;
            this.progress = 0;
            this.progressStartTime = 0;
            this.drawEmptyDisplay();
        } else {
            if (this.progressTimeout) {
                window.clearTimeout(this.progressTimeout);
            }

            display = this;
            this.progressTimeout = window.setTimeout(papaya.utilities.ObjectUtils.bind(display, function () {display.drawingProgress = false; }),
                3000);

            // clear background
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.fillStyle = "#fff";
            this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // draw progress block
            this.context.fillStyle = "#000";
            this.context.fillRect(0, 0, this.canvas.width * progress, this.canvas.height);

            // draw progress label
            this.context.font = papaya.viewer.Display.FONT_SIZE_MESSAGE_VALUE + "px " +
                papaya.viewer.Display.FONT_TYPE_MESSAGE_VALUE;
            this.context.fillStyle = papaya.viewer.Display.FONT_COLOR_MESSAGE;
            yLoc = papaya.viewer.Display.FONT_SIZE_COORDINATE_LABEL + papaya.viewer.Display.PADDING + 1.5 *
                papaya.viewer.Display.PADDING;
            this.context.fillText(progressLabel + papaya.viewer.Display.PROGRESS_LABEL_SUFFIX[progressIndex],
                papaya.viewer.Display.PADDING * 2, yLoc);
        }
    }
};
