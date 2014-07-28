//File Author: Karsten Rabe

//JS object caches to contain bubble data, and reduce ajax requests

//cache objects:
var profileDataCache = {};       //cache 1
var chooseInterestCache = {};    //cache 2 


//Check for cached data...   This will either be interestID, centralNode, t[1] etc.
function checkIfCached(data, cache) {

	var objectName = data;
	var cacheName = objectName.toLowerCase();
	if (cache == "1"){
		if (profileDataCache[cacheName] != "undefined"){
			//Not undefined, so fetch from cache
			fetchFromCache(cacheName, 1);
		}
		else {
			//undefined, so make ajax request and cache result
			
		};
	}
	else {
		if (chooseInterestCache[cacheName] != "undefined"){
			fetchFromCache(cacheName, 2);
		};
	};
};




//store data in cache
function cacheResults(data, cache){
	//manipulate data somehow...       need to look at how requests are made, and if that will work as unique index names
	if (cache == "1"){
		profileDataCache[data.name] = data.name;     //maybe data name?
	}
	else {
		chooseInterestCache[data.name] = data.name;
	};
};

//Fetch from cache
function fetchFromCache(objectIndex, cache){
	if (cache == "1"){
		return profileDataCache[objectIndex];
	}
	else{
		return chooseInterestCache[objectIndex];
	};
};


