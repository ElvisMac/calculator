(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"calculator_atlas_1", frames: [[782,216,254,92],[1038,216,254,92],[1130,0,254,92],[1130,94,114,92],[1246,94,114,92],[782,310,114,92],[898,310,114,92],[1014,310,114,92],[1130,310,114,92],[782,404,114,92],[898,404,114,92],[1014,404,114,92],[1130,404,114,92],[782,498,114,92],[898,498,114,92],[1014,498,114,92],[1130,498,114,92],[782,592,114,92],[116,1500,114,52],[116,1554,114,52],[0,1594,114,52],[232,1500,114,52],[232,1554,114,52],[898,592,114,92],[1014,592,114,92],[1130,592,114,92],[782,0,114,214],[898,0,114,214],[1014,0,114,214],[782,686,114,92],[898,686,114,92],[1014,686,114,92],[348,1500,114,52],[348,1554,114,52],[464,1500,114,52],[464,1554,114,52],[696,1468,114,52],[1130,686,114,92],[782,780,114,92],[898,780,114,92],[696,1522,114,52],[580,1562,114,52],[116,1608,114,52],[0,1648,114,52],[232,1608,114,52],[1014,780,114,92],[1130,780,114,92],[1154,874,114,92],[782,874,114,92],[898,874,114,92],[1014,874,114,92],[1246,310,114,92],[1294,188,114,92],[1386,0,114,92],[1362,94,114,92],[1246,404,114,92],[1246,498,114,92],[1246,592,114,92],[1246,686,114,92],[1246,780,114,92],[1154,968,114,92],[782,968,114,92],[898,968,114,92],[1014,968,114,92],[1154,1062,114,92],[782,1062,114,92],[898,1062,114,92],[1014,1062,114,92],[1154,1156,114,92],[782,1156,114,92],[898,1156,114,92],[1014,1156,114,92],[1154,1250,114,92],[1154,1344,114,92],[686,1374,114,92],[0,1406,114,92],[116,1406,114,92],[232,1406,114,92],[348,1406,114,92],[464,1406,114,92],[802,1374,114,92],[918,1374,114,92],[1034,1374,114,92],[1150,1438,114,92],[580,1468,114,92],[0,1500,114,92],[0,0,780,1254],[686,1256,466,116],[0,1256,684,148],[1130,188,108,2],[580,1406,43,43]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_541 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_540 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_539 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_538 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_537 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_536 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_535 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_534 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_533 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_532 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_531 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_530 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_529 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_528 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_527 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_526 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_525 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_524 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_523 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_522 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_521 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_520 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_519 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_518 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_517 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_516 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_515 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_514 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_513 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_512 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_511 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_510 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_509 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_508 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_507 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_506 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_505 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_504 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_503 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_502 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_501 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_500 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_499 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_498 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_497 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_496 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_495 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_494 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_493 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_492 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_491 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_490 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_489 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_488 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_487 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_486 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_485 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_484 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_483 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_482 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_481 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_480 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_479 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_478 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_477 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_476 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_475 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_474 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_473 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_472 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_471 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_470 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_469 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_468 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_467 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_466 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_465 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_464 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_463 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_462 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_461 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_460 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_459 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_458 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_457 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_456 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_455 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_454 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_453 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_452 = function() {
	this.initialize(ss["calculator_atlas_1"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.zeroBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("0", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(57.95,12.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_539();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_540();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_541();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:57.95,y:12.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:58.95,y:13.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:58.95,y:13.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127,46);


(lib.twoBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("2", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_536();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_537();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_538();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.threeBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("3", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_533();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_534();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_535();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.subIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgvA8QgFAAgEgEQgDgDAAgGIAAhdQAAgFADgEQAEgEAFAAIBeAAQAGAAADAEQAEAEAAAFIAABdQAAAGgEADQgDAEgGAAgAgnAFIBPAAIAAgJIhPAAg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.subIcon, new cjs.Rectangle(0,0,12,12), null);


(lib.subBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("-", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(25.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_530();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_531();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_532();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:25.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:26.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:26.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.sixBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("6", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_527();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_528();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_529();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.sevenBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("7", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_524();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_525();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_526();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.rootBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("√", "19px 'Arial'", "#F2F2F2");
	this.text.lineHeight = 21;
	this.text.lineWidth = 12;
	this.text.parent = this;
	this.text.setTransform(21.4,6);

	this.instance = new lib.CachedBmp_519();
	this.instance.setTransform(0,0.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_521();
	this.instance_1.setTransform(0,1.9,0.5,0.5);

	this.text_1 = new cjs.Text("√", "19px 'Arial'", "#F2F2F2");
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 12;
	this.text_1.parent = this;
	this.text_1.setTransform(21.4,6);

	this.instance_2 = new lib.CachedBmp_520();
	this.instance_2.setTransform(0,0.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_523();
	this.instance_3.setTransform(0,1.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_522();
	this.instance_4.setTransform(0,0.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.4,y:2,lineWidth:12}}]}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text,p:{x:21.95,y:3.8,lineWidth:11}}]},2).to({state:[{t:this.instance_4},{t:this.text_1},{t:this.instance_3},{t:this.text,p:{x:21.95,y:3.8,lineWidth:11}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,29.5);


(lib.repIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.repeatTxt = new cjs.Text("K", "normal 400 14px 'tk-eurostile'", "#333333");
	this.repeatTxt.name = "repeatTxt";
	this.repeatTxt.textAlign = "center";
	this.repeatTxt.lineHeight = 21;
	this.repeatTxt.lineWidth = 18;
	this.repeatTxt.parent = this;
	this.repeatTxt.setTransform(11.05,2);
	if(!lib.properties.webfonts['tk-eurostile']) {
		lib.webFontTxtInst['tk-eurostile'] = lib.webFontTxtInst['tk-eurostile'] || [];
		lib.webFontTxtInst['tk-eurostile'].push(this.repeatTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.repeatTxt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.repIcon, new cjs.Rectangle(0,0,22.2,23.1), null);


(lib.pointBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text(".", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(26.95,8.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_516();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_517();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_518();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:26.95,y:8.9,lineHeight:23.95}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:27.95,y:10.05,lineHeight:23.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:27.95,y:10.05,lineHeight:23.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.plusBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("+", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(22.95,39.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_513();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_514();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_515();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:22.95,y:39.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:23.95,y:40.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:23.95,y:40.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,107);


(lib.plmiBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("±", "19px 'Arial'", "#F2F2F2");
	this.text.lineHeight = 21;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);

	this.instance = new lib.CachedBmp_510();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_511();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_512();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.percentBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("%", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(18.4,4);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_505();
	this.instance.setTransform(0,0.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_507();
	this.instance_1.setTransform(0,0.9,0.5,0.5);

	this.text_1 = new cjs.Text("%", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text_1.lineHeight = 24;
	this.text_1.parent = this;
	this.text_1.setTransform(18.4,2);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text_1);
	}

	this.instance_2 = new lib.CachedBmp_506();
	this.instance_2.setTransform(0,0.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_509();
	this.instance_3.setTransform(0,0.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_508();
	this.instance_4.setTransform(0,0.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:18.4,y:2}}]}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text,p:{x:19.95,y:2.8}}]},2).to({state:[{t:this.instance_4},{t:this.text_1},{t:this.instance_3},{t:this.text,p:{x:19.95,y:2.8}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,28.5);


(lib.oneBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("1", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_502();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_503();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_504();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.onBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ON", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.lineWidth = 32;
	this.text.parent = this;
	this.text.setTransform(11.4,5);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_497();
	this.instance.setTransform(0,0.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_499();
	this.instance_1.setTransform(-1,0.1,0.5,0.5);

	this.text_1 = new cjs.Text("ON", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 32;
	this.text_1.parent = this;
	this.text_1.setTransform(11.4,5);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text_1);
	}

	this.instance_2 = new lib.CachedBmp_498();
	this.instance_2.setTransform(0,0.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_501();
	this.instance_3.setTransform(-1,0.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_500();
	this.instance_4.setTransform(0,0.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:11.4}}]}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text,p:{x:10.95}}]},2).to({state:[{t:this.instance_4},{t:this.text_1},{t:this.instance_3},{t:this.text,p:{x:10.95}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,58,27.7);


(lib.nineBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("9", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_494();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_495();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_496();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.mulIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AguA8QgGAAgDgDQgEgEAAgGIAAhdQAAgGAEgEQADgDAGAAIBdAAQAFAAAEADQAEAEAAAGIAABdQAAAGgEAEQgEADgFAAgAAcAjIAHgGIgcgdIAcgcIgHgHIgcAdIgbgdIgHAHIAbAcIgbAdIAHAGIAbgcg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mulIcon, new cjs.Rectangle(0,0,12,12), null);


(lib.mulBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("×", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_491();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_492();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_493();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.mSubBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("M-", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(15.4,10.2);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_488();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_489();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_490();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:15.4,y:10.2}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:15.95,y:10.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:15.95,y:10.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.mrBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MR", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(11.4,10.2);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_485();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_486();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_487();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:11.4,y:10.2}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:11.95,y:10.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:11.95,y:10.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.memIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.memoryTxt = new cjs.Text("M", "normal 400 14px 'tk-eurostile'", "#333333");
	this.memoryTxt.name = "memoryTxt";
	this.memoryTxt.textAlign = "center";
	this.memoryTxt.lineHeight = 21;
	this.memoryTxt.lineWidth = 18;
	this.memoryTxt.parent = this;
	this.memoryTxt.setTransform(8.05,2);
	if(!lib.properties.webfonts['tk-eurostile']) {
		lib.webFontTxtInst['tk-eurostile'] = lib.webFontTxtInst['tk-eurostile'] || [];
		lib.webFontTxtInst['tk-eurostile'].push(this.memoryTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.memoryTxt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.memIcon, new cjs.Rectangle(-3,0,22.2,23.1), null);


(lib.mcBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("MC", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.lineWidth = 33;
	this.text.parent = this;
	this.text.setTransform(11.4,10.2);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_480();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_482();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.text_1 = new cjs.Text("MC", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 33;
	this.text_1.parent = this;
	this.text_1.setTransform(11.4,10.7);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text_1);
	}

	this.instance_2 = new lib.CachedBmp_481();
	this.instance_2.setTransform(0,0.5,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_484();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_483();
	this.instance_4.setTransform(0,0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:11.4,y:10.2}}]}).to({state:[{t:this.instance_2},{t:this.text_1},{t:this.instance_1},{t:this.text,p:{x:11.95,y:10.9}}]},2).to({state:[{t:this.instance_4},{t:this.text_1},{t:this.instance_3},{t:this.text,p:{x:11.95,y:10.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46.5);


(lib.mAddBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("M+", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(13.4,10.2);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_477();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_478();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_479();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:13.4,y:10.2}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:13.95,y:10.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:13.95,y:10.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.fourBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("4", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.lineWidth = 14;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_474();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_475();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_476();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.fiveBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("5", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_471();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_472();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_473();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.errIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.errorTxt = new cjs.Text("E", "normal 400 14px 'tk-eurostile'", "#333333");
	this.errorTxt.name = "errorTxt";
	this.errorTxt.textAlign = "center";
	this.errorTxt.lineHeight = 21;
	this.errorTxt.lineWidth = 18;
	this.errorTxt.parent = this;
	this.errorTxt.setTransform(11.05,2);
	if(!lib.properties.webfonts['tk-eurostile']) {
		lib.webFontTxtInst['tk-eurostile'] = lib.webFontTxtInst['tk-eurostile'] || [];
		lib.webFontTxtInst['tk-eurostile'].push(this.errorTxt);
	}

	this.timeline.addTween(cjs.Tween.get(this.errorTxt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.errIcon, new cjs.Rectangle(0,0,22.2,23.1), null);


(lib.equalBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("=", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_468();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_469();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_470();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.eightBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("8", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_465();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_466();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_467();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.divIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgvA8QgFAAgEgEQgDgEAAgFIAAhdQAAgFADgEQAEgEAFAAIBeAAQAGAAADAEQAEAEAAAFIAABdQAAAFgEAEQgDAEgGAAgAgGASQgDADAAAEQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgDAAgDADgAgnAFIBPAAIAAgJIhPAAgAgGgfQgDADAAAEQAAAEADADQADADADAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgDgEAAQgDAAgDADg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.divIcon, new cjs.Rectangle(0,0,12,12), null);


(lib.divBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("÷", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.lineWidth = 10;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_462();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_463();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_464();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.cBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("C", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(21.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_459();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_460();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_461();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:21.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:22.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:22.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


(lib.addIcon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgvA8QgFAAgEgDQgDgFAAgFIAAhdQAAgGADgEQAEgDAFAAIBeAAQAGAAADADQAEAEAAAGIAABdQAAAFgEAFQgDADgGAAgAgnAFIAjAAIAAAjIAJAAIAAgjIAjAAIAAgJIgjAAIAAgjIgJAAIAAAjIgjAAg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.addIcon, new cjs.Rectangle(0,0,12,12), null);


(lib.acBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("AC", "normal 400 19px 'Orbitron'", "#F2F2F2");
	this.text.lineHeight = 24;
	this.text.parent = this;
	this.text.setTransform(12.95,10.9);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.instance = new lib.CachedBmp_456();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_457();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_458();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:12.95,y:10.9}}]}).to({state:[{t:this.instance_1},{t:this.text,p:{x:13.95,y:11.9}}]},2).to({state:[{t:this.instance_2},{t:this.text,p:{x:13.95,y:11.9}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,46);


// stage content:
(lib.calculator = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		code();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// addIcon
	this.addIcon = new lib.addIcon();
	this.addIcon.name = "addIcon";
	this.addIcon.setTransform(336,179.55,1,1,0,0,0,6,6);
	this.addIcon.shadow = new cjs.Shadow("rgba(78,130,91,1)",1,1,1);
	this.addIcon.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.addIcon).wait(1));

	// subIcon
	this.subIcon = new lib.subIcon();
	this.subIcon.name = "subIcon";
	this.subIcon.setTransform(336,166.55,1,1,0,0,0,6,6);
	this.subIcon.shadow = new cjs.Shadow("rgba(78,130,91,1)",1,1,1);
	this.subIcon.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.subIcon).wait(1));

	// mulIcon
	this.mulIcon = new lib.mulIcon();
	this.mulIcon.name = "mulIcon";
	this.mulIcon.setTransform(335.95,153.55,1,1,0,0,0,6,6);
	this.mulIcon.shadow = new cjs.Shadow("rgba(78,130,91,1)",1,1,1);
	this.mulIcon.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.mulIcon).wait(1));

	// divIcon
	this.divIcon = new lib.divIcon();
	this.divIcon.name = "divIcon";
	this.divIcon.setTransform(336,140.55,1,1,0,0,0,6,6);
	this.divIcon.shadow = new cjs.Shadow("rgba(78,130,91,1)",1,1,1);
	this.divIcon.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.divIcon).wait(1));

	// subBtn
	this.subBtn = new lib.subBtn();
	this.subBtn.name = "subBtn";
	this.subBtn.setTransform(349,470.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.subBtn, 0, 1, 2, false, new lib.subBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.subBtn).wait(1));

	// mulBtn
	this.mulBtn = new lib.mulBtn();
	this.mulBtn.name = "mulBtn";
	this.mulBtn.setTransform(349,409.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.mulBtn, 0, 1, 2, false, new lib.mulBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mulBtn).wait(1));

	// nineBtn
	this.nineBtn = new lib.nineBtn();
	this.nineBtn.name = "nineBtn";
	this.nineBtn.setTransform(279,409.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.nineBtn, 0, 1, 2, false, new lib.nineBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.nineBtn).wait(1));

	// eightBtn
	this.eightBtn = new lib.eightBtn();
	this.eightBtn.name = "eightBtn";
	this.eightBtn.setTransform(207,409.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.eightBtn, 0, 1, 2, false, new lib.eightBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.eightBtn).wait(1));

	// sevenBtn
	this.sevenBtn = new lib.sevenBtn();
	this.sevenBtn.name = "sevenBtn";
	this.sevenBtn.setTransform(134,409.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.sevenBtn, 0, 1, 2, false, new lib.sevenBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sevenBtn).wait(1));

	// sixBtn
	this.sixBtn = new lib.sixBtn();
	this.sixBtn.name = "sixBtn";
	this.sixBtn.setTransform(279,470.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.sixBtn, 0, 1, 2, false, new lib.sixBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.sixBtn).wait(1));

	// fiveBtn
	this.fiveBtn = new lib.fiveBtn();
	this.fiveBtn.name = "fiveBtn";
	this.fiveBtn.setTransform(207,470.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.fiveBtn, 0, 1, 2, false, new lib.fiveBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fiveBtn).wait(1));

	// fourBtn
	this.fourBtn = new lib.fourBtn();
	this.fourBtn.name = "fourBtn";
	this.fourBtn.setTransform(134,470.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.fourBtn, 0, 1, 2, false, new lib.fourBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.fourBtn).wait(1));

	// plusBtn
	this.plusBtn = new lib.plusBtn();
	this.plusBtn.name = "plusBtn";
	this.plusBtn.setTransform(350,564,1,1,0,0,0,28.5,53.5);
	new cjs.ButtonHelper(this.plusBtn, 0, 1, 2, false, new lib.plusBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plusBtn).wait(1));

	// equalBtn
	this.equalBtn = new lib.equalBtn();
	this.equalBtn.name = "equalBtn";
	this.equalBtn.setTransform(279,594.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.equalBtn, 0, 1, 2, false, new lib.equalBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.equalBtn).wait(1));

	// zeroBtn
	this.zeroBtn = new lib.zeroBtn();
	this.zeroBtn.name = "zeroBtn";
	this.zeroBtn.setTransform(99,594.5,1,1,0,0,0,63.5,23);
	new cjs.ButtonHelper(this.zeroBtn, 0, 1, 2, false, new lib.zeroBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.zeroBtn).wait(1));

	// pointBtn
	this.pointBtn = new lib.pointBtn();
	this.pointBtn.name = "pointBtn";
	this.pointBtn.setTransform(207,594.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.pointBtn, 0, 1, 2, false, new lib.pointBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pointBtn).wait(1));

	// threeBtn
	this.threeBtn = new lib.threeBtn();
	this.threeBtn.name = "threeBtn";
	this.threeBtn.setTransform(279,533.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.threeBtn, 0, 1, 2, false, new lib.threeBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.threeBtn).wait(1));

	// twoBtn
	this.twoBtn = new lib.twoBtn();
	this.twoBtn.name = "twoBtn";
	this.twoBtn.setTransform(207,533.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.twoBtn, 0, 1, 2, false, new lib.twoBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.twoBtn).wait(1));

	// oneBtn
	this.oneBtn = new lib.oneBtn();
	this.oneBtn.name = "oneBtn";
	this.oneBtn.setTransform(134,533.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.oneBtn, 0, 1, 2, false, new lib.oneBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.oneBtn).wait(1));

	// plmiBtn
	this.plmiBtn = new lib.plmiBtn();
	this.plmiBtn.name = "plmiBtn";
	this.plmiBtn.setTransform(64,409.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.plmiBtn, 0, 1, 2, false, new lib.plmiBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.plmiBtn).wait(1));

	// divBtn
	this.divBtn = new lib.divBtn();
	this.divBtn.name = "divBtn";
	this.divBtn.setTransform(349,346.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.divBtn, 0, 1, 2, false, new lib.divBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.divBtn).wait(1));

	// cBtn
	this.cBtn = new lib.cBtn();
	this.cBtn.name = "cBtn";
	this.cBtn.setTransform(64,470.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.cBtn, 0, 1, 2, false, new lib.cBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cBtn).wait(1));

	// acBtn
	this.acBtn = new lib.acBtn();
	this.acBtn.name = "acBtn";
	this.acBtn.setTransform(64,533.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.acBtn, 0, 1, 2, false, new lib.acBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.acBtn).wait(1));

	// mAddBtn
	this.mAddBtn = new lib.mAddBtn();
	this.mAddBtn.name = "mAddBtn";
	this.mAddBtn.setTransform(278,346.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.mAddBtn, 0, 1, 2, false, new lib.mAddBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mAddBtn).wait(1));

	// mSubBtn
	this.mSubBtn = new lib.mSubBtn();
	this.mSubBtn.name = "mSubBtn";
	this.mSubBtn.setTransform(206,346.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.mSubBtn, 0, 1, 2, false, new lib.mSubBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mSubBtn).wait(1));

	// mrBtn
	this.mrBtn = new lib.mrBtn();
	this.mrBtn.name = "mrBtn";
	this.mrBtn.setTransform(134,346.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.mrBtn, 0, 1, 2, false, new lib.mrBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mrBtn).wait(1));

	// mcBtn
	this.mcBtn = new lib.mcBtn();
	this.mcBtn.name = "mcBtn";
	this.mcBtn.setTransform(64,346.5,1,1,0,0,0,28.5,23);
	new cjs.ButtonHelper(this.mcBtn, 0, 1, 2, false, new lib.mcBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.mcBtn).wait(1));

	// rootBtn
	this.rootBtn = new lib.rootBtn();
	this.rootBtn.name = "rootBtn";
	this.rootBtn.setTransform(347,283.5,1,1,0,0,0,28.5,13.8);
	new cjs.ButtonHelper(this.rootBtn, 0, 1, 2, false, new lib.rootBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.rootBtn).wait(1));

	// percentBtn
	this.percentBtn = new lib.percentBtn();
	this.percentBtn.name = "percentBtn";
	this.percentBtn.setTransform(278,283.5,1,1,0,0,0,28.5,13.8);
	new cjs.ButtonHelper(this.percentBtn, 0, 1, 2, false, new lib.percentBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.percentBtn).wait(1));

	// onBtn
	this.onBtn = new lib.onBtn();
	this.onBtn.name = "onBtn";
	this.onBtn.setTransform(64,283.5,1,1,0,0,0,28.5,13.8);
	new cjs.ButtonHelper(this.onBtn, 0, 1, 2, false, new lib.onBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.onBtn).wait(1));

	// logo
	this.text = new cjs.Text("MS-80A", "normal 400 10px 'Orbitron'", "#BDCCD4");
	this.text.lineHeight = 15;
	this.text.lineWidth = 51;
	this.text.parent = this;
	this.text.setTransform(329.45,111.2);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text);
	}

	this.text_1 = new cjs.Text("ELECTRONIC ", "normal 400 10px 'Orbitron'", "#BDCCD4");
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 82;
	this.text_1.parent = this;
	this.text_1.setTransform(112.65,109.95);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("CASIO", "normal 400 20px 'Orbitron'", "#BDCCD4");
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 79;
	this.text_2.parent = this;
	this.text_2.setTransform(35.15,100.25);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text_2);
	}

	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(328.15,69.5,0.5,0.5);

	this.text_3 = new cjs.Text("SOLAR ", "normal 400 7px 'Orbitron'", "#D1D1D1");
	this.text_3.lineHeight = 10;
	this.text_3.lineWidth = 29;
	this.text_3.parent = this;
	this.text_3.setTransform(341.1,70.6);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("HIGH-POWER", "normal 400 7px 'Orbitron'", "#D1D1D1");
	this.text_4.lineHeight = 10;
	this.text_4.lineWidth = 54;
	this.text_4.parent = this;
	this.text_4.setTransform(328.45,60.4);
	if(!lib.properties.webfonts['Orbitron']) {
		lib.webFontTxtInst['Orbitron'] = lib.webFontTxtInst['Orbitron'] || [];
		lib.webFontTxtInst['Orbitron'].push(this.text_4);
	}

	this.instance_1 = new lib.CachedBmp_452();
	this.instance_1.setTransform(306.25,58.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.text_4},{t:this.text_3},{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// display
	this.errIcon = new lib.errIcon();
	this.errIcon.name = "errIcon";
	this.errIcon.setTransform(98.1,146.1,1,1,0,0,0,11.1,11.6);
	this.errIcon.visible = false;

	this.repIcon = new lib.repIcon();
	this.repIcon.name = "repIcon";
	this.repIcon.setTransform(82.5,174.05,1,1,0,0,0,11.1,11.6);
	this.repIcon.shadow = new cjs.Shadow("rgba(78,130,91,1)",1,1,1);
	this.repIcon.visible = false;

	this.memIcon = new lib.memIcon();
	this.memIcon.name = "memIcon";
	this.memIcon.setTransform(83,146.05,1,1,0,0,0,11.1,11.6);
	this.memIcon.shadow = new cjs.Shadow("rgba(78,130,91,1)",1,1,1);
	this.memIcon.visible = false;

	this.digitsTxt = new cjs.Text("", "normal 400 54px 'ds-digitalnormal'", "#333333");
	this.digitsTxt.name = "digitsTxt";
	this.digitsTxt.textAlign = "right";
	this.digitsTxt.lineHeight = 52;
	this.digitsTxt.lineWidth = 221;
	this.digitsTxt.parent = this;
	this.digitsTxt.setTransform(324.05,135);
	this.digitsTxt.shadow = new cjs.Shadow("rgba(78,130,91,1)",1,1,1);
	if(!lib.properties.webfonts['ds-digitalnormal']) {
		lib.webFontTxtInst['ds-digitalnormal'] = lib.webFontTxtInst['ds-digitalnormal'] || [];
		lib.webFontTxtInst['ds-digitalnormal'].push(this.digitsTxt);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.digitsTxt},{t:this.memIcon},{t:this.repIcon},{t:this.errIcon}]}).wait(1));

	// Screen
	this.instance_2 = new lib.CachedBmp_453();
	this.instance_2.setTransform(35,124,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// solar
	this.instance_3 = new lib.CachedBmp_454();
	this.instance_3.setTransform(67,40.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_1
	this.instance_4 = new lib.CachedBmp_455();
	this.instance_4.setTransform(11,11,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(216,334.5,185,303.5);
// library properties:
lib.properties = {
	id: '679E3076B973114A9C03363261770F0F',
	width: 410,
	height: 647,
	fps: 24,
	color: "#666666",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/calculator_atlas_1.png", id:"calculator_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['679E3076B973114A9C03363261770F0F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;