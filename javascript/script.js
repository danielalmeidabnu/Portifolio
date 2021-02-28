function Mensagem(nome) {
	alert(nome+" deu Certo!")
}

function mudaCor(cor){
	var elemento = document.getElementById("mensagem")
	elemento.style.color = cor;
}

function valida(){
	var nome = document.getElementById("nome");

	if (nome.value == "") {
		alert("Insere algo né porra! Quer que eu imprima o que?");
		var tentativas = tentativas + 1;
	}
	else {
		if (tentativas == 0) {
			alert("Parabéns "+nome.value+", você conseguiu!");
		}
		else {
			alert("Finalmente né "+nome.value+", você conseguiu!");
		}
	}
}