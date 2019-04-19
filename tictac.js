	var step = 0;
    var allblock = document.getElementsByClassName('game-item');
    var restart = document.getElementById('restart-game');
    var message = document.getElementById('message');
    

    document.getElementById('game').onclick = function(event){
			if (event.target.className == 'game-item') {
			if (step %2 == 0) {
				event.target.innerHTML = 'x';
			}
			else {
				event.target.innerHTML = '0';
			}
			step++;
			checkWinner();
		}
	}
	
	function checkWinner(){
		// combinations: X
        if (allblock[0].innerHTML=='x' && allblock[1].innerHTML=='x' && allblock[2].innerHTML=='x') 
        	return (message.innerText = 'Player X WIN!');
		if (allblock[3].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[5].innerHTML=='x')
			return (message.innerText = 'Player X WIN!');
		if (allblock[6].innerHTML=='x' && allblock[7].innerHTML=='x' && allblock[8].innerHTML=='x')
			return (message.innerText = 'Player X WIN!');
		if (allblock[0].innerHTML=='x' && allblock[3].innerHTML=='x' && allblock[6].innerHTML=='x')
			return (message.innerText = 'Player X WIN!');
		if (allblock[1].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[7].innerHTML=='x')
			return (message.innerText = 'Player X WIN!');
		if (allblock[2].innerHTML=='x' && allblock[5].innerHTML=='x' && allblock[8].innerHTML=='x')
			return (message.innerText = 'Player X WIN!');
		if (allblock[0].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[8].innerHTML=='x')
			return (message.innerText = 'Player X WIN!');
		if (allblock[2].innerHTML=='x' && allblock[4].innerHTML=='x' && allblock[6].innerHTML=='x')
			return (message.innerText = 'Player X WIN!');
		// combinations: 0
		if (allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		if (allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		if (allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		if (allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		if (allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		if (allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		if (allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		if (allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML=='0') 
			return (message.innerText = 'Player 0 WIN!');
		}

		// function gameMessage () {
		// 	if (checkWinner()) 
		// 	message.style.display = "block";
			
		// }
		// gameMessage();
	
restart.addEventListener('click', function () {
    for (var i = 0; i < allblock.length; i++) {
        allblock[i].innerText = '';
    }
    step = 0;
    message.innerText = '';
     });