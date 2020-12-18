let input = document.getElementById('input');
let title = document.getElementById('title');
let content = document.getElementById('content');
let submit = document.getElementById('submit');
let note = document.getElementById('note');
let noNote = document.querySelector('#note p');
let tambahNote = function(){
	let judul = title.value;
	let konten = content.value;
	let warna = Math.random();
	let posisi = Math.random();
	let div = document.createElement('div');
	acakWarna(warna,div);
	acakPosisi(posisi,div);
	let span = document.createElement('span');
	let img = document.createElement('img');
	img.setAttribute('src','img/x.svg');
	span.appendChild(img);
	let h1 = document.createElement('h1');
	let teksJudul = document.createTextNode(judul);
	h1.appendChild(teksJudul);
	let p = document.createElement('p');
	let teksKonten = document.createTextNode(konten);
	p.appendChild(teksKonten); 
	div.appendChild(h1);
	div.appendChild(p);
	div.appendChild(span);
	note.appendChild(div);

	span.addEventListener('click',function(e){
	let konfirmasi = confirm('Apakah anda ingin menghapus note ini?');
		if(konfirmasi == true){
			div.style.display = 'none';
		}
	})
};
let acakWarna = function(warna,div){
	if(warna <0.37){
		warna = '#eebbc3';
	} else if(warna >= 0.37 && warna < 0.67){
		warna = '#ACDBE7';
	} else{
		warna = '#A4E197';
	}
	div.style.backgroundColor = warna;

}
let acakPosisi = function(posisi,div){
	if(posisi < 0.37){
		posisi = 'rotate(0deg)';
	} else if(posisi >= 0.37 && posisi < 0.67){
		posisi = 'rotate(3deg)';
	} else{
		posisi = 'rotate(-3deg)';
	}
	div.style.transform = posisi;
}
submit.addEventListener('click',function(){
	noNote.style.display = 'none';
	tambahNote();

})