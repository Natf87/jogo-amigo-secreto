<<<<<<< HEAD
let listaDeAmigos = []; 


function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
if (nomeAmigo === '') { 

    alert("Por favor, insira um nome.");
  return;    
}

    listaDeAmigos.push(nomeAmigo); 
    atualizarListaAmigos(); 
    console.log(listaDeAmigos); 
    document.getElementById('amigo').value = ''; 

} 

function atualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos'); 
    listaHTML.innerHTML = ''; 

    for (let amigo of listaDeAmigos) {
        const li = document.createElement('li'); 
        li.textContent = amigo; 
        listaHTML.appendChild(li); 
    }  
}

function sortearAmigo() {
   
    if (!listaDeAmigos || listaDeAmigos.length === 0) {

        alert("Não há amigos disponíveis para sortear."); 
        return; 
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length); 
    const amigoSorteado = listaDeAmigos[indiceSorteado]; 

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`; 
}

document.getElementById('.button-add').onclick = adicionarAmigo;
=======
let listaDeAmigos = []; 


function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
if (nomeAmigo === '') { 

    alert("Por favor, insira um nome.");
  return;    
}

    listaDeAmigos.push(nomeAmigo); 
    atualizarListaAmigos(); 
    console.log(listaDeAmigos); 
    document.getElementById('amigo').value = ''; 

} 

function atualizarListaAmigos() {
    const listaHTML = document.getElementById('listaAmigos'); 
    listaHTML.innerHTML = ''; 

    for (let amigo of listaDeAmigos) {
        const li = document.createElement('li'); 
        li.textContent = amigo; 
        listaHTML.appendChild(li); 
    }  
}

function sortearAmigo() {
   
    if (!listaDeAmigos || listaDeAmigos.length === 0) {

        alert("Não há amigos disponíveis para sortear."); 
        return; 
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length); 
    const amigoSorteado = listaDeAmigos[indiceSorteado]; 

    document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`; 
}

document.getElementById('.button-add').onclick = adicionarAmigo;
>>>>>>> 5015359ef065c93ef19939b16e653e5ad44ad537
document.getElementById('.button-draw').onclick = sortearAmigo;