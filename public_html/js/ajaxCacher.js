//File Author: Karsten Rabe

//Use JS browser storage objects to save interest data
//If browser doesn't support it, fall back to ajax requests
//Maybe use additional fallback before ajax requests? cookies, or javascript object variables

//Check if item is in local storage. id is name of name / value pair to be checked.
function checkIfCached(id) {
	if (localStorage.getItem(id) == null){
		return false;
	}
	else {
		return true;
	};
};

//Returns interest name by interest id
function getNameById(id) {
	var result = localStorage.getItem(id);
	return result;
};
//Returns interest names by parent id
function getNamesByParent(parent) {
	parent = parent + 'p';
	var result = localStorage.getItem(parent);
	result = JSON.stringify(result);
	return result;
};
//Splice array back together from storage string
function reformDataArray(string){
	var s = string;
	s = s.substring(1, s.length-2);
	console.log(s);
	var array = new Array,
	    w = new String,
	    len = 0;
	var str = s.split('/');
	var numWords = str.length;
	    
	for (var i=0; i<=numWords; i++) {
		w = s.split('/', 1);  
		console.log(w);          //Get first name
		len = w.length;                 //Get length
		console.log(len);
		s = s.substring(len, s.length); //Trim string
		console.log(s);
		
	};
};

//Store id / name pair
function storeIdName(id, name) {
	localStorage.setItem(id, name);
};
//Store parent / name pair
function storeParentNames(parent, names) {
	localStorage.setItem(parent, names);
};

//Parse data from chooseInterests page and store in local storage
function parseData(data) {
    var d = data;
    var a = new Array,
        aIndex = 0,
        bIndex = 0,
        names = new String;

	for (var i = 0; i<d.length * 3; i++) {
        a[i] = d[aIndex][bIndex];
        if (bIndex == 2){
        	bIndex = (-1);
        	aIndex ++;
        };
        bIndex ++;
	};
	for (var i = 0; i<a.length; i++) {
		console.log('id: ' + a[i] + ' name: ' + a[i+1]);
		storeIdName(a[i], a[i+1]);
		i++;
		names = names + a[i] + '/';
        if (i == a.length -2){
        	var parentId = a[0] + 'p';
        	storeParentNames(parentId, names);
        };
		i++;
	};
};


