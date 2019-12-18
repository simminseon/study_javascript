var str = document.querySelector('#word1').innerHTML;
var word2 = document.querySelector('#word2');
var result = document.querySelector('.result');

var game = [];
game.word = str.split("");
game.btns = [];
game.copyBtnText = function() {
	for(var i = 0; i < game.word.length; i++) {
		this.btns[i].innerHTML = game.word[i];
	}
}

for(var i = 0; i < str.length; i++) {
	var btn = document.createElement('button');
	btn.innerHTML = str[i];
	btn.classList = "btn_text";
	word2.appendChild(btn);
	game.btns.push(btn);
}

var swap = function(event) {
	game.word.reverse();
	game.copyBtnText();
}

var rshift = function(event) {
	var str3 = game.word.pop();
	game.word.unshift(str3);
	game.copyBtnText();
}

var lshift = function(event) {
	var str4 = game.word.shift();
	game.word.push(str4);
	game.copyBtnText();
}

var check = function(event) {
	if(str == game.word.join("")) {
		result.innerHTML = "일치합니다.";
	} else {
		result.innerHTML = "일치하지 않습니다.";
	}
}

