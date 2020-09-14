var firebaseConfig = {
  apiKey: "AIzaSyChfq5W0NRXsTVxsjhNIlfQC9Rg6wUVvQA",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://library-31f53.firebaseio.com",
  projectId: "library-31f53",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};




const cardsContainer = document.querySelector('.container');


var myLibrary = [];

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
    let rd = document.querySelector('#read');


     if(rd.checked==true){
      rd="read";
     
     }else{
      rd="not read";
     }


  
      var close =document.querySelector('.form');
  close.style.display="none";
    document.getElementById("myBtn").disabled=false;

let book = new Book(tit,aut,page,rd);
myLibrary.push(book)
console.log(myLibrary)
render(book);

}





 function render(book){
  
    var knjiga = document.createElement("div");
    knjiga.className="knjiga";
  
    
    var nk = document.createElement('h1');
    var nazivKNjige = document.createTextNode(` ${book.title}`)
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

   
    var procitao= document.createElement("button");
    procitao.className="promjena";
    var status = document.createTextNode(`${book.read}`)
    
    if(book.read=="read"){
      procitao.style.background="green"
    }else{
      procitao.style.background="red"
    }
    
    procitao.appendChild(status)
    knjiga.appendChild(procitao)


     var del = document.createElement("button");
    del.className="del"
    var brisanje = document.createTextNode('Delete');
    del.appendChild(brisanje);
    knjiga.appendChild(del)

  
    procitao.addEventListener('click',Toggle);

    del.addEventListener('click',deleteBook)
    
    knjiga.addEventListener('click',deleteBook)
    
    
    cardsContainer.appendChild(knjiga)
    
  
    
    // while(myLibrary.length > 0){
      //   myLibrary.pop()
      // }
    }
    
    function Toggle(e) {
      var x = e.target;
      if (x.innerHTML === "read") {
        x.innerHTML = "not read";
        x.style.background="red"
      } else {
        x.innerHTML ="read";
        x.style.background="rgb(144, 250, 144)"
      }
    }

 function deleteBook(e){
   
  if(e.target.className=="del"){
    e.currentTarget.remove()
  }

 

 }

function openForm() {
   var open =document.querySelector(".form")
   document.getElementById("myBtn").disabled=true;
   open.style.display="block";
  }
  
function closeForm() {
    var close =document.querySelector(".form");
    close.style.display="none";
    document.getElementById("myBtn").disabled=false;
  } 
  
let btn= document.querySelector('.dodaj');
  btn.addEventListener('click', addBookToLibrary)
  btn.addEventListener('click',function(e){
    e.preventDefault()
  })

 

 
 
  
  

  
  
  
  
  
  





