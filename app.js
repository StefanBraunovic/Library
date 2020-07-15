let myLibrary = [];
function Book(autor,title,pages,read) {
    this.autor=autor;
    this.title=title;
    this.pages=pages;
    this.read=read;
  }



function addBookToLibrary() {
    let tit = document.querySelector('#title').value;
     let aut = document.querySelector('#autor').value;
     let page = document.querySelector('#pages').value;
     
  
let book = new Book(tit,aut,page);
myLibrary.push(book)
console.log(myLibrary)

}

let btn= document.querySelector('.dodaj');

btn.addEventListener('click', addBookToLibrary)





        






