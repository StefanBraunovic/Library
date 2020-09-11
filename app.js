const cardsContainer = document.querySelector('.container');


var myLibrary = [];

function Book(title,autor,pages,read) {
  this.title=title;
    this.autor=autor;
    this.pages=pages;
    this.read=read;
  }

var brojac = 0;


function addBookToLibrary() {
    brojac++;
    let tit = document.getElementById('title').value;
     let aut = document.querySelector('#autor').value;
     let page = document.querySelector('#pages').value;
     
  
let book = new Book(tit,aut,page);
myLibrary.push(book)
console.log(myLibrary)
render(book);

}

 function render(book){
  
    var knjiga = document.createElement("div");
    knjiga.className="knjiga";
    knjiga.classList.add('element'.concat(brojac))
    
    var nk = document.createElement('h1');
    var nazivKNjige = document.createTextNode(`${book.title}`)
    nk.appendChild(nazivKNjige)
    knjiga.appendChild(nk)
    var na= document.createElement('h1'); 
    var nazivAutora = document.createTextNode(`${book.autor}`)
    na.appendChild(nazivAutora)
    knjiga.appendChild(na)
    var bs = document.createElement("h1");
    var BrojStranica = document.createTextNode(`${book.pages}`)
    bs.appendChild(BrojStranica)
    knjiga.appendChild(bs)
     var del = document.createElement("button");
    del.className="del"
    var brisanje = document.createTextNode('x');
    del.appendChild(brisanje);
    knjiga.appendChild(del)

    del.addEventListener('click',deleteBook)
    
    knjiga.addEventListener('click',deleteBook)
    
    cardsContainer.appendChild(knjiga)

  // while(myLibrary.length > 0){
  //   myLibrary.pop()
  // }
 }

 function deleteBook(e){
   
  if(e.target.className=="del"){
    e.currentTarget.remove()
  }

 

 }


 
 function openForm() {
   var open =document.getElementById("myForm")
document.getElementById("myBtn").disabled=true;
 open.style.display="block";
}



function closeForm() {
  var close =document.getElementById("myForm");
  close.style.display="none";
  document.getElementById("myBtn").disabled=false;
} 




let btn= document.querySelector('.dodaj');
btn.addEventListener('click', addBookToLibrary)





        






