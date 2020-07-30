const palindrome = (inStr) =>{
  let valipali = true;
  inStr = inStr.toLowerCase();
  for (let i=0; i < inStr.length; i++){
  //Para tirar -1 do Length do inStr, temos que deixar ele inteiro para conseguir fazer a subtração. 
  
  var lengthMenosUm = parseInt(inStr.length) - 1

  if (inStr[i] != inStr[lengthMenosUm -i])
  {
     valipali = false
  }
}
// para chamar essa função e verificar se ela é true ou false , sempre dar o return
return valipali
}

//Altere o valor de palavra para comparar a palavra desejada
var palavra = prompt('Insira a palavra para comparação')

//chamando a função no If para comparar se a palavra é palindrome
if(palindrome(palavra) == true){alert(`A palavra ${palavra} é uma palavra palindrome`)}
else{alert(`A palavra ${palavra} não é uma palavra palindrome`)}

