
var count = 0;



class Card {


    constructor(){

    this.button = document.getElementById("criar");
    this.button2 = document.getElementById("excluir");
    this.registerEvents();
    } 

    showAlert(){
    alert(document.getElementById("input1").value);
    } 

    registerEvents(){
    this.button.onclick = event => this.addCard(event);
    }

    addCard(event){


    event.preventDefault();

    const titulo = document.getElementById("input1").value;

    const conteudo = document.getElementById("input2").value;

    count++;

    const card = `
    <div class="col" id="card${count}">
    <div class="card" style="width: 18rem; margin-top: 20px;">
    <img src="imgs/lembre.jpg" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title" style="color: #ff0066";>${titulo} ${count}</h5>
    <p class="card-text">${conteudo}</p>
    <a href="javascript:removeCard('card${count}');" id="d${count}" class="btn btn-danger">excluir</a><br><br>
    </div>
    </div>
    </div>
    `; 

    document.getElementById("listCards").innerHTML += card;
    }


    removeCard(cardid){

    //alert(cardid);
    document.getElementById("cardid").remove();

    }

}

new Card();