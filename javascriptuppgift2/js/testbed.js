var flagga = 0;
function changeHeading() {
	var rubrik = document.getElementById('rubrik');
	if (flagga == 0){
		rubrik.innerHTML = 'Du klickade här också!';
		flagga =1;

	}
	else{
		rubrik.innerHTML = 'JavaScript';
		flagga =0;
	}
	
}
function changeBg(){
	var hej = document.getElementById('hej');
	hej.classList.add('bakgrund');
}
function changeBg2(){
	var hej = document.getElementById('hej');
	hej.classList.add('bakgrund2');
}
