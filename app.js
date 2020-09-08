const cardsContainer = document.querySelector('.container');


let myLibrary = [];
function Book(title,autor,pages,read) {
  this.title=title;
    this.autor=autor;
    this.pages=pages;
    this.read=read;
  }
function addBookToLibrary() {
    let tit = document.getElementById('title').value;
     let aut = document.querySelector('#autor').value;
     let page = document.querySelector('#pages').value;
     
  
let book = new Book(tit,aut,page);
myLibrary.push(book)
console.log(myLibrary)
render(myLibrary);

}

 function render(cards=[]){
  cardsMap= cards.map((card) =>{
    var knjiga = document.createElement("div");
   knjiga.className="knjiga"
   var nk = document.createElement('h1');
    nazivKNjige = document.createTextNode(`${card.title}`)
    nk.appendChild(nazivKNjige)
    knjiga.appendChild(nk)
    var na= document.createElement('h1');
    var nazivAutora = document.createTextNode(`${card.autor}`)
    na.appendChild(nazivAutora)
    knjiga.appendChild(na)
    var bs = document.createElement("h1");
    var BrojStranica = document.createTextNode(`${card.pages}`)
    bs.appendChild(BrojStranica)
    knjiga.appendChild(bs)
    
    cardsContainer.appendChild(knjiga)

    while(myLibrary.length > 0){
      myLibrary.pop()
    }
})

 }

 


 
let btn= document.querySelector('.dodaj');
btn.addEventListener('click', addBookToLibrary)





        






