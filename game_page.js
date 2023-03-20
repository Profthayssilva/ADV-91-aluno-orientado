// Vamos escrever um código para buscar os nomes do armazenamento local e armazená-lo em uma variável.

// fazer o mesmo para player2Name.

// atualize o nome do player1 nos respectivos elementos HTML usando seu id.

// Da mesma forma, escreva o código de forma que a saída seja player2

// atualize a pontuação do player1 nos elementos HTML usando o id “player1_score”.

// definimos um valor de 0 para a variável player2Score e agora estamos atualizando a pontuação player2 usando o id “player2Score”

// atualizar o elemento HTML usando o id que criamos na aula anterior, com o nome do jogador que é a vez de fazer a pergunta, que é player1.

// atualizar o elemento HTML usando o id que criamos na aula anterior, com o nome do jogador que é a vez de responder à questão, que é jogador2.




// Defina a função send().
function send() {
	// Pegaremos a palavra da caixa de entrada usando o id da caixa de entrada e a armazenaremos dentro de uma variável.
	getWord = document.getElementById("word").value;
	// O Javascript diferencia maiúsculas de minúsculas, portanto, vamos converter a palavra em minúsculas para evitar esses erros e armazená-la em outra variável.
	word = getWord.toLowerCase();
	// imprimir essa palavra no console para ver se funciona.
	console.log("palavra em caixa baixa = " + word);

			// A lógica para obter a primeira letra:
	// pegaremos a letra da palavra e a armazenaremos dentro de uma variável.
 
	// imprimir no console usando console.log, para ver se estamos no caminho certo:



			// A lógica para obter a segunda letra:
	// Vamos dividir o comprimento da palavra por 2, armazená-la em uma variável e depois passá-la para charAt() , isso é feito para que possamos obter a letra do meio da palavra.
	// Math.floor (number): É uma função JavaScript que arredonda um número para o inteiro mais

	// Então, estamos passando o valor lengthDivide2 para charAt():
	


			// A lógica para obter a terceira letra:
	// Vamos diminuir 1 do comprimento da palavra, e armazenar em uma variável e, em seguida, passar para charAt(). Isso é feito para que possamos obter a última letra da palavra.		

	// Então estamos passando lengthMinus1 para charAt ().
  


			// Lógica para remover a primeira letra:
	// passar a variável charAt1 para a função de substituição;
   


			// Lógica para remover a segunda letra:
	// passar a variável charAt2 para a função de substituição;
   


			// Lógica para remover a terceira letra:
	// passar a variável charAt3 para a função de substituição;		
   


			// escrever o código para adicionar esta palavra, caixa de entrada e o botão Checar ao div que criamos em game_page.html com a saída de id.
    
	// criar uma tag h4 com um id e armazenar a palavra dentro dessa tag, e colocar tudo isso dentro de uma variável;					
	
	// crie uma tag br, “Resposta:” e uma caixa de entrada com um id, e coloque tudo isso dentro de uma variável;
   
	// adicione 2 tags br, um botão com a classe bootstrap 'btn btn-info' e uma função onclickheck(), e coloque tudo isso dentro de uma variável que definiremos na próxima aula.
    
    // Agora coloque toda essa variável que contém a palavra, a caixa de entrada e o botão Checar dentro de uma única variável;

	// atualize o div que tem a saída id com a variável de linha

}


questionTurn = "player1";
answerTurn = "player2";