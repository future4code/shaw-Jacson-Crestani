
  //EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

      console.log("Bem-vindo(a) ao jogo de blackjack")   

if(confirm("Vamos jogar?")) {
  
    const carta1usuario = comprarCarta();
    const carta2usuario = comprarCarta();
    const cartaUsuario = carta1usuario.valor + carta2usuario.valor
      console.log (`Usuário - cartas: ${carta1usuario.texto} e ${carta2usuario.texto} - pontuação ${cartaUsuario}`);

    const carta1Pc = comprarCarta();
    const carta2Pc = comprarCarta();
    const cartaPc = carta1Pc.valor + carta2Pc.valor
      console.log (`Computador - cartas: ${carta1Pc.texto} e ${carta2Pc.texto} - pontuação ${cartaPc}`);

if((cartaPc > cartaUsuario) && (cartaPc <= 21)) {
      console.log ("O computador ganhou!");
   }  else if ((cartaPc < cartaUsuario) && (cartaUsuario <= 21)) {
      console.log ("O usuário ganhou!");
   }  else {
      console.log ("Empate!");
   }

}else {
      console.log("O jogo acabou!");
}
 
  
 