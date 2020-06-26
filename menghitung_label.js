"use strict";

let theResults = [], theCompletions = [], theResult2 = [], theId = [],
theResult3 = [], theValue = [], image, comPletion = [], results = [],
poly = [];

let plant = 0, water = 0, human = 0, animal = 0;

//Count the polygonlabels object
let showResults = function(){
	for(let prop in theResults){
		theCompletions = theResults[prop];
		for(let comp in theCompletions){
			theResult2 = theCompletions[comp];
			image = theResult2.image;
			comPletion = theResult2[0];
			for(let Res in comPletion){
				theId = comPletion[Res];
				for (var i = theId.length - 1; i >= 0; i--) {
					results = theId[i];
					for(let Res2 in results){
						theResult3 = results[Res2];
						poly = theResult3.polygonlabels;
						for(let val in poly){
							theValue = poly[val];
							if(theValue == "Tumbuhan"){
								plant += 1 ;
							}else if(theValue == "Air"){
								water += 1;
							}else if(theValue == "Manusia"){
								human += 1;
							}else{animal += 1;};
						};
					};
				};
			};
		};	
	};
}

//open json file
fetch("result.json")
	.then(function(resp){
		return resp.json();
	})
	.then(function(data){
		console.log(data);
		theResults = data;
		showResults();
		
		//printing polygonlabels object
		console.log("Tumbuhan : " + plant);
		console.log("Manusia : " + human);
		console.log("Air : " + water);
		console.log("Hewan : " + animal);
		document.getElementById("p1").innerHTML += "Tumbuhan : " + plant + "<br>";
		document.getElementById("p1").innerHTML += "Manusia : " + human + "<br>";
		document.getElementById("p1").innerHTML += "Air :" + water + "<br>";
		document.getElementById("p1").innerHTML += "Hewan :" + animal + "<br>";
	});