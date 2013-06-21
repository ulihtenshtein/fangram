try{

function cutword(){
	var inword = document.getElementById('word');
	var  word = inword.value;
	var  mform = document.getElementById('form');
	setWord(inword);
	clearForm(mform);
	//вывод начальных букв слов
	
	for(var i=0; i < word.length; i++){
		var elem = new Row(word[i]);
		mform.appendChild(elem);
	}
}

function setWord(inword) {
var span = inword.nextSibling;
	span.innerHTML = inword.value;
	span.onclick = function() {
		inword.style.display = 'inline';
		span.style.display = 'none';
		inword.focus();
	}
	inword.style.display = 'none';
	inword.onblur = function() { setWord(inword) };
	span.style.display = 'inline';
}
function clearForm(mform){
	while(mform.childNodes.length > 0 ) mform.removeChild(mform.childNodes[0]);
}

function Row (text) {
	var div = document.createElement('div');
	var span = document.createElement('span');
	var input = document.createElement('input');
	span.innerHTML = text[0];
	if ( text.length > 1 ) {
		input.value = text.slice(1);
	}
	
	input.onblur = function () {
		span.innerHTML += this.value;
		span.onclick = function() {
			this.innerHTML = this.innerHTML[0];
			this.onclick = '';
			input.style.display = 'inline';
			input.focus();
			input.size = input.value.length > 20 ? input.value.length : 20 ;
		}
		this.style.display = 'none';
	}
	div.appendChild(span);
	div.appendChild(input);
	return div;
}
}catch(er){
	alert(er);
}
