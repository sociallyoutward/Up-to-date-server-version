//File Author: Karsten Rabe

//JS object caches to contain bubble data, and reduce ajax requests

//cache objects:
var profileDataCache = {};       //cache 1
var chooseInterestCache = {};    //cache 2 


//Check for cached data...   This will either be interestID, centralNode, t[1] etc.
function checkIfCached(data, cache) {

	var cacheName = data;

	if (cache == "1"){
		if (!profileDataCache[cacheName] == "undefined"){
			//Not undefined, so fetch from cache
			return true;
		}
		else {
			return false;
		};
	}
	else {
		if (!chooseInterestCache[cacheName] == "undefined"){
			return true;
		}
		else{
			return false;
		};
	};
	
};




//store data in cache
function cacheResults(name, data, cache){
	//manipulate data somehow...       need to look at how requests are made, and if that will work as unique index names
	if (cache == "1"){
		profileDataCache[name] = data;     //maybe data name?
	}
	else {
		chooseInterestCache[name] = data;
	};
	console.log("results cached...");
};

//Fetch from cache
function fetchFromCache(objectIndex, cache){
	if (cache == "1"){
		return profileDataCache[objectIndex];
	}
	else{
		return chooseInterestCache[objectIndex];
	};
	console.log("fetched from cache...");
};


