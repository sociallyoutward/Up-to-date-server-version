//Author: Karsten Rabe

//Functions dealing with bubble creation, web spinning, navigation layer, click handling etc.

function bubble (text, color, x, y, parent, layer){
	var circle = new createjs.Shape();
	circle.text = text;
	circle.color = color;
	circle.x = x;
	circle.y = y;
	circle.parent = parent;
	circle.layer = layer;
	
	bubbleLayer.x = x;
	bubbleLayer.y = y;
	bubbleLayer.regX = x;
	bubbleLayer.regY = y;
	
	circle.graphics.beginFill(color).drawCircle(x, y, radius);


	circle.shadow = new createjs.Shadow("#80B3FF", 0, 0, 30);
	bubbleLayer.addChild(circle);
	bubbleScene.update();
	
	
};
