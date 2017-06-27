var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Olive", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Olive"];

// console.log(reindeer[0]);

var hohohoElement = document.getElementById("reindeer");

//create variable to only use shorter length in loop
var shorty;

if (reindeer.length > colors.length) {
	shorty = colors;
} else {
	shorty = reindeer;
}

//for loop using new variable (shorter) length
for (var i = 0; i < shorty.length; i++) {        
	hohohoElement.innerHTML += `<div>${colors[i]} ${reindeer[i]}</div>`;
    }
	
	



















