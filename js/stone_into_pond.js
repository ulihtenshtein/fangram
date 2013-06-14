try{
var start = true;
function cutword(){
	
	var letters=['one','two','three','four','five','six','seven','eight','nine','ten','one2','two2','three2','four2','five2','six2','seven2','eight2','nine2','ten2'];
	var  word = document.getElementById('word').value;
	var  mform = document.getElementById('form');
	if(!start){	
		start = true;
		clearForm(mform);
	}
// граничные условия
	//слово ограничиваем 20 буквами, уж так хочется.
	if(word.length > 20 ) {
		addElement(mform,"меньше 20 букв, пожалуйста",letters[0]);
		document.getElementById('i'+letters[0]).style.display='none';
		document.getElementById(letters[0]).removeAttribute('onclick');
		start=false;
		return;
	}
	//надо с чем-то работать же
	if(word.length <= 0 ){
		addElement(mform,"побольше букв, пожалуйста",letters[0]);
		document.getElementById('i'+letters[0]).style.display='none';
		document.getElementById(letters[0]).removeAttribute('onclick');
		start=false;
		return;
	}
	//вывод начальных букв слов
	
	
	for(var i=0; i < word.length; i++){
		addElement(mform,word[i],letters[i]);
	}
	start=false;
}
function addElement(mform,word,id){
	var eSpan = document.createElement('span');
	var eInput = document.createElement('input');
	var eBr = document.createElement('br');
	setESpan(eSpan,eInput,word,id);
	setEInput(eSpan,eInput,id);
	mform.appendChild(eSpan);
	mform.appendChild(eInput);
	mform.appendChild(eBr);
}
function setESpan (eSpan,eInput,word,id){
	eSpan.id=id;
	eSpan.innerHTML=word;
	var f = "setInput('"+id +"')";
	eSpan.setAttribute('onclick',f);
}

function setEInput(eSpan,eInput,id){
	eInput.id= 'i'+id;
	eInput.type='text';
	eInput.style.display='inline';
	var f = "setSpan('" + id + "')";
	eInput.setAttribute('onblur',f);
}
function clearForm(mform){
	while(mform.childNodes.length > 0 ) mform.removeChild(mform.childNodes[0]);
}

function clearValue(){
	document.getElementById('word').value="";
}
function setSpan(stag){
	var element = document.getElementById('i'+stag);
	if (element.value.length <= 0) return;
	var elementSpan = document.getElementById( stag );
	elementSpan.innerHTML += element.value;
	element.style.display='none';
}
function setInput(stag){
	var element = document.getElementById('i'+stag);
	var elementSpan = document.getElementById( stag );
	var str = elementSpan.innerHTML;
	elementSpan.innerHTML= str[0];
	element.style.display="inline";
	element.focus();	
}

}catch(er){
	alert(er);
}
